"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, X, ChevronDown, MessageSquare, Sparkles, ShieldCheck, Zap, Network, Layout, Monitor, Move, Layers } from "lucide-react";
import { Product } from "@/data/products";
import Link from "next/link";
import { SchemaOrg } from "@/components/shared/SchemaOrg";

interface FAQItem {
    q: string;
    a: string;
    icon?: React.ReactNode;
}

interface ProductFAQProps {
    product: Product;
    isOpen: boolean;
    onClose: () => void;
}

const productFaqs: Record<string, FAQItem[]> = {
    "neofilm-adhesif": [
        {
            q: "Qu'est-ce que le film LED adhésif NEOFILM ?",
            a: "Le NEOFILM est un film mince et transparent intégrant des LED haute luminosité. Il se colle directement sur n'importe quel support en verre pour le transformer en écran vidéo sans masquer la lumière ni la vue.",
            icon: <Sparkles className="w-4 h-4" />
        },
        {
            q: "Comment s'installe le film LED sur une vitrine ?",
            a: "L'installation est simplifiée : il s'agit d'un adhésif technique. Une fois le verre nettoyé, on applique le film, on connecte les contrôleurs NEOHUB, et votre vitrine est prête. Nous proposons l'installation par nos experts ou l'accompagnement à distance.",
            icon: <Zap className="w-4 h-4" />
        },
        {
            q: "Quelle est la durée de vie de cette technologie ?",
            a: "Nos films LED sont conçus pour une utilisation intensive (24h/24) avec une durée de vie supérieure à 100 000 heures, soit plus de 10 ans en utilisation normale, tout en conservant leur éclat thermique.",
            icon: <ShieldCheck className="w-4 h-4" />
        },
        {
            q: "Peut-on voir à travers le film quand il est allumé ?",
            a: "Absolument. Avec une transparence allant jusqu'à 92%, l'effet est saisissant : les images semblent flotter dans l'air tandis que l'intérieur de votre boutique reste parfaitement visible.",
            icon: <MessageSquare className="w-4 h-4" />
        },
        {
            q: "Quelle luminosité pour une vitrine en plein soleil ?",
            a: "Le NEOFILM atteint jusqu'à 6000 nits, ce qui garantit une lisibilité parfaite même en plein soleil. Des capteurs intelligents peuvent ajuster automatiquement la luminosité pour économiser l'énergie la nuit.",
            icon: <Sparkles className="w-4 h-4" />
        },
        {
            q: "Quels types de contenus peut-on diffuser ?",
            a: "Tout type de contenu vidéo standard (MP4, MOV, etc.). Notre plateforme NEOHUB facilite la gestion de vos boucles publicitaires, que vous ayez un seul écran ou un parc national.",
            icon: <Zap className="w-4 h-4" />
        },
        {
            q: "Le logiciel de pilotage est-il payant ?",
            a: "Non, nous incluons gratuitement une suite logicielle complète. Elle vous permet de piloter vos écrans depuis un PC ou un smartphone, de programmer des horaires et de gérer vos playlists sans aucun surcoût.",
            icon: <ShieldCheck className="w-4 h-4" />
        },
        {
            q: "Quelles sont les options de connexion pour le NEOFILM ?",
            a: "Le système est extrêmement polyvalent : vous pouvez vous connecter via WiFi, 4G/5G (carte SIM intégrée), câble réseau RJ45 ou même utiliser une simple clé USB pour une diffusion autonome sans internet.",
            icon: <Network className="w-4 h-4" />
        }
    ],
    "rideau-led-transparent": [
        {
            q: "Quelle est la différence entre le Rideau LED et le Film Adhésif ?",
            a: "Le Rideau LED est une structure autoporteuse plus rigide, idéale pour de très grandes surfaces vitrées ou des installations suspendues, tandis que le Film Adhésif se colle directement sur le verre existant.",
            icon: <MessageSquare className="w-4 h-4" />
        },
        {
            q: "Quelle transparence offre ce système ?",
            a: "Le Rideau LED offre une transparence exceptionnelle de 60% à 80% grâce à sa conception en maille. Il laisse passer la lumière naturelle tout en diffusant des images haute résolution.",
            icon: <Sparkles className="w-4 h-4" />
        },
        {
            q: "Est-il visible en plein jour ?",
            a: "Avec une luminosité puissante de 4000 à 4500 nits, le contenu reste parfaitement visible même en plein soleil, surpassant les écrans standards.",
            icon: <Zap className="w-4 h-4" />
        },
        {
            q: "Le Rideau LED est-il modulable ?",
            a: "Oui, il est composé de panneaux qui s'assemblent pour créer des surfaces sur-mesure. Sa légèreté permet de couvrir des façades entières sans renfort structurel lourd.",
            icon: <Zap className="w-4 h-4" />
        },
        {
            q: "Est-il facile à maintenir ?",
            a: "Le design modulaire permet de remplacer une bande LED individuellement sans démonter tout l'écran, ce qui réduit considérablement les coûts et le temps de maintenance.",
            icon: <ShieldCheck className="w-4 h-4" />
        },
        {
            q: "Comment puis-je gérer mes contenus sur le Rideau LED ?",
            a: "Nous fournissons un logiciel intuitif (PC/Smartphone) permettant le glisser-déposer de vos médias. Vous pouvez programmer des diffusions à l'avance et créer des templates multi-fenêtrés très simplement.",
            icon: <Layout className="w-4 h-4" />
        },
        {
            q: "Peut-on piloter plusieurs Rideaux LED à distance ?",
            a: "Oui, notre solution Cloud permet de centraliser la gestion de plusieurs installations. Que vos écrans soient dans la même ville ou à l'autre bout du monde, vous gardez le contrôle total depuis une seule interface.",
            icon: <Monitor className="w-4 h-4" />
        }
    ],
    "stand-led-roulant": [
        {
            q: "Pourquoi choisir un Stand LED Roulant plutôt qu'un écran fixe ?",
            a: "La mobilité est sa force majeure. Monté sur roulettes haute résistance, il se déplace en quelques secondes. C'est l'outil idéal pour les espaces polyvalents, les showrooms et l'accueil événementiel.",
            icon: <Move className="w-4 h-4" />
        },
        {
            q: "Quelle est l'autonomie et la consommation de ce stand ?",
            a: "Le Stand LED Roulant intègre une technologie haute efficacité permettant une réduction de consommation de 30% par rapport aux solutions classiques, avec une alimentation standard 220V.",
            icon: <Zap className="w-4 h-4" />
        },
        {
            q: "Le stand est-il personnalisable en termes de forme ?",
            a: "Absolument. Sa conception modulaire permet de créer des formes irrégulières, des comptoirs courbes ou des angles complexes, s'adaptant parfaitement à votre architecture intérieure.",
            icon: <Layout className="w-4 h-4" />
        },
        {
            q: "Quelle est la qualité d'image en plein jour ?",
            a: "Avec une luminosité allant jusqu'à 1200 nits et un rafraîchissement de 3840Hz, l'image reste parfaitement fluide et éclatante, même sous un éclairage intérieur intense ou près de vitrines.",
            icon: <Monitor className="w-4 h-4" />
        },
        {
            q: "Est-il possible de diffuser du contenu interactif ?",
            a: "Oui, via nos contrôleurs NEOHUB, vous pouvez connecter des sources HDMI, utiliser le WiFi ou piloter le contenu à distance pour des interactions en temps réel avec vos clients.",
            icon: <Network className="w-4 h-4" />
        },
        {
            q: "L'assemblage entre les modules est-il visible ?",
            a: "Non. Grâce à un usinage de haute précision, les modules s'emboîtent sans jointure visible, offrant une surface d'affichage parfaitement continue et immersive.",
            icon: <Layers className="w-4 h-4" />
        }
    ],
    "kakemono-led-pliable": [
        {
            q: "Qu'est-ce qui rend le Kakémono LED 'pliable' ?",
            a: "Sa structure en aluminium moulé sous pression est articulée, permettant de replier l'écran pour un transport ultra-compact dans sa valise de protection sans risquer d'endommager la dalle HD.",
            icon: <Layers className="w-4 h-4" />
        },
        {
            q: "Quelle est la qualité d'affichage par rapport à un écran TV ?",
            a: "Avec une résolution FHD 3840*1250P et un contraste de 2000:1, la qualité dépasse les standards TV classiques. Sa technologie LED assure une luminosité de 1000 nits, idéale pour être vue sous les éclairages puissants des salons.",
            icon: <Monitor className="w-4 h-4" />
        },
        {
            q: "Est-il facile de changer le contenu affiché ?",
            a: "Absolument. Grâce au système de gestion de contenu (CMS) intégré et au processeur RK3288, vous pouvez envoyer vos vidéos et images via WiFi, clé USB, ou même piloter l'écran à distance via le Cloud.",
            icon: <Zap className="w-4 h-4" />
        },
        {
            q: "Quelles sont les options de montage possibles ?",
            a: "La polyvalence est maximale : il peut être utilisé en mode autoportant sur son pied, fixé au mur, suspendu au plafond pour un effet aérien, ou même magnétiquement sur des structures métalliques.",
            icon: <Layout className="w-4 h-4" />
        },
        {
            q: "Peut-on diffuser du contenu interactif ?",
            a: "Oui, le Kakémono supporte l'intégration de capteurs IoT, le comptage de personnes et peut même partager un point d'accès WiFi, transformant votre affichage en un véritable centre d'interaction.",
            icon: <Network className="w-4 h-4" />
        },
        {
            q: "Combien de temps prend l'installation sur un stand ?",
            a: "Moins de 5 minutes. Il suffit de sortir l'écran de sa valise, de le déplier (ou de le fixer) et de le brancher. Le système démarre instantanément avec vos boucles vidéo pré-chargées.",
            icon: <Zap className="w-4 h-4" />
        }
    ],
    "ecran-flexible-led": [
        {
            q: "Quelle est la courbure minimale possible avec cet écran ?",
            a: "Grâce à notre technologie de PCB ultra-souple, l'écran peut être courbé jusqu'à un rayon de 360°, permettant de créer des cylindres parfaits ou des vagues complexes sans aucune déformation de l'image.",
            icon: <Layers className="w-4 h-4" />
        },
        {
            q: "Peut-on installer l'écran flexible sur une colonne existante ?",
            a: "Oui, c'est l'un de ses usages principaux. Nous utilisons des structures de montage magnétiques ou sur-mesure qui s'adaptent au diamètre de votre colonne pour une intégration invisible.",
            icon: <Layout className="w-4 h-4" />
        },
        {
            q: "Le pilotage par le Cloud est-il sécurisé ?",
            a: "Absolument. Notre système CMS Cloud utilise des protocoles de sécurité bancaire pour garantir que vos contenus sont protégés et que vous seul pouvez gérer vos affichages à distance.",
            icon: <ShieldCheck className="w-4 h-4" />
        },
        {
            q: "Comment se passe la maintenance d'un écran courbe ?",
            a: "Chaque module de 320x160mm est indépendant. En cas de besoin, un module peut être remplacé par l'avant en quelques secondes sans avoir à démonter toute l'installation courbe.",
            icon: <Zap className="w-4 h-4" />
        },
        {
            q: "L'écran supporte-t-il les contenus 3D ?",
            a: "Oui, la fluidité exceptionnelle (3840Hz) et le contraste de 4000:1 permettent d'afficher des effets 3D anamorphiques saisissants qui épousent la courbure de l'écran pour un impact maximal.",
            icon: <Monitor className="w-4 h-4" />
        }
    ],
    "mur-led-indoor": [
        {
            q: "Quelle est la différence entre les cabinets 500x500 et 500x1000 ?",
            a: "Les deux formats sont conçus pour être parfaitement compatibles. Le cabinet 500x1000 permet une installation plus rapide pour les grands pans de murs, tandis que le 500x500 offre une modularité accrue pour les dimensions spécifiques.",
            icon: <Layers className="w-4 h-4" />
        },
        {
            q: "Quel pitch choisir pour un usage en studio TV ?",
            a: "Pour les plateaux TV, nous recommandons les modèles P1.56 ou P1.95. Un faible pitch associé à un rafraîchissement élevé (7680Hz) évite l'effet de moirage lors de la captation caméra.",
            icon: <Monitor className="w-4 h-4" />
        },
        {
            q: "Peut-on assurer la maintenance par l'avant de l'écran ?",
            a: "Oui, tous nos modules Série Pro supportent la maintenance frontale magnétique. Un technicien peut remplacer un module défectueux en moins de 30 secondes.",
            icon: <Zap className="w-4 h-4" />
        },
        {
            q: "Le mur LED est-il compatible avec une gestion Cloud ?",
            a: "Absolument. Nos solutions intègrent les contrôleurs NEOHUB compatibles Cloud, permettant de gérer vos contenus multisites depuis une seule interface web.",
            icon: <Monitor className="w-4 h-4" />
        },
        {
            q: "Pourquoi la configuration SMD1515 est-elle supérieure ?",
            a: "Le pixel SMD1515 offre un équilibre parfait entre stabilité et finesse. Sa structure garantit une uniformité de couleur exceptionnelle sur toute la surface, même à des angles de 140°.",
            icon: <ShieldCheck className="w-4 h-4" />
        }
    ]
};

