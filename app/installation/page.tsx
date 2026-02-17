import type { Metadata } from "next";
import InstallationHero from "@/components/installation/InstallationHero";
import InstallationSteps from "@/components/installation/InstallationSteps";
import InstallationFAQ from "@/components/installation/InstallationFAQ";
import InstallationCTA from "@/components/installation/InstallationCTA";
import RelatedProducts from "@/components/neofilm/RelatedProducts";

export const metadata: Metadata = {
    title: "Installation & Intégration Écrans LED | Neofilm",
    description: "Expertise technique et déploiement sur mesure. Découvrez notre processus complet d'installation d'écrans LED transparents et murs vidéo, de l'audit à la maintenance.",
    keywords: ["installation écran led", "intégrateur led france", "pose mur led", "maintenance écran géant", "audit technique led"],
    openGraph: {
        title: "Installation & Intégration Écrans LED | Neofilm",
        description: "Expertise technique et déploiement sur mesure partout en France et en Europe.",
        images: ["/installation-hero.jpg"], // Ensure appropriate OG image
    }
};

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import SideNavigation from "@/components/home/SideNavigation";
import LedScrollProgress from "@/components/home/LedScrollProgress";
import { SchemaOrg } from "@/components/shared/SchemaOrg";
import dynamic from "next/dynamic";

const InstallationMap = dynamic(
    () => import("@/components/installation/InstallationMap"),
    { ssr: false }
);

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Installation & Intégration Écrans LED",
    "description": "Expertise technique et déploiement sur mesure d'écrans LED professionnels, du film adhésif transparent aux murs LED géants.",
    "provider": {
        "@type": "Organization",
        "name": "NEOFÍLM LED",
        "url": "https://neofilmled.com"
    },
    "areaServed": {
        "@type": "Country",
        "name": "France"
    },
    "serviceType": "Installation d'écrans LED professionnels"
};

const installationSections = [
    { id: "hero", label: "Introduction" },
    { id: "process", label: "Processus" },
    { id: "faq", label: "Questions" },
];

export default function InstallationPage() {
    return (
        <main className="bg-[#030014] min-h-screen text-white relative">
            <SchemaOrg schema={serviceSchema} />
            <FloatingNav navItems={navItems} />
            <SideNavigation items={installationSections} />
            <LedScrollProgress />

            <section id="hero">
                <InstallationHero />
            </section>

            <section id="process">
                <InstallationSteps />
            </section>



            <section id="faq">
                <InstallationFAQ />
            </section>

            <InstallationCTA />
            <RelatedProducts currentProductSlug="installation" />
            <PremiumFooter />
        </main>
    );
}
