"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
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

        {/* UI: grid */}
        <div
          className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
        >
          {/* Radial gradient for the container */}
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <div className="flex justify-center relative my-16 md:my-20 z-10 px-4">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
            {/* Cadre ÉCRAN TRANSPARENT avec effet d'apparition */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInVariants}
              className="self-start mb-2 ml-0 md:ml-[9%] lg:ml-[11%]"
            >
              <div
                className="flex justify-center items-center px-6 md:px-8 py-2 md:py-3 rounded-lg text-white font-semibold text-sm md:text-base lg:text-xl"
                style={{
                  background: "linear-gradient(to right, #F35AFF, #00D8FF)",
                }}
              >
                ÉCRAN TRANSPARENT
              </div>
            </motion.div>

            {/* Image NEOFILMLED avec effet d'apparition */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInVariants}
              className="flex justify-center items-center my-4 w-full"
            >
              <img
                src="/logoneofilm.png"
                alt="Logo Neofilm"
                className="w-[100%] md:w-[90%] lg:w-[85%] h-auto"
              />
            </motion.div>

            {/* Texte principal avec effet d'apparition */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInVariants}
              className="text-center text-lg md:text-2xl lg:text-3xl font-semibold italic bg-clip-text text-transparent bg-gradient-to-r from-[#F35AFF] to-[#00D8FF] mt-6 px-4"
            >
              L'important ça n'est pas la vue, mais d'être vu !
            </motion.p>

            {/* Texte secondaire avec effet d'apparition */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInVariants}
              className="text-center text-sm md:text-sm lg:text-base text-white mt-4 px-4"
            >
              Découvrez un film adhésif transparent à LED capable de transformer
              n'importe quelle vitrine en un mur vidéo 3D
            </motion.p>

            {/* Bouton avec téléchargement */}
            <motion.a
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInVariants}
              href="/presentation.pdf" // Chemin vers le fichier PDF
              download="presentation.pdf" // Nom du fichier téléchargé
              className="mt-6"
            >
              <MagicButton
                title="Notre Solution"
                icon={<FaLocationArrow />}
                position="right"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