const ProductFAQ: React.FC<ProductFAQProps> = ({ product, isOpen, onClose }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const faqs = productFaqs[product.slug] || [];

    // SEO Schema for FAQ
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <>
            <SchemaOrg schema={faqSchema} />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6 overflow-hidden"
                        onClick={onClose}
                    >
                        {/* Immersive Background Effects */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-20 blur-[150px]"
                                style={{
                                    background: `radial-gradient(circle at center, ${product.color} 0%, transparent 50%)`
                                }}
                            />
                            <div className="absolute inset-0 opacity-[0.03]"
                                style={{
                                    backgroundImage: `radial-gradient(${product.color} 1px, transparent 1px)`,
                                    backgroundSize: '40px 40px'
                                }}
                            />
                        </div>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.8 }}
                            className="bg-[#030014]/80 border border-white/10 w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] relative HUD-container"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Animated HUD Frame Decoration */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/20 rounded-tl-[2.5rem]" />
                                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-[2.5rem]" />
                                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-[2.5rem]" />
                                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-[2.5rem]" />

                                <motion.div
                                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none"
                                />
                            </div>

                            {/* Header */}
                            <div className="relative p-8 md:p-10 border-b border-white/10 bg-white/[0.02]">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CB52EE] to-transparent"
                                    style={{ backgroundImage: `linear-gradient(to right, transparent, ${product.color}, transparent)` }}
                                />

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-[#CB52EE]/20 blur-xl rounded-xl animate-pulse" style={{ backgroundColor: `${product.color}33` }} />
                                            <div className="relative p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-inner">
                                                <HelpCircle className="w-6 h-6" style={{ color: product.color }} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-black font-orbitron tracking-tighter text-white">
                                                FAQ <span style={{ color: product.color }}>EXPERT</span>
                                            </h3>
                                            <p className="text-white/40 font-orbitron text-[10px] uppercase tracking-[0.2em] font-bold">Base de connaissance NeoFilm</p>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={onClose}
                                        className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/10 hover:border-white/20 group"
                                    >
                                        <X className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                                    </motion.button>
                                </div>
                                <p className="text-white/60 font-outfit text-base md:text-lg leading-relaxed max-w-md">Tout ce qu'il faut savoir sur le <span className="text-white font-bold">{product.name}</span>.</p>
                            </div>

                            {/* FAQ List Content */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="p-6 md:p-8 max-h-[55vh] overflow-y-auto no-scrollbar relative"
                            >
                                <div className="space-y-4">
                                    {faqs.map((faq, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={itemVariants}
                                            className={`group rounded-2xl border transition-all duration-500 relative overflow-hidden ${activeIndex === idx
                                                ? 'bg-white/[0.08] border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.05)]'
                                                : 'bg-white/[0.03] border-white/5 hover:border-white/20 hover:bg-white/[0.05]'
                                                }`}
                                        >
                                            {/* Selection Highlight Glow */}
                                            {activeIndex === idx && (
                                                <motion.div
                                                    layoutId="faq-active-glow"
                                                    className="absolute inset-0 pointer-events-none opacity-20 blur-2xl"
                                                    style={{ backgroundColor: product.color }}
                                                />
                                            )}

                                            <button
                                                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                                className="w-full p-5 text-left flex items-start justify-between gap-6 relative z-10"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={`p-2 rounded-lg transition-all duration-500 ${activeIndex === idx ? 'bg-white/20 shadow-lg' : 'bg-white/5'}`} style={{ color: activeIndex === idx ? '#fff' : product.color }}>
                                                        {faq.icon || <Sparkles className="w-4 h-4" />}
                                                    </div>
                                                    <span className={`font-bold font-orbitron text-sm md:text-base leading-tight transition-all duration-500 ${activeIndex === idx ? 'text-white translate-x-1' : 'text-white/60 group-hover:text-white/80'}`}>
                                                        {faq.q}
                                                    </span>
                                                </div>
                                                <div className={`mt-1 p-1 rounded-full transition-all duration-500 ${activeIndex === idx ? 'rotate-180 bg-white/10' : 'text-white/20 group-hover:text-white/40'}`}>
                                                    <ChevronDown className="w-5 h-5" style={{ color: activeIndex === idx ? product.color : undefined }} />
                                                </div>
                                            </button>

                                            <AnimatePresence>
                                                {activeIndex === idx && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                        className="overflow-hidden relative z-10"
                                                    >
                                                        <div className="px-5 pb-6 pt-0 ml-14">
                                                            <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-4" />
                                                            <p className="text-white/70 font-outfit text-sm md:text-base leading-relaxed">
                                                                {faq.a}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Enhanced Footer Content */}
                            <div className="p-8 md:p-10 bg-white/[0.03] flex flex-col sm:flex-row items-center justify-between border-t border-white/10 gap-8 relative overflow-hidden">
                                {/* Ambient Glow behind footer */}
                                <div
                                    className="absolute -bottom-20 -left-20 w-60 h-60 opacity-10 blur-[80px] pointer-events-none"
                                    style={{ backgroundColor: product.color }}
                                />

                                <div className="flex items-center gap-5 relative z-10">
                                    <div className="group relative">
                                        <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr p-0.5 shadow-2xl transition-transform duration-500 group-hover:rotate-12"
                                            style={{ backgroundImage: `linear-gradient(to top right, ${product.color}, #00707E)` }}>
                                            <div className="w-full h-full rounded-[0.9rem] bg-[#030014] flex items-center justify-center overflow-hidden">
                                                <img src="/logoneofilm.png" alt="Neo" className="w-10 h-10 object-contain brightness-125" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-black font-orbitron text-white/30 uppercase tracking-[0.25em] mb-1">Expertise technique</p>
                                        <p className="text-sm font-bold text-white tracking-tight">Une question spécifique ? <br className="sm:hidden" /> <span className="text-white/60 font-medium">Nos conseillers vous répondent.</span></p>
                                    </div>
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative z-10 w-full sm:w-auto"
                                >
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 rounded-2xl font-black font-orbitron text-[11px] uppercase tracking-widest bg-white text-black hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300"
                                    >
                                        Contact Direct
                                        <Zap className="ml-2 w-4 h-4 fill-current" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProductFAQ;
