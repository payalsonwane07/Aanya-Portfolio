# Part 1 — Prompt Library (Student Copy-Paste Edition)

> Open this file side-by-side with Cursor. Copy each prompt **in order**, paste into Cursor Chat (Agent mode), press Enter, wait for it to finish, then move on.
>
> If a prompt fails or the result looks wrong, re-read the **Strategy note** under it and try again — don't restart from scratch.

---

## ⚙️ Setup (do once before Prompt 1)

1. Install **Cursor** from https://cursor.com and sign in (Google is fine).
2. Create a new folder on your Desktop called `aanya-portfolio`.
3. In Cursor: **File → Open Folder** → select `aanya-portfolio`.
4. Open Cursor Chat with `Cmd + L` (Mac) or `Ctrl + L` (Windows).
5. At the top of the chat panel, make sure **Agent** is selected (not "Ask").

---

## The Five Rules of Prompting (keep these visible)

1. **No vague adjectives** — use numbers, hex codes, pixel values.
2. **Give a persona** — describe yourself and the audience.
3. **Consolidate** — one big prompt beats five small ones.
4. **Iterate** — anchor what's wrong, then describe the fix.
5. **Demand "why"** — ask the AI to explain its choices.

---

## Prompt 1 — Scaffold the project

```text
You are pair-programming with a complete beginner.

Create a starter web project in the current folder with these three files:
1. index.html  – an empty HTML5 boilerplate titled "Aanya Sharma | UX Designer"
2. styles.css  – an empty stylesheet
3. script.js   – an empty JavaScript file with a single console.log("Portfolio loaded ✅")

Inside index.html, link styles.css in the <head> and script.js just before the closing </body> tag.

After creating the files, explain in plain English what each file does and why we link them in those specific places.
```

**Strategy:** persona ("beginner") + numbered deliverables + demand explanation.

---

## Prompt 2 — Sticky navigation bar

```text
In index.html, add a sticky navigation bar at the very top of the <body>.

Requirements:
- Brand name on the left: "Aanya Sharma"
- Four links on the right, evenly spaced: Home, About, Projects, Contact
- Links point to: index.html, about.html, projects.html, contact.html
- Dark background (#111827), white text, 16px font, 64px total height
- Sticky position so it stays pinned when the user scrolls
- Hover effect: link text turns soft purple (#a78bfa) with a smooth 0.2s transition
- The link for the current page must have an "active" class that underlines it in purple

Put all the styling inside styles.css under a clearly labelled /* === NAVIGATION === */ section.
Add HTML comments above the nav explaining each part.
```

**Strategy:** exact hex codes, exact pixel values, future-proofing (`active` class).

---

## Prompt 3 — Hero section

```text
Below the navigation in index.html, add a hero section.

Layout:
- Full viewport width, 80vh tall, centred content
- Background: linear gradient from #4f46e5 (top-left) to #9333ea (bottom-right)
- White text, centred horizontally and vertically

Content (in this order):
1. Tiny eyebrow text: "PORTFOLIO 2026" — uppercase, 14px, letter-spacing 4px, 60% opacity
2. Main headline (h1): "I design products people actually enjoy using." — 56px, bold, max-width 800px
3. Sub-headline (p): "Senior UX Designer with 5 years of experience in fintech, edtech and healthcare." — 20px, 80% opacity, max-width 600px
4. A primary CTA button: text "See My Work →", links to projects.html, white background, dark text (#111827), 16px padding vertical / 32px horizontal, 999px border-radius (pill), subtle shadow, lifts up 4px on hover with a 0.2s transition

Style it inside the /* === HERO === */ section of styles.css.
Briefly explain why a Hero section matters for first-time visitors.
```

**Strategy:** ordered content list, explicit gradient direction, "why it matters" learning hook.

---

## Prompt 4 — Iterate on the hero

```text
Two refinements to the hero:
1. The headline feels too big on a 13-inch laptop screen. Reduce h1 to 48px and add a media query so it becomes 36px on screens narrower than 640px.
2. Add a subtle floating animation to the CTA button — it should gently move up 3px and back down over 2 seconds, looping infinitely, using a CSS @keyframes animation.

Do not touch anything else.
```

**Strategy:** anchor + delta, plus **"do not touch anything else"** to lock scope.

---

## Prompt 5 — Skills grid

