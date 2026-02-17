import type { Metadata } from "next";
import { Inter, Outfit, Syne, Orbitron } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import Preloader from "@/components/shared/Preloader";
import ScrollProvider from "@/components/ScrollProvider";
import { SchemaOrg, organizationSchema } from "@/components/shared/SchemaOrg";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", display: "swap" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "NEOFILM LED | Leader Français de l'Affichage LED Transparent & Dynamique",
    template: "%s | NEOFÍLM LED France"
  },
  description: "Expert en solutions LED professionnelles : Film transparent adhésif, rideaux LED, écrans flexibles et totems portables. Transformez vos vitrines et espaces commerciaux avec NEOFÍLM LED. Devis 24h.",
  keywords: ["écran led transparent", "film led adhésif", "vitrine led", "affichage dynamique", "mur led intérieur", "écran géant led", "neofilm led", "kakemono digital", "totem led", "signalétique digitale paris"],
  authors: [{ name: "NEOFILM LED" }, { name: "OTIKA AGENCE DIGITALE", url: "https://otika.fr" }],
  creator: "OTIKA AGENCE DIGITALE",
  publisher: "NEOFILM LED",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://neofilmled.com'),
  openGraph: {
    title: "NEOFILM LED | L'Excellence de l'Affichage LED Transparent",
    description: "Solutions d'affichage LED ultra-innovantes pour vitrines et retail. Transparence, luminosité et impact visuel garanti. Découvrez nos solutions.",
    url: 'https://neofilmled.com',
    siteName: 'NEOFÍLM LED',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/logoneofilm.png', // Ensure this is a high-quality OG image if possible
        width: 1200,
        height: 630,
        alt: 'NEOFILM LED - Solutions d\'Affichage Transparent',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NEOFILM LED | Leader Français de l'Affichage LED",
    description: "Transformez vos espaces avec nos films LED transparents et écrans dynamiques. Innovation visuelle garantie.",
    images: ['/logoneofilm.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Keep placeholder until provided
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/iconneofilm.webp" sizes="any" />

        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <SchemaOrg schema={organizationSchema} />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${syne.variable} ${orbitron.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Preloader />
          <ScrollProvider>
            {children}
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
