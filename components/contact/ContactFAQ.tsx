"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { SchemaOrg, generateFAQSchema } from "../shared/SchemaOrg";

const faqs = [
    {
        question: "Quel est le délai pour recevoir un devis ?",
        answer: "Nous nous engageons à vous fournir un devis détaillé sous 24h ouvrées. Pour les projets complexes nécessitant une étude approfondie, le délai peut être de 48-72h. Tous nos devis sont gratuits et sans engagement."
    },
    {
        question: "Intervenez-vous partout en France ?",
        answer: "Oui, nous intervenons sur tout le territoire français. Nos équipes de techniciens certifiés se déplacent pour l'installation et la maintenance de vos solutions LED, quelle que soit votre localisation."
    },
    {
        question: "Proposez-vous des solutions de financement ?",
        answer: "Oui, nous travaillons avec plusieurs partenaires financiers pour vous proposer des solutions de location ou de financement adaptées à votre budget. Contactez-nous pour en savoir plus sur les options disponibles."
    },
    {
        question: "Puis-je voir une démonstration avant d'acheter ?",
        answer: "Absolument ! Nous organisons des démonstrations sur site ou dans notre showroom. Vous pouvez également visiter certaines de nos installations chez nos clients (avec leur accord). Contactez-nous pour planifier une démonstration."
    },
    {
        question: "Quelle est la garantie sur vos produits ?",
        answer: "Tous nos produits bénéficient d'une garantie constructeur : 3 ans pour NEOFILM LED et les écrans indoor, 5 ans pour les enseignes outdoor. Nous proposons également des extensions de garantie et des contrats de maintenance."
    },
    {
        question: "Comment se déroule l'installation ?",
        answer: "L'installation est réalisée par nos techniciens certifiés. Elle comprend : la pose du matériel, le câblage, la configuration, les tests, et une formation complète à l'utilisation. Nous nous occupons de tout de A à Z."
    }
];

const ContactFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20">
            <SchemaOrg schema={generateFAQSchema(faqs)} />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black uppercase font-orbitron tracking-wider text-white mb-6">
                        QUESTIONS SUR LE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] to-[#00D8FF]">CONTACT</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-[#CB52EE] to-[#00D8FF] mx-auto rounded-full" />
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 text-left flex justify-between items-center group transition-colors"
                            >
                                <span className="text-white font-outfit text-lg font-medium pr-8 group-hover:text-[#00D8FF] transition-colors">{faq.question}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/10 group-hover:border-[#CB52EE]/50 transition-all ${openIndex === index ? 'bg-[#CB52EE]/20 rotate-180' : ''}`}>
                                    <ChevronDown
                                        className={`w-4 h-4 text-white/40 transition-colors ${openIndex === index ? 'text-white' : 'group-hover:text-white'}`}
                                    />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "circOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-white/50 font-outfit leading-relaxed border-t border-white/5 pt-4 bg-white/[0.01]">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-b from-white/[0.05] to-transparent p-10 rounded-[2.5rem] border border-white/10 text-center backdrop-blur-sm relative overflow-hidden group">
                    {/* Subtle micro-glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[#00D8FF] to-transparent opacity-50" />

                    <h3 className="text-2xl font-bold text-white mb-4 font-orbitron tracking-tight">
                        BESOIN D&apos;INFORMATIONS COMPLÉMENTAIRES ?
                    </h3>
                    <p className="text-white/40 mb-8 font-outfit max-w-lg mx-auto leading-relaxed">
                        Découvrez notre écosystème technologique ou apprenez-en plus sur notre expertise en signalétique LED.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/solutions"
                            className="px-8 py-4 bg-[#CB52EE] hover:bg-[#b038d1] text-white font-bold font-orbitron text-xs tracking-[0.2em] rounded-xl transition-all shadow-[0_0_20px_rgba(203,82,238,0.2)] hover:scale-105"
                        >
                            NOS SOLUTIONS
                        </Link>
                        <Link
                            href="/a-propos"
                            className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold font-orbitron text-xs tracking-[0.2em] rounded-xl transition-all hover:scale-105 backdrop-blur-md"
                        >
                            À PROPOS
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFAQ;
