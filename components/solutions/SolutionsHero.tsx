"use client";

import React from "react";
import { motion } from "framer-motion";
import MagicButton from "../MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { BackgroundGradientAnimation } from "../ui/GradientBg";
import { Sparkles, Zap, Rocket } from "lucide-react";

const SolutionsHero = () => {
    const categories = [
        {
            id: "transparent",
            title: "Transparents",
            icon: <Sparkles className="w-6 h-6" />,
            color: "#CB52EE",
            gradient: "from-[#CB52EE] to-[#F35AFF]",
            description: "Films & Rideaux LED",
            link: "#transparent"
        },
        {
            id: "dynamisation",
            title: "Dynamisation",
            icon: <Zap className="w-6 h-6" />,
            color: "#00D8FF",
            gradient: "from-[#00D8FF] to-[#00707E]",
            description: "mur et écran led",
            link: "#dynamisation"
        },
        {
            id: "portable",
            title: "Portables",
            icon: <Rocket className="w-6 h-6" />,
            color: "#F35AFF",
            gradient: "from-[#F35AFF] to-[#CB52EE]",
            description: "Kakémonos & Totems",
            link: "#portable"
        }
    ];

    return (
        <div className="pb-32 pt-28 md:pt-36 relative overflow-hidden w-full bg-[#030014]">
            {/* Massive Background Aurora & Grid Container */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
                <BackgroundGradientAnimation
                    gradientBackgroundStart="transparent"
                    gradientBackgroundEnd="transparent"
                    firstColor="108, 0, 162"
                    secondColor="0, 112, 126"
                    thirdColor="203, 82, 238"
                    fourthColor="0, 216, 255"
                    fifthColor="108, 0, 162"
                    pointerColor="203, 82, 238"
                    size="60%"
                    blendingValue="soft-light"
                    className="z-0 opacity-40"
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 w-full h-full dark:bg-grid-white/[0.07] bg-grid-black-100/[0.2] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-10" />

                {/* Floating Orbs */}
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-1/4 w-64 h-64 bg-[#CB52EE]/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 40, 0],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-40 right-1/4 w-96 h-96 bg-[#00D8FF]/20 rounded-full blur-3xl"
                />
            </div>

            <div className="flex justify-center relative z-10 px-4">
                <div className="max-w-[89vw] md:max-w-6xl lg:max-w-[75vw] flex flex-col items-center">
                    {/* Animated Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 group hover:border-white/20 transition-all duration-500">
                            <div className="w-2 h-2 rounded-full bg-[#CB52EE] animate-pulse" />
                            <span className="text-sm font-orbitron tracking-wider text-white/80">
                                3 Familles d'Affichages LED Professionnels
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-center text-[45px] md:text-6xl lg:text-8xl font-black mt-4 font-orbitron tracking-tight leading-[1.1] text-white"
                    >
                        Solutions d'Affichage LED
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] via-[#00D8FF] to-[#F35AFF] animate-gradient">
                            Nouvelle Génération
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center md:tracking-wider mb-4 text-base md:text-lg lg:text-xl mt-8 text-white/70 max-w-3xl font-outfit leading-relaxed"
                    >
                        L'expertise technique au service de votre <strong className="text-white">visibilité</strong>.
                        Découvrez notre écosystème de solutions LED de pointe, conçues pour sublimer vos espaces
                        partout en <strong className="text-white">France</strong> et en <strong className="text-white">Europe</strong>.
                    </motion.p>

                    {/* Category Preview: HUD Neural Hub */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-6xl relative"
                    >
                        {/* Connecting Neural Lines (Desktop only) */}
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block -translate-y-1/2" />

                        {categories.map((category, index) => (
                            <motion.a
                                key={category.id}
                                href={category.link}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                                whileHover={{ y: -12 }}
                                className="group relative"
                            >
                                {/* Advanced Glow & Bloom */}
                                <div
                                    className="absolute inset-0 rounded-[2.5rem] blur-[40px] opacity-0 group-hover:opacity-40 transition-all duration-700 scale-110"
                                    style={{ backgroundColor: category.color }}
                                />

                                {/* Main Module Container */}
                                <div
                                    className="relative h-[320px] rounded-[2rem] bg-[#05011a]/80 backdrop-blur-3xl border-2 transition-all duration-500 overflow-hidden flex flex-col p-8 group-hover:bg-[#0a052a]"
                                    style={{
                                        borderColor: `${category.color}40`,
                                        boxShadow: `inset 0 0 30px ${category.color}10`
                                    }}
                                >
                                    {/* Scanlines Effect */}
                                    <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500"
                                        style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, ${category.color} 1px, ${category.color} 2px)` }} />

                                    {/* Dynamic Corner Brackets */}
                                    <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: category.color }} />
                                    <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: category.color }} />

                                    {/* Top Micro-labels */}
                                    <div className="flex justify-between items-start mb-8 relative z-10">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-black font-orbitron uppercase tracking-widest leading-none mb-1 opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: category.color }}>
                                                Core_Tech_v{index + 1}.0
                                            </span>
                                            <div className="h-0.5 w-6 rounded-full" style={{ backgroundColor: category.color }} />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: category.color }} />
                                            <span className="text-[8px] font-bold font-orbitron text-white/20 uppercase tracking-tighter">Statut: Actif</span>
                                        </div>
                                    </div>

                                    {/* Central Interaction Zone */}
                                    <div className="flex-grow flex flex-col items-center justify-center text-center relative z-10">
                                        <div
                                            className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-500"
                                            style={{
                                                background: `radial-gradient(circle at center, ${category.color}30 0%, transparent 70%)`,
                                                border: `1px solid ${category.color}20`
                                            }}
                                        >
                                            <div style={{ color: category.color }} className="relative z-10 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                                                {React.cloneElement(category.icon as React.ReactElement, { size: 36, strokeWidth: 1.5 })}
                                            </div>

                                            {/* Rotating Ring on Hover */}
                                            <div className="absolute inset-0 rounded-full border-2 border-dashed opacity-0 group-hover:opacity-20 animate-[spin_10s_linear_infinite]" style={{ borderColor: category.color }} />
                                        </div>

                                        <h3 className="text-3xl font-black font-orbitron text-white mb-2 tracking-tighter group-hover:scale-105 transition-transform">
                                            {category.title}
                                        </h3>
                                        <p className="text-white/40 font-outfit text-xs group-hover:text-white/70 transition-colors uppercase tracking-[0.2em]">
                                            {category.description}
                                        </p>
                                    </div>

                                    {/* Futuristic Footer CTA */}
                                    <div className="mt-6 flex items-center justify-between relative z-10 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                        <div className="flex gap-1">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-1 h-3 rounded-full opacity-30" style={{ backgroundColor: category.color }} />
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                                            <span className="text-[10px] font-bold font-orbitron text-white uppercase tracking-widest">Voir le Hub</span>
                                            <FaLocationArrow className="w-3 h-3 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </div>
                                    </div>

                                    {/* Background Decor Grid */}
                                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                                    {/* Bottom Animated Bar */}
                                    <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-white/50 to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                        style={{ backgroundImage: `linear-gradient(90deg, transparent, ${category.color}, transparent)` }} />
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex gap-4 mt-16 flex-wrap justify-center"
                    >
                        <a href="/contact">
                            <MagicButton
                                title="Demander un Devis"
                                icon={<FaLocationArrow />}
                                position="right"
                                otherClasses="bg-gradient-to-r from-[#CB52EE] to-[#00707E] font-orbitron hover:shadow-2xl hover:shadow-[#CB52EE]/50 transition-all duration-500"
                            />
                        </a>
                        <a href="#transparent">
                            <MagicButton
                                title="Explorer les Solutions"
                                icon={<FaLocationArrow />}
                                position="right"
                                otherClasses="border border-white/10 font-orbitron hover:bg-white/5 hover:border-white/20 transition-all duration-500"
                            />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SolutionsHero;

