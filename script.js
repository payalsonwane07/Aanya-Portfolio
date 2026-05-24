// === THEME (must run first) ===
(function () {
  var STORAGE_KEY = 'aanya-theme';
  var root = document.documentElement;

  function getPreferredTheme() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
  }

  applyTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    function syncToggleUI() {
      var isDark = root.getAttribute('data-theme') === 'dark';
      toggle.textContent = isDark ? '☀️' : '🌙';
      toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    syncToggleUI();

    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
      syncToggleUI();
    });
  });
})();

document.addEventListener('DOMContentLoaded', function () {
  console.log('Portfolio loaded ✅');

  // === SCROLL PROGRESS BAR ===
  (function () {
    var bar = document.createElement('div');
    bar.className = 'scroll-progress-bar';
    bar.setAttribute('aria-hidden', 'true');
    document.body.prepend(bar);

    var ticking = false;
    function updateProgress() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + '%';
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }, { passive: true });

    updateProgress();
  })();

  // === REVEAL ON SCROLL ===
  (function () {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  })();

  // === NAV SHRINK ON SCROLL ===
  (function () {
    var nav = document.getElementById('main-nav');
    if (!nav) return;

    function onScroll() {
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  // === ABOUT STATS COUNTERS ===
  (function () {
    var strip = document.querySelector('.stats-strip');
    if (!strip) return;

    function animateCounter(el) {
      var target = parseInt(el.getAttribute('data-target'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var duration = 1400;
      var start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            strip.querySelectorAll('.stat-number').forEach(animateCounter);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(strip);
  })();

  // === PAGE-LOAD SPLASH ===
  (function () {
    var splash = document.createElement('div');
    splash.className = 'page-splash';
    splash.innerHTML = '<span class="page-splash-brand">Aanya Sharma</span>';
    document.body.appendChild(splash);

    requestAnimationFrame(function () {
      splash.classList.add('is-active');
    });

    setTimeout(function () {
      splash.classList.add('is-exiting');
    }, 450);

    setTimeout(function () {
      splash.remove();
    }, 900);
  })();

  // === HAMBURGER MENU (Part 1 — preserved) ===
  var hamburgerBtn = document.getElementById('hamburger-btn');
  var navMenu = document.getElementById('nav-menu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('is-open');
      hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
      hamburgerBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      hamburgerBtn.querySelector('.hamburger-icon').textContent = isOpen ? '✕' : '☰';
    });

    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.setAttribute('aria-label', 'Open menu');
        hamburgerBtn.querySelector('.hamburger-icon').textContent = '☰';
      });
    });
  }

  // === CONTACT FORM (Part 1 — preserved) ===
  var contactForm = document.getElementById('contact-form');
  var successMessage = document.getElementById('success-message');

  if (contactForm && successMessage) {
    // Reuse one error line under the form so failed saves can tell the user what happened.
    var formErrorMessage = document.getElementById('form-error-message');
    if (!formErrorMessage) {
      formErrorMessage = document.createElement('p');
      formErrorMessage.id = 'form-error-message';
      formErrorMessage.className = 'form-error-message';
      formErrorMessage.hidden = true;
      contactForm.parentNode.insertBefore(formErrorMessage, successMessage);
    }

    contactForm.addEventListener('submit', async function (event) {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      // Read the four values the database expects (snake_case names match the Supabase table).
      var full_name = contactForm.fullName.value.trim();
      var email = contactForm.email.value.trim();
      var subject = contactForm.subject.value;
      var message = contactForm.message.value.trim();

      // Hide any previous error while we try again.
      formErrorMessage.hidden = true;

      // Send this submission as a new row in the public.form table.
      var response = await supabaseClient.from('form').insert([
        { full_name: full_name, email: email, subject: subject, message: message }
      ]);

      console.log('Supabase insert response:', response);

      if (response.error) {
        formErrorMessage.textContent = 'Something went wrong. Please try again.';
        formErrorMessage.hidden = false;
        return;
      }

      contactForm.reset();
      contactForm.style.display = 'none';
      successMessage.hidden = false;
    });
  }

  // === ADMIN INBOX (only runs on admin.html where #inbox-grid exists) ===
  var inboxGrid = document.getElementById('inbox-grid');

  if (inboxGrid) {
    var inboxCounter = document.getElementById('inbox-counter');
    var unreadOnlyToggle = document.getElementById('unread-only-toggle');

    // Turn a database timestamp into friendly text like "2 hours ago".
    function timeAgo(date) {
      var then = date instanceof Date ? date : new Date(date);
      var seconds = Math.floor((Date.now() - then.getTime()) / 1000);

      if (seconds < 60) return 'just now';

      var minutes = Math.floor(seconds / 60);
      if (minutes < 60) {
        return minutes === 1 ? '1 minute ago' : minutes + ' minutes ago';
      }

      var hours = Math.floor(minutes / 60);
      if (hours < 24) {
        return hours === 1 ? '1 hour ago' : hours + ' hours ago';
      }

      var days = Math.floor(hours / 24);
      if (days < 7) {
        return days === 1 ? '1 day ago' : days + ' days ago';
      }

      return then.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    }

    // Escape user text so we can safely build HTML strings.
    function escapeHtml(text) {
      var el = document.createElement('span');
      el.textContent = text == null ? '' : String(text);
      return el.innerHTML;
    }

    // Build one card element for a single row from Supabase.
    function createInboxCard(row) {
      var card = document.createElement('article');
      card.className = 'inbox-card' + (row.is_read ? ' is-read' : '');
      card.dataset.id = String(row.id);

      card.innerHTML =
        '<div class="inbox-card-top">' +
          '<h3 class="inbox-card-subject">' + escapeHtml(row.subject) + '</h3>' +
          '<span class="inbox-card-time">' + escapeHtml(timeAgo(row.created_at)) + '</span>' +
        '</div>' +
        '<p class="inbox-card-sender">' + escapeHtml(row.full_name) + ' · ' + escapeHtml(row.email) + '</p>' +
        '<p class="inbox-card-body">' + escapeHtml(row.message) + '</p>' +
        '<div class="inbox-card-footer"></div>';

      if (!row.is_read) {
        var markBtn = document.createElement('button');
        markBtn.type = 'button';
        markBtn.className = 'btn btn-primary inbox-mark-read';
        markBtn.textContent = 'Mark as Read';
        markBtn.addEventListener('click', function () {
          markCardAsRead(card, row.id);
        });
        card.querySelector('.inbox-card-footer').appendChild(markBtn);
      }

      return card;
    }

    // Tell Supabase this message was read, then restyle only that card.
    async function markCardAsRead(card, rowId) {
      var response = await supabaseClient
        .from('form')
        .update({ is_read: true })
        .eq('id', rowId);

      console.log('Mark as read response:', response);

      if (response.error) return;

      card.classList.add('is-read');
      var btn = card.querySelector('.inbox-mark-read');
      if (btn) btn.remove();
    }

    // Load every message from the form table and paint the grid.
    async function loadInbox() {
      var response = await supabaseClient
        .from('form')
        .select('*')
        .order('created_at', { ascending: false });

      console.log('Inbox fetch response:', response);

      if (response.error) {
        inboxGrid.innerHTML = '<p class="inbox-empty">Could not load messages. Check the browser console.</p>';
        return;
      }

      var rows = response.data || [];
      var label = rows.length === 1 ? ' message' : ' messages';
      inboxCounter.textContent = '📬 ' + rows.length + label;

      inboxGrid.innerHTML = '';

      if (!rows.length) {
        inboxGrid.innerHTML = '<p class="inbox-empty">No messages yet. Submit the contact form to see one here.</p>';
        return;
      }

      rows.forEach(function (row) {
        inboxGrid.appendChild(createInboxCard(row));
      });
    }

    // When "Unread only" is checked, hide read cards with a CSS class (no re-fetch).
    if (unreadOnlyToggle) {
      unreadOnlyToggle.addEventListener('change', function () {
        inboxGrid.classList.toggle('inbox-grid--unread-only', unreadOnlyToggle.checked);
      });
    }

    loadInbox();
  }
});
