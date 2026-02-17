"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

const comparisonData = [
    {
        feature: "Type de Solution",
        neofilm: "Film LED Adhésif",
        modulaire: "Supports Modulaires",
        indoor: "Dynamisation d'Espace"
    },
    {
        feature: "Environnement",
        neofilm: "Vitrines",
        modulaire: "Boutiques / Magasins",
        indoor: "Espaces Commerciaux"
    },
    {
        feature: "Transparence",
        neofilm: "85%",
        modulaire: "N/A",
        indoor: "N/A"
    },
    {
        feature: "Résolution",
        neofilm: "Jusqu'à 4K",
        modulaire: "Ultra-Haute",
        indoor: "4K / 8K"
    },
    {
        feature: "Luminosité",
        neofilm: "4000 nits",
        modulaire: "1500 nits",
        indoor: "1200 nits"
    },
    {
        feature: "Gestion",
        neofilm: "Locale / Cloud",
        modulaire: "Cloud à distance",
        indoor: "Centralisée"
    },
    {
        feature: "Installation",
        neofilm: "2-4 heures",
        modulaire: "Plug & Play",
        indoor: "Clé en main"
    },
    {
        feature: "Garantie",
        neofilm: "3 ans",
        modulaire: "3 ans",
        indoor: "3 ans"
    },
    {
        feature: "Idéal pour",
        neofilm: "Retail, Showroom",
        modulaire: "Promotions, News",
        indoor: "Expérience Client"
    }
];

const ComparisonTable = () => {
    return (
        <section className="py-24 relative overflow-hidden">


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto px-4 relative z-10"
            >
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                        Comparatif des <span className="text-[#CB52EE]">Solutions</span>
                    </h2>
                    <p className="text-white/60 text-lg font-outfit max-w-2xl mx-auto">
                        Analysez les caractéristiques techniques pour choisir la technologie LED adaptée à votre projet.
                    </p>
                </div>

                {/* Desktop Table */}
                <div className="hidden lg:block overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/10">
                                <th className="p-8 text-left text-white/50 font-syne text-sm uppercase tracking-wider w-1/4">Caractéristiques</th>
                                <th className="p-8 text-center bg-white/5 border-x border-white/10 relative">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-[#CB52EE]" />
                                    <span className="text-xl font-bold font-orbitron text-white">Film Adhésif</span>
                                    <div className="text-[#CB52EE] text-xs mt-1 font-outfit">Technologie NEOFÍLM</div>
                                </th>
                                <th className="p-8 text-center border-r border-white/10">
                                    <span className="text-xl font-bold font-orbitron text-white">Modulaire</span>
                                    <div className="text-white/50 text-xs mt-1 font-outfit">Série Portable</div>
                                </th>
                                <th className="p-8 text-center">
                                    <span className="text-xl font-bold font-orbitron text-white">Indoor</span>
                                    <div className="text-white/50 text-xs mt-1 font-outfit">Haute Résolution</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {comparisonData.map((row, index) => (
                                <tr key={index} className="hover:bg-white/5 transition-colors group">
                                    <td className="p-6 pl-8 text-white/80 font-medium font-outfit group-hover:text-white transition-colors">
                                        {row.feature}
                                    </td>
                                    <td className="p-6 text-center text-white bg-white/5 border-x border-white/10 font-bold font-syne">
                                        {row.neofilm}
                                    </td>
                                    <td className="p-6 text-center text-white/70 border-r border-white/10 font-syne">
                                        {row.modulaire}
                                    </td>
                                    <td className="p-6 text-center text-white/70 font-syne">
                                        {row.indoor}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards */}
                <div className="lg:hidden space-y-8">
                    {/* Headers for Mobile Context */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card 1: Neofilm */}
                        <div className="bg-[#CB52EE]/10 rounded-2xl p-1 border border-[#CB52EE]/30">
                            <div className="bg-[#030014] rounded-xl p-6 h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#CB52EE]/20 blur-[40px] rounded-full -mr-10 -mt-10" />
                                <h3 className="text-2xl font-bold font-orbitron text-white mb-6 border-b border-white/10 pb-4">
                                    Film <span className="text-[#CB52EE]">Adhésif</span>
                                </h3>
                                <div className="space-y-4">
                                    {comparisonData.map((row, idx) => (
                                        <div key={idx} className="flexjustify-between items-center text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                            <span className="text-white/50">{row.feature}</span>
                                            <span className="text-white font-medium text-right ml-auto block">{row.neofilm}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Modulaire */}
                        <div className="bg-white/5 rounded-2xl p-1 border border-white/10">
                            <div className="bg-[#030014] rounded-xl p-6 h-full">
                                <h3 className="text-2xl font-bold font-orbitron text-white mb-6 border-b border-white/10 pb-4">
                                    Modulaire
                                </h3>
                                <div className="space-y-4">
                                    {comparisonData.map((row, idx) => (
                                        <div key={idx} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                            <span className="text-white/50">{row.feature}</span>
                                            <span className="text-white/80 text-right ml-auto block">{row.modulaire}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Indoor */}
                        <div className="bg-white/5 rounded-2xl p-1 border border-white/10 md:col-span-2">
                            <div className="bg-[#030014] rounded-xl p-6 h-full">
                                <h3 className="text-2xl font-bold font-orbitron text-white mb-6 border-b border-white/10 pb-4">
                                    Indoor
                                </h3>
                                <div className="space-y-4">
                                    {comparisonData.map((row, idx) => (
                                        <div key={idx} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                            <span className="text-white/50">{row.feature}</span>
                                            <span className="text-white/80 text-right ml-auto block">{row.indoor}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ComparisonTable;
