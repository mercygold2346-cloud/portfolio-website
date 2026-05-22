export const siteConfig = {
  name: "MercyDev",
  title: "MercyDev | Full-Stack Developer — Web Apps, E-Commerce & AI",
  description:
    "MercyDev builds fast, polished websites and web apps for founders and businesses — e-commerce, dashboards, and AI-powered products shipped to production.",
  tagline: "Ship faster. Look premium. Convert more visitors into clients.",
  githubUrl:
    process.env.NEXT_PUBLIC_GITHUB_URL?.trim() ||
    "https://github.com/mercygold2346-cloud",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "mercygold2346@gmail.com",
} as const;

export const techCarouselItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Vercel",
  "Framer Motion",
  "OpenAI",
  "REST APIs",
  "E-Commerce",
  "Stripe",
  "Git",
  "Figma",
  "Responsive UI",
] as const;