```text
Below the hero in index.html, add a "Skills" section.

Layout:
- Section padding: 96px top and bottom, 24px sides
- Centred section heading (h2) "What I Do" — 32px, dark color #111827, 16px margin-bottom
- Below the heading a centred tagline (p) "A toolkit shaped by 5 years of shipping real products." — 18px, color #6b7280, 48px margin-bottom

Grid:
- Responsive CSS grid, auto-fit, minmax(260px, 1fr), 24px gap
- 6 cards. Each card contains:
    - A large emoji icon (48px)
    - Skill name (h3, 20px, semibold)
    - One-sentence description (14px, #6b7280)
- Card style: white background, 16px border-radius, 24px padding, 1px solid #e5e7eb border, subtle shadow
- Hover: lift the card up 6px and deepen the shadow, with a 0.2s transition

Skill content:
🎨 User Research – Interviews, surveys and usability tests that uncover real user needs.
🖌️ UI Design – Pixel-perfect interfaces built in Figma with reusable design systems.
🧭 Information Architecture – Clear sitemaps and flows that make complex products feel simple.
📐 Prototyping – High-fidelity, clickable prototypes that validate ideas before a single line of code.
♿ Accessibility – WCAG-compliant designs that work for everyone, on every device.
📊 Design Systems – Scalable component libraries that keep teams shipping fast and consistently.

Add comments in the HTML labelling each card.
```

