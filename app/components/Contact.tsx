import { profile } from "../data/resume";
import Reveal from "./ui/Reveal";
import {
  ArrowIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
  XIcon,
} from "./ui/Icons";

const phoneDigits = profile.phone.replace(/\D/g, "");
const mapsQuery = encodeURIComponent(
  `${profile.city}, ${profile.region}, India`
);

// Every essential channel. Entries with an empty href are hidden, so
// GitHub / X appear automatically once their URLs are set in resume.ts.
const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
  },
  {
    label: "WhatsApp",
    value: profile.phone,
    href: `https://wa.me/${phoneDigits}`,
    Icon: WhatsAppIcon,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    Icon: PhoneIcon,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
    Icon: GitHubIcon,
  },
  {
    label: "X (Twitter)",
    value: profile.twitterLabel,
    href: profile.twitter,
    Icon: XIcon,
  },
  {
    label: "Location",
    value: `${profile.city}, ${profile.region}`,
    href: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
    Icon: PinIcon,
  },
].filter((channel) => channel.href);

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
    >
      <Reveal>
        <div className="gradient-border glass relative overflow-hidden rounded-3xl border border-border-soft p-8 text-center sm:p-14">
          {/* soft glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-accent-2/30 blur-[80px]" />

          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-2">
            Get in touch
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="gradient-text">amazing together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Have a project in mind or a role to fill? I&apos;m currently open to
            new opportunities — reach out and let&apos;s talk.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-1 to-accent-3 px-7 py-3.5 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105"
          >
            Say hello
            <ArrowIcon className="transition-transform group-hover:translate-x-1" />
          </a>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
            {channels.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={
                  href.startsWith("http")
                    ? `${label} (opens in a new tab)`
                    : label
                }
                className="group flex flex-col items-center gap-2 rounded-2xl border border-border-soft bg-card p-5 transition-colors hover:border-accent-1"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-accent-1/20 to-accent-3/20 text-accent-2">
                  <Icon />
                </span>
                <span className="text-xs uppercase tracking-wider text-muted">
                  {label}
                </span>
                <span className="break-all text-sm font-medium transition-colors group-hover:text-accent-2">
                  {value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
