import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import Values from "@/components/about/Values";
import KeyNumbers from "@/components/about/KeyNumbers";
import AboutCTA from "@/components/about/AboutCTA";
import PremiumFooter from "@/components/PremiumFooter";
import { SchemaOrg, organizationSchema } from "@/components/shared/SchemaOrg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "À Propos de NEOFÍLM LED | Fabricant & Intégrateur LED Français",
    description: "Qui sommes-nous ? NEOFÍLM LED réinvente l'espace urbain et commercial grâce à la lumière. +10 ans d'expertise en affichage dynamique et solutions LED transparentes. Un accompagnement de la conception à l'installation.",
    keywords: "entreprise led france, fabricant écran led, intégrateur solution affichage, histoire neofilm, expert led paris, agence communication visuelle led, installation écran géant france",
    alternates: {
        canonical: "https://neofilmled.com/a-propos"
    }
};

import SideNavigation from "@/components/home/SideNavigation";
import LedScrollProgress from "@/components/home/LedScrollProgress";

const aboutSections = [
    { id: "hero", label: "Vision" },
    { id: "mission", label: "Notre Mission" },
    { id: "values", label: "Nos Valeurs" },
    { id: "stats", label: "Chiffres Clés" },
];

const AboutPage = () => {
    return (
        <>
            <SchemaOrg schema={organizationSchema} />
            <main className="relative bg-[#030014] flex flex-col items-center overflow-hidden mx-auto w-full">
                <FloatingNav navItems={navItems} />
                <SideNavigation items={aboutSections} />
                <LedScrollProgress />

                {/* 1. Hero - Full Width */}
                <section id="hero" className="w-full">
                    <AboutHero />
                </section>

                {/* 2. Content Sections - Managed locally for full-width backgrounds */}
                <div className="w-full">
                    <section id="mission">
                        <AboutMission />
                    </section>

                    <section id="values">
                        <Values />
                    </section>

                    <section id="stats">
                        <KeyNumbers />
                    </section>

                    <AboutCTA />
                </div>

                <div className="w-full">
                    <PremiumFooter />
                </div>
            </main>
        </>
    );
};

export default AboutPage;
