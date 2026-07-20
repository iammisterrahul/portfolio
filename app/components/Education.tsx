import { education } from "../data/resume";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <div className="space-y-4">
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 80} as="article">
            <div className="gradient-border glass flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border-soft p-6">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent-1/20 to-accent-3/20 text-2xl">
                  🎓
                </span>
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted">{edu.school}</p>
                </div>
              </div>
              <span className="rounded-full border border-border-soft bg-card px-3 py-1 font-mono text-xs text-muted">
                {edu.period}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
