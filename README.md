# Rahul Rajan — Portfolio

A modern, fully responsive developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. It's data-driven, component-based, animated, theme-aware, and ships with comprehensive SEO out of the box.

🔗 **Live:** set your domain in `NEXT_PUBLIC_SITE_URL` (see [Configuration](#configuration)).

---

## ✨ Features

- **Single source of truth** — all content (profile, skills, experience, projects, education, contact) lives in one file: [`app/data/resume.ts`](app/data/resume.ts). No JSX edits needed to update content.
- **Reusable components** — a small `ui/` primitive layer (`Section`, `Reveal`, `Badge`, `Card`, `Icons`, …) composed into section components.
- **Interactive & animated** — scroll-reveal animations, scroll progress bar, scroll-spy navbar, animated gradient background, infinite skills marquee, and hover micro-interactions.
- **Light / dark theme** — toggle with a no-flash pre-paint script; respects system preference and persists the choice.
- **Responsive** — mobile-first layout with an animated mobile menu; honours `prefers-reduced-motion`.
- **Project links** — every project card links to its live site; freelance work is badged.
- **Full contact channels** — Email, WhatsApp, Phone, LinkedIn, Location (Maps), plus optional GitHub / X.
- **Complete SEO** — rich metadata, canonical URL, Open Graph + Twitter cards, a dynamically-generated OG image, `robots.txt`, `sitemap.xml`, a web manifest, and JSON-LD structured data (`Person` + `WebSite`).

---

## 🧱 Tech Stack

| Area       | Choice                            |
| ---------- | --------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)|
| UI         | React 19, TypeScript              |
| Styling    | Tailwind CSS v4                   |
| Fonts      | Geist Sans & Geist Mono (`next/font`) |
| OG image   | `next/og` (`ImageResponse`)       |
| Linting    | ESLint 9 + `eslint-config-next`   |

---

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the dev server (http://localhost:3000)
npm run dev

# production build
npm run build

# run the production build
npm run start

# lint
npm run lint
```

---

## ⚙️ Configuration

### Site URL (required for correct SEO)

Canonical URLs, Open Graph tags, the sitemap, and JSON-LD all derive from a single environment variable. Create a `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If unset, it falls back to a placeholder (`https://rahulrajan.dev`) for local development.

### Content

Edit [`app/data/resume.ts`](app/data/resume.ts) — everything on the page reads from it:

- `profile` — name, title, summary, location, and contact details.
- `skills`, `experience`, `projects`, `education`, `languages`.
- `siteConfig` — site name, locale, and OG image alt text.

### Profile photo

Drop an image at `public/rahul-rajan.png` (or change `profile.photo`). If the file is missing, a styled placeholder is shown automatically.

### Contact links (GitHub / X)

`profile.github` and `profile.twitter` are empty by default. Set their full URLs (and `*Label`) in `app/data/resume.ts` and they appear automatically in the Contact section and footer. Empty entries are hidden.

---

## 📂 Project Structure

```
app/
├── data/
│   └── resume.ts          # ← all site content + config (edit this)
├── components/
│   ├── Navbar.tsx         # sticky nav, scroll-spy, mobile menu, theme toggle
│   ├── Hero.tsx           # intro, photo, stats
│   ├── About.tsx
│   ├── Skills.tsx         # skill groups + marquee
│   ├── Experience.tsx     # timeline
│   ├── Projects.tsx       # linked project cards
│   ├── Education.tsx
│   ├── Contact.tsx        # contact channels
│   ├── Footer.tsx
│   └── ui/                # reusable primitives
│       ├── Section.tsx    Reveal.tsx   Badge.tsx    Card.tsx
│       ├── Icons.tsx      ThemeToggle.tsx           ScrollProgress.tsx
│       ├── Background.tsx ProfilePhoto.tsx
├── layout.tsx             # metadata, JSON-LD, theme init, fonts
├── page.tsx               # page composition
├── globals.css            # theme tokens, animations, helpers
├── opengraph-image.tsx    # dynamic OG/Twitter image
├── robots.ts  sitemap.ts  manifest.ts
├── icon.png  apple-icon.png  favicon.ico
public/                    # static assets (profile image, svgs)
```

---

## 🔍 SEO Endpoints

Generated automatically by Next.js — verify after `npm run build`:

- `/robots.txt`
- `/sitemap.xml`
- `/manifest.webmanifest`
- `/opengraph-image` (1200×630 branded card)
- JSON-LD `Person` + `WebSite` in the page `<head>`

> Remember to set `NEXT_PUBLIC_SITE_URL` so all of the above use your real domain.

---

## ☁️ Deploy

Deploy on any Node host or [Vercel](https://vercel.com/new). Set the `NEXT_PUBLIC_SITE_URL` environment variable in your host's project settings, then build & deploy.

---

_Built with Next.js & Tailwind CSS._
