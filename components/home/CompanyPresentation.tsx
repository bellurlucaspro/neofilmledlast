"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, Maximize, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const items = [
    {
        id: 1,
        title: "Innovation LED Indoor",
        subtitle: "Signalétique & Solutions Portables",
        description: "Spécialiste de la signalétique LED indoor innovante sur-mesure. Des solutions portables à 'effet Waouh' pour vos événements, aux écrans modulaires pour dynamiser vos espaces de vente. Nous valorisons vos vitrines et surfaces vitrées inexploitées par une communication visuelle 3D dynamique. Intervention partout en France.",
        image: "/facade film transparent led.png",
        icon: Sparkles,
        color: "from-purple/80 to-blue-500/80"
    },
    {
        id: 2,
        title: "Expérience Immersive",
        subtitle: "Installations Premium France",
        description: "Transformez vos boutiques et showrooms parisiens en destinations visuelles. Nous créons des ambiances LED captivantes qui retiennent l'attention de vos clients et marquent durablement les esprits dans vos points de vente.",
        image: "/immersive-led-screen.gif",
        icon: Eye,
        color: "from-[#CB52EE]/80 to-[#00707E]/80"
    },
    {
        id: 3,
        title: "Surfaces Inexploitées",
        subtitle: "Valorisation d'Espaces Commerciaux",
        description: "Vitrines, murs, escalators, poutres... Nous transformons chaque surface disponible de vos espaces commerciaux parisiens en opportunité de communication LED spectaculaire et rentable. Installation sur-mesure partout en France.",
        image: "/devanture magasin led.png",
        icon: Maximize,
        color: "from-blue-600/80 to-purple/80"
    }
];

const CompanyPresentation = () => {
    const [activeId, setActiveId] = useState<number | null>(2); // Default center active

    return (
        <section id="about" className="w-full bg-[#030014] relative overflow-hidden py-20">
            {/* Grid Background - Full Width */}
            <div className="absolute inset-0 w-full h-full bg-grid-white/[0.02] pointer-events-none"
                style={{
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Ambient Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-5 mb-16 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple/10 border border-purple/30 mb-6"
                >
                    <Sparkles className="w-4 h-4 text-purple" />
                    <span className="text-purple text-sm font-semibold tracking-wider uppercase">Pionnier du Design LED en France</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight font-orbitron mb-8"
                >
                    Réinventez vos{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CB52EE] to-[#00707E]">
                        Espaces Intérieurs
                    </span>
                    <br />
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl md:text-4xl lg:text-5xl font-light text-white/80 block mt-4"
                    >
                        avec des Écrans LED Innovants
                    </motion.span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl mx-auto"
                >
                    <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4">
                        Spécialiste de l'<Link href="/film-led-transparent" className="text-white/90 hover:text-purple underline decoration-purple/30 underline-offset-4 transition-colors"><strong>affichage LED transparent et immersif</strong></Link> pour commerces, boutiques et showrooms.
                        De Paris à toute la France, nous transformons vos <strong className="text-white/90">vitrines, murs et surfaces inexploitées</strong> en
                        outils de communication vidéo spectaculaires avec nos <Link href="/film-led-transparent/neofilm-adhesif" className="text-white/90 hover:text-purple underline decoration-purple/30 underline-offset-4 transition-colors"><strong>films LED adhésifs</strong></Link> et
                        <Link href="/film-led-transparent/rideau-led-transparent" className="text-white/90 hover:text-purple underline decoration-purple/30 underline-offset-4 transition-colors"><strong className="text-white/90"> rideaux LED modulaires</strong></Link>.
                    </p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-purple/80 text-sm font-medium mt-3 flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                        Passez votre souris sur les cartes pour découvrir notre univers
                    </motion.p>
                </motion.div>
            </div>

            {/* Expandable Gallery */}
            <div className="w-full h-[850px] md:h-[600px] px-4 md:px-10 max-w-[1920px] mx-auto">
                <div className="flex flex-col md:flex-row gap-4 h-full">
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            onClick={() => setActiveId(item.id)}
                            onMouseEnter={() => setActiveId(item.id)}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border border-white/10 group ${activeId === item.id
                                ? "flex-[3] grayscale-0 shadow-[0_0_50px_rgba(203,82,238,0.2)]"
                                : "flex-1 grayscale hover:grayscale-0"
                                }`}
                        >
                            {/* Background Image */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${activeId === item.id
                                ? "from-black/90 via-black/40 to-transparent"
                                : "from-black/80 via-black/20 to-transparent"
                                }`} />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                <motion.div layout className="relative z-10">
                                    {/* Icon Badge */}
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${item.color} backdrop-blur-md`}>
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>

                                    <h3 className="text-2xl md:text-4xl font-black text-white font-orbitron mb-2 leading-none">
                                        {item.title}
                                    </h3>

                                    <p className="text-purple font-medium text-lg mb-4 opacity-90">
                                        {item.subtitle}
                                    </p>

                                    <AnimatePresence>
                                        {activeId === item.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p className="text-white/80 leading-relaxed text-base max-w-xl mb-6">
                                                    {item.id === 1 && (
                                                        <>
                                                            Nous révolutionnons vos espaces commerciaux parisiens avec des <Link href="/film-led-transparent" className="text-purple hover:underline">écrans LED transparents</Link> et modulaires de dernière génération. Une qualité d'image 4K exceptionnelle pour une communication visuelle impactante en Île-de-France.
                                                        </>
                                                    )}
                                                    {item.id === 2 && (
                                                        <>
                                                            Transformez vos boutiques et showrooms parisiens en destinations visuelles. Nous créons des <Link href="/mur-led-interieur" className="text-purple hover:underline">ambiances LED captivantes</Link> qui retiennent l'attention de vos clients et marquent durablement les esprits dans vos points de vente.
                                                        </>
                                                    )}
                                                    {item.id === 3 && (
                                                        <>
                                                            Vitrines, murs, escalators, poutres... Nous transformons chaque surface disponible de vos espaces commerciaux parisiens en opportunité de communication LED spectaculaire et rentable. Installation sur-mesure partout en France.
                                                        </>
                                                    )}
                                                </p>

                                                <Link
                                                    href="/a-propos"
                                                    className="inline-flex items-center gap-2 text-white font-semibold group/btn hover:text-purple transition-colors"
                                                >
                                                    En savoir plus
                                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </div>

                            {/* Border Glow on Active */}
                            {activeId === item.id && (
                                <div className="absolute inset-0 border-2 border-purple/30 rounded-3xl pointer-events-none" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl max-h-[800px] bg-purple/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        </section>
    );
};

export default CompanyPresentation;
