import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

export function TimelineDemo() {
  const data = [
    {
      title: (
        <div className="flex flex-col items-start">
          <div className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F35AFF] to-[#00D8FF] max-w-[18rem]">
            <span>Prenez le contrôle</span> <br />
            <span>de vos écrans LED</span>
          </div>
          <p className="text-neutral-400 text-sm md:text-base font-normal mt-4">
            ViPlex Handy est votre télécommande numérique pour écrans LED.
            Depuis votre smartphone ou tablette, gérez facilement plusieurs
            écrans, configurez des affichages dynamiques et contrôlez la lecture
            de vos contenus.
          </p>
        </div>
      ),
      content: (
        <div className="mt-6 flex justify-center sm:ml-[120px]">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg shadow-lg"
          >
            <Image
              src="/controleled.png"
              alt="Prenez le contrôle"
              width={300}
              height={300}
              className="rounded-lg shadow-lg sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]"
            />
          </motion.div>
        </div>
      ),
    },
    {
      title: (
        <div className="flex flex-col items-start">
          <div className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F35AFF] to-[#00D8FF] max-w-[18rem]">
            <span>Importez votre contenu & Planifiez vos diffusions</span>
          </div>
          <p className="text-neutral-400 text-sm md:text-base font-normal mt-4">
            Connectez votre smartphone au même réseau Wi-Fi que votre système
            d'affichage LED et envoyez vos vidéos directement via l'application
            ViPlex Handy. Planifiez et ajustez vos diffusions en temps réel,
            modifiez vos contenus, et gérez des affichages multizones. Il suffit
            de sélectionner la vidéo à diffuser et de diviser votre écran en
            zones distinctes pour un contenu varié. C'est aussi simple que cela
            !
          </p>
        </div>
      ),
      content: (
        <div className="mt-6 flex flex-row justify-center items-center gap-4 sm:ml-32">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg shadow-lg"
          >
            <Image
              src="/importerled.png"
              alt="Importer votre contenu"
              width={300}
              height={300}
              className="rounded-lg shadow-lg w-[150px] h-[150px] sm:w-[300px] sm:h-[300px]"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg shadow-lg"
          >
            <Image
              src="/planifierled.png"
              alt="Planifiez vos diffusions"
              width={300}
              height={300}
              className="rounded-lg shadow-lg w-[150px] h-[150px] sm:w-[300px] sm:h-[300px]"
            />
          </motion.div>
        </div>
      ),
    },
    {
      title: (
        <div className="flex flex-col items-start">
          <div className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F35AFF] to-[#00D8FF] max-w-[18rem]">
            <span>Diffusez instantanément</span>
          </div>
          <p className="text-neutral-400 text-sm md:text-base font-normal mt-4">
            Créez des expériences visuelles et sonores uniques. Adaptez vos
            contenus à la volée et personnalisez votre installation grâce à la
            possibilité de connecter une barre de son à votre film adhésif LED.
            Offrez à votre audience une expérience sur mesure.
          </p>
        </div>
      ),
      content: (
        <div className="mt-6 flex justify-center sm:ml-[120px]">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg shadow-lg"
          >
            <Image
              src="/diffuserled.png"
              alt="Diffusez instantanément"
              width={300}
              height={300}
              className="rounded-lg shadow-lg sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]"
            />
          </motion.div>
        </div>
      ),
    },
  ];

  return (
    <section id="utilisation">
      <div className="w-full mt-[40rem]">
        {/* Textes au-dessus */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F35AFF] to-[#00D8FF]">
            Gérer et diffusez vos vidéos instantanément
          </h1>
          <p className="mt-2 text-neutral-400 text-sm md:text-base max-w-4xl mx-auto">
            Notre plateforme web centralisée vous permet de gérer l’ensemble de
            votre réseau d’affichage digital. Créez, planifiez et diffusez vos
            contenus multimédias depuis n’importe quel appareil connecté à
            Internet. Les données sont hébergées dans le cloud pour une sécurité
            et une flexibilité optimales.
          </p>
        </div>
        {/* Timeline */}
        <Timeline data={data} />
      </div>
    </section>
  );
}

export default TimelineDemo;
