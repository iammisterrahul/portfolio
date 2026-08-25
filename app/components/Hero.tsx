import { profile, stats } from "../data/resume";
import Reveal from "./ui/Reveal";
import CountUp from "./ui/CountUp";
import ProfilePhoto from "./ui/ProfilePhoto";
import { ArrowIcon, LinkedInIcon, MailIcon, PinIcon } from "./ui/Icons";

// Server-only flag, so it never reaches the client bundle. Unset (or anything
// other than "false") keeps the badge visible.
const showAvailability = process.env.SHOW_AVAILABILITY_BADGE !== "false";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <div>
          {showAvailability && (
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-card px-4 py-1.5 text-sm text-muted backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Available for new opportunities
              </span>
            </Reveal>
          )}

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Hi, I&apos;m{" "}
              <span className="gradient-text animate-shine">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-4 text-xl font-medium text-foreground/90 sm:text-2xl">
              {profile.title}
            </p>
            <p className="mt-1 font-mono text-sm text-accent-2">{profile.stack}</p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-1 to-accent-3 px-6 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105"
              >
                View my work
                <ArrowIcon className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-card px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-accent-1"
              >
                <MailIcon width={16} height={16} />
                Get in touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <PinIcon width={15} height={15} /> {profile.location}
              </span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <LinkedInIcon width={15} height={15} /> {profile.linkedinLabel}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: photo (placeholder until /public/rahul-rajan.png is added) */}
        <Reveal delay={200} className="mx-auto w-full max-w-sm">
          <ProfilePhoto
            src={profile.photo}
            srcLight={profile.photoLight}
            alt={`Portrait of ${profile.name}`}
          />
        </Reveal>
      </div>

      {/* Stats strip */}
      <Reveal delay={300} className="mt-16">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border-soft bg-card p-6 backdrop-blur sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="gradient-text text-3xl font-bold sm:text-4xl">
                {/* delay matches this block's <Reveal delay={300}> */}
                <CountUp value={s.value} delay={300} />
              </div>
              <div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
