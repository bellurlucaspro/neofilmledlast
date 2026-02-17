"use client";

import React from "react";
import { motion } from "framer-motion";
import { Store, Calendar, Building2, Hotel, Plane, Theater, ArrowRight } from "lucide-react";

const useCases = [
    {
        sector: "Retail & Commerce",
        icon: Store,
        description: "Transformez vos vitrines en supports publicitaires dynamiques. Attirez l'attention des passants avec des contenus vidéo percutants tout en conservant la visibilité de vos produits.",
        applications: ["Vitrines de magasins", "Centres commerciaux", "Boutiques de luxe", "Pop-up stores"],
        solution: "Film LED Adhésif"
    },
    {
        sector: "Événementiel & Salons",
        icon: Calendar,
        description: "Capturez l'attention sur vos stands de salon. Nos kakémonos LED pliables offrent une signalétique dynamique, ultra-lumineuse et transportable pour un impact immédiat.",
        applications: ["Salons professionnels", "Expositions", "Congrès", "Lancements de produits"],
        solution: "Solutions Salons"
    },
    {
        sector: "Corporate & Bureaux",
        icon: Building2,
        description: "Modernisez votre communication interne et externe. Halls d'accueil, salles de réunion, espaces collaboratifs : diffusez vos messages avec impact.",
        applications: ["Halls d'entrée", "Salles de réunion", "Espaces collaboratifs", "Cafétérias"],
        solution: "Indoor"
    },
    {
        sector: "Hôtellerie & Restauration",
        icon: Hotel,
        description: "Sublimez l'expérience client avec des écrans LED élégants. Menus digitaux, ambiances lumineuses, informations pratiques : alliez esthétique et fonctionnalité.",
        applications: ["Réceptions d'hôtels", "Restaurants", "Bars & lounges", "Spas"],
        solution: "Indoor"
    },
    {
        sector: "Transport & Mobilité",
        icon: Plane,
        description: "Informez et orientez les flux de voyageurs avec efficacité. Nos solutions LED haute résolution garantissent une lisibilité parfaite des informations en temps réel.",
        applications: ["Halls d'aéroports", "Gares ferroviaires", "Stations de métro", "Parkings couverts"],
        solution: "Dynamisation d'Espace"
    },
    {
        sector: "Culture & Spectacle",
        icon: Theater,
        description: "Créez des décors numériques spectaculaires. Théâtres, musées, galeries d'art : intégrez la technologie LED pour des expériences culturelles innovantes.",
        applications: ["Théâtres", "Musées", "Galeries d'art", "Cinémas"],
        solution: "Indoor"
    }
];

const UseCases = () => {
    return (
        <section className="py-24 relative overflow-hidden">


            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white">
                        Cas d'Usage par <span className="text-[#CB52EE]">Secteur</span>
                    </h2>
                    <p className="text-white/60 text-lg font-outfit max-w-2xl mx-auto">
                        Nos solutions LED s'adaptent à chaque industrie pour créer des expériences visuelles uniques.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {useCases.map((useCase, index) => {
                        const Icon = useCase.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-1 border border-white/10 hover:border-[#CB52EE]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(203,82,238,0.15)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="bg-[#050511] rounded-[22px] p-8 h-full flex flex-col relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-[#CB52EE] group-hover:scale-110 transition-all duration-500">
                                        <Icon className="w-8 h-8 text-white group-hover:text-white transition-colors duration-500" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white font-orbitron mb-4 group-hover:text-[#CB52EE] transition-colors">
                                        {useCase.sector}
                                    </h3>

                                    <p className="text-white/60 text-sm font-outfit leading-relaxed mb-6 flex-grow">
                                        {useCase.description}
                                    </p>

                                    <div className="space-y-4 pt-6 border-t border-white/10">
                                        <div className="space-y-2">
                                            {useCase.applications.slice(0, 3).map((app, idx) => (
                                                <div key={idx} className="flex items-center text-sm text-white/50 group-hover:text-white/80 transition-colors">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#CB52EE] mr-3" />
                                                    {app}
                                                </div>
                                            ))}
                                            {useCase.applications.length > 3 && (
                                                <div className="text-xs text-white/30 pl-4 italic">+ et bien plus</div>
                                            )}
                                        </div>

                                        <div className="pt-4 flex items-center justify-between">
                                            <span className="text-xs font-bold uppercase tracking-wider text-white bg-white/10 px-3 py-1 rounded-full">
                                                {useCase.solution}
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
