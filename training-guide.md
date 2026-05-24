# Part 1 — Training Guide (Trainer Edition)

## Learn Web Development with AI — Building a UX Designer Portfolio in Cursor

**Duration:** ~3 hours (with Q&A breaks)
**Audience:** Absolute beginners — no coding background assumed.
**Tooling:** Cursor (primary), Chrome/Edge browser, internet.
**Outcome:** A working 4-page responsive portfolio website ("Aanya Sharma — Senior UX Designer") running locally on every student's laptop.

---

## How This Guide Is Structured

Each teaching unit contains:

1. **Concept** — the idea to teach (plain English, beginner-safe).
2. **Prompt** — the exact text to paste into Cursor (students copy from `prompts.md`).
3. **Prompting Strategy** — *why* the prompt is written that way. This is the most important column for a trainer — it converts "students who can copy" into "students who can think".
4. **Trainer Notes** — what to demo, what to watch for, what to say.

There are **five Q&A breakpoints** marked clearly. Do not skip them.

---

## Module 0 — Welcome & Setup (Pre-flight)

### 0.1 What students need before we start

- Laptop (Mac/Windows/Linux), Chrome or Edge browser.
- Cursor downloaded from **cursor.com** and installed.
- A free signup completed inside Cursor (Google sign-in is fine).
- The Be10X Session Prompts & Resources Drive link bookmarked.

### 0.2 The "why" — open the session with this story

> "Five years ago, building this exact website would have taken a beginner two weeks of tutorials. Today, with Cursor and good prompting, we'll do it in three hours. The skill that matters now is not *typing code* — it's **describing what you want clearly enough that an AI can build it**. That skill has a name: prompt engineering. By the end of today you will own it."

### 0.3 The Core Triad (5-minute whiteboard talk)

Use the **human-body analogy** — it sticks better than any technical definition:

| Tech | Role | Body part |
|------|------|-----------|
| **HTML** | Structure & content | Skeleton |
| **CSS** | Look, colour, layout | Skin & muscles |
| **JavaScript** | Behaviour & interactivity | Brain & nervous system |

**Trainer tip:** Draw a stick figure on the whiteboard. Label the bones HTML, the skin CSS, the brain JS. Students will reference this drawing for the rest of the day.

### 0.4 Why Cursor (vs VS Code)

