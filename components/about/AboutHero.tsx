"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import { ArrowDown, Globe, Award, Sparkles } from "lucide-react";

const AboutHero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#030014]">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <BackgroundGradientAnimation
                    gradientBackgroundStart="#030014"
                    gradientBackgroundEnd="#030014"
                    firstColor="108, 0, 162"
                    secondColor="0, 112, 126"
                    thirdColor="203, 82, 238"
                    fourthColor="0, 216, 255"
                    fifthColor="108, 0, 162"
                    pointerColor="203, 82, 238"
                    size="80%"
                    blendingValue="overlay"
                    className="opacity-40"
                />
            </div>

            {/* Content Grid */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 h-full pt-32 pb-20 grid lg:grid-cols-2 gap-20 items-center">

                {/* LEFT: MASSIVE TYPOGRAPHY */}
                <div className="flex flex-col justify-center">

                    {/* Main Title Stack */}
                    <div className="relative">
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-orbitron font-black text-4xl sm:text-6xl md:text-8xl text-white leading-[0.9] tracking-tighter"
                        >
                            L'INGÉNIERIE
                        </motion.h1>

                        <motion.h1
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="font-orbitron font-black text-4xl sm:text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#00D8FF] to-[#CB52EE] leading-[0.9] tracking-tighter ml-4 md:ml-12 opacity-80"
                        >
                            VISUELLE
                        </motion.h1>
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="font-outfit text-xl text-white/60 mt-12 max-w-lg leading-relaxed border-l border-white/10 pl-8"
                    >
                        Nous repoussons les limites de la physique et de la lumière pour créer des surfaces digitales sans précédent. <br />
                        <span className="text-white font-bold">L'invisible devient visible.</span>
                    </motion.p>

                    {/* CTA / Scroll */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-20 flex items-center gap-6"
                    >
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                            <ArrowDown className="w-5 h-5 text-white/50 animate-bounce" />
                        </div>
                        <span className="text-xs font-outfit uppercase tracking-widest text-white/30">
                            Explorer notre vision
                        </span>
                    </motion.div>
                </div>

                {/* RIGHT: THE GLASS MONOLITH (Visual Anchor) */}
                <div className="relative hidden lg:flex items-center justify-center perspective-1000">

                    {/* Back Glow Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#CB52EE]/20 to-[#00D8FF]/20 rounded-full blur-[100px] animate-pulse" />

                    {/* 3D Glass Card Stack */}
                    <motion.div
                        initial={{ opacity: 0, rotateY: 30, rotateX: 10, z: -100 }}
                        animate={{ opacity: 1, rotateY: -15, rotateX: 5, z: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative w-[400px] h-[600px] preserve-3d"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Layer 1: Base Glass */}
                        <div className="absolute inset-0 rounded-[40px] bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl"
                            style={{ transform: "translateZ(0px)" }} />

                        {/* Layer 2: HUD Data */}
                        <div className="absolute inset-4 rounded-[32px] border border-white/5 flex flex-col justify-between p-8"
                            style={{ transform: "translateZ(40px)" }}>
                            <div className="flex justify-between items-start">
                                <Sparkles className="w-8 h-8 text-[#00D8FF]" />
                                <span className="text-[10px] font-orbitron text-white/30">SYS_READY</span>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <div className="text-4xl font-syne font-bold text-white mb-2">85<span className="text-[#00D8FF] text-2xl">%</span></div>
                                    <div className="text-xs font-outfit uppercase tracking-widest text-white/50">Transparence</div>
                                </div>
                                <div className="h-px w-full bg-white/10" />
                                <div>
                                    <div className="text-4xl font-syne font-bold text-white mb-2">5500</div>
                                    <div className="text-xs font-outfit uppercase tracking-widest text-white/50">Nits (cd/m²)</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#CB52EE]" />
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                </div>
                                <Globe className="w-6 h-6 text-white/20" />
                            </div>
                        </div>

                        {/* Layer 3: Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-20 top-40 p-6 rounded-2xl bg-[#030014]/80 border border-[#CB52EE]/30 backdrop-blur-lg shadow-xl"
                            style={{ transform: "translateZ(80px)" }}
                        >
                            <Award className="w-8 h-8 text-[#CB52EE] mb-4" />
                            <div className="text-sm font-bold text-white mb-1">Premium Quality</div>
                            <div className="text-xs text-white/40">Certified Components</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-12 bottom-20 p-6 rounded-2xl bg-[#030014]/80 border border-[#00D8FF]/30 backdrop-blur-lg shadow-xl"
                            style={{ transform: "translateZ(60px)" }}
                        >
                            <div className="text-xs font-bold text-[#00D8FF] mb-1 uppercase tracking-wider">Innovation</div>
                            <div className="text-2xl font-bold text-white">R&D Lab</div>
                        </motion.div>

                    </motion.div>
                </div>

            </div>

            {/* Perspective Grid Floor (Subtle) */}
            <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#030014] to-transparent z-10 pointer-events-none" />
        </section>
    );
};

export default AboutHero;
