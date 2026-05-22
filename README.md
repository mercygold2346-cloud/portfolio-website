# Full Stack AI Developer Portfolio

A premium, modern portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/contact/     # Contact form API (email-ready)
│   ├── layout.tsx       # Root layout + SEO metadata
│   ├── loading.tsx      # Loading animation
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, About, Services, etc.
│   └── ui/              # Reusable UI components
└── public/              # Static assets
```

## Customization

- **Contact Form:** Configure email in `app/api/contact/route.ts` (Resend, SendGrid, etc.)
- **Links:** Update WhatsApp, Fiverr, GitHub, LinkedIn in components
- **Projects:** Edit `components/sections/Projects.tsx` with your real projects
- **Testimonials:** Update in `components/sections/Testimonials.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Optimized for Vercel. Connect your repo and deploy with one click.
