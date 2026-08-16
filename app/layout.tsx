import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n/language-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { FULL_NAME, SITE_URL, contact } from "@/lib/data/contact";

const title = `${FULL_NAME} - Junior Software Developer`;
const description =
  "Portefólio de Guilherme Ribeiro, Junior Software Developer no Porto, especializado em React, Next.js e TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s - ${FULL_NAME}`,
  },
  description,
  keywords: ["Guilherme Ribeiro", "Junior Software Developer", "React", "Next.js", "TypeScript", "Porto", "Portfolio"],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  alternates: {
    canonical: SITE_URL,
    languages: {
      "pt-PT": SITE_URL,
      en: SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: title,
    title,
    description,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: FULL_NAME,
  jobTitle: "Junior Software Developer",
  url: SITE_URL,
  email: `mailto:${contact.email}`,
  sameAs: [contact.githubUrl, contact.linkedinUrl],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Porto",
    addressCountry: "PT",
  },
  knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "Supabase"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-PT" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
