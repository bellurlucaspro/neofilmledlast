"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ClipboardCheck, Truck, Shield, Box, Hammer, ChevronRight, Cpu, LucideIcon } from "lucide-react";

interface Step {
    id: number;
    title: string;
    icon: LucideIcon;
    brief: string;
    details: string[];
    accent: string;
    tag: string;
}

const ProjectProcess = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps: Step[] = [
        {
            id: 1,
            title: "STRATÉGIE & BRIEF",
            tag: "PHASE_01",
            icon: Phone,
            brief: "Analyse technique chirurgicale de votre surface vitrée.",
            details: [
                "Audit des dimensions & contraintes électriques",
                "Conseil expert : Pitch vs Distance de vue",
                "Optimisation de la luminosité environnementale",
                "Cahier des charges de diffusion"
            ],
            accent: "#00D8FF"
        },
        {
            id: 2,
            title: "INGÉNIERIE & DEVIS",
            tag: "PHASE_02",
            icon: ClipboardCheck,
            brief: "Chiffrage ultra-précis et configuration logistique.",
            details: [
                "Établissement du devis technique complet",
                "Option : Flight Case Premium vs Caisse Bois",
                "Planification de la chaîne logistique",
                "Validation de la compatibilité NEOHUB"
            ],
            accent: "#CB52EE"
        },
        {
            id: 3,
            title: "FLUX & DÉPLOIEMENT",
            tag: "PHASE_03",
            icon: Truck,
            brief: "Logistique sécurisée et installation certifiée.",
            details: [
                "Expédition haute sécurité (International)",
                "Option : Livraison simple ou Pack Pose",
                "Mise en service & Calibration sur site",
                "Passage de relais technique"
            ],
            accent: "#00ff88"
        }
    ];

    return (
        <section className="py-32 px-6 relative bg-[#030014] overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 text-[#00D8FF] mb-4"
                        >
                            <Cpu className="w-5 h-5 animate-pulse" />
                            <span className="text-xs font-orbitron font-bold tracking-[0.4em] uppercase">Workflow Innovation</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-7xl font-black font-orbitron text-white leading-[0.85]">
                            LE PARCOURS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] via-white to-[#00D8FF]">
                                VOTRE RÉUSSITE
                            </span>
                        </h2>
                    </div>
                    <p className="text-white/40 font-outfit text-lg max-w-sm border-l border-white/10 pl-6">
                        Une méthodologie rigoureuse pour une intégration invisible et un impact total.
                    </p>
                </div>

                {/* Main Interactive Interface */}
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Step Selector (Left Side) */}
                    <div className="lg:col-span-5 space-y-4">
                        {steps.map((step, idx) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(idx)}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-500 border group relative overflow-hidden ${activeStep === idx
                                    ? "bg-white/5 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                                    : "bg-transparent border-white/5 hover:border-white/10 opacity-50 hover:opacity-100"
                                    }`}
                            >
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className={`text-2xl font-black font-orbitron ${activeStep === idx ? "text-white" : "text-white/20"}`}>
                                        0{step.id}
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-orbitron font-bold tracking-widest text-white/30 mb-1">{step.tag}</div>
                                        <h3 className="text-lg font-bold font-orbitron text-white tracking-tight">{step.title}</h3>
                                    </div>
                                    <ChevronRight className={`ml-auto w-5 h-5 transition-transform duration-500 ${activeStep === idx ? "translate-x-0 rotate-90 text-white" : "-translate-x-4 text-white/0"}`} />
                                </div>
                                {activeStep === idx && (
                                    <motion.div
                                        layoutId="step-indicator"
                                        className="absolute left-0 top-0 bottom-0 w-1"
                                        style={{ backgroundColor: step.accent }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content Display (Right Side) */}
                    <div className="lg:col-span-7 relative min-h-[500px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="w-full bg-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-3xl relative overflow-hidden"
                            >
                                {/* Decorative Glow */}
                                <div
                                    className="absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-20 pointer-events-none"
                                    style={{ backgroundColor: steps[activeStep].accent }}
                                />

                                <div className="relative z-10">
                                    {/* HUD Corner Brackets */}
                                    <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-white/10 rounded-tl-xl" />
                                    <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-white/10 rounded-tr-xl" />
                                    <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-white/10 rounded-bl-xl" />
                                    <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-white/10 rounded-br-xl" />

                                    <div className="flex items-start justify-between mb-10">
                                        <div
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.02)] relative group/icon overflow-hidden"
                                            style={{ color: steps[activeStep].accent }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity" />
                                            {React.createElement(steps[activeStep].icon, { className: "w-10 h-10 relative z-10" })}
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center gap-2 justify-end">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                <span className="text-[10px] font-orbitron font-black text-white/40 uppercase tracking-[0.3em]">System.Active</span>
                                            </div>
                                            <div className="text-[9px] text-white/20 font-mono mt-1 tracking-widest uppercase">ID: NEO_PROJ_0{steps[activeStep].id}</div>
                                        </div>
                                    </div>

                                    <h4 className="text-3xl md:text-5xl font-black font-orbitron text-white mb-10 leading-[1.1] tracking-tighter uppercase italic">
                                        {steps[activeStep].brief}
                                    </h4>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        {steps[activeStep].details.map((detail, dIdx) => (
                                            <motion.div
                                                key={dIdx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + (dIdx * 0.1) }}
                                                className="bg-white/[0.03] border border-white/5 p-5 rounded-2xl flex items-start gap-4 hover:bg-white/5 hover:border-white/20 transition-all group/node"
                                            >
                                                <div
                                                    className="w-2 h-2 rounded-full mt-1.5 shadow-[0_0_10px_currentColor]"
                                                    style={{ backgroundColor: steps[activeStep].accent, color: steps[activeStep].accent }}
                                                />
                                                <span className="text-[15px] md:text-[17px] text-white/60 font-outfit leading-snug group-hover/node:text-white/90 transition-colors">{detail}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Action Link (Innovation) */}
                                    <div className="mt-12 pt-8 border-t border-white/5 flex items-end justify-between">
                                        <div>
                                            <p className="text-[10px] text-white/30 font-orbitron uppercase tracking-[0.4em] mb-2">Protocol Deployment</p>
                                            <div className="h-1 w-32 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-white/40"
                                                    animate={{ width: `${(activeStep + 1) * 33.3}%` }}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex gap-1.5">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className={`w-2 h-2 rounded-full ${i <= activeStep + 1 ? "bg-white/40" : "bg-white/5"}`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Scanner Effect Animation */}
                                <motion.div
                                    className="absolute inset-x-0 h-px bg-white/20 z-20 pointer-events-none"
                                    animate={{ top: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom Accompagnement Section (Refined) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-24 p-10 md:p-14 rounded-[50px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-xl relative group overflow-hidden"
                >
                    {/* HUD Corner Brackets */}
                    <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-white/5 rounded-tl-3xl group-hover:border-white/20 transition-colors" />
                    <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-white/5 rounded-tr-3xl group-hover:border-white/20 transition-colors" />
                    <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-white/5 rounded-bl-3xl group-hover:border-white/20 transition-colors" />
                    <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-white/5 rounded-bl-3xl group-hover:border-white/20 transition-colors rotate-180" />

                    <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                        <div className="flex-1 text-center lg:text-left">
                            <h5 className="text-3xl md:text-5xl font-black font-orbitron text-white mb-6 uppercase tracking-tighter leading-tight italic">
                                VOTRE SUCCÈS EST <br />
                                <span className="text-[#00D8FF]">PARTIE INTÉGRANTE DU SYSTÈME.</span>
                            </h5>
                            <p className="text-white/40 text-lg md:text-xl font-outfit max-w-2xl leading-relaxed italic">
                                Le <span className="text-white font-bold">NEOFILM</span> n'est pas qu'un produit, c'est une ingénierie de la lumière. Nous calibrons chaque pixel pour maximiser votre impact média et votre ROI structurel.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <div className="flex flex-col items-center gap-4 px-8 py-8 bg-white/5 border border-white/10 rounded-[30px] hover:bg-white/10 hover:border-white/30 transition-all group/item min-w-[180px]">
                                <div className="p-4 rounded-2xl bg-black border border-white/10 text-[#CB52EE] group-hover/item:scale-110 transition-transform shadow-[0_0_20px_rgba(203,82,238,0.2)]">
                                    <Box className="w-8 h-8" />
                                </div>
                                <span className="text-[11px] font-orbitron font-black text-white/50 group-hover/item:text-white uppercase tracking-[0.3em] text-center">Flight Packaging</span>
                            </div>
                            <div className="flex flex-col items-center gap-4 px-8 py-8 bg-white/5 border border-white/10 rounded-[30px] hover:bg-white/10 hover:border-white/30 transition-all group/item min-w-[180px]">
                                <div className="p-4 rounded-2xl bg-black border border-white/10 text-[#00D8FF] group-hover/item:scale-110 transition-transform shadow-[0_0_20px_rgba(0,216,255,0.2)]">
                                    <Hammer className="w-8 h-8" />
                                </div>
                                <span className="text-[11px] font-orbitron font-black text-white/50 group-hover/item:text-white uppercase tracking-[0.3em] text-center">Pose Certifiée</span>
                            </div>
                        </div>
                    </div>
                    {/* Dynamic Ambient Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,216,255,0.08),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectProcess;
