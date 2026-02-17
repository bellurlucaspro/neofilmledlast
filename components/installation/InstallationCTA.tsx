"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const InstallationCTA = () => {
    return (
        <section className="py-20 px-6 bg-[#030014] relative overflow-hidden text-center">
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-black font-orbitron text-white mb-8 leading-tight">
                    PRÊT À <span className="text-[#00D8FF]">TRANSFORMER</span> <br />
                    VOTRE ESPACE ?
                </h2>
                <p className="text-white/60 font-outfit text-xl mb-12 max-w-2xl mx-auto">
                    Demandez votre audit technique gratuit. Nos experts vous accompagnent pour définir la solution LED parfaite pour votre projet.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link
                        href="/contact"
                        className="px-10 py-5 bg-[#00D8FF] hover:bg-[#00c2e6] text-black text-lg font-bold font-orbitron rounded-xl transition-all shadow-[0_0_30px_rgba(0,216,255,0.4)] hover:shadow-[0_0_50px_rgba(0,216,255,0.6)] hover:scale-105 flex items-center justify-center gap-3 group"
                    >
                        Démarrer mon Projet
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/solutions"
                        className="px-10 py-5 bg-transparent border border-white/20 hover:bg-white/10 text-white text-lg font-bold font-orbitron rounded-xl transition-all hover:scale-105 flex items-center justify-center"
                    >
                        Voir les Solutions
                    </Link>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#00D8FF]/10 to-transparent pointer-events-none" />
        </section>
    );
};

export default InstallationCTA;
