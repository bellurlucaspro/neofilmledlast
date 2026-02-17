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
    title: "Écran LED Portable | Kakémono, Totem & Stand Événementiel - NEOFÍLM",
    description: "Solutions LED nomades pour salons et événements. Totems rotatifs 360°, Kakémonos pliables et Stands LED roulants. Installation en 5 minutes. Soyez vu partout.",
    keywords: "écran led portable, kakémono led, totem led rotatif, stand led salon, affichage mobile événementiel, roll-up digital, plv dynamique",
    alternates: {
        canonical: "https://neofilmled.com/ecran-led-portable"
    },
    openGraph: {
        title: "Écran LED Portable | Kakémono, Totem & Stand Événementiel - NEOFÍLM",
        description: "Solutions LED nomades pour salons et événements.",
        images: ["/transpaimg.png"],
        type: "website"
    }
};

const EcranLEDPortablePage = () => {
    const category = categories.portable;
    const products = getProductsByCategory('portable');

    const categorySchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Écran LED Portable",
        "description": category.description,
        "url": "https://neofilmled.com/ecran-led-portable",
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
                    "name": "Écran LED Portable"
                }
            ]
        }
    };

    const faqs = [
        {
            question: "Combien de temps faut-il pour installer un kakémono LED ?",
            answer: "Moins de 5 minutes ! Nos kakémonos LED se déplient comme un roll-up classique. Aucun outil nécessaire, installation par une seule personne."
        },
        {
            question: "Peut-on louer un totem LED pour un événement ponctuel ?",
            answer: "Oui ! Nous proposons la location courte durée (1 jour à plusieurs semaines). Livraison, installation et récupération incluses. Idéal pour salons, lancements produits, pop-up stores."
        },
        {
            question: "Comment transporter un écran LED portable ?",
            answer: "Chaque produit est livré avec sa valise de transport rigide à roulettes. Dimensions optimisées pour le transport en voiture ou avion (soute)."
        },
        {
            question: "Le totem LED rotatif fonctionne-t-il sur batterie ?",
            answer: "Oui, option batterie disponible pour une autonomie de 4-6 heures. Idéal pour les événements outdoor ou sans accès électrique."
        },
        {
            question: "Peut-on personnaliser les formes du stand LED roulant ?",
            answer: "Absolument ! Notre stand LED modulaire s'adapte à vos besoins : comptoir d'accueil, DJ booth, bar lumineux, stand d'exposition. Formes courbes et angles possibles."
        },
        {
            question: "Quelle est la garantie sur les écrans LED portables ?",
            answer: "Garantie 2 ans pièces et main d'œuvre. Support technique 7j/7 pendant vos événements. SAV express avec pièces de rechange disponibles sous 24h."
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
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple mb-6">
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
                                    { label: "Écran LED Portable", href: "/ecran-led-portable" }
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

export default EcranLEDPortablePage;