- Cursor = VS Code's twin brother who learned AI.
- It can read your whole project and edit multiple files in one prompt.
- It has a **free tier with monthly limits**. We will respect those limits with our prompting style (see Strategy #3: Consolidation).
- Strategic fallback: if you hit the limit, the same folder opens in VS Code with GitHub Copilot — no work lost.

---

## Module 1 — The Five Rules of Prompt Engineering

Teach these *before* the first prompt. They are the entire course in five bullets.

| # | Rule | Bad example | Good example |
|---|------|-------------|--------------|
| 1 | **No subjective adjectives** | "Make it look nice" | "White background, 12px rounded corners, subtle drop shadow" |
| 2 | **Give a persona** | "I'm a designer" | "I'm a UX designer with 5 years of experience in fintech apps" |
| 3 | **Consolidate** | 6 small prompts | 1 prompt with 6 bullet points |
| 4 | **Iterate, don't restart** | "Redo the nav" | "The nav text is too small on mobile — increase to 16px and add 12px padding" |
| 5 | **Demand explanations** | (silence) | "Explain each section in plain English and add comments in the code" |

**Trainer tip:** Post these five rules visibly (slide or sticky note) for the whole session. After every prompt, point at the rule(s) you used.

---

## 🟢 Q&A Break #1 (5 min)
Ask: *"Before we touch Cursor — anyone unclear on HTML vs CSS vs JS?"*

---

## Module 2 — Project Initialisation

### 2.1 Concept
Every website needs a folder containing at minimum three files that talk to each other:

- `index.html` — the page
- `styles.css` — the look
- `script.js` — the behaviour

We will let Cursor scaffold the folder for us.

### 2.2 Trainer demo

1. Open Cursor → **File → Open Folder** → create a new folder on Desktop called `aanya-portfolio` → open it.
2. Open Cursor Chat (`Cmd/Ctrl + L`).
3. Make sure **Agent mode** is selected (top of chat panel).

### 2.3 Prompt 1 — Scaffold

```text
You are pair-programming with a complete beginner.

Create a starter web project in the current folder with these three files:
1. index.html  – an empty HTML5 boilerplate titled "Aanya Sharma | UX Designer"
2. styles.css  – an empty stylesheet
3. script.js   – an empty JavaScript file with a single console.log("Portfolio loaded ✅")

Inside index.html, link styles.css in the <head> and script.js just before the closing </body> tag.

After creating the files, explain in plain English what each file does and why we link them in those specific places.
```

### 2.4 Prompting Strategy — what we just did

- ✅ **Persona for the AI** ("pair-programming with a complete beginner") → forces simpler output.
- ✅ **Numbered, explicit deliverables** → AI cannot guess wrong.
- ✅ **Exact link placement specified** (`<head>` vs before `</body>`) → teaches the *why* through the prompt itself.
- ✅ **Demand explanation** → Rule #5.

### 2.5 Trainer notes
- After Cursor finishes, **double-click `index.html` in Finder/Explorer** — it opens in the browser. Open DevTools (right-click → Inspect → Console) and show the green check log. Students just shipped their first website.
- Pro tip to share: install the **Live Server** extension later for auto-reload — but not now, don't overwhelm.

---

## Module 3 — The Navigation Bar

### 3.1 Concept
Every multi-page site needs a consistent nav. We build it once, reuse on every page.

### 3.2 Prompt 2 — Sticky nav

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

### 3.3 Strategy
- ✅ **Exact hex codes & pixel values** (Rule #1) — no "dark", no "nice spacing".
- ✅ **Consolidation** (Rule #3) — eight requirements in one prompt.
- ✅ **Future-proofing** — we ask for an `active` class now even though other pages don't exist yet. Saves a refactor later.
- ✅ **Code organisation** — `/* === NAVIGATION === */` comment header teaches stylesheet hygiene from prompt #2.

### 3.4 Trainer notes
- Refresh `index.html` in the browser. Show the sticky behaviour by adding `<div style="height:2000px"></div>` temporarily — scroll, watch nav stick — then delete the test div.
- This is the moment to celebrate. Cue applause emoji.

---

## Module 4 — The Hero Section

### 4.1 Concept
The "hero" is the above-the-fold first impression. It must do three jobs: introduce, persuade, route.

### 4.2 Prompt 3 — Hero

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

### 4.3 Strategy
- ✅ **Visual hierarchy spelled out in numbers** — eyebrow → headline → sub → CTA, with exact px values. This is the *opposite* of "make it look professional".
- ✅ **Gradient direction specified** ("top-left to bottom-right") — removes ambiguity.
- ✅ **Demand explanation** about *why* heroes matter — converts a build task into a learning moment.

### 4.4 Trainer notes
- Show students the result. Ask: *"What would you change?"* — collect 2–3 answers. This sets up Module 5 (iteration).

---

## Module 5 — Iteration in Action

### 5.1 Concept
Real prompting is a **conversation**, not a single shot. Demonstrate it live.

### 5.2 Prompt 4 — Refine the hero (iteration demo)

```text
Two refinements to the hero:
1. The headline feels too big on a 13-inch laptop screen. Reduce h1 to 48px and add a media query so it becomes 36px on screens narrower than 640px.
2. Add a subtle floating animation to the CTA button — it should gently move up 3px and back down over 2 seconds, looping infinitely, using a CSS @keyframes animation.

Do not touch anything else.
```

### 5.3 Strategy
- ✅ **"Do not touch anything else"** — locks scope; prevents the AI from "improving" unrelated code.
- ✅ **Iterative feedback** (Rule #4) — exact numbers, exact behaviour.
- ✅ Teaches a powerful pattern: **anchor + delta** ("the headline feels too big" = anchor; "reduce to 48px" = delta).

---

## 🟢 Q&A Break #2 (5–7 min)
Ask: *"Look at the prompts so far — what pattern do you notice?"* Hopefully they say: numbers, no vague words, one big prompt instead of many small ones.

---

## Module 6 — The Skills Section (Grid Layout)

### 6.1 Prompt 5 — Skills grid

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

### 6.2 Strategy
- ✅ **Content provided inline** — never make the AI invent skills; the AI is decorating, not authoring your résumé.
- ✅ **CSS Grid syntax dictated** (`auto-fit, minmax(260px, 1fr)`) — this is *the* pattern that gives responsive grids for free.
- ✅ **Hover interactivity** specified up-front, not bolted on later.

---

## Module 7 — The About Page (Reuse & Consistency)

### 7.1 Concept
New pages must **reuse** the existing nav and stylesheet. We tell Cursor explicitly.

### 7.2 Prompt 6 — about.html

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

### 7.3 Strategy
- ✅ **"Reuse the EXACT same navigation"** — explicit anti-drift instruction.
- ✅ **Placeholder image service** (placehold.co) given as a URL — students learn a real tool, not "use a placeholder".
- ✅ **Content authored by trainer** — keeps the project's voice consistent and shows students how to "feed" AI real copy.
- ✅ **Append, don't overwrite** styles.css → preserves earlier work.

---

## Module 8 — The Projects Gallery

### 8.1 Prompt 7 — projects.html

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

### 8.2 Strategy
- ✅ **Tokenised placeholder URLs** (`<bg>`, `<title>`) — teaches templating thinking.
- ✅ Six items, two industries each — gives a realistic-looking portfolio without students having to invent.

---

## 🟢 Q&A Break #3 (5–7 min)
Show all three pages side-by-side. Ask: *"Where are you stuck? Any visual you want to change?"*

---

## Module 9 — The Contact Form

### 9.1 Concept
This is the **bridge to Part 2.** Today the form just shows a success message. In Part 2 it will write to a real database. So we build the UX now and the plumbing later.

### 9.2 Prompt 8 — contact.html

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

### 9.3 Strategy
- ✅ **Foreshadowing Part 2** — the comment "we'll send it to a real database in Part 2" plants a hook.
- ✅ **Append, do not overwrite** — protects earlier JS.
- ✅ **Focus state explicitly requested** — accessibility & polish, often forgotten by beginners.

---

## Module 10 — The Universal Footer

### 10.1 Prompt 9 — Footer on all four pages

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

### 10.2 Strategy
- ✅ **"All four HTML pages"** — leverages Cursor's multi-file editing superpower.
- ✅ **"List every file you modified"** — verification habit; trust but verify.

---

## Module 11 — Global Refinement (Typography, Color, Spacing)

### 11.1 Concept
Sweeping changes via CSS variables — change once, propagate everywhere.

### 11.2 Prompt 10 — Typography upgrade

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

### 11.3 Strategy
- ✅ **Design tokens** introduced *naturally* through a prompt — the most professional habit you can teach.
- ✅ **Refactor existing CSS** — Cursor's strength; impossible by hand for a beginner.
- ✅ **Demand explanation** (Rule #5) — turns a chore into a lesson.

---

## Module 12 — Responsive Design (Mobile-First)

### 12.1 Concept
A site that breaks on phones is a broken site. We add a hamburger and stacking rules.

### 12.2 Prompt 11 — Responsive pass

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

### 12.3 Strategy
- ✅ **Breakpoint values explicit** (768, 480) — Bootstrap-aligned, industry-standard.
- ✅ **JS append guard** — protects contact form code.
- ✅ **Test checklist** — Cursor becomes a QA partner.

### 12.4 Trainer demo — Chrome DevTools
1. Right-click any page → **Inspect** → click the device-toolbar icon (Cmd+Shift+M).
2. Pick **iPhone 14 Pro** → reload → show the hamburger.
3. Pick **iPad Mini** → show 2-column grids.
4. Drag the viewport handle slowly to demo the breakpoints in real time.

---

## 🟢 Q&A Break #4 (10 min — bigger pause)
Students try the site on their own phones via local IP. (Optional advanced: `python3 -m http.server` in the folder, then visit `http://<your-mac-ip>:8000` on the phone.)

---

## Module 13 — Debugging with AI (Bonus)

### 13.1 Show how to *break* the site on purpose

Delete one closing `</div>` in `index.html`. Refresh. Layout breaks.

### 13.2 Prompt 12 — Debug

```text
The layout of index.html is broken — the footer is overlapping the hero. I have not changed any CSS recently, only HTML. Please:
1. Read index.html carefully.
2. Find the structural mistake.
3. Fix only that mistake — do not refactor anything else.
4. Tell me what was wrong and how I could have spotted it myself (e.g., using DevTools or a linter).
```

### 13.3 Strategy
- ✅ **Symptom + suspect** — "footer overlapping hero" + "I changed only HTML" guides the AI.
- ✅ **"Fix only that"** — surgical scope.
- ✅ **"How could I have spotted it myself"** — converts a fix into a teaching moment.

---

## Module 14 — Wrap & Bridge to Part 2

### 14.1 Final checklist (read aloud)

- ✅ 4 pages, 1 stylesheet, 1 script.
- ✅ Sticky nav with active states.
- ✅ Hero, Skills, About, Projects, Contact, Footer.
- ✅ Mobile responsive with hamburger.
- ✅ CSS variables + Google Fonts + smooth scrolling.
- ✅ A contact form that *looks* real but doesn't *save* anything yet.

### 14.2 The cliffhanger (set up Part 2)

> "Right now your contact form lies to its users. It says 'message sent' but the message goes nowhere — it just floats in the browser's RAM and disappears. In Part 2 we fix that: real cloud database (Supabase), real admin dashboard to read messages, real version control with Git and GitHub, and we'll **deploy the whole thing to a live URL you can share on LinkedIn tonight.**"

### 14.3 Homework (optional, low-pressure)

- Change the colour palette using the CSS variables — only one file, see the whole site shift.
- Replace placeholder images with real ones from **unsplash.com**.
- Show the site to one non-technical friend; collect one piece of feedback.

---

## 🟢 Q&A Break #5 — Final (10–15 min)
Open floor. Common questions to anticipate:
- *"Can I use a different font?"* → Yes; just change the Google Fonts import + variable.
- *"What if Cursor's free limit runs out?"* → Open same folder in VS Code with Copilot.
- *"Can I add a blog?"* → Part 2 territory (covered briefly via projects.html pattern).
- *"Is this code 'real' enough for a job?"* → For a portfolio site, yes. For an enterprise app, you'd add a framework like React — but the prompting principles stay identical.

---

## Appendix — The Five Rules, restated

1. **Numbers beat adjectives.**
2. **Persona before prompt.**
3. **One big prompt > five small ones.**
4. **Iterate with anchor + delta.**
5. **Always demand the "why".**

> *End of Part 1. See you in Part 2 — bring the same folder, don't delete anything.*
