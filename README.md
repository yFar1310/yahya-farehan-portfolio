# Yahya Farehan Portfolio

Premium personal portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui, and Lucide icons.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Lucide React
- next-themes (dark/light switch)

## Features

- Dark theme by default + light theme switch
- French by default + English switch
- Responsive premium UI (mobile + desktop)
- Sticky navbar with active section highlighting
- Animated section reveals and hover transitions
- Structured sections for recruiters:
  - Hero
  - About
  - Experience
  - Featured Projects
  - Skills
  - Education
  - Contact
- SEO metadata configured in `src/app/layout.tsx`
- Centralized and typed content in `src/data/portfolio.ts`

## Project Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    layout/
      site-footer.tsx
      site-header.tsx
    providers/
      theme-provider.tsx
    sections/
      about-section.tsx
      contact-section.tsx
      education-section.tsx
      experience-section.tsx
      hero-section.tsx
      projects-section.tsx
      skills-section.tsx
    shared/
      language-toggle.tsx
      reveal.tsx
      section-heading.tsx
      theme-toggle.tsx
    ui/
      ...shadcn components
    portfolio-page.tsx
  data/
    portfolio.ts
  hooks/
    use-active-section.ts
  lib/
    utils.ts
  types/
    portfolio.ts
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Customization

- Update profile and section data in `src/data/portfolio.ts`
- Replace portfolio placeholder link in `src/data/portfolio.ts` (`profile.portfolio`)
- Adjust SEO metadata in `src/app/layout.tsx`
- Add project screenshots inside project cards (`src/components/sections/projects-section.tsx`)
- Add live demo links by extending project items in `src/types/portfolio.ts` and `src/data/portfolio.ts`

## Build

```bash
npm run build
npm run start
```

## Deploy on GitHub Pages

This project is configured for GitHub Pages static deployment using:

- `next.config.ts` with `output: "export"`
- GitHub Actions workflow: `.github/workflows/deploy-pages.yml`

### Recommended repository naming

- If you want root URL: `https://yFar1310.github.io/`
  - Repository must be: `yFar1310.github.io`
- If you use another repository name (example: `yahya-farehan-portfolio`)
  - URL will be: `https://yFar1310.github.io/yahya-farehan-portfolio/`

### First-time setup

1. Create the repository on GitHub.
2. Push `main` branch.
3. On GitHub: `Settings -> Pages -> Source = GitHub Actions`.
4. Wait for the workflow **Deploy to GitHub Pages** to finish.
