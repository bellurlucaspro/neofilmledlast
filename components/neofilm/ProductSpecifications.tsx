"use client";

import React from "react";
import { motion } from "framer-motion";

const ProductSpecifications = () => {
    const specs = [
        {
            category: "Affichage",
            items: [
                { label: "Luminosité", value: "≥ 4000 cd/m²" },
                { label: "Transparence", value: "90%" },
                { label: "Angle de vue", value: "140° (H) / 140° (V)" },
                { label: "Rafraîchissement", value: "60 Hz" },
            ],
        },
        {
            category: "Technique",
            items: [
                { label: "Pixel Pitch", value: "P3.75 / P5 / P7.5 / P10" },
                { label: "Densité Pixels", value: "Varies selon pitch" },
                { label: "Durée de vie", value: "> 100 000 heures" },
                { label: "LED Type", value: "COB Flexible" },
            ],
        },
        {
            category: "Installation & Power",
            items: [
                { label: "Installation", value: "Adhésif sur verre" },
                { label: "Utilisation", value: "Intérieur (Indoor)" },
                { label: "Alimentation", value: "110-240V, 50-60Hz" },
                { label: "Consommation", value: "50-60 W/m² (Moyenne)" },
            ],
        },
    ];

    return (
        <section className="py-20 w-full relative">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Spécifications <span className="text-purple-500">Techniques</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Découvrez les caractéristiques détaillées de notre film LED transparent FUTURE-X (FUX-001ALHB).
                        Performance, transparence et fiabilité.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {specs.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-black-100 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                                {category.category}
                            </h3>
                            <ul className="space-y-4">
                                {category.items.map((item, i) => (
                                    <li key={i} className="flex justify-between items-center text-sm">
                                        <span className="text-neutral-400">{item.label}</span>
                                        <span className="text-white font-medium text-right">{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSpecifications;
