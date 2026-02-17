"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer, ShieldCheck, Truck, Layers, Maximize, Zap } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";

const InstallationHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#030014]">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <BackgroundGradientAnimation
                    gradientBackgroundStart="#030014"
                    gradientBackgroundEnd="#05051a"
                    firstColor="0, 216, 255" // Blue
                    secondColor="203, 82, 238" // Purple
                    thirdColor="255, 255, 255" // White accent
                    size="80%"
                    blendingValue="screen"
                />
            </div>

            <div className="container relative z-10 px-6 mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="text-left relative z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 text-[#00D8FF] mb-6"
                    >
                        <div className="p-2 rounded-lg bg-[#00D8FF]/10 border border-[#00D8FF]/20">
                            <Hammer className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-orbitron font-bold tracking-[0.3em] uppercase">Service Premium</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black font-orbitron text-white leading-[0.9] mb-8 tracking-tighter"
                    >
                        L'ART DE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D8FF] via-white to-[#CB52EE] animate-gradient-x p-1">
                            L'INTÉGRATION
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-white/70 font-outfit font-light max-w-xl mb-12 leading-relaxed"
                    >
                        Du premier audit technique à la configuration finale, nous orchestrons chaque étape avec une <span className="text-white font-medium">précision chirurgicale</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button
                            onClick={() => document.getElementById('steps')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group relative px-8 py-4 bg-white text-black font-bold font-orbitron rounded-xl overflow-hidden hover:scale-105 transition-transform"
                        >
                            <span className="relative z-10">Découvrir le Processus</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00D8FF] to-[#CB52EE] opacity-0 group-hover:opacity-20 transition-opacity" />
                        </button>
                    </motion.div>
                </div>

                {/* Right Visual (Abstract Tech Construction) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative hidden lg:block h-[600px] w-full"
                >
                    {/* Central Tech Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
                        {/* Rotating Rings */}
                        <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 border border-[#00D8FF]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-8 border border-[#CB52EE]/20 rounded-full animate-[spin_20s_linear_infinite]" />

                        {/* Central Holographic Cube */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-[#00D8FF]/10 to-[#CB52EE]/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center transform rotate-45 animate-pulse-slow shadow-[0_0_50px_rgba(0,216,255,0.2)]">
                            <Layers className="w-16 h-16 text-white/80 transform -rotate-45" />
                        </div>
                    </div>

                    {/* Floating Info Nodes */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 right-10 p-4 bg-[#030014]/80 backdrop-blur-xl border border-white/10 rounded-xl flex items-center gap-4 shadow-xl max-w-[200px]"
                    >
                        <div className="p-2 bg-[#00ff88]/10 rounded-lg border border-[#00ff88]/20 text-[#00ff88]">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-xs text-white/40 font-orbitron uppercase tracking-wider">Sécurité</div>
                            <div className="text-sm font-bold text-white">Certifiée M1</div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-32 left-0 p-4 bg-[#030014]/80 backdrop-blur-xl border border-white/10 rounded-xl flex items-center gap-4 shadow-xl max-w-[200px]"
                    >
                        <div className="p-2 bg-[#CB52EE]/10 rounded-lg border border-[#CB52EE]/20 text-[#CB52EE]">
                            <Truck className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-xs text-white/40 font-orbitron uppercase tracking-wider">Logistique</div>
                            <div className="text-sm font-bold text-white">Flight Case</div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute top-1/3 left-10 p-3 bg-[#00D8FF]/10 backdrop-blur-md border border-[#00D8FF]/20 rounded-lg flex items-center gap-3"
                    >
                        <Maximize className="w-4 h-4 text-[#00D8FF]" />
                        <span className="text-xs font-mono text-[#00D8FF]">PRECISION: 100%</span>
                    </motion.div>

                    <motion.div
                        animate={{ x: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        className="absolute bottom-1/4 right-20 p-3 bg-[#CB52EE]/10 backdrop-blur-md border border-[#CB52EE]/20 rounded-lg flex items-center gap-3"
                    >
                        <Zap className="w-4 h-4 text-[#CB52EE]" />
                        <span className="text-xs font-mono text-[#CB52EE]">POWER: OPTIMIZED</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#030014] to-transparent z-20" />
        </section>
    );
};

export default InstallationHero;
