"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Building2, Store, Hotel, Briefcase, X, ArrowRight, Plus } from "lucide-react";
import { ProductSectorConfig } from "@/data/sectorData";

interface SectorSimulatorProps {
    product: any;
    sectorConfig?: ProductSectorConfig;
}

const SectorSimulator: React.FC<SectorSimulatorProps> = ({ product, sectorConfig }) => {
    const isRideau = product.slug === 'rideau-led-transparent';

    const sectors = React.useMemo(() => {
        // If sectorConfig is provided, use it directly
        if (sectorConfig) {
            return sectorConfig.sectors;
        }

        // Otherwise, fall back to legacy hardcoded logic for backward compatibility
        const isTransparent = product.category === 'transparent';
        const isDynamisation = product.category === 'dynamisation';
        const isPortable = product.category === 'portable';

        // Base content depending on category
        let sectorData = {
            retail: {
                label: "Retail & Luxe",
                title: "Vitrines Vivantes & Attraction Flux",
                description: `Transformez vos espaces en aimants visuels. Le ${product.name} capte l'attention des passants avec un impact maximal.`,
                analysis: `Dans le secteur du retail, l'impact visuel est clé. Le ${product.name} permet de diffuser des campagnes dynamiques haute résolution qui convertissent le trafic en clients.`,
                benefits: [
                    "Augmentation du trafic en point de vente",
                    "Expérience client immersive et moderne",
                    "Mise en avant dynamique des promotions",
                    "Installation adaptée à l'agencement"
                ],
                stats: [
                    { label: "Trafic", value: "+40%" },
                    { label: "Ventes", value: "+25%" },
                    { label: "Attention", value: "x5" }
                ],
                image: "/Neofilm - film transparent led vitrines -Retail  Luxe.jpg"
            },
            malls: {
                label: "Centres Commerciaux",
                title: "Expérience & Monétisation",
                description: "Digitalisez vos espaces communs et créez des supports publicitaires premium à haute valeur ajoutée.",
                analysis: `Les espaces commerciaux cherchent à maximiser chaque m². Le ${product.name} transforme les zones passantes en inventaire publicitaire premium ou en support d'information dynamique.`,
                benefits: [
                    "Nouveau revenu publicitaire (DOOH)",
                    "Signalétique événementielle impactante",
                    "Modernisation de l'image du centre",
                    "Gestion de contenu centralisée"
                ],
                stats: [
                    { label: "Revenus", value: "+30%" },
                    { label: "Impact", value: "Fort" },
                    { label: "ROI", value: "Rapide" }
                ],
                image: "/Neofilm - affichage transparent vitrine led.jpg"
            },
            corporate: {
                label: "Corporate & Events",
                title: "Communication & Branding",
                description: "Redéfinissez vos espaces de travail et événements avec des supports digitaux innovants.",
                analysis: `La communication corporate doit être flexible et inspirante. Le ${product.name} permet d'afficher l'identité de marque ou des informations en temps réel avec une qualité d'image exceptionnelle.`,
                benefits: [
                    "Support de communication innovant",
                    "Effet 'Whaou' garanti sur les visiteurs",
                    "Adaptabilité aux différents contenus",
                    "Installation rapide et esthétique"
                ],
                stats: [
                    { label: "Image", value: "Top" },
                    { label: "Engagement", value: "Fort" },
                    { label: "Setup", value: "Facile" }
                ],
                image: "/Neofilm led - Film transfarent vitrophanie bureau led.jpg"
            },
            hospitality: {
                label: "Hôtellerie & Loisirs",
                title: "Ambiance & Divertissement",
                description: "Émerveillez vos hôtes dès leur arrivée. Intégrez l'art numérique pour une expérience inoubliable.",
                analysis: `Dans l'hôtellerie et les loisirs, l'émotion prime. Le ${product.name} permet de transformer un espace en une toile numérique géante, diffusant de l'art digital ou des informations pratiques.`,
                benefits: [
                    "Différenciation par l'innovation visuelle",
                    "Création d'ambiances évolutives",
                    "Expérience client mémorable",
                    "Support polyvalent (Art/Info/Pub)"
                ],
                stats: [
                    { label: "Satisfaction", value: "+++" },
                    { label: "Ambiance", value: "Unique" },
                    { label: "Souvenir", value: "Fort" }
                ],
                image: "/barneofilm.jpg"
            }
        };

        // Specific overrides for Neofilm and Rideau (keep existing specific content)
        if (product.slug === 'rideau-led-transparent') {
            sectorData = {
                retail: {
                    label: "Showrooms Auto",
                    title: "Expérience Immersive & Dynamisation Showroom",
                    description: "Exploitez vos surfaces vitrées pour mettre en avant vos derniers modèles. Transformez vos vitrines et intérieurs en supports de communication immersifs.",
                    analysis: "Les concessions automobiles disposent de vastes surfaces vitrées souvent inexploitées. Le Rideau LED permet de dynamiser ces espaces pour créer une expérience client immersive. Que ce soit sur les vitrines extérieures pour capter le flux des axes passants ou à l'intérieur pour sublimer un lancement, la gestion multisites à distance assure une communication cohérente sur tout votre réseau. C'est une solution économique qui supprime les coûts d'impression tout en offrant un impact visuel inégalé avec une consommation d'énergie réduite.",
                    benefits: [
                        "Visibilité maximale sur axes très passants",
                        "Gestion de contenu multisites à distance",
                        "Impact visuel fort (Luminescence réglable)",
                        "Consommation réduite (Technologie LED)"
                    ],
                    stats: [
                        { label: "Attractivité", value: "+55%" },
                        { label: "Économie Print", value: "100%" },
                        { label: "Consommation", value: "-60%" }
                    ],
                    image: "/auto-showroom-1.jpg"
                },
                malls: {
                    label: "Vitrines de Pharmacie",
                    title: "Monétisation & Officine Digitale",
                    description: "Générez des revenus publicitaires. Remplacez les vitrophanies statiques par un support digital monétisable auprès des marques partenaires.",
                    analysis: "Pour cette officine située à Antibes dans le sud de la France, nous avons remplacé les affichages papier par un Rideau LED. Le pharmacien peut désormais vendre de la diffusion publicitaire aux marques de cosmétiques et parapharmacie, transformant sa vitrine en centre de profit. La luminescence et la transparence sont réglables pour s'adapter à l'ensoleillement et préserver l'intimité intérieure.",
                    benefits: [
                        "Monétisation d'espace (Vente de publicité)",
                        "Fini la pose/dépose de vitrophanies coûteuses",
                        "Luminescence et transparence réglables",
                        "Case Study : Pharmacie de l'Étoile (Antibes)"
                    ],
                    stats: [
                        { label: "Revenus Pub", value: "+25%" },
                        { label: "Gain de Temps", value: "Optimum" },
                        { label: "Transparence", value: "Orientable" }
                    ],
                    image: "/pharmacie-etoile-1.jpg"
                },
                corporate: {
                    label: "Coworking & Cinéma",
                    title: "Espaces Modulables & Immersifs",
                    description: "Créez des séparations dynamiques. Idéal pour les espaces de coworking flexibles ou pour l'affichage de films et bandes-annonces.",
                    analysis: "Les espaces hybrides demandent de la flexibilité. Le Rideau LED permet de créer des cloisons visuelles qui peuvent devenir transparentes ou opaques (avec contenu) instantanément. Parfait pour transformer un open space en salle de projection privée.",
                    benefits: [
                        "Séparation d'espace sans construction lourde",
                        "Expérience cinéma immersive (noir profond)",
                        "Affichage de KPIs et communication interne temps réel",
                        "Modernisation radicale du parcours visiteur"
                    ],
                    stats: [
                        { label: "Confidentialité", value: "Ajustable" },
                        { label: "Immersion", value: "Totale" },
                        { label: "Installation", value: "Modulaire" }
                    ],
                    image: "/cinema-ice-1.jpg"
                },
                hospitality: {
                    label: "Studio YouTube",
                    title: "Décors Instantanés & Créatifs",
                    description: "Changez de décor en un clic. Plus besoin de constructions physiques coûteuses pour vos tournages et studios.",
                    analysis: "Pour les créateurs de contenu et studios TV, le temps c'est de l'argent. Le Rideau LED offre un fond dynamique ultra-lumineux qui ne scintille pas à la caméra (3840Hz). Passez d'un décor urbain à une ambiance abstraite en une seconde.",
                    benefits: [
                        "Wi-fi & Cloud : Changement de décor instantané",
                        "Pas de moiré à la caméra (Refresh élevé)",
                        "Économie sur la construction de décors physiques",
                        "Intégration parfaite aux façades architecturales"
                    ],
                    stats: [
                        { label: "Setup", value: "Instant" },
                        { label: "Rendu Caméra", value: "Pro" },
                        { label: "Coût Décors", value: "-80%" }
                    ],
                    image: "/NEOFILM LED -rideau transprent led - décors youtube.png"
                }
            };
        } else if (product.slug === 'mur-led-indoor') {
            // Specific images for mur-led-indoor (Bloc LED Rigide)
            sectorData.retail.image = "/bloc-rigide-retail-luxe.jpg";
            sectorData.malls.image = "/bloc-rigide-centres-commerciaux.jpg";
            sectorData.corporate.image = "/bloc-rigide-event.jpg";
            sectorData.hospitality.image = "/bloc-rigide-hotellerie.jpg";
        } else if (product.slug === 'ecran-flexible-led') {
            // Specific images for ecran-flexible-led (Écran Flexible LED)
            sectorData.retail.image = "/ecran-flexible-retail-luxe.jpg";
            sectorData.malls.image = "/ecran-flexible-centres-commerciaux.jpg";
            sectorData.corporate.image = "/ecran-flexible-corporate-event.jpg";
            sectorData.hospitality.image = "/ecran-flexible-hotellerie.jpg";
        } else if (isPortable) {
            // Adjustments for Portable products
            sectorData.retail.label = "Salons & Expos";
            sectorData.retail.description = "Démarquez-vous sur les salons avec un stand lumineux et dynamique.";
            sectorData.retail.benefits = ["Montage sans outils en 5 min", "Transport facile (Valise)", "Luminosité éclatante", "Attraction maximale"];

            sectorData.corporate.label = "Séminaires & Events";
            sectorData.corporate.description = "Animez vos conférences et séminaires avec un support visuel mobile haut de gamme.";

            sectorData.malls.label = "Pop-up Stores";
            sectorData.malls.description = "Créez une boutique éphémère impactante n'importe où en quelques minutes.";

            // Specific images for totem-led-rotatif (Kinetic LED Rotatif)
            if (product.slug === 'totem-led-rotatif') {
                sectorData.retail.image = "/TOTEM ROTATIF 360° - KINETIC LED - SALON EVENT 6 NEOFILM LED.png";
                sectorData.malls.image = "/Pop up store - totem led 360° - NEOFILM LED.png";
                sectorData.corporate.image = "/Conférence professionnelle avec colonnes numériques - Totem kinetic 360° - NEOFILM LED.png";
                sectorData.hospitality.image = "/Hotel - totem rotatif 360° LED - neofilm.png";
            } else if (product.slug === 'stand-led-roulant') {
                // Specific images for stand-led-roulant (Stand LED Roulant)
                sectorData.retail.image = "/stand-roulant-salon-expo.jpg";
                sectorData.malls.image = "/stand-roulant-popup-store.jpg";
                sectorData.corporate.image = "/stand-roulant-seminaire-event.jpg";
                sectorData.hospitality.image = "/stand-roulant-hotellerie-loisirs.jpg";
            } else if (product.slug === 'kakemono-led-portable-pliable') {
                // RETAIL -> Salons & Expos
                sectorData.retail.label = "Salons & Expos";
                sectorData.retail.title = "Stand Impactant & Visibilité";
                sectorData.retail.description = "Démarquez-vous instantanément sur les salons professionnels.";
                sectorData.retail.analysis = "Dans l'univers hyper-concurrentiel des salons, capter l'attention est vital. Le Kakemono LED remplace les roll-ups statiques par des vidéos dynamiques HD, attirant 5x plus de visiteurs sur votre stand.";
                sectorData.retail.image = "/ECRAN LED PLIABE salon et expo NEOFILM.png";
                sectorData.retail.benefits = ["Montage 30s chrono", "Visibilité à 20 mètres", "Contenu vidéo dynamique", "Transport valise inclus"];
                sectorData.retail.stats = [{ label: "Trafic", value: "+500%" }, { label: "Impact", value: "Max" }, { label: "Setup", value: "30sec" }];

                // MALLS -> Showrooms & Pop-up
                sectorData.malls.label = "Showrooms & Pop-up";
                sectorData.malls.title = "Boutique Éphémère Digitale";
                sectorData.malls.description = "Créez une expérience client immersive dans n'importe quel espace.";
                sectorData.malls.analysis = "Pour les pop-up stores et showrooms, l'agilité est clé. Le Kakemono LED permet de scénariser vos produits instantanément, diffusant des défilés, tutoriels ou ambiances de marque avec une qualité d'image exceptionnelle.";
                sectorData.malls.image = "/ECRAN LED PLIABE showroom NEOFILM.png";
                sectorData.malls.benefits = ["Scénographie instantanée", "Mise en avant produits", "Encombrement minimal", "Autonomie totale"];
                sectorData.malls.stats = [{ label: "Ventes", value: "+35%" }, { label: "Image", value: "Pro" }, { label: "Surface", value: "Minimale" }];

                // CORPORATE -> Séminaires & Events
                sectorData.corporate.label = "Séminaires & Events";
                sectorData.corporate.title = "Conférences Dynamiques";
                sectorData.corporate.description = "Professionnalisez vos présentations et accueillez vos invités en grand.";
                sectorData.corporate.analysis = "Le Kakemono LED rehausse l'image de vos événements corporate. Utilisé en signalétique d'accueil, plan de salle ou relais vidéo sur scène, il assure une communication fluide et premium auprès de vos collaborateurs et VIP.";
                sectorData.corporate.image = "/ECRAN LED PLIABE séminaire event NEOFILM.png";
                sectorData.corporate.benefits = ["Signalétique VIP", "Relais vidéo conférence", "Image de marque innovante", "Installation sans technicien"];
                sectorData.corporate.stats = [{ label: "Accueil", value: "Premium" }, { label: "Attention", value: "100%" }, { label: "Clarté", value: "HD" }];

                // HOSPITALITY -> Hôtellerie & Loisirs
                sectorData.hospitality.label = "Hôtellerie & Loisirs";
                sectorData.hospitality.title = "Accueil & Services Premium";
                sectorData.hospitality.description = "Sublimez votre lobby et informez vos clients en temps réel.";
                sectorData.hospitality.analysis = "L'hôtellerie de luxe adopte le Kakemono LED pour digitaliser l'accueil sans travaux. Idéal pour présenter le menu du restaurant, les soins du spa ou guider les séminaires, il apporte une touche technologique haut de gamme.";
                sectorData.hospitality.image = "/ECRAN LED PLIABE HOTEL 6 NEOFILM.png";
                sectorData.hospitality.benefits = ["Design élégant (Cadre Alu)", "Mise à jour instantanée (Wifi)", "Mobile (Roulettes)", "Silencieux (Fanless)"];
                sectorData.hospitality.stats = [{ label: "Attention", value: "Max" }, { label: "Image", value: "Premium" }, { label: "Ventes", value: "+20%" }];
            }
        } else if (product.slug === 'neofilm-adhesif') {
            // Specific overrides for Neofilm Adhesif Hospitality
            sectorData.hospitality.image = "/NEOFILM film transparent led adhésif.jpg";
            sectorData.hospitality.label = "Façades & Vitrines";
            sectorData.hospitality.title = "Façades Vitrées Dynamiques";
            sectorData.hospitality.description = "Transformez vos façades et vitrines en écrans LED haute définition. Le NEOFILM Adhésif sublime vos espaces avec une transparence exceptionnelle.";
            sectorData.hospitality.analysis = "Les façades vitrées représentent une opportunité unique de communication visuelle. Le NEOFILM Adhésif permet de transformer n'importe quelle surface vitrée en un écran LED haute définition tout en conservant une transparence de 85%, offrant ainsi une visibilité optimale de jour comme de nuit.";
        }

        return [
            {
                id: "retail",
                label: sectorData.retail.label,
                icon: ShoppingBag,
                color: "#CB52EE",
                title: sectorData.retail.title,
                description: sectorData.retail.description,
                fullAnalysis: sectorData.retail.analysis,
                benefits: sectorData.retail.benefits,
                stats: sectorData.retail.stats,
                image: sectorData.retail.image,
                images: product.slug === 'rideau-led-transparent' ? ["/auto-showroom-1.jpg", "/auto-showroom-2.png"] : undefined
            },
            {
                id: "malls",
                label: sectorData.malls.label,
                icon: Store,
                color: "#F35AFF",
                title: sectorData.malls.title,
                description: sectorData.malls.description,
                fullAnalysis: sectorData.malls.analysis,
                benefits: sectorData.malls.benefits,
                stats: sectorData.malls.stats,
                image: sectorData.malls.image,
                images: product.slug === 'rideau-led-transparent' ? ["/pharmacie-etoile-1.jpg", "/pharmacie-etoile-2.jpg"] : undefined
            },
            {
                id: "corporate",
                label: sectorData.corporate.label,
                icon: Building2,
                color: "#00D8FF",
                title: sectorData.corporate.title,
                description: sectorData.corporate.description,
                fullAnalysis: sectorData.corporate.analysis,
                benefits: sectorData.corporate.benefits,
                stats: sectorData.corporate.stats,
                image: sectorData.corporate.image,
                images: product.slug === 'rideau-led-transparent' ? ["/cinema-ice-1.jpg", "/cinema-ice-2.jpg", "/cinema-ice-3.jpg"] : undefined
            },
            {
                id: "hospitality",
                label: sectorData.hospitality.label,
                icon: Hotel,
                color: "#FFD700",
                title: sectorData.hospitality.title,
                description: sectorData.hospitality.description,
                fullAnalysis: sectorData.hospitality.analysis,
                benefits: sectorData.hospitality.benefits,
                stats: sectorData.hospitality.stats,
                image: sectorData.hospitality.image,
                images: product.slug === 'rideau-led-transparent'
                    ? ["/NEOFILM LED -rideau transprent led - décors youtube.png", "/youtube-studio-2.jpg"]
                    : product.slug === 'neofilm-adhesif'
                        ? [
                            "/NEOFILM film transparent led adhésif.jpg",
                            "/NEOFILM led - Vitrine dynamique transparente.jpg",
                            "/transparent-led-screen -NEOFILM LED.jpg",
                            "/Façade led transparent vidéo exterieur.png"
                        ]
                        : undefined
            }
        ];
    }, [product]);

    const [activeSectorId, setActiveSectorId] = useState("retail");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const activeSector = sectors.find(s => s.id === activeSectorId) || sectors[0];
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Image carousel logic for sectors with multiple images
    React.useEffect(() => {
        setCurrentImageIndex(0); // Reset index when sector changes

        if (activeSector.images && activeSector.images.length > 1) {
            const timer = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % activeSector.images!.length);
            }, 3000); // Change image every 3 seconds
            return () => clearInterval(timer);
        }
    }, [activeSectorId, activeSector.images]);

    return (
        <section id="secteurs" className="py-20 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#030014] -z-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#CB52EE]/20 to-transparent rounded-full blur-[100px] -z-10 opacity-30 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at center, ${product?.color || "#CB52EE"}30, transparent)` }} />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20 border-b border-white/5 pb-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 text-[#00D8FF] font-orbitron text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D8FF] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D8FF]"></span>
                            </span>
                            {sectorConfig?.badge || 'Expertise France - Innovation LED'}
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-2xl md:text-4xl lg:text-5xl font-black font-orbitron text-white leading-[1.2] tracking-tight mb-6"
                        >
                            {sectorConfig?.seoTitle ? (
                                sectorConfig.seoTitle.includes(':') ? (
                                    <>
                                        {sectorConfig.seoTitle.split(':')[0].trim()} <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] via-white to-[#00D8FF]" style={{ backgroundImage: `linear-gradient(to right, ${product?.color || "#CB52EE"}, #ffffff, #00D8FF)` }}>
                                            {sectorConfig.seoTitle.split(':')[1].trim()}
                                        </span>
                                    </>
                                ) : sectorConfig.seoTitle
                            ) : (
                                <>
                                    {product.slug === 'totem-led-rotatif' ? 'Animation &' : 'Vitrines &'} <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] via-white to-[#00D8FF]" style={{ backgroundImage: `linear-gradient(to right, ${product?.color || "#CB52EE"}, #ffffff, #00D8FF)` }}>
                                        {product.slug === 'kakemono-led-portable-pliable' ? 'SIGNALÉTIQUE MOBILE' :
                                            product.slug === 'totem-led-rotatif' ? '360° KINETIC' : 'MURS VIDÉO'}
                                    </span>
                                </>
                            )}
                        </motion.h2>
                        {sectorConfig?.subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-white/70 font-outfit text-base md:text-lg leading-relaxed max-w-3xl"
                            >
                                {sectorConfig.subtitle}
                            </motion.p>
                        )}
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-md text-left lg:text-right flex flex-col items-start lg:items-end"
                    >
                        {product.slug === 'kakemono-led-portable-pliable' ? (
                            <>
                                <div className="flex gap-6 md:gap-8 mb-8">
                                    <div className="flex flex-col items-start lg:items-end min-w-0">
                                        <p className="text-[10px] font-orbitron font-bold text-white/30 uppercase tracking-widest mb-1">Affichage</p>
                                        <p className="text-[13px] md:text-sm font-black text-[#F35AFF] font-orbitron uppercase border-l-2 lg:border-l-0 lg:border-r-2 border-[#CB52EE]/50 pl-3 lg:pl-0 lg:pr-3 whitespace-nowrap" style={{ borderColor: product?.color }}>LED Portable</p>
                                    </div>
                                    <div className="flex flex-col items-start lg:items-end min-w-0">
                                        <p className="text-[10px] font-orbitron font-bold text-white/30 uppercase tracking-widest mb-1">Installation</p>
                                        <p className="text-[13px] md:text-sm font-black text-white font-orbitron uppercase border-l-2 lg:border-l-0 lg:border-r-2 border-white/20 pl-3 lg:pl-0 lg:pr-3 whitespace-nowrap">30 Secondes</p>
                                    </div>
                                </div>
                                <p className="text-white/70 font-outfit text-sm md:text-base leading-relaxed">
                                    "Transformez instantanément n'importe quel espace en opportunité commerciale avec le Kakémono LED Pliable. Idéal pour vos salons professionnels, showrooms éphémères et points de vente, ce support lumineux autonome capte l'attention et sublime votre image de marque en haute définition."
                                </p>
                            </>
                        ) : (
                            <>
                                <div className="flex gap-6 md:gap-8 mb-8">
                                    <div className="flex flex-col items-start lg:items-end min-w-0">
                                        <p className="text-[10px] font-orbitron font-bold text-white/30 uppercase tracking-widest mb-1">Impact</p>
                                        <p className="text-[13px] md:text-sm font-black text-[#00D8FF] font-orbitron uppercase border-l-2 lg:border-l-0 lg:border-r-2 border-[#CB52EE]/50 pl-3 lg:pl-0 lg:pr-3 whitespace-nowrap" style={{ borderColor: product?.color }}>Spectaculaire</p>
                                    </div>
                                    <div className="flex flex-col items-start lg:items-end min-w-0">
                                        <p className="text-[10px] font-orbitron font-bold text-white/30 uppercase tracking-widest mb-1">Liberté</p>
                                        <p className="text-[13px] md:text-sm font-black text-white font-orbitron uppercase border-l-2 lg:border-l-0 lg:border-r-2 border-white/20 pl-3 lg:pl-0 lg:pr-3 whitespace-nowrap">Créative</p>
                                    </div>
                                </div>
                                <p className="text-white/50 font-outfit text-sm md:text-base leading-relaxed">
                                    {product.slug === 'totem-led-rotatif'
                                        ? `Créez une animation visuelle spectaculaire et captez l'attention sous tous les angles avec le ${product.name}. Idéal pour vos lancements de produits et showrooms.`
                                        : `Vous souhaitez habiller vos vitrines ou dynamiser vos espaces intérieurs pour accueillir vos clients dans un environnement époustouflant avec le ${product.name} ?`
                                    }
                                </p>
                            </>
                        )}
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Selector Panel */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {sectors.map((sector) => (
                            <motion.button
                                key={sector.id}
                                onClick={() => setActiveSectorId(sector.id)}
                                className={`group relative p-6 rounded-2xl text-left transition-all duration-300 border backdrop-blur-md overflow-hidden cursor-pointer
                                    ${activeSector.id === sector.id
                                        ? 'bg-gradient-to-r from-white/15 to-transparent border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]'
                                        : 'bg-black/20 border-white/5 hover:bg-white/5 hover:border-white/10'
                                    }
                                `}

                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className={`absolute inset-0 opacity-0 transition-opacity duration-300
                                    ${activeSector.id === sector.id ? 'opacity-20' : 'group-hover:opacity-10'}
                                `}
                                    style={{
                                        background: `linear-gradient(to right, ${sector.id === 'retail' ? product?.color || sector.color : sector.color}, transparent)`,
                                        borderLeft: activeSector.id === sector.id ? `4px solid ${sector.id === 'retail' ? product?.color || sector.color : sector.color}` : '4px solid transparent'
                                    }}
                                />

                                <div className="relative z-10 flex items-center gap-4">
                                    <div className={`p-3 rounded-lg transition-colors duration-300
                                        ${activeSector.id === sector.id ? 'bg-white/20' : 'bg-white/5 group-hover:bg-white/10'}
                                    `}>
                                        <sector.icon className={`w-6 h-6 transition-colors duration-300`}
                                            style={{ color: activeSector.id === sector.id ? '#fff' : (sector.id === 'retail' ? product?.color || sector.color : sector.color) }}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`font-orbitron font-bold text-lg transition-colors duration-300
                                            ${activeSector.id === sector.id ? 'text-white' : 'text-white/70 group-hover:text-white'}
                                        `}>
                                            {sector.label}
                                        </h3>
                                    </div>
                                    <ArrowRight className={`w-5 h-5 transition-all duration-300 
                                        ${activeSector.id === sector.id ? 'text-white translate-x-0 opacity-100' : 'text-white/20 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}
                                    `} />
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Preview Panel (Laptop/Window mockup) */}
                    <div className="lg:col-span-8 relative h-[450px] md:h-[600px] perspective-[2000px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSector.id}
                                initial={{ opacity: 0, rotateY: 10, x: 50 }}
                                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                                exit={{ opacity: 0, rotateY: -10, x: -50 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
                                onClick={() => setIsModalOpen(true)}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={activeSector.images ? activeSector.images[currentImageIndex] : activeSector.image}
                                        alt={activeSector.title}
                                        className={`w-full h-full object-cover transition-all duration-700 ease-in-out scale-[1.12] group-hover:scale-[1.18] ${isRideau && activeSector.id === 'hospitality'
                                            ? "brightness-[1.3] saturate-[1.8] contrast-[1.1] [filter:drop-shadow(0_0_35px_rgba(203,82,238,0.5))_drop-shadow(0_0_15px_rgba(0,216,255,0.4))]"
                                            : isRideau && activeSector.id === 'retail'
                                                ? "brightness-[1.15] contrast-[1.2] saturate-[1.4] [filter:drop-shadow(0_0_30px_rgba(0,216,255,0.4))_drop-shadow(0_0_15px_rgba(203,82,238,0.3))]"
                                                : product?.slug === 'neofilm-adhesif' && activeSector.id === 'hospitality'
                                                    ? "brightness-[1.2] saturate-[1.6] contrast-[1.15] [image-rendering:crisp-edges] [image-rendering:-webkit-optimize-contrast]"
                                                    : "brightness-[1.1] saturate-[1.3] contrast-[1.1] [image-rendering:crisp-edges]"
                                            }`}
                                    />
                                    {/* Stronger gradient overlay for better text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/60 to-transparent opacity-95" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#030014]/40 via-transparent to-[#030014]/40" />
                                </div>

                                {/* Content Overlay - Hover Triggered */}
                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                                    {/* Colored Blur Background - Only visible on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/95 via-[#030014]/70 to-transparent backdrop-blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                                        style={{
                                            background: `linear-gradient(to top, ${activeSector.id === 'retail' ? product?.color || activeSector.color : activeSector.color}15, ${activeSector.id === 'retail' ? product?.color || activeSector.color : activeSector.color}08, transparent)`
                                        }}
                                    />

                                    {/* Content - Fades in on hover */}
                                    <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10"
                                        >
                                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: activeSector.id === 'retail' ? product?.color || activeSector.color : activeSector.color }} />
                                            <span className="text-xs font-bold text-white uppercase tracking-wider">Cas Client</span>
                                        </motion.div>

                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-3xl md:text-5xl font-black font-orbitron text-white mb-4"
                                        >
                                            {activeSector.title.split('-')[0]}
                                        </motion.h3>

                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-white/95 font-outfit text-lg max-w-xl mb-8"
                                        >
                                            {activeSector.description}
                                        </motion.p>

                                        {/* Stats Row */}
                                        <div className="flex flex-wrap gap-8">
                                            {activeSector.stats.map((stat, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.5 + (idx * 0.1) }}
                                                    className="flex flex-col"
                                                >
                                                    <span className="text-3xl font-bold font-orbitron text-white" style={{ textShadow: `0 0 20px ${(activeSector.id === 'retail' ? product?.color || activeSector.color : activeSector.color)}40` }}>
                                                        {stat.value}
                                                    </span>
                                                    <span className="text-white/80 text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Button - Bottom Right - Minimalist Design */}
                                    <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 z-30 group/btn">
                                        <div className="relative flex items-center gap-4 pl-1 pr-5 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-lg transition-all duration-300 hover:bg-black/60 hover:border-white/20 hover:scale-105 cursor-pointer"
                                            onClick={() => setIsModalOpen(true)}
                                            style={{ borderColor: `${activeSector.color}40` }}
                                        >
                                            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 text-white">
                                                <Plus className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-90" />
                                            </div>
                                            <span className="text-sm font-bold font-orbitron text-white tracking-widest uppercase text-center pt-0.5">
                                                Analyse
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Modal Detail (Simplified Simulation) */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl"
                        onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false); }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            className="bg-[#030014] border border-white/10 w-full max-w-5xl rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative flex flex-col md:flex-row h-full max-h-[850px]"
                        >
                            {/* Decorative Grid BG */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-8 right-8 z-[210] p-4 rounded-full bg-white/5 text-white hover:bg-white/20 transition-all border border-white/10 hover:scale-110 active:scale-95"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Left Side: Visual & Stats - Increased width for better image visibility */}
                            <div className="md:w-[55%] h-[300px] md:h-full relative overflow-hidden group">
                                {/* Standard Image Display with Blurred Backbone for "Perfect Visualization" */}
                                <div className="absolute inset-0 bg-black/60" />

                                {/* Blurred Background Layer */}
                                <img
                                    src={activeSector.images ? activeSector.images[currentImageIndex] : activeSector.image}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-50 scale-110"
                                />

                                {/* Main Image - Perfectly Contained */}
                                <img
                                    src={activeSector.images ? activeSector.images[currentImageIndex] : activeSector.image}
                                    alt={activeSector.title}
                                    className="relative w-full h-full object-contain p-4 z-10 drop-shadow-2xl"
                                />

                                {/* Stats overlay styled for readability on any background */}

                                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3 z-20">
                                    {activeSector.stats.map((stat: any, idx: number) => (
                                        <div key={idx} className="bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl flex flex-col items-center justify-center text-center group/stat hover:bg-black/80 transition-colors">
                                            <span className="text-white/50 font-orbitron text-[9px] font-bold uppercase tracking-wider mb-1">{stat.label}</span>
                                            <span className="text-xl font-black font-orbitron text-white">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Content - Adjusted width */}
                            <div className="md:w-[45%] px-8 pb-20 pt-24 md:px-12 md:pb-28 overflow-y-auto relative flex flex-col scrollbar-hide bg-[#030014]/50 backdrop-blur-3xl">
                                <div className="mb-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                            <span className="text-[10px] font-black font-orbitron uppercase tracking-[0.3em] whitespace-nowrap" style={{ color: activeSector.color }}>Analyse Profonde</span>
                                        </div>
                                        <div className="w-px h-4 bg-white/10" />
                                        <span className="text-[10px] font-black font-orbitron text-white/30 uppercase tracking-[0.3em]">{activeSector.label}</span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-black font-orbitron text-white mb-8 leading-[1.2]">
                                        {activeSector.title}
                                    </h3>

                                    <p className="text-lg md:text-xl text-white/70 font-outfit leading-relaxed mb-10 italic border-l-4 pl-8" style={{ borderColor: activeSector.color }}>
                                        {activeSector.fullAnalysis}
                                    </p>
                                </div>

                                <div className="space-y-10">
                                    <div>
                                        <h4 className="text-white font-black font-orbitron uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
                                            <span className="w-8 h-px bg-white/20" />
                                            Bénéfices Stratégiques
                                        </h4>
                                        <ul className="space-y-5">
                                            {activeSector.benefits.map((benefit: string, idx: number) => (
                                                <li key={idx} className="flex items-start gap-4 text-white/80 group/item">
                                                    <div className="mt-1 w-5 h-5 rounded-lg border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-white/30 transition-colors">
                                                        <ArrowRight className="w-3 h-3 transition-transform group-hover/item:translate-x-0.5" style={{ color: activeSector.color }} />
                                                    </div>
                                                    <span className="font-outfit text-base md:text-lg leading-snug">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-10 flex flex-col md:flex-row items-center gap-6">
                                        <button
                                            onClick={() => {
                                                setIsModalOpen(false);
                                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className="w-full md:w-auto min-w-[240px] px-8 py-4 bg-white text-black font-black font-orbitron rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95 group relative overflow-hidden flex items-center justify-center gap-3 whitespace-nowrap"
                                        >
                                            <span className="relative z-10 text-base uppercase tracking-wider">{sectorConfig?.cta || 'Projet Similaire'}</span>
                                            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <p className="text-[10px] font-bold font-orbitron text-white/20 uppercase tracking-[0.2em] max-w-[200px] text-center md:text-left">
                                            Étude personnalisée gratuite sous 48h
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default SectorSimulator;
