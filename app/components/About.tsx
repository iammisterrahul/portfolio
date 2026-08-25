import { languages, profile } from "../data/resume";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import { AtomIcon, LinkIcon, SparkleIcon } from "./ui/Icons";

const highlights = [
  {
    title: "Frontend architecture",
    body: "Scalable, high-performance UI with React.js, Next.js & TypeScript.",
    Icon: AtomIcon,
  },
  {
    title: "Web3 & blockchain",
    body: "Smart contracts, wallet integration and Web3.js in production apps.",
    Icon: LinkIcon,
  },
  {
    title: "UI/UX optimization",
    body: "Lighthouse tuning, cross-browser testing and measurable engagement gains.",
    Icon: SparkleIcon,
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="Turning ideas into fast, polished products"
      description={profile.summary}
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {highlights.map(({ title, body, Icon }, i) => (
          <Reveal key={title} delay={i * 100} as="article">
            <div className="gradient-border glass h-full rounded-2xl border border-border-soft p-6 transition-transform duration-300 hover:-translate-y-1">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent-1/20 to-accent-3/20 text-accent-2">
                <Icon width={22} height={22} />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-6">
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border-soft bg-card p-5 text-sm backdrop-blur">
          <span className="font-medium text-foreground">Languages:</span>
          {languages.map((lang) => (
            <span key={lang} className="text-muted">
              {lang}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
