import { experience } from "../data/resume";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      title="Professional experience"
      description="5+ years shipping frontend-heavy fullstack work across startups and product teams."
    >
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-accent-1 via-accent-2 to-transparent sm:left-[9px]" />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 60} as="article">
              <div className="relative pl-8 sm:pl-12">
                {/* Node */}
                <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-background ring-2 ring-accent-2 sm:h-[18px] sm:w-[18px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
                </span>

                <div className="gradient-border glass rounded-2xl border border-border-soft p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{job.role}</h3>
                      <p className="text-accent-2">
                        {job.company}
                        {job.mode && (
                          <span className="text-muted"> · {job.mode}</span>
                        )}
                      </p>
                    </div>
                    <span className="rounded-full border border-border-soft bg-card px-3 py-1 font-mono text-xs text-muted">
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent-1 to-accent-3" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
