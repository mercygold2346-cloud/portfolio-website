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
  {
    slug: "jungle-escape",
    title: "Jungle Escape — Endless Runner Game",
    overviewTitle: "Jungle Escape — Browser Game",
    description:
      "Web-based endless jungle runner: dodge traps, collect coins, and escape the temple — built as a polished browser game with immersive theming and responsive play.",
    image: "/images/projects/temple-run.png",
    tags: ["JavaScript", "Game Dev", "Canvas", "Vercel"],
    liveUrl: "https://temple-run1.vercel.app/",
    githubUrl: githubRepo("temple-run1"),
    caseStudy: {
      problem:
        "Needed a fun, lightweight browser game that loads fast, plays well on desktop, and feels premium enough for a portfolio demo.",
      built:
        "An endless-runner experience with jungle theming, coin collection, trap avoidance, and a clean boot/splash flow shipped as a static web game.",
      result:
        "Live on Vercel as Jungle Escape — a playable proof of interactive front-end skills beyond standard marketing sites.",
    },
  },
  {
    slug: "mercy-marketing-store",
    title: "Mercy Marketing Store — Multi-Category Shop",
    overviewTitle: "Mercy Store — Fashion & Gadgets",
    description:
      "Full marketing e-commerce store with streetwear, beauty, and tech gadgets — trending carousels, flash deals, category shopping, and conversion-focused CTAs.",
    image: "/images/projects/mercy-marketing-store.png",
    tags: ["Next.js", "E-Commerce", "UI/UX", "Vercel"],
    liveUrl: "https://mercy-marketing-store.vercel.app/",
    githubUrl: githubRepo("mercy-marketing-store"),
    caseStudy: {
      problem:
        "A multi-category retailer needed one storefront for fashion, beauty, and electronics with strong merchandising and deal urgency.",
      built:
        "A conversion-oriented shop with hero campaigns, auto-scrolling trending products, flash deals, category grids, and social proof sections.",
      result:
        "Deployed on Vercel as a buyer-ready marketing store that showcases e-commerce UX and product storytelling.",
    },
  },
  {
    slug: "mercy-hospitality",
    title: "Mercy Hospitality — Luxury Hotel Site",
    overviewTitle: "Mercy Hospitality — Luxury Stay",
    description:
      "Luxury hospitality website with signature suites, booking CTAs, and a premium editorial presentation for guests who expect five-star polish.",
    image: "/images/projects/mercy-hospitality.png",
    tags: ["Next.js", "Hospitality", "Landing Page", "Vercel"],
    liveUrl: "https://mercy-hospitality-website.vercel.app/",
    githubUrl: githubRepo("mercy-hospitality-website"),
    caseStudy: {
      problem:
        "A hospitality brand needed a high-end digital presence that sells rooms through atmosphere, clarity, and strong booking calls-to-action.",
      built:
        "A luxury landing experience with suite cards, pricing, amenity cues, and prominent Book Now / Explore Rooms flows.",
      result:
        "Live on Vercel as a premium hospitality demo that proves brand storytelling and conversion-focused web design.",
    },
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((p) => p.slug === slug);
}
