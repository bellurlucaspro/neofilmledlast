"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";

const AboutCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#030014]">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-[#CB52EE]/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative rounded-[3rem] overflow-hidden border border-white/10 group"
                >
                    {/* Inner Aurora Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#CB52EE]/10 via-[#030014] to-[#00707E]/10 opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

                    {/* Content Section */}
                    <div className="relative z-10 p-12 md:p-20 text-center flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00D8FF] animate-pulse" />
                            <span className="text-[10px] font-orbitron font-black text-white/60 tracking-widest uppercase">Prêt pour le déploiement ?</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-black font-orbitron text-white leading-tight mb-8">
                            ILLUMINEZ VOTRE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] via-[#F35AFF] to-[#00D8FF]">PROCHAINE ÈRE</span>
                        </h2>

                        <p className="font-outfit text-xl text-white/50 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            Passez de la simple visibilité à l'immersion totale. Nos experts sont prêts à concevoir votre écosystème visuel sur-mesure.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                            <Link href="/contact" className="group relative px-10 py-5 bg-white text-black rounded-full font-black font-orbitron text-xs tracking-[0.2em] transition-all hover:scale-105 overflow-hidden flex items-center gap-3">
                                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                CONFIGURER MON PROJET
                                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#CB52EE] to-[#00D8FF]" />
                            </Link>

                            <Link href="/solutions" className="group px-10 py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white font-black font-orbitron text-xs tracking-[0.2em] transition-all hover:bg-white/10 flex items-center gap-3">
                                EXPLORER LE CATALOGUE
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Corner HUD Decor */}
                    <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/10 rounded-tl-3xl opacity-50" />
                    <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/10 rounded-br-3xl opacity-50" />
                </motion.div>
            </div>
        </section>
    );
};

export default AboutCTA;
