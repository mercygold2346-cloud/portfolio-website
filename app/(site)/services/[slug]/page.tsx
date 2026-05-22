import Link from "next/link";
import { notFound } from "next/navigation";

const serviceContent: Record<
  string,
  { title: string; description: string; details: string[] }
> = {
  "ai-website-development": {
    title: "AI Website Development",
    description:
      "Intelligent, responsive websites powered by AI that adapt to user behavior and deliver personalized experiences.",
    details: [
      "AI-enhanced UX flows tailored to user intent and behavior.",
      "Fast, SEO-ready frontend architecture for conversion-focused pages.",
      "Integrations with analytics, lead capture, and automation tools.",
    ],
  },
  "saas-application-development": {
    title: "SaaS Application Development",
    description:
      "Full-featured SaaS platforms with subscription management, analytics, and scalable infrastructure.",
    details: [
      "End-to-end product development from MVP to production rollout.",
      "Secure auth, billing logic, dashboards, and multi-tenant readiness.",
      "Scalable architecture designed for growth and long-term maintainability.",
    ],
  },
  "rork-app-development": {
    title: "Rork App Development",
    description:
      "Custom applications built on Rork for rapid deployment and seamless AI integration.",
    details: [
      "Custom Rork implementations aligned with business goals.",
      "Rapid shipping cycles with clean, testable code.",
      "AI-powered workflows embedded into daily operations.",
    ],
  },
  "base44-platform-builds": {
    title: "Base44 Platform Builds",
    description:
      "Robust platform development using Base44 for enterprise-grade applications.",
    details: [
      "Enterprise-grade platform architecture with clear separation of concerns.",
      "Reliable integrations across internal and external systems.",
      "Performance and security-first implementation approach.",
    ],
  },
  "replit-agent-automation": {
    title: "Replit Agent Automation",
    description:
      "Automate workflows, deployments, and development tasks with Replit Agent for maximum efficiency.",
    details: [
      "Automation of repetitive engineering and operational tasks.",
      "Deployment-friendly workflows that reduce release friction.",
      "Custom agent orchestration tuned to your product pipeline.",
    ],
  },
  "full-stack-web-apps": {
    title: "Full Stack Web Apps",
    description:
      "End-to-end web applications with modern architecture, clean code, and production-ready deployment.",
    details: [
      "Modern full-stack builds with clear architecture and ownership.",
      "API, frontend, database, and infrastructure built as one system.",
      "Production-ready deployment practices and ongoing optimization.",
    ],
  },
};

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = serviceContent[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/services"
          className="inline-flex text-sm text-accent hover:opacity-80 transition-opacity"
        >
          ← Back to services
        </Link>

        <section className="mt-8 glass rounded-2xl p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {service.title}
          </h1>
          <p className="mt-4 text-white/70 leading-relaxed">{service.description}</p>

          <ul className="mt-8 space-y-3 text-white/80">
            {service.details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="text-accent mt-1">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
