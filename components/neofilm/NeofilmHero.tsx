"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import MagicButton from "../MagicButton";
import { BackgroundGradientAnimation } from "../ui/GradientBg";

const NeofilmHero = () => {

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
        <section id="hero">
            <div className="pb-20 pt-28 md:pt-36">
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 w-full h-full dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] z-10" />
                </div>

                <div className="flex justify-center relative my-16 md:my-20 z-10 px-4">
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
                        {/* Cadre FILM LED ADHÉSIF avec effet d'apparition (SEO H2) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInVariants}
                            className="self-center mb-6"
                        >
                            <div className="flex justify-center items-center px-6 py-2 rounded-lg text-white font-black text-sm md:text-base transform hover:scale-105 transition-transform font-orbitron tracking-[0.2em]"
                                style={{ background: "linear-gradient(to right, #F35AFF, #FF2D85, #00D8FF)" }}>
                                FILM LED ADHÉSIF
                            </div>
                        </motion.div>

                        {/* Texte principal (SEO H1) */}
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInVariants}
                            className="text-center text-3xl md:text-5xl lg:text-6xl font-black italic bg-clip-text text-transparent bg-gradient-to-r from-[#F35AFF] via-[#FF2D85] to-[#00D8FF] leading-tight mt-6 px-4 font-orbitron transition-all"
                        >
                            FILM LED TRANSPARENT POUR VITRINE
                        </motion.h1>

                        {/* Texte secondaire avec effet d'apparition (SEO Description) */}
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInVariants}
                            className="text-center text-sm md:text-sm lg:text-base text-white mt-4 px-4 mb-8 leading-relaxed max-w-4xl mx-auto"
                        >
                            Transformez n'importe quelle <strong className="font-semibold text-purple-200">surface vitrée</strong> en un <strong className="font-semibold text-cyan-200">écran vidéo dynamique</strong> haute définition.
                            Une solution d'affichage numérique invisible une fois éteinte, et spectaculaire une fois allumée, idéale pour capter l'attention dans vos points de vente.
                        </motion.p>

                        {/* Vidéo Intégrée avec Design Premium */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInVariants}
                            className="relative w-[90vw] md:w-[70vw] lg:w-[60vw] aspect-video mx-auto mb-12 group"
                        >
                            {/* Glow Effect arrière */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                            {/* Container principal */}
                            <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden border border-white/10 ring-1 ring-white/10 shadow-2xl">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/CdHGDjHZVJc?autoplay=1&rel=0&showinfo=0&modestbranding=1&loop=1&playlist=CdHGDjHZVJc"
                                    title="Présentation Neofilm"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full transform scale-[1.01]" // Légère échelle pour éviter les bords blancs
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInVariants}
                        >
                            <a href="#offre">
                                <MagicButton
                                    title="Nos solutions LED"
                                    icon={<FaLocationArrow />}
                                    position="right"
                                    otherClasses="bg-gradient-to-r from-[#F35AFF] via-[#FF2D85] to-[#00D8FF] font-orbitron"
                                />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NeofilmHero;
