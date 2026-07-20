import { marqueeSkills, skills } from "../data/resume";
import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Skills & technologies"
      description="The stack I reach for to design, build and ship modern web products."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 80} as="article">
            <div className="gradient-border glass h-full rounded-2xl border border-border-soft p-6">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-2">
                <span className="h-px w-6 bg-gradient-to-r from-accent-1 to-accent-3" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Infinite marquee strip */}
      <div className="marquee-pause relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-3">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="whitespace-nowrap rounded-full border border-border-soft bg-card px-4 py-2 text-sm text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
