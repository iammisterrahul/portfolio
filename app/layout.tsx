import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile, siteConfig, skills } from "./data/resume";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const titleDefault = `${profile.name} — ${profile.title}`;
const description = `Portfolio of ${profile.name}, a ${profile.title} with 5+ years building scalable web apps in React.js, Next.js, TypeScript and Web3. Explore projects, experience and skills.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: titleDefault,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: siteConfig.name,
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  keywords: [
    profile.name,
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Fullstack Developer",
    "Web3 Developer",
    "TypeScript",
    "React.js",
    "Node.js",
    "Blockchain Developer",
    "Portfolio",
    "Kerala",
    "India",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: titleDefault,
    description,
    locale: siteConfig.locale,
    firstName: "Rahul",
    lastName: "Rajan",
    username: "rahul-rajan117",
    // opengraph-image.tsx is picked up automatically for the image.
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description,
    creator: "@rahulrajan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#08080c" },
  ],
  width: "device-width",
  initialScale: 1,
};

// JSON-LD structured data (Person + WebSite) for rich results.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: profile.name,
      jobTitle: profile.title,
      description: profile.summary,
      url: siteConfig.url,
      image: `${siteConfig.url}${profile.photo}`,
      email: `mailto:${profile.email}`,
      telephone: profile.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: profile.city,
        addressRegion: profile.region,
        addressCountry: profile.country,
      },
      sameAs: [profile.linkedin],
      knowsAbout: skills.flatMap((group) => group.items),
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description,
      inLanguage: "en",
      publisher: { "@id": `${siteConfig.url}/#person` },
    },
  ],
};

// Set the theme class before paint to avoid a flash of the wrong theme.
const themeInit = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark' : true;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
