import { navLinks, profile } from "../data/resume";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
  XIcon,
} from "./ui/Icons";

const phoneDigits = profile.phone.replace(/\D/g, "");

const socials = [
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon },
  { label: "WhatsApp", href: `https://wa.me/${phoneDigits}`, Icon: WhatsAppIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", href: profile.github, Icon: GitHubIcon },
  { label: "X (Twitter)", href: profile.twitter, Icon: XIcon },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2 font-mono text-sm font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent-1 to-accent-3 text-white">
            RR
          </span>
          <span className="gradient-text">{profile.name}</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={
                href.startsWith("http") ? `${label} (opens in a new tab)` : label
              }
              className="grid h-9 w-9 place-items-center rounded-full border border-border-soft bg-card text-muted transition-colors hover:border-accent-1 hover:text-foreground"
            >
              <Icon width={16} height={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border-soft py-5 text-center text-xs text-muted">
        © {profile.name}. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}
