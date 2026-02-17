"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, HelpCircle } from "lucide-react";

const faqData = [
    {
        question: "Quel est le délai moyen d'intervention ?",
        answer: "Le délai standard est de 4 à 6 semaines après validation du devis. Cela inclut la phase de fabrication sur mesure, le contrôle qualité (Aging Test 72h) et la planification logistique."
    },
    {
        question: "Quels sont les prérequis techniques sur site ?",
        answer: "Une alimentation électrique dédiée est nécessaire (nous fournissons les spécifications précises lors de l'audit). Pour les installations en vitrine, aucun renfort structurel lourd n'est généralement requis grâce à la légèreté de nos solutions."
    },
    {
        question: "Proposez-vous un contrat de maintenance ?",
        answer: "Oui, nous proposons des contrats de maintenance préventive et curative. Nos écrans sont modulaires, ce qui permet de remplacer uniquement les composants défectueux (LED, alimentation) sans démonter l'ensemble."
    },
    {
        question: "La formation est-elle incluse ?",
        answer: "Absolument. Une formation complète d'une heure est dispensée à vos équipes lors de la réception du chantier pour maîtriser le logiciel de pilotage et la gestion des contenus."
    },
    {
        question: "Intervenez-vous hors de France ?",
        answer: "Oui, nous déployons nos solutions dans toute l'Europe et à l'international. Notre logistique est rodée pour l'export, avec des caisses de transport sécurisées (Flight Cases)."
    }
];

const InstallationFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 bg-[#030014] relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#CB52EE] font-bold font-orbitron text-sm uppercase mb-4">
                        <HelpCircle className="w-4 h-4" />
                        Questions Fréquentes
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black font-orbitron text-white">
                        VOS INTERROGATIONS, <span className="text-[#CB52EE]">NOS RÉPONSES</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, idx) => (
                        <div key={idx} className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden transition-all hover:bg-white/[0.04]">
                            <button
                                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="font-outfit font-bold text-lg md:text-xl text-white/90 pr-8">
                                    {item.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${activeIndex === idx ? "bg-[#CB52EE] border-[#CB52EE] rotate-45" : "bg-transparent"}`}>
                                    <Plus className={`w-5 h-5 ${activeIndex === idx ? "text-white" : "text-white/50"}`} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 pt-0 text-white/60 font-outfit text-base md:text-lg leading-relaxed border-t border-white/5 mt-2">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#CB52EE]/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default InstallationFAQ;
