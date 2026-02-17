import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import HomeSpecificHero from "@/components/HomeSpecificHero";
import SideNavigation from "@/components/home/SideNavigation";
import LedScrollProgress from "@/components/home/LedScrollProgress";
import { SchemaOrg, organizationSchema } from "@/components/shared/SchemaOrg";
import dynamic from "next/dynamic";

// Above the fold - Direct import pour SEO et LCP
import TrustBanner from "@/components/home/TrustBanner";

// Below the fold - Lazy load avec loading states pour éviter CLS
const ProductsShowcase = dynamic(() => import("@/components/home/ProductsShowcase"), {
  ssr: false,
  loading: () => <div className="min-h-screen w-full" />
});
const CompanyPresentation = dynamic(() => import("@/components/home/CompanyPresentation"), {
  loading: () => <div className="min-h-[600px] w-full" />
});
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"), {
  loading: () => <div className="min-h-[600px] w-full" />
});
const PremiumFooter = dynamic(() => import("@/components/PremiumFooter"), {
  loading: () => <div className="min-h-[400px] w-full" />
});

export const metadata = {
  title: "NEOFILM LED | Affichage LED Transparent, Vitrine Digitale & Écrans Géants",
  description: "Leader français de l'affichage LED innovant. Spécialiste du film LED transparent adhésif pour vitrine, murs LED indoor et écrans géants portables. Transformez votre communication visuelle avec NEOFÍLM.",
  keywords: "affichage led transparent, film led vitrine, écran transparent adhésif, mur led intérieur, écran géant led, publicité digitale vitrine, neofilm led, signalétique lumineuse innovante, écran led souple, paris, france",
  alternates: {
    canonical: "https://neofilmled.com"
  },
  openGraph: {
    title: "NEOFILM LED | Affichage LED Transparent & Écrans Géants",
    description: "Transformez vos vitrines en écrans géants avec le film LED transparent NEOFÍLM. Leader français de l'innovation LED.",
    url: "https://neofilmled.com",
    siteName: "NEOFILM LED",
    images: [
      {
        url: "/transpaimg.png",
        width: 1200,
        height: 630,
        alt: "NEOFILM LED - Innovation Affichage Transparent"
      }
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEOFILM LED | L'Affichage Transparent Nouvelle Génération",
    description: "Découvrez nos solutions de films LED adhésifs et murs LED intérieurs.",
    images: ["/transpaimg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  }
};

const Home = () => {
  return (
    <>
      <SchemaOrg schema={organizationSchema} />
      <main className="relative bg-[#030014] flex flex-col items-center overflow-hidden mx-auto w-full">
        <FloatingNav navItems={navItems} />
        <SideNavigation />
        <LedScrollProgress />

        {/* 1. Hero Full Width */}
        <HomeSpecificHero />

        {/* 2. Trust Banner Full Width */}
        <TrustBanner />

        {/* 3. Company Presentation - First Content Section (Full Width Background) */}
        <CompanyPresentation />

        {/* 4. Home Page Interactive Sections (Full Width Backgrounds) */}
        <ProductsShowcase />
        <WhyChooseUs />

        {/* 5. Footer Full Width */}
        <div className="w-full">
          <PremiumFooter />
        </div>
      </main>
    </>
  );
};

export default Home;
