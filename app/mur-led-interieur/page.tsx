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
    title: "Mur LED Intérieur | Écran Géant Modulaire Haute Résolution - NEOFÍLM",
    description: "Dynamisez vos espaces intérieurs avec nos Murs LED Haute Définition et Écrans Flexibles 360°. Solutions d'affichage digital pour centres commerciaux, boutiques et halls d'entreprise.",
    keywords: "mur led intérieur, écran led flexible, affichage dynamique magasin, mur d'images led, écran led courbe, digital signage, écran led modulaire",
    alternates: {
        canonical: "https://neofilmled.com/mur-led-interieur"
    },
    openGraph: {
        title: "Mur LED Intérieur | Écran Géant Modulaire Haute Résolution - NEOFÍLM",
        description: "Dynamisez vos espaces intérieurs avec nos Murs LED Haute Définition.",
        images: ["/ctrcommerciauxneofilm.png"],
        type: "website"
    }
};

const MurLEDInterieurPage = () => {
    const category = categories.dynamisation;
    const products = getProductsByCategory('dynamisation');

    const categorySchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Mur LED Intérieur",
        "description": category.description,
        "url": "https://neofilmled.com/mur-led-interieur",
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
                    "name": "Mur LED Intérieur"
                }
            ]
        }
    };

    const faqs = [
        {
            question: "Quel pitch choisir pour mon mur LED intérieur ?",
            answer: "Le pitch dépend de la distance de visionnage : P1.5 pour 1.5m+, P2 pour 2m+, P3 pour 3m+. Plus le pitch est fin, plus l'image est détaillée. Nous vous conseillons selon votre usage."
        },
        {
            question: "Quelle est la différence entre un mur LED et un écran flexible ?",
            answer: "Le mur LED est plat et modulaire (cabinets 500x500mm), idéal pour grandes surfaces. L'écran flexible peut épouser des formes courbes (colonnes, vagues) grâce à ses modules souples."
        },
        {
            question: "Peut-on gérer le contenu à distance ?",
            answer: "Oui ! Notre système de gestion Cloud permet de piloter tous vos écrans depuis une interface web. Programmation horaire, diffusion multi-sites, statistiques incluses."
        },
        {
            question: "Quelle résolution peut-on atteindre ?",
            answer: "Nos murs LED peuvent atteindre des résolutions 4K, 8K et au-delà selon la surface. Taux de rafraîchissement jusqu'à 7680Hz pour une image ultra-fluide."
        },
        {
            question: "Quelle est la consommation électrique d'un mur LED ?",
            answer: "Consommation moyenne de 50-80 W par cabinet (500x500mm), soit environ 200-320 W/m². Nos écrans sont éco-conçus pour minimiser l'impact énergétique."
        },
        {
            question: "Proposez-vous la location de murs LED ?",
            answer: "Oui, nous proposons la location pour événements ponctuels (salons, conférences, lancements). Installation, démontage et support technique inclus."
        }
    ];

    return (
        <>
            <SchemaOrg schema={categorySchema} />
            <FAQSchema faqs={faqs} />
            <main className="relative bg-black-100 flex flex-col w-full min-h-screen">
                <FloatingNav navItems={navItems} />

                <div className="w-full pt-32 pb-20 px-5 sm:px-10">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
                            {category.title}
                        </h1>
                        <p className="text-lg md:text-xl text-white-100 max-w-3xl">
                            {category.description}
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center flex-col w-full">
                    <div className="max-w-7xl w-full px-5 sm:px-10">
                        <div className="pb-10">
                            <Breadcrumb
                                items={[
                                    { label: "Mur LED Intérieur", href: "/mur-led-interieur" }
                                ]}
                            />
                        </div>

                        <CategorySection
                            category={category}
                            products={products}
                        />

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

export default MurLEDInterieurPage;
