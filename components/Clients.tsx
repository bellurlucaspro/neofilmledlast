"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { useSpring, animated } from "@react-spring/web"; // Pour la lueur animée
import Link from "next/link";

const Clients = () => {
  return (
    <section className="w-full py-20 relative">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* GIF avec animation */}
        <div className="relative flex-1">
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.1 }} // Animation au survol (agrandissement)
            transition={{ duration: 0.3 }} // Durée de la transition
          >
            <Image
              src="/gifsection.gif"
              alt="Écran LED Transparent"
              width={600}
              height={1000} // Ajustement de la taille
              className="rounded-xl shadow-lg border-2 border-[#00D8FF]"
            />
          </motion.div>
        </div>

        {/* Contenu texte et icônes à droite */}
        <div className="flex-1 text-center md:text-left">
          {/* Titre avec dégradé */}
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F35AFF] to-[#00D8FF] mb-4 leading-tight">
            ÉCRAN LED <br /> TRANSPARENT
          </h2>

          {/* Logos */}
          <div className="mb-4 flex justify-center md:justify-start">
            <Image
              src="/logoledtransparent.png"
              alt="Logos LED Transparent"
              width={200}
              height={50}
              className="opacity-80"
            />
          </div>

          {/* Description */}
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-2">
            Transformez n'importe quelle vitre en écran diffusant vos médias,
            depuis votre smartphone !
          </p>

          {/* Bouton directement sous le texte */}
          <div className="flex justify-center md:justify-start">
            <Link href="#contact">
              <MagicButton
                title="Contactez-nous"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
