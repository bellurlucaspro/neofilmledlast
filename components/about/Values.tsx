"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Award, Shield, Zap, Globe, Leaf, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
    {
        icon: Target,
        title: "Excellence Ingénierie",
        description: "Précision millimétrée dans chaque intégration. Des solutions LED calibrées pour les exigences architecturales les plus strictes.",
        className: "md:col-span-2 md:row-span-2",
        color: "#CB52EE",
        tag: "ENGINEERING_CORE"
    },
    {
        icon: Lightbulb,
        title: "Innovation R&D",
        description: "Exploration constante des nouvelles technologies de pixels et matériaux transparents.",
        className: "md:col-span-1 md:row-span-1",
        color: "#00D8FF",
        tag: "TECH_SCAN"
    },
    {
        icon: Users,
        title: "Priorité Satisfaction",
        description: "Accompagnement personnalisé et réactif, de l'étude à la mise en service.",
        className: "md:col-span-1 md:row-span-1",
        color: "#F35AFF",
        tag: "CLIENT_SYNC"
    },
    {
        icon: Globe,
        title: "Expertise Française",
        description: "Savoir-faire local basé en Île-de-France pour une maîtrise totale de vos projets.",
        className: "md:col-span-1 md:row-span-2",
        color: "#00707E",
        tag: "ORIGIN_FR"
    },
    {
        icon: Leaf,
        title: "Éco-Conception",
        description: "Basse consommation énergétique et durabilité accrue pour un impact maîtrisé.",
        className: "md:col-span-1 md:row-span-1",
        color: "#10B981",
        tag: "GREEN_LED"
    },
    {
        icon: Settings, // Switched to generic settings icon since it fits 'Sur-Mesure'
        title: "Installation Sur-Mesure",
        description: "Adaptation dynamique de nos structures LED en fonction de votre architecture unique.",
        className: "md:col-span-1 md:row-span-1",
        color: "#00D8FF",
        tag: "PROJECT_SYNC"
    },
    {
        icon: Shield,
        title: "Fiabilité Durable",
        description: "Conception robuste pour une exploitation sereine long terme.",
        className: "md:col-span-1 md:row-span-1",
        color: "#CB52EE",
        tag: "SHIELD_ON"
    },
    {
        icon: Award,
        title: "Service Premium",
        description: "Support technique expert disponible pour garantir la continuité de votre affichage.",
        className: "md:col-span-1 md:row-span-1",
        color: "#F35AFF",
        tag: "SUPPORT_O1"
    }
];

const Values = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-[#030014]">
            {/* Atmospheric Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#CB52EE]/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00D8FF]/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-orbitron font-black text-5xl md:text-7xl text-white uppercase tracking-tighter mb-8 leading-tight">
                            NOS PILIERS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] to-[#00D8FF]">D'EXCELLENCE</span>
                        </h2>
                        <div className="h-1 w-32 bg-gradient-to-r from-[#CB52EE] to-[#00D8FF] mx-auto rounded-full mb-8" />
                        <p className="font-outfit text-white/40 text-xl max-w-3xl mx-auto font-light leading-relaxed">
                            Fondations de notre engagement pour l'<strong>ingénierie LED française</strong>.
                            Une vision technologique portée par l'innovation et la satisfaction client.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-20">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                className={cn(
                                    "relative group flex flex-col",
                                    value.className
                                )}
                            >
                                {/* Floating Glow Base */}
                                <div
                                    className="absolute -inset-8 opacity-0 group-hover:opacity-40 transition-opacity duration-1000 blur-3xl pointer-events-none rounded-full"
                                    style={{
                                        background: `radial-gradient(circle, ${value.color}40, transparent 70%)`
                                    }}
                                />

                                <div className="relative z-10 h-full flex flex-col items-start">
                                    <div className="flex w-full justify-between items-start mb-8">
                                        <div className="relative w-16 h-16 rounded-full flex items-center justify-center">
                                            {/* Pulsing Energy Ring */}
                                            <motion.div
                                                animate={{ scale: [0.9, 1.3, 0.9], opacity: [0.3, 0.1, 0.3] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                className="absolute inset-0 rounded-full border border-white/20"
                                                style={{ borderColor: `${value.color}40` }}
                                            />
                                            <div className="absolute inset-[4px] rounded-full border border-white/5 bg-white/5 backdrop-blur-md" />
                                            <Icon className="w-8 h-8 group-hover:scale-125 transition-transform duration-700" style={{ color: value.color, filter: `drop-shadow(0 0 10px ${value.color}80)` }} />
                                        </div>
                                        <div className="text-[10px] font-orbitron font-black text-white group-hover:text-white transition-colors tracking-widest mt-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
                                            [{value.tag}]
                                        </div>
                                    </div>

                                    <div className="relative pl-6">
                                        {/* Vertical Decorative Line with glowing head */}
                                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent group-hover:from-white/60 group-hover:via-white/20 transition-all" />
                                        <div className="absolute left-[-2px] top-0 w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity blur-[1px]" style={{ backgroundColor: value.color }} />

                                        <h3 className="font-orbitron font-black text-white uppercase tracking-[0.1em] text-2xl mb-4 group-hover:translate-x-1 transition-transform drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
                                            {value.title}
                                        </h3>
                                        <p className="font-outfit text-white/40 text-base leading-relaxed group-hover:text-white/60 transition-colors max-w-[280px]">
                                            {value.description}
                                        </p>
                                    </div>

                                    {/* HUD Mini Indicator with animated line */}
                                    <div className="mt-auto pt-10 flex items-center gap-4 w-full opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/40 to-transparent" style={{ backgroundImage: `linear-gradient(to right, ${value.color}80, transparent)` }} />
                                        <span className="text-[9px] font-orbitron font-black text-white/40 tracking-[0.4em]">SYNC_ACTIVE</span>
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

export default Values;
