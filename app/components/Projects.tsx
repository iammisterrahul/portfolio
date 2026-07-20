import { projects } from "../data/resume";
import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import { ArrowIcon } from "./ui/Icons";

/** Pretty domain label from a full URL, e.g. "https://www.x.com/a" -> "x.com". */
function domainOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects I've built"
      description="A selection of platforms and products I've designed and engineered — click any card to visit the live site."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 3) * 100} as="article">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name} (opens in a new tab)`}
              className="gradient-border glass group flex h-full flex-col rounded-2xl border border-border-soft p-6 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-1/20 to-accent-3/20 text-lg font-bold text-foreground">
                  {project.name.charAt(0)}
                </span>
                <div className="flex items-center gap-2">
                  {project.freelance && (
                    <span className="rounded-full border border-accent-2/40 bg-accent-2/10 px-2.5 py-0.5 text-[11px] font-medium text-accent-2">
                      Freelance
                    </span>
                  )}
                  <ArrowIcon className="-rotate-45 text-muted opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-2 group-hover:opacity-100" />
                </div>
              </div>

              <h3 className="text-lg font-semibold transition-colors group-hover:text-accent-2">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <span className="mt-4 inline-flex items-center gap-1.5 border-t border-border-soft pt-4 font-mono text-xs text-muted transition-colors group-hover:text-accent-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-3" />
                {domainOf(project.url)}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