**Strategy:** content provided inline (don't let the AI invent your résumé), exact CSS Grid syntax.

---

## Prompt 6 — About page

```text
Create a new file about.html in the same folder.

Critical: it must reuse the EXACT same navigation bar from index.html and link the SAME styles.css and script.js. The "About" link in the nav must have the active class on this page.

Page content:
1. A page header section with h1 "About Aanya" (36px) and a one-line subtitle (18px, #6b7280): "Designer. Researcher. Coffee-driven optimist."
2. A two-column section (CSS grid, two equal columns, 48px gap, stacks to one column below 768px):
   - LEFT column: a square placeholder image 400x400px using https://placehold.co/400x400/4f46e5/ffffff?text=Aanya
   - RIGHT column: three short paragraphs of biography (you can write believable placeholder content — see below).
3. A "Career Timeline" component below:
   - Vertical timeline with 4 entries
   - Each entry: year on the left, role + company on the right, one-sentence description
   - Use a soft purple vertical line (#a78bfa) connecting the dots

Timeline entries:
- 2024 → Senior UX Designer, Razorpay – Leading checkout redesign for 8M users.
- 2022 → UX Designer, Byju's – Owned learner onboarding for the K-12 app.
- 2021 → Product Designer, Practo – Designed doctor-patient chat MVP.
- 2020 → Design Intern, Zomato – Reshaped restaurant onboarding flow.

Bio paragraphs:
"I design products at the intersection of business goals and human emotion. My happiest projects are the ones where a measurable metric (conversion, retention, time-on-task) moves *and* users send unsolicited thank-you messages.

Before design, I trained as a psychology major — which still shows up in how I run research. I believe the best interviews feel like good conversations, not interrogations.

When I'm not in Figma, you'll find me sketching in cafés, running ultra-marathons very slowly, or trying (and failing) to keep my plants alive."

Append a /* === ABOUT === */ section in styles.css with all new styles.
```

**Strategy:** "reuse the EXACT same nav" prevents drift; placeholder image service shown.

---

## Prompt 7 — Projects page

```text
Create projects.html in the same folder. Reuse the same nav (mark Projects active), styles.css and script.js.

Section structure:
1. Page header: h1 "Selected Work" + sub "Six projects, three industries, one obsession: clarity."
2. A responsive grid of 6 project cards (auto-fit, minmax(320px, 1fr), 32px gap).

Each project card:
- Top: 16:9 placeholder image from https://placehold.co/640x360/<bg>/ffffff?text=<title>
- Body padding: 24px
- Project title (h3, 22px)
- One-line description (14px, #6b7280)
- Tag row: small pill-shaped tags (12px font, 4px/10px padding, #ede9fe background, #5b21b6 text)
- Bottom: a "View Case Study →" link (text button, purple, underlines on hover)

Project data:
1. "Razorpay Checkout 2.0" – Reducing payment drop-offs by 18%. Tags: Fintech, Research, Figma
2. "Byju's Onboarding" – New-learner activation up 27%. Tags: Edtech, UX Writing, Prototyping
3. "Practo Doctor Chat" – HIPAA-friendly chat MVP. Tags: Healthcare, IA, Wireframing
4. "Zomato Restaurant Hub" – Self-serve menu manager. Tags: Marketplace, Design System
5. "Open Banking Dashboard" – B2B analytics, dark mode first. Tags: B2B, Data Viz
6. "Accessibility Audit Toolkit" – Internal tool, 4.2★. Tags: A11y, Internal Tools

Use these card background colors in the placeholder URLs: 4f46e5, 0ea5e9, 10b981, f59e0b, ef4444, 8b5cf6.

Add a /* === PROJECTS === */ section to styles.css.
```

**Strategy:** tokenised placeholder URLs (`<bg>`, `<title>`) teach templating thinking.

---

## Prompt 8 — Contact form (the Part 2 bridge)

```text
Create contact.html. Reuse the same nav (mark Contact active), styles.css and script.js.

Page structure:
1. Page header: h1 "Let's build something good." + sub "Project enquiries, mentorship, or just a chai-chat. I reply within 24 hours."
2. A two-column section (stacks below 900px):
   - LEFT: a contact card with my email, location (Bengaluru, India), and three social links (LinkedIn, Dribbble, Twitter).
   - RIGHT: a contact form (the main feature).

Contact form fields (all required):
- Full Name (text input)
- Email Address (email input, HTML5 validation)
- Subject (dropdown <select>) with options: Project Inquiry, Collaboration, Mentorship, Speaking, Other
- Message (textarea, min 5 rows)

Styling:
- Inputs: white background, 1px solid #d1d5db, 12px padding, 8px border-radius, 16px font
- Focus state: border becomes #6366f1 and a soft 3px purple glow appears (box-shadow)
- Submit button: full-width, purple background (#6366f1), white text, 14px padding, 8px border-radius, "Send Message" label

JavaScript behaviour (in script.js, append; do not overwrite existing code):
- On submit, prevent default page reload
- Validate that all fields are filled (HTML required attribute is fine for now)
- Hide the form and show a green success message: "✅ Thanks! Your message was sent. I'll reply within 24 hours."
- Log the form data as an object to the console (we'll send it to a real database in Part 2)

Add a /* === CONTACT === */ section to styles.css.
```

**Strategy:** foreshadowing Part 2, "append do not overwrite" guard.

---

## Prompt 9 — Universal footer (all 4 pages)

```text
Add an identical footer to the bottom of ALL FOUR HTML pages (index, about, projects, contact).

Footer requirements:
- Dark background (#0f172a), light grey text (#cbd5e1), 48px vertical padding
- Three columns (stacks to one column below 768px):
   1. Brand: "Aanya Sharma" + tagline "Designing calm products for noisy industries."
   2. Quick links (same 4 nav links)
   3. Social: LinkedIn, Dribbble, Twitter, Email (use emojis as icons: 💼 🎨 🐦 ✉️)
- Bottom strip with smaller text: "© 2026 Aanya Sharma — Built with curiosity and Cursor."

Add the styles under /* === FOOTER === */ in styles.css.

After updating, list every file you modified so I can verify.
```

**Strategy:** multi-file edit; verification ("list every file you modified").

---

## Prompt 10 — Typography & design tokens

```text
Global polish pass on styles.css:

1. Import the Google Fonts "Inter" (weights 400, 500, 600, 700) and "Fraunces" (weight 600) at the very top of styles.css.
2. Use Fraunces for all h1 and h2 elements; use Inter everywhere else.
3. Establish a CSS :root variable block with:
   --color-bg: #ffffff
   --color-text: #111827
   --color-muted: #6b7280
   --color-primary: #6366f1
   --color-primary-dark: #4338ca
   --color-accent: #a78bfa
   --color-surface: #f9fafb
   Refactor existing CSS to use these variables wherever those colours appear.
4. Type scale: h1=48px, h2=32px, h3=22px, body=16px, small=14px. Line-height 1.6 for body, 1.2 for headings.
5. Smooth-scroll behaviour on the html element.

Explain in one paragraph why CSS variables make future redesigns 10x faster.
```

**Strategy:** design tokens introduced through a single sweeping refactor — Cursor's superpower.

---

## Prompt 11 — Responsive design + hamburger

```text
Make the entire site (all 4 pages) mobile-friendly.

1. Below 768px:
   - The nav links should collapse into a hamburger menu (☰ icon on the right).
   - Tapping the hamburger toggles a full-width dropdown panel with the same links.
   - Animate the icon between ☰ and ✕.
2. Below 768px, all multi-column grids (skills, about, contact, footer) stack to a single column.
3. Below 480px, h1 reduces to 32px and section padding reduces from 96px to 56px.
4. Add a meta viewport tag to all 4 HTML files if missing.
5. The hamburger toggle must work via vanilla JavaScript in script.js — append, do not overwrite.

Add a /* === RESPONSIVE === */ section at the bottom of styles.css containing all media queries.
After changes, give me a 3-step manual test checklist I can run in Chrome DevTools.
```

**Strategy:** breakpoints made explicit; AI also produces the QA checklist.

---

## Prompt 12 — Debug a deliberate bug

> First, manually delete one closing `</div>` from `index.html` and reload — watch it break. Then run:

```text
The layout of index.html is broken — the footer is overlapping the hero. I have not changed any CSS recently, only HTML. Please:
1. Read index.html carefully.
2. Find the structural mistake.
3. Fix only that mistake — do not refactor anything else.
4. Tell me what was wrong and how I could have spotted it myself (e.g., using DevTools or a linter).
```

**Strategy:** symptom + suspect + surgical scope + self-improvement hook.

---

## 🎉 Done with Part 1

You now own a 4-page, responsive portfolio that runs in your browser. Keep the folder. We continue **right here** in Part 2.
