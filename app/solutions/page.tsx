import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsNav from "@/components/solutions/SolutionsNav";
import CategorySection from "@/components/solutions/CategorySection";
import ComparisonTable from "@/components/solutions/ComparisonTable";
import UseCases from "@/components/solutions/UseCases";
import SolutionsFAQ from "@/components/solutions/SolutionsFAQ";
import PremiumFooter from "@/components/PremiumFooter";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SchemaOrg, organizationSchema } from "@/components/shared/SchemaOrg";
import { Metadata } from "next";
import { categories, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
    title: "Solutions Écrans LED Professionnels | Gamme Complète NEOFÍLM France",
    description: "Catalogue complet de solutions d'affichage LED : Films Transparents, Rideaux Mesh, Murs LED Indoor, Écrans Flexibles et Totems Portables. Technologies de pointe pour une communication visuelle sans limite.",
    keywords: "solutions led, catalogue écran led, comparatif affichage dynamique, gamme neofilm, prix écran led pro, fournisseur écran géant, technologie led transparente, écran led sur mesure",
    alternates: {
        canonical: "https://neofilmled.com/solutions"
    }
};

const SolutionsPage = () => {
    // Get products for each category
    const transparentProducts = getProductsByCategory('transparent');
    const dynamisationProducts = getProductsByCategory('dynamisation');
    const portableProducts = getProductsByCategory('portable');

    return (
        <>
            <SchemaOrg schema={organizationSchema} />
            <main className="relative bg-black-100 flex flex-col w-full min-h-screen">
                <FloatingNav navItems={navItems} />
                <SolutionsNav />

                {/* Hero Section - Full Width */}
                <div className="w-full">
                    <SolutionsHero />
                </div>

                {/* Content Section - Centered */}
                <div className="flex justify-center items-center flex-col w-full">
                    <div className="max-w-7xl w-full px-5 sm:px-10">
                        {/* Breadcrumb */}
                        <div className="pt-10 pb-5">
                            <Breadcrumb
                                items={[
                                    { label: "Solutions LED", href: "/solutions" }
                                ]}
                            />
                        </div>

                        {/* Category Sections */}
                        <CategorySection
                            category={categories.transparent}
                            products={transparentProducts}
                        />

                        <CategorySection
                            category={categories.dynamisation}
                            products={dynamisationProducts}
                        />

                        <CategorySection
                            category={categories.portable}
                            products={portableProducts}
                        />

                        {/* Additional Sections */}
                        <ComparisonTable />
                        <UseCases />
                        <SolutionsFAQ />
                    </div>
                </div>

                <div className="w-full">
                    <PremiumFooter />
                </div>
            </main>
        </>
    );
};

export default SolutionsPage;
