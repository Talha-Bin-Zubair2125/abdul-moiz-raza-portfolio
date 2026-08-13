# Glass Portfolio (React + Vite)

A glassmorphism portfolio in gold and brown tones with black text, built with
React, Vite, Framer Motion, and react-icons.

## Setup

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Add your resume PDF

The footer's "Download Resume" button links to `/resume.pdf`. Drop your
actual resume file into the `public/` folder and name it `resume.pdf` —
Vite serves anything in `public/` at the site root automatically.

## Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy it to Vercel, Netlify, or GitHub Pages.

## Deploy to Vercel

CLI:
```bash
npm install -g vercel
vercel login
vercel        # preview deploy
vercel --prod # production deploy
```

Or push to GitHub and import the repo at vercel.com — it auto-detects Vite
(build command `npm run build`, output dir `dist`).

## What's included

- `src/components/Hero.jsx` — avatar circle, "available for work" badge, looping typing effect, stat cards
- `src/components/Goal.jsx` — Career Objective / Vision / Mission cards
- `src/components/Skills.jsx` — categorized skill grid using react-icons (Simple Icons) logos
- `src/components/Projects.jsx` + `ProjectCard.jsx` — glass project cards with mouse-tilt hover
- `src/components/Experience.jsx` — work experience timeline
- `src/components/Education.jsx` — education cards
- `src/components/Awards.jsx` — certifications & awards
- `src/components/Contact.jsx`, `Footer.jsx` — contact CTA + 3-column footer with social links and resume download
- `src/components/Navbar.jsx` — sticky glass navbar with a mobile hamburger menu below 640px

## Customizing

- **Colors**: all theme colors live in `src/index.css` under `:root` (`--gold`, `--bg-brown`, `--bg-deep`, `--text`).
- **Content**: edit the text and arrays directly inside each component in `src/components/`.
- **Skills icons**: `src/components/Skills.jsx` imports icons from `react-icons/si` — browse more at https://react-icons.github.io/react-icons (search "Simple Icons" for brand/tech logos, "Feather Icons" for general UI icons).
- **Responsive breakpoints**: defined at the bottom of `src/index.css` (900px and 640px). The nav switches to a hamburger menu under 640px automatically.

## Fonts

Google Fonts: Playfair Display (headings) + Inter (body), loaded in `index.html`.
