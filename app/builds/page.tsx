import type { Metadata } from "next";
import AccentScope from "@/components/layout/AccentScope";
import Eyebrow from "@/components/ui/Eyebrow";
import ProjectCard from "@/components/builds/ProjectCard";
import { buildsIntro, projects } from "@/content/builds";

export const metadata: Metadata = {
  title: "Builds",
  description:
    "Software, experiments, and unusual ideas — everything Cesar Bacaro has built that doesn't fit inside Giigs.",
  openGraph: { images: ["/opt/og/builds.jpg"] },
};

export default function BuildsPage() {
  return (
    <AccentScope accent="build">
      <section className="px-5 pb-16 pt-36 sm:px-8">
        <Eyebrow>{buildsIntro.eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl font-display text-display-xl font-black text-bone">
          {buildsIntro.title}
        </h1>
        <p className="mt-6 max-w-measure text-lg text-bone-dim">
          {buildsIntro.note}
        </p>
      </section>

      <section
        aria-label="Projects"
        className="grid items-start gap-6 px-5 pb-28 sm:px-8 lg:grid-cols-2"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </section>
    </AccentScope>
  );
}
