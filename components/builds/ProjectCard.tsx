import Link from "next/link";
import Image from "next/image";
import AccentScope from "@/components/layout/AccentScope";
import Reveal from "@/components/ui/Reveal";
import type { Project } from "@/content/types";

function CardBody({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col border border-ink-700 bg-ink-900 transition-colors group-hover:border-[var(--accent)]">
      {project.image && (
        <div className="overflow-hidden border-b border-ink-700">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-2xl font-extrabold text-bone sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-2 text-[var(--accent)]">{project.oneLiner}</p>
        <dl className="mt-6 space-y-4 text-sm leading-relaxed">
          <div>
            <dt className="font-mono text-eyebrow uppercase text-bone-faint">
              The problem
            </dt>
            <dd className="mt-1 text-bone-dim">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-eyebrow uppercase text-bone-faint">
              What I built
            </dt>
            <dd className="mt-1 text-bone-dim">{project.built}</dd>
          </div>
          <div>
            <dt className="font-mono text-eyebrow uppercase text-bone-faint">
              Role
            </dt>
            <dd className="mt-1 text-bone-dim">{project.role}</dd>
          </div>
          {project.constraints && (
            <div>
              <dt className="font-mono text-eyebrow uppercase text-bone-faint">
                Constraints
              </dt>
              <dd className="mt-1 text-bone-dim">{project.constraints}</dd>
            </div>
          )}
        </dl>
        <p className="mt-auto pt-6 font-mono text-xs uppercase tracking-[0.15em] text-bone-faint">
          {project.status}
          {project.href && (
            <span className="ml-3 text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {project.external ? "Visit ↗" : "Case study →"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <AccentScope accent={project.accent}>
      <Reveal delay={(index % 2) * 0.08} className="h-full">
        {project.href ? (
          project.external ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <CardBody project={project} />
            </a>
          ) : (
            <Link href={project.href} className="group block h-full">
              <CardBody project={project} />
            </Link>
          )
        ) : (
          <div className="group h-full">
            <CardBody project={project} />
          </div>
        )}
      </Reveal>
    </AccentScope>
  );
}
