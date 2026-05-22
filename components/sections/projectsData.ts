export type ProjectCaseStudy = {
  problem: string;
  built: string;
  result: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  /** Short label on homepage proof showcase */
  overviewTitle: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  caseStudy: ProjectCaseStudy;
};

/** GitHub user or org. Override in .env.local: NEXT_PUBLIC_GITHUB_USERNAME=mercygold2346-cloud */
const GITHUB_USERNAME =
  process.env.NEXT_PUBLIC_GITHUB_USERNAME?.trim() || "mercygold2346-cloud";

const githubRepo = (repo: string) =>
  `https://github.com/${GITHUB_USERNAME}/${repo}`;

export const projects: ProjectItem[] = [
  {
    slug: "mono-store",
    title: "MONO — Minimalist Clothing Store",
    overviewTitle: "MONO Store — Premium E-Commerce",
    description:
      "Full e-commerce experience for a minimalist apparel brand: hero editorial layouts, shop-by-category flows, cart and account areas, testimonials, and newsletter — built for clarity and conversion.",
    image: "/images/projects/mono-store.png",
    tags: ["Next.js", "E-Commerce", "Tailwind CSS", "Vercel"],
    liveUrl: "https://mono-store-website.vercel.app/",
    githubUrl: githubRepo("MONO-STORE-WEBSITE"),
    caseStudy: {
      problem:
        "The brand needed a clean online store that felt editorial—not cluttered—while still supporting browse, cart, and checkout flows.",
      built:
        "A responsive storefront with category navigation, product grids, cart/account areas, testimonials, and newsletter signup using Next.js and Tailwind CSS.",
      result:
        "A polished live demo on Vercel that presents the brand professionally and is ready to extend with real product data and payments.",
    },
  },
  {
    slug: "cardshark-insight-suite",
    title: "SolverEdge RTA — Poker Assistant",
    overviewTitle: "SolverEdge RTA — Real-Time Analytics",
    description:
      "Real-time poker assistant with a focused product UI for live table insights, decision support, and a premium dashboard experience — deployed as a production web app on Vercel.",
    image: "/images/projects/cardshark.png",
    tags: ["React", "TypeScript", "Real-time", "Vercel"],
    liveUrl: "https://cardshark-insight-suite.vercel.app/",
    githubUrl: githubRepo("cardshark-insight-suite"),
    caseStudy: {
      problem:
        "Players needed a fast, readable interface for live-table context and decision support without a cluttered or amateur-looking UI.",
      built:
        "A dashboard-style web app with clear information hierarchy, real-time-oriented layout patterns, and a premium dark UI tuned for focus during play.",
      result:
        "Shipped as a production Vercel deployment that demonstrates product thinking, UI polish, and maintainable React + TypeScript architecture.",
    },
  },
  {
    slug: "style-hub",
    title: "Style Hub — Fashion Web App",
    overviewTitle: "ATELIER — Bespoke Fashion Design",
    description:
      "Luxury fashion landing experience (ATELIER) with editorial typography, bespoke positioning, and consultation CTAs — live on Vercel as Style Hub.",
    image: "/images/projects/style-hub.png",
    tags: ["React", "UI/UX", "Responsive", "Vercel"],
    liveUrl: "https://style-hub-gamma.vercel.app/",
    githubUrl: githubRepo("style-hub"),
    caseStudy: {
      problem:
        "The product needed a contemporary fashion presence with browsing and styling cues that feel modern on mobile and desktop.",
      built:
        "A responsive fashion web app with retail-style layouts, strong typography, imagery-led sections, and consistent component styling.",
      result:
        "Live on Vercel as a portfolio-ready demo that shows retail UI patterns and attention to visual detail across screen sizes.",
    },
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((p) => p.slug === slug);
}
