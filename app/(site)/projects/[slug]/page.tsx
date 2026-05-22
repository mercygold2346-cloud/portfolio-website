import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/components/sections/projectsData";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <main className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex text-sm text-accent hover:opacity-80 transition-opacity"
        >
          ← Back to projects
        </Link>

        <article className="mt-8 space-y-8">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-white/10 shadow-2xl">
            <Image
              src={project.image}
              alt={`${project.overviewTitle} — project screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>

          <section className="glass rounded-2xl p-8 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h1>
            <p className="mt-4 text-slate-600 dark:text-white/70 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-slate-100 text-sm text-slate-700 dark:bg-white/10 dark:text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-accent/20 text-accent text-sm font-medium hover:bg-accent/30 transition-colors"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg glass text-slate-700 dark:text-white/80 text-sm font-medium hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </section>

          <section className="glass rounded-2xl p-8 md:p-10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Case study
            </h2>
            <div className="space-y-6">
              {[
                { label: "Problem", text: caseStudy.problem },
                { label: "What I built", text: caseStudy.built },
                { label: "Result", text: caseStudy.result },
              ].map((item) => (
                <div key={item.label}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
                    {item.label}
                  </h3>
                  <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
