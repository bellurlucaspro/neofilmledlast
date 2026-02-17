"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, Zap, Shield, Microscope } from "lucide-react";

const AboutMission = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-[#030014]">
            {/* Background Tech Grids */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 grid-pattern" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#030014] via-transparent to-[#030014]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Asymmetrical Grid Layout */}
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* LEFT: STORY & VISION (7 Cols) */}
                    <div className="lg:col-span-7 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px w-12 bg-gradient-to-r from-[#CB52EE] to-transparent" />
                                <span className="text-[10px] font-orbitron font-bold text-[#CB52EE] uppercase tracking-[0.5em]">Vision_Protocol</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-black font-orbitron text-white leading-tight mb-8">
                                REDÉFINIR LA <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">COMMUNICATION</span>
                            </h2>

                            <div className="space-y-6 text-lg text-white/60 font-outfit leading-relaxed max-w-2xl">
                                <p>
                                    Chez <span className="text-white font-bold">NEOFILM LED</span>, nous ne vendons pas simplement des écrans.
                                    Nous architecturons des vecteurs d'émotion qui transforment le monde physique en un canevas numérique dynamique.
                                </p>
                                <p>
                                    Notre mission est de briser les barrières de l'affichage traditionnel. Grâce au <span className="text-white">Film LED Transparent</span>,
                                    la vitrine n'est plus un obstacle mais une interface interactive, fusionnant le produit réel et le contenu digital.
                                </p>
                            </div>
                        </motion.div>

                        {/* Interactive Tech Annotation Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl group overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D8FF]/50 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D8FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                            <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                                <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                                    {/* Pulsing Energy Ring */}
                                    <motion.div
                                        animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.4, 0.1, 0.4] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute inset-0 rounded-full border border-[#00D8FF]/40 shadow-[0_0_20px_rgba(0,216,255,0.2)]"
                                    />
                                    <div className="absolute inset-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md" />
                                    <Microscope className="w-10 h-10 text-[#00D8FF] drop-shadow-[0_0_15px_rgba(0,216,255,0.8)] group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="space-y-3 text-center md:text-left">
                                    <div className="text-[10px] font-orbitron font-black text-[#00D8FF]/60 uppercase tracking-[0.4em]">Innovation_Lab</div>
                                    <h3 className="text-2xl font-orbitron font-black text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 transition-all">L'ADN de l'Innovation</h3>
                                    <p className="text-base text-white/40 font-outfit leading-relaxed group-hover:text-white/60 transition-colors">
                                        Nos ingénieurs repoussent les limites de la transparence et de la densité de pixels pour offrir une clarté visuelle inégalée sur le marché européen.
                                    </p>
                                </div>
                            </div>

                            {/* Tech HUD Lines Decoration */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-[#00D8FF]/20 rounded-br-3xl pointer-events-none group-hover:border-[#00D8FF]/50 transition-colors duration-700" />
                        </motion.div>
                    </div>

                    {/* RIGHT: EXPERTISE HUD (5 Cols) */}
                    <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                        {/* Glowing Atmosphere */}
                        <div className="absolute inset-0 bg-[#CB52EE]/10 blur-[120px] rounded-full pointer-events-none opacity-50" />

                        <div className="relative space-y-6">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-2 h-2 rounded-full bg-[#CB52EE] animate-pulse shadow-[0_0_10px_rgba(203,82,238,1)]" />
                                <span className="text-[10px] font-orbitron font-black text-white tracking-[0.4em] uppercase">NEOFILM_CORE_ENGINE</span>
                            </div>

                            {/* Expertise Cards Stack */}
                            {[
                                { title: "Architecture LED", icon: Target, desc: "Design sur-mesure pour intégration invisible." },
                                { title: "Dynamisation Retail", icon: Zap, desc: "Parcours client immersif et interactif." },
                                { title: "Engineering Excellence", icon: Shield, desc: "Composants certifiés pour usage Pro 24/7." },
                                { title: "Support Holistique", icon: Sparkles, desc: "Accompagnement de l'étude à la maintenance." },
                            ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className="group relative p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#CB52EE]/40 transition-all flex items-center gap-8 cursor-default overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#CB52EE]/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />

                                        <div className="relative z-10 w-14 h-14 shrink-0 flex items-center justify-center">
                                            {/* Energy Ring */}
                                            <motion.div
                                                animate={{ scale: [0.9, 1.25, 0.9], opacity: [0.3, 0.1, 0.3] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                                                className="absolute inset-0 rounded-full border border-[#CB52EE]/30"
                                            />
                                            <div className="absolute inset-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md" />
                                            <Icon className="w-7 h-7 text-white/20 group-hover:text-[#CB52EE] group-hover:scale-110 transition-all duration-500" style={{ filter: `group-hover:drop-shadow(0 0 8px #CB52EE)` }} />
                                        </div>

                                        <div className="relative z-10">
                                            <h4 className="text-base font-black font-orbitron text-white uppercase tracking-wider mb-2 group-hover:text-white transition-colors">{item.title}</h4>
                                            <p className="text-sm text-white/30 font-outfit group-hover:text-white/50 transition-colors">{item.desc}</p>
                                        </div>

                                        {/* Subtle scan line decal */}
                                        <div className="absolute right-0 bottom-0 w-8 h-[1px] bg-[#CB52EE]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMission;
