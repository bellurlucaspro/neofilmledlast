"use client";

import { FaLocationArrow } from "react-icons/fa6"; // Assurez-vous de cet import correct
import MagicButton from "./MagicButton";
import Link from "next/link";
import { motion } from "framer-motion"; // Import de framer-motion

const Resolution = () => {
  return (
    <section id="resolution">
      <section className="relative w-full h-auto">
        {/* Texte principal */}
        <motion.div
          className="absolute top-10 left-10 z-10"
          initial={{ opacity: 0, x: 100 }} // Départ : invisible, décalé à droite
          whileInView={{ opacity: 1, x: 0 }} // Apparition : visible, position normale
          viewport={{ once: true, amount: 0.2 }} // Déclenchement à 20% visible, une seule fois
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation fluide
        >
          <div>
            {/* Barre à gauche de "Sur mesure" */}
            <div className="absolute -left-6 top-[5px] w-[2px] h-[7.8rem] bg-white/20" />
            <p className="text-white font-bold uppercase text-2xl tracking-wide">
              Sur mesure
            </p>
            {/* Texte avec span pour appliquer le dégradé */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
              <span
                style={{
                  background: "linear-gradient(90deg, #00D8FF 0%, #F35AFF 63%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                CHOISISSEZ LA RÉSOLUTION <br /> QUI VOUS CONVIENT
              </span>
            </h2>
          </div>
          {/* Image "pixeleds.png" positionnée sous le texte */}
          <div className="mt-10 flex justify-center">
            <img
              src="/pixeleds.png"
              alt="Pixel LEDs"
              className="w-[500px] md:w-[600px] h-auto"
            />
          </div>
          {/* Textes explicatifs centrés en dessous de l'image */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-white font-bold">Pitch 2.5</p>
              <p className="text-gray-300 text-sm">Luminosité ≥ 1200 CD/M²</p>
            </div>
            <div>
              <p className="text-white font-bold">Pitch 3.9</p>
              <p className="text-gray-300 text-sm">Luminosité ≥ 3000 CD/M²</p>
            </div>
            <div>
              <p className="text-white font-bold">Pitch 6.25</p>
              <p className="text-gray-300 text-sm">Luminosité ≥ 5000 CD/M²</p>
            </div>
          </div>
          {/* Texte en dessous */}
          <div className="mt-24 text-left relative">
            {/* Barre à gauche de "MESUREZ" */}
            <div className="absolute -left-6 top-1 w-[2px] h-[4.5rem] bg-white/20" />
            <h3 className="text-3xl md:text-4xl font-bold">
              <span
                style={{
                  background: "linear-gradient(90deg, #00D8FF 0%, #F35AFF 63%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                MESUREZ LA SURFACE VITRÉE <br /> À COUVRIR EN MÈTRES CARRÉS
              </span>
            </h3>
          </div>
          {/* Bouton "Contactez-nous" */}
          <div className="mt-8 flex justify-start">
            <Link href="#contact">
              <MagicButton
                title="Contactez-nous"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </div>
        </motion.div>

        {/* Image principale fixée à droite */}
        <div
          className="absolute top-0 right-0 h-full w-auto hidden md:block"
          style={{ transform: "translateX(320px)" }} // Ajustement pour aligner l'image à droite
        >
          <img
            src="/leds.png"
            alt="LED matrix"
            className="h-full object-cover"
          />
        </div>

        {/* Espacement pour éviter le chevauchement */}
        <div className="h-[800px]"></div>
      </section>
    </section>
  );
};

export default Resolution;
