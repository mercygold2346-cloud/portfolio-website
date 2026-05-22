/**
 * Homepage gallery — derived from shipped project screenshots (no stock photos).
 */
export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  objectPosition?: string;
  /** Masonry: taller tile */
  tall?: boolean;
  wide?: boolean;
};

export const featuredGalleryImages: GalleryImage[] = [
  {
    id: "mono-ecommerce",
    src: "/images/projects/mono-store.png",
    alt: "MONO minimalist e-commerce website",
    category: "E-Commerce",
    title: "MONO — Premium storefront",
    objectPosition: "center top",
    wide: true,
  },
  {
    id: "mono-landing",
    src: "/images/projects/mono-store.png",
    alt: "MONO landing page and conversion layout",
    category: "Landing Page",
    title: "Editorial hero & CTAs",
    objectPosition: "center 20%",
  },
  {
    id: "cardshark-saas",
    src: "/images/projects/cardshark.png",
    alt: "SolverEdge RTA SaaS dashboard",
    category: "SaaS Dashboard",
    title: "SolverEdge RTA — Product UI",
    objectPosition: "center top",
    tall: true,
  },
  {
    id: "cardshark-analytics",
    src: "/images/projects/cardshark.png",
    alt: "Real-time analytics and decision engine",
    category: "Analytics Dashboard",
    title: "Live table insights & GTO engine",
    objectPosition: "left center",
  },
  {
    id: "cardshark-ai",
    src: "/images/projects/cardshark.png",
    alt: "AI-assisted poker platform interface",
    category: "AI Platform",
    title: "AI-powered decision support",
    objectPosition: "right top",
  },
  {
    id: "atelier-landing",
    src: "/images/projects/style-hub.png",
    alt: "ATELIER bespoke fashion landing page",
    category: "Landing Page",
    title: "ATELIER — Luxury fashion",
    objectPosition: "center top",
  },
  {
    id: "atelier-mobile",
    src: "/images/projects/style-hub.png",
    alt: "Mobile-first fashion web interface",
    category: "Mobile UI",
    title: "Responsive fashion experience",
    objectPosition: "center center",
    tall: true,
  },
  {
    id: "atelier-brand",
    src: "/images/projects/style-hub.png",
    alt: "Brand and consultation flow",
    category: "Product UI",
    title: "Bespoke consultation flow",
    objectPosition: "center 30%",
    wide: true,
  },
];

export const workspaceVisuals = [
  {
    id: "editor",
    src: "/images/projects/cardshark.png",
    alt: "Code editor with SolverEdge RTA project",
    label: "IDE — React & TypeScript",
    objectPosition: "center top" as const,
  },
  {
    id: "deploy",
    src: "/images/projects/mono-store.png",
    alt: "Vercel deployment preview MONO store",
    label: "Deploy preview — Vercel",
    objectPosition: "center top" as const,
  },
  {
    id: "dashboard",
    src: "/images/projects/style-hub.png",
    alt: "Production dashboard Style Hub",
    label: "Production build — live URL",
    objectPosition: "center top" as const,
  },
] as const;
