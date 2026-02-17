"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Gem, Target } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";

const ContactHero = () => {
    return (
        <div className="pb-20 pt-36 relative z-10">
            <div className="flex justify-center px-4">
                <div className="max-w-[89vw] md:max-w-4xl lg:max-w-[70vw] flex flex-col items-center text-center">
                    <Breadcrumb items={[{ name: "Contact", url: "/contact" }]} />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mt-10 mb-6"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase font-orbitron tracking-wider text-white leading-tight">
                            CONTACTEZ <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] via-[#F35AFF] to-[#00D8FF] drop-shadow-[0_0_20px_rgba(203,82,238,0.4)]">
                                NEOFILM LED
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-outfit text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
                    >
                        Vous avez un projet d'<strong className="text-white font-semibold">affichage LED professionnel</strong> ?<br className="hidden md:block" />
                        Notre équipe d'experts vous accompagne de la conception à l'installation.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4 mt-12"
                    >
                        {[
                            { text: "Réponse sous 24h", icon: <Zap className="w-5 h-5 text-[#FFD700]" /> },
                            { text: "Devis Gratuit", icon: <Gem className="w-5 h-5 text-[#00D8FF]" /> },
                            { text: "Conseil Expert", icon: <Target className="w-5 h-5 text-[#F35AFF]" /> }
                        ].map((item, idx) => (
                            <div key={idx} className="group relative px-6 py-3 bg-white/[0.03] backdrop-blur-md rounded-full border border-white/10 hover:border-[#CB52EE]/50 transition-all duration-300">
                                <div className="absolute inset-0 rounded-full bg-[#CB52EE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative flex items-center gap-3 z-20">
                                    <span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{item.icon}</span>
                                    <span className="text-sm font-orbitron tracking-wide text-white group-hover:text-white transition-colors drop-shadow-md">{item.text}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactHero;
