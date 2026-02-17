"use client";

import { navItems } from "@/data";


import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";
import Resolution from "@/components/Resolution";
import Package from "@/components/Package";
import Chronologie from "@/components/Chronologie";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import FAQ from "@/components/FAQ";
import PremiumFooter from "@/components/PremiumFooter";
import ProductSpecifications from "@/components/neofilm/ProductSpecifications";
import ViewingDistance from "@/components/neofilm/ViewingDistance";
import NeofilmHero from "@/components/neofilm/NeofilmHero";
import { getProductBySlug } from "@/data/products";

const NeofilmProduct = () => {
    const product = getProductBySlug('neofilm-adhesif');

    return (
        <main className="relative bg-[#030014] flex flex-col items-center overflow-hidden mx-auto w-full">
            <FloatingNav navItems={navItems} />

            <div className="max-w-7xl w-full px-5 sm:px-10">
                {/* 1. Hook Visuel */}
                <NeofilmHero />

                {/* 2. Pourquoi Nous ? (Anciennement Footer) */}
                <Footer />

                {/* 3. Grille de fonctionnalités */}
                <Grid />

                {/* 4. Choix de la Résolution */}
                <Resolution />

                {/* 5. Aide technique */}
                <ViewingDistance product={product} />

                {/* 6. Spécifications Détaillées */}
                <section id="specifications">
                    <ProductSpecifications />
                </section>

                {/* 7. Preuve Sociale */}
                <RecentProjects />
                <Clients />

                {/* 9. Offre Commerciale */}
                <Package />

                {/* 10. Chronologie */}
                {/* Removed - Moved to Neofilm Adhesif Experience */}

                {/* 11. FAQ */}
                <FAQ />
            </div>

            <div className="w-full mt-20">
                <PremiumFooter hideAnimation={true} />
            </div>
        </main>
    );
};

export default NeofilmProduct;
