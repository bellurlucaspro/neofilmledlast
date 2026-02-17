"use client";

import { motion } from "framer-motion";
import MagicButton from "../MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "../ui/Spotlight";

const HomeHero = () => {
    return (
        <div className="pb-20 pt-36">
            {/* Spotlights */}
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            {/* UI: grid background */}
            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
            >
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
       bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div className="flex justify-center relative my-20 z-10 px-4">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"
                    >
                        Leader Français de l'Innovation LED
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold mt-5"
                    >
                        NEOFILM LED : Le{" "}
                        <span className="text-purple">Film LED Transparent</span>
                        <br />
                        qui Révolutionne vos Vitrines
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl mt-10 text-white/80"
                    >
                        Spécialiste de la <strong>signalétique LED innovante</strong>, NEOFILM LED transforme
                        n'importe quelle surface vitrée en <strong>écran vidéo haute définition</strong>.
                        Découvrez notre technologie d'<strong>affichage LED transparent</strong> pour maximiser
                        votre visibilité et captiver votre audience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex gap-4 mt-10 flex-wrap justify-center"
                    >
                        <a href="/solutions">
                            <MagicButton
                                title="Découvrir nos Solutions"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                        <a href="/contact">
                            <MagicButton
                                title="Demander un Devis"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
