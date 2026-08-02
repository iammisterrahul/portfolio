export const profile = {
  name: "Rahul Rajan",
  title: "Frontend-Heavy Fullstack Developer",
  stack: "React.js · Next.js · Web3",
  location: "Thrissur, Kerala, India",
  city: "Thrissur",
  region: "Kerala",
  country: "IN",
  phone: "+91 8469666988",
  email: "vattamparambilrahulrajan@gmail.com",
  linkedin: "https://linkedin.com/in/rahul-rajan117",
  linkedinLabel: "linkedin.com/in/rahul-rajan117",
  // Set these to enable the links (leave empty to hide). Full URLs.
  github: "",
  githubLabel: "",
  twitter: "",
  twitterLabel: "",
  summary:
    "Frontend-Heavy Fullstack Developer with 5+ years of experience building scalable web applications using React.js, Next.js, TypeScript, and Node.js. Experienced in blockchain applications, Web3 integrations, UI/UX optimization, and high-performance frontend architecture.",
  /** Drop your photo at /public/rahul-rajan.png (or update this path) and it appears in the hero. */
  photo: "/rahul-rajan.png",
} as const;

/**
 * Site-wide config used for SEO (canonical URLs, Open Graph, sitemap, etc.).
 * IMPORTANT: set NEXT_PUBLIC_SITE_URL to your real deployed domain — the
 * fallback below is only a placeholder for local development.
 */
export const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://rahulrajan.dev").replace(
    /\/$/,
    "",
  ),
  name: "Rahul Rajan — Portfolio",
  shortName: "Rahul Rajan",
  locale: "en_US",
  ogImageAlt: "Rahul Rajan — Frontend-Heavy Fullstack Developer",
} as const;

export const stats = [
  { value: "5+", label: "Years experience" },
  { value: "6", label: "Companies" },
  { value: "8+", label: "Projects shipped" },
  { value: "25%", label: "UI engagement lift" },
] as const;

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Bootstrap", "Material UI", "Next UI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Python"],
  },
  {
    category: "Blockchain",
    items: ["Smart Contracts", "Wallet Integration", "Web3.js"],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "VS Code",
      "Figma",
      "Jira",
      "Trello",
    ],
  },
];

/** Flat list used by the marquee strip. */
export const marqueeSkills: string[] = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Web3.js",
  "Smart Contracts",
  "Express.js",
  "Material UI",
  "Python",
  "Figma",
  "REST APIs",
];

export type Experience = {
  role: string;
  company: string;
  mode?: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "React Developer",
    company: "Niiyo Technology",
    mode: "Remote",
    period: "Jun 2025 – Present",
    points: [
      "Working on Neem Connect (Web & CRM) and CTS CRM.",
      "Implemented payment gateway and AI integrations.",
      "Built scalable UI modules using React.js and Next.js.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Revving.ai",
    mode: "Remote",
    period: "Dec 2024 – Feb 2025",
    points: [
      "Built MVP for an LLM deployment platform using Next.js and Tailwind CSS.",
      "Designed reusable UI components and optimized frontend performance.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Maple Tech Space",
    period: "Dec 2023 – Nov 2024",
    points: [
      "Developed high-performance React.js and Next.js applications.",
      "Improved UI engagement by 25% using Tailwind CSS and UX best practices.",
      "Performed Lighthouse optimization and cross-browser testing.",
    ],
  },
  {
    role: "Full-stack Developer",
    company: "Mazimatic",
    mode: "Remote",
    period: "Jun 2023 – Oct 2023",
    points: [
      "Built mazi.game, a crypto gambling platform from scratch.",
      "Developed frontend/backend architecture using Next.js and Node.js.",
      "Integrated NFT features, wallets, and Web3.js functionality.",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Lampros Tech Labs",
    period: "Nov 2021 – Jun 2023",
    points: [
      "Built blockchain-based applications using React.js, Node.js, Python, and Solidity.",
      "Developed dashboards, APIs, and decentralized authentication systems.",
    ],
  },
  {
    role: "Associate Software Developer",
    company: "Gopanear LLP",
    period: "Jun 2021 – Nov 2021",
    points: [
      "Built reusable Vue.js components and integrated third-party APIs.",
      "Improved application performance and user experience.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  url: string;
  /** Marks independent client/freelance work. */
  freelance?: boolean;
};

export const projects: Project[] = [
  {
    name: "Neem Connect",
    description:
      "Web platform and CRM built with React.js and Next.js, featuring payment and AI integrations.",
    tags: ["Next.js", "React.js", "AI", "Payments"],
    url: "https://neemconnect.com/en-ca",
  },
  {
    name: "The Canadian Home",
    description:
      "SEO-focused real estate platform and CRM interfaces built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "SEO", "CRM"],
    url: "https://thecanadianhome.com",
  },
  {
    name: "AgentRoof",
    description:
      "Migrated a legacy Vue.js application to Next.js with improved UI and performance.",
    tags: ["Next.js", "Migration", "Performance"],
    url: "https://agentroof.com/",
  },
  {
    name: "The Tidy Turtle",
    description:
      "Marketing website for a professional cleaning service based in Kochi, built with Next.js.",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    url: "https://thetidyturtle.in/",
    freelance: true,
  },
  {
    name: "EU Placement",
    description:
      "Job portal to search for jobs and share hiring requirements, built with Next.js and React.js.",
    tags: ["Next.js", "React.js", "Job Portal"],
    url: "https://www.euplacement.com/",
    freelance: true,
  },
  {
    name: "mazi.game",
    description:
      "A crypto gambling platform built from scratch with NFT features, wallets, and Web3.js.",
    tags: ["Web3.js", "NFT", "Node.js", "Next.js"],
    url: "https://mazi.game/",
  },
  {
    name: "Tonsto",
    description:
      "Productivity web app built with Vanilla JavaScript, Bootstrap, HTML, and CSS.",
    tags: ["JavaScript", "Bootstrap", "HTML5", "CSS3"],
    url: "https://tonsto.com/",
  },
  {
    name: "Learna",
    description:
      "Revamped an existing learning platform using Tailwind CSS and Handlebars.",
    tags: ["Tailwind CSS", "Handlebars", "Revamp"],
    url: "https://www.learna.ac.uk/",
  },
];

export const education = [
  {
    degree: "Bachelor's in Computer Application (BCA)",
    school: "MKICS, Bharuch, Gujarat",
    period: "May 2013 – April 2016",
  },
];

export const languages = ["English", "Hindi", "Malayalam"];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
