"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import Link from "next/link";
import Image from "next/image";

const HomeSpecificHero = () => {
    // Animation variants
    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 }, // État initial
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        }, // État après animation
    };

    return (
        <section id="hero" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-[#030014]">
            {/* Aurora Background Stage */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
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
                    className="z-0 opacity-50"
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 w-full h-full dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] z-10" />
            </div>

            {/* Split Content Layer */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-32 h-full">

                {/* LEFT: Text Content */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-24 md:pt-0 max-w-[550px] z-10">
                    {/* Badge */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInVariants}
                        className="mb-6"
                    >
                        <div className="flex justify-center items-center px-6 py-2 rounded-lg text-white font-black text-sm md:text-base transform hover:scale-105 transition-transform font-orbitron tracking-[0.2em]"
                            style={{ background: "linear-gradient(to right, #CB52EE, #00707E)" }}>
                            SIGNALÉTIQUE LED INNOVANTE
                        </div>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInVariants}
                        className="text-3xl md:text-5xl lg:text-6xl font-black italic text-white leading-tight mb-6 font-orbitron tracking-normal"
                    >
                        L'art de la signalétique LED innovante en France
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInVariants}
                        className="text-gray-300 text-sm md:text-lg max-w-lg mb-8 font-outfit"
                    >
                        Spécialiste de la signalétique LED de pointe pour l'indoor. Nous habillons et transformons n'importe quelle surface en un puissant outil de communication vidéo.
                    </motion.p>

                    {/* Premium CTA Button */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInVariants}
                    >
                        <Link href="/solutions" className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent overflow-hidden rounded-full transition-all duration-300">
                            {/* Animated Background Gradient */}
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#CB52EE] to-[#00707E] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Shine Effect */}
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                            {/* Inner Glow */}
                            <div className="absolute inset-[2px] rounded-full bg-black/40 group-hover:bg-black/20 transition-colors duration-300 backdrop-blur-sm" />

                            {/* Content */}
                            <div className="relative z-10 flex items-center gap-3">
                                <span className="text-white font-bold font-orbitron tracking-wide text-base group-hover:tracking-wider transition-all duration-300">
                                    NOS SOLUTIONS LED
                                </span>
                                <FaLocationArrow className="text-white text-sm group-hover:rotate-45 transition-transform duration-300" />
                            </div>

                            {/* Outer Glow on Hover */}
                            <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/50 group-hover:shadow-[0_0_30px_rgba(203,82,238,0.4)] transition-all duration-300" />
                        </Link>
                    </motion.div>
                </div>

                {/* RIGHT: Image (Full visibility - Massive Scale) */}
                <div className="flex-1 w-full h-[40vh] md:h-full flex items-end justify-center md:justify-end relative z-0">
                    <Image
                        src="/robotlady.png"
                        alt="Robot LED Display - NEOFILM Innovation"
                        width={800}
                        height={1200}
                        priority
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="absolute bottom-0 right-0 lg:-right-48 h-[65vh] lg:h-[80vh] w-auto max-w-none object-contain object-bottom scale-x-[-1]"
                        style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default HomeSpecificHero;
