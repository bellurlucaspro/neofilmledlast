"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Ruler, PencilRuler, Factory, Hammer, Monitor, GraduationCap, CheckCircle2 } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Audit & Étude Technique",
        icon: Ruler,
        description: "Analyse précise de votre site (dimensions, contraintes électriques, luminosité ambiante) pour garantir une intégration parfaite.",
        details: ["Relevé dimensionnel laser", "Audit électrique & structurel", "Simulation d'intégration"],
        color: "#00D8FF"
    },
    {
        id: 2,
        title: "Conception & Fabrication",
        icon: Factory,
        description: "Lancement de la production sur mesure. Un processus industriel rodé garantissant fiabilité et respect des délais.",
        details: ["Fabrication : 18 jours", "Livraison : 15 à 40 jours", "Contrôle Qualité"],
        color: "#CB52EE"
    },
    {
        id: 3,
        title: "Logistique & Déploiement",
        icon: Hammer,
        description: "Transport sécurisé et installation par nos équipes certifiées. Respect des normes de sécurité et de l'intégrité de vos locaux.",
        details: ["Transport Flight Case", "Pose structurelle invisible", "Câblage discret"],
        color: "#F35AFF"
    },
    {
        id: 4,
        title: "Configuration & Calibrage",
        icon: Monitor,
        description: "Mise en service du système de gestion (CMS). Calibrage colorimétrique pour une image naturelle et éclatante.",
        details: ["Installation du Player", "Paramétrage Cloud/WiFi", "Calibration Colorimétrique"],
        color: "#00ff88"
    },
    {
        id: 5,
        title: "Formation & Suivi",
        icon: GraduationCap,
        description: "Formation de vos équipes à l'utilisation du logiciel. Remise du dossier technique et lancement de la garantie.",
        details: ["Formation utilisateur (1h)", "Remise DOE", "Support Hotline dédié"],
        color: "#FFD700"
    }
];

const InstallationSteps = () => {
    return (
        <section id="steps" className="py-32 px-6 bg-[#030014] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-32"
                >
                    <h2 className="text-4xl md:text-6xl font-black font-orbitron text-white mb-6 uppercase">
                        VOTRE PROJET, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D8FF] to-[#CB52EE]">ÉTAPE PAR ÉTAPE</span>
                    </h2>
                    <p className="text-white/50 font-outfit text-lg max-w-2xl mx-auto">
                        Un processus maîtrisé de A à Z pour une tranquillité d'esprit totale.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Central Beam - Positioned strictly within the steps container */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
                        <div className="w-full h-1/3 bg-gradient-to-b from-[#00D8FF] via-[#CB52EE] to-transparent opacity-50 absolute top-0" />
                    </div>

                    <div className="space-y-32">
                        {steps.map((step, index) => (
                            <StepCard key={step.id} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const StepCard = ({ step, index }: { step: any, index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col md:flex-row items-center relative ${isEven ? "" : "md:flex-row-reverse"}`}
        >
            {/* 1. Center Node (The Pivot) */}
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-[#030014] bg-[#030014] z-20 flex items-center justify-center shadow-[0_0_20px_theme(colors.purple.500)]">
                <div className="w-4 h-4 rounded-full animate-pulse" style={{ backgroundColor: step.color }} />
            </div>

            {/* 2. Content Block */}
            <div className={`flex-1 w-full pl-16 md:pl-0 ${isEven ? "md:pr-24 lg:pr-32 text-left md:text-right" : "md:pl-24 lg:pl-32 text-left"}`}>
                <div className="relative group">
                    {/* Connector Line (Desktop only) */}
                    <div className={`hidden md:block absolute top-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-24 
                        ${isEven ? "-right-24 bg-gradient-to-l" : "-left-24 bg-gradient-to-r"} group-hover:via-white/50 transition-all`}
                    />

                    {/* Number Watermark */}
                    <div className={`absolute -top-12 text-8xl font-black text-white/[0.03] select-none pointer-events-none font-orbitron 
                        ${isEven ? "right-0" : "left-0"}`}>
                        0{step.id}
                    </div>

                    <div className="relative z-10 p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm group-hover:bg-white/[0.04] transition-all duration-500 hover:border-white/20">
                        {/* Header with Icon */}
                        <div className={`flex items-center gap-4 mb-6 ${isEven ? "md:flex-row-reverse" : "flex-row"}`}>
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500"
                                style={{ color: step.color, borderColor: `${step.color}30` }}>
                                <step.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold font-orbitron text-white uppercase tracking-tight">
                                {step.title}
                            </h3>
                        </div>

                        <p className="text-white/60 font-outfit text-lg leading-relaxed mb-6">
                            {step.description}
                        </p>

                        <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "justify-start"}`}>
                            {step.details.map((detail: string, i: number) => (
                                <span key={i} className="px-3 py-1.5 rounded-md bg-[#030014] border border-white/10 text-xs text-white/70 font-mono flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.color }} />
                                    {detail}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Empty Balance Block */}
            <div className="flex-1 hidden md:block" />
        </motion.div>
    );
};

export default InstallationSteps;
