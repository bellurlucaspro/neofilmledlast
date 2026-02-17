"use client";

import React from "react";
import { motion } from "framer-motion";
import { Maximize, Layers, Box, DraftingCompass, Settings2 } from "lucide-react";
import Image from "next/image";

const RideauModularity = () => {
    const features = [
        {
            title: "Splicing & Angles 90°",
            description: "Créez des angles parfaits sans rupture visuelle. Les modules s'assemblent pour former des cubes, des colonnes ou des coins à 90°.",
            image: "/modular-angles.png",
            icon: Box,
            delay: 0
        },
        {
            title: "Structure Courbe",
            description: "L'aluminium aviation flexible permet de suivre les courbes de votre architecture (concave ou convexe) pour une intégration organique.",
            image: "/modular-cylindrique.png",
            icon: DraftingCompass,
            delay: 0.1
        },
        {
            title: "Structure Fixe Plane",
            description: "Une ingénierie de précision pour des installations murales ou sur châssis invisibles. Finesse extrême pour une transparence maximale (jusqu'à 92%).",
            image: "/modular-fixe.png",
            icon: Maximize,
            delay: 0.2
        }
    ];

    return (
        <section className="py-24 px-6 relative bg-[#030014] overflow-hidden">
            {/* Background Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(203,82,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(203,82,238,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#CB52EE]/30 bg-[#CB52EE]/10 mb-6 backdrop-blur-sm"
                    >
                        <Settings2 className="w-4 h-4 text-[#CB52EE]" />
                        <span className="text-[#CB52EE] font-orbitron text-xs font-bold tracking-widest uppercase">Flexibilité Structurelle</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black font-orbitron text-white leading-tight mb-6"
                    >
                        Modularité <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] to-[#00D8FF]">Sans Limite</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 font-outfit text-lg max-w-2xl mx-auto"
                    >
                        Le Rideau LED ne se contente pas d'être transparent. Sa structure en maille d'aluminium détachable permet de s'adapter à toutes les folies architecturales.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: feature.delay }}
                            className="group relative bg-[#030014]/60 border border-white/5 rounded-3xl overflow-hidden hover:border-[#CB52EE]/50 transition-all duration-500 shadow-2xl"
                        >
                            {/* Innovative Tech Showcase Container */}
                            <div className="relative h-96 overflow-hidden bg-[#05030e]">
                                {/* High-Tech Studio Background */}
                                <div className="absolute inset-0">
                                    {/* Central Spotlight */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#CB52EE10_0%,transparent_70%)]" />

                                    {/* Holographic Rings */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#CB52EE]/10 rounded-full animate-[spin_20s_linear_infinite]" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-[#00D8FF]/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />

                                    {/* Perspective Floor */}
                                    <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(rgba(203,82,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(203,82,238,0.05)_1px,transparent_1px)] bg-[size:30px_30px] [transform:rotateX(75deg)] opacity-30 origin-bottom" />

                                    {/* Pedestal Glow */}
                                    <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[140%] h-[40%] bg-[#CB52EE]/5 blur-[80px] rounded-[100%]" />
                                </div>

                                {/* Completely Visible Product Image */}
                                <div className="relative h-full w-full p-12 flex items-center justify-center">
                                    <motion.div
                                        className="relative w-full h-full flex items-center justify-center transition-all duration-1000 group-hover:scale-110"
                                    >
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            width={600}
                                            height={600}
                                            className="object-contain w-full h-full drop-shadow-[0_0_50px_rgba(203,82,238,0.3)] brightness-110 saturate-110"
                                            priority
                                        />
                                    </motion.div>
                                </div>

                                <div className="absolute top-4 right-4 w-12 h-12 bg-black/60 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-[#CB52EE] group-hover:border-[#CB52EE] transition-all duration-500">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 relative bg-gradient-to-b from-[#05030e] to-[#030014]">
                                <h3 className="text-2xl font-bold font-orbitron text-white mb-4 group-hover:text-[#CB52EE] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-white/60 font-outfit leading-relaxed">
                                    {feature.description}
                                </p>

                                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#CB52EE] to-[#00D8FF] w-0 group-hover:w-full transition-all duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RideauModularity;
