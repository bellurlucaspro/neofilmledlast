import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import CategorySection from "@/components/solutions/CategorySection";
import PremiumFooter from "@/components/PremiumFooter";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SchemaOrg } from "@/components/shared/SchemaOrg";
import { FAQSchema } from "@/components/seo/SchemaComponents";
import { Metadata } from "next";
import { categories, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
    title: "Film LED Transparent Vitrine | Écran Adhésif & Rideau - NEOFÍLM",
    description: "Transformez vos vitrines en écrans géants sans perdre la transparence. Découvrez nos films LED adhésifs et rideaux LED invisibles. La solution N°1 pour le retail de luxe et les showrooms.",
    keywords: "film led transparent, écran vitrine transparent, rideau led transparent, affichage led vitrine, neofilm adhésif, media mesh, vitrine digitale",
    alternates: {
        canonical: "https://neofilmled.com/film-led-transparent"
    },
    openGraph: {
        title: "Film LED Transparent Vitrine | Écran Adhésif & Rideau - NEOFÍLM",
        description: "Transformez vos vitrines en écrans géants sans perdre la transparence.",
        images: ["/filmbg.jpg"],
        type: "website"
    }
};

const FilmLEDTransparentPage = () => {
    const category = categories.transparent;
    const products = getProductsByCategory('transparent');

    // Category schema for SEO
    const categorySchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Film LED Transparent",
        "description": category.description,
        "url": "https://neofilmled.com/film-led-transparent",
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Accueil",
                    "item": "https://neofilmled.com"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Film LED Transparent"
                }
            ]
        }
    };

    const faqs = [
        {
            question: "Quelle est la différence entre le film adhésif et le rideau LED ?",
            answer: "Le film adhésif NEOFILM se colle directement sur le verre (installation rapide, transparence 85%), tandis que le rideau LED est une structure modulaire en aluminium (plus robuste, idéal pour grandes surfaces et façades)."
        },
        {
            question: "Peut-on voir à travers l'écran LED transparent ?",
            answer: "Oui ! Nos solutions conservent 70-85% de transparence. Vous pouvez voir vos produits en vitrine tout en diffusant du contenu vidéo. L'écran est quasi invisible lorsqu'il est éteint."
        },
        {
            question: "Quelle est la durée de vie d'un film LED transparent ?",
            answer: "Nos films LED ont une durée de vie de 100 000 heures, soit environ 11 ans en utilisation continue 24/7. Garantie 2 ans incluse."
        },
        {
            question: "Quelle consommation électrique ?",
            answer: "Le NEOFILM Adhésif consomme en moyenne 300 W/m² (pic à 800 W/m²). Notre système de luminosité auto-adaptative optimise la consommation selon l'heure de la journée."
        },
        {
            question: "Peut-on installer un film LED sur du verre teinté ?",
            answer: "Oui, mais la transparence sera réduite en fonction du taux de teinte du verre. Nous recommandons une étude préalable pour valider la faisabilité."
        },
        {
            question: "Proposez-vous l'installation partout en France ?",
            answer: "Oui, nous intervenons partout en France et en Europe. Notre équipe technique assure l'installation, la mise en service et la formation."
        }
    ];

    return (
        <>
            <SchemaOrg schema={categorySchema} />
            <FAQSchema faqs={faqs} />
            <main className="relative bg-black-100 flex flex-col w-full min-h-screen">
                <FloatingNav navItems={navItems} />

                {/* Hero Section */}
                <div className="w-full pt-32 pb-20 px-5 sm:px-10">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple to-blue-500 mb-6">
                            {category.title}
                        </h1>
                        <p className="text-lg md:text-xl text-white-100 max-w-3xl">
                            {category.description}
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex justify-center items-center flex-col w-full">
                    <div className="max-w-7xl w-full px-5 sm:px-10">
                        {/* Breadcrumb */}
                        <div className="pb-10">
                            <Breadcrumb
                                items={[
                                    { label: "Film LED Transparent", href: "/film-led-transparent" }
                                ]}
                            />
                        </div>

                        {/* Products */}
                        <CategorySection
                            category={category}
                            products={products}
                        />

                        {/* FAQ Section */}
                        <div className="mt-20 mb-20">
                            <h2 className="text-3xl font-bold text-white mb-10">
                                Questions Fréquentes
                            </h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-black-200 p-6 rounded-lg border border-white/10">
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            {faq.question}
                                        </h3>
                                        <p className="text-white-100">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <PremiumFooter />
                </div>
            </main >
        </>
    );
};

export default FilmLEDTransparentPage;
