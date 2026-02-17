"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

const Package = () => {
  const tabs = [
    {
      title: "Achat",
      value: "basic",
      content: (
        <div
          className="relative w-full overflow-hidden rounded-2xl p-10 text-xl md:text-2xl font-bold text-white border border-neutral-700"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            marginTop: "0",
          }}
        >
          {/* Croix dans les coins */}
          <div className="absolute inset-0 pointer-events-none">
            <span className="absolute w-3 h-3 border-t border-l border-neutral-500 top-0 left-0"></span>
            <span className="absolute w-3 h-3 border-t border-r border-neutral-500 top-0 right-0"></span>
            <span className="absolute w-3 h-3 border-b border-l border-neutral-500 bottom-0 left-0"></span>
            <span className="absolute w-3 h-3 border-b border-r border-neutral-500 bottom-0 right-0"></span>
          </div>

          {/* Titre "Achat" centré en haut */}
          <h3 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-transparent bg-clip-text bg-gradient-to-r from-[#F35AFF] to-[#00D8FF] font-extrabold text-4xl">
            ACHAT
          </h3>

          {/* Contenu : texte à gauche et image à droite */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Texte à gauche */}
            <div className="mt-16">
              <h3 className="text-white text-lg font-bold mb-4">
                Vous souhaitez habiller vos vitrines ou dynamiser vos espaces
                intérieurs, pour accueillir vos clients dans un environnement
                époustouflant ?
              </h3>
              <p className="text-neutral-400 text-sm md:text-base mb-4">
                Le NEOFILM : la liberté créative à portée de main. Ce film LED
                transparent ultra-fin et léger vous permet de créer des
                installations personnalisées et modulables. Recouvrez une
                surface entière ou dispersez plusieurs films pour un effet
                encore plus spectaculaire. Grâce à son application intuitive,
                vous pouvez contrôler vos contenus à distance et les modifier en
                temps réel. Vous êtes un architecte, un designer, ou un
                commerçant ? Contactez-nous pour discuter de votre projet.
              </p>
              <p className="text-neutral-400 text-sm md:text-base mb-4">
                NEOFILM est fait pour vous ! Pour cela rien de plus simple :
              </p>
              <ul className="list-disc list-inside text-neutral-400 text-sm md:text-base">
                <li>Mesurez la surface vitrée que vous souhaitez recouvrir</li>
                <li>Prenons rendez-vous pour en discuter !</li>
              </ul>
            </div>

            {/* Image à droite */}
            <div className="flex justify-end items-center mt-4 mr-[-50px]">
              <Image
                src="/achatfilm.png"
                alt="Film LED transparent"
                width={550}
                height={550}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Abonnement",
      value: "ultra",
      content: (
        <div
          className="relative w-full overflow-hidden rounded-2xl p-10 text-xl md:text-2xl font-bold text-white border border-neutral-700"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            marginTop: "0",
          }}
        >
          {/* Titre "Abonnement" centré en haut */}
          <h3 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-transparent bg-clip-text bg-gradient-to-r from-[#F35AFF] to-[#00D8FF] font-extrabold text-4xl">
            ABONNEMENT
          </h3>

          {/* Sous-titre */}
          <h4 className="text-center text-lg font-semibold text-neutral-400 mt-6 mb-6">
            La publicité extérieure à votre portée
          </h4>

          {/* Contenu : texte à gauche et image à droite */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Texte à gauche */}
            <div>
              <p className="text-neutral-400 text-sm md:text-base mb-8">
                La publicité extérieure était réservée aux grandes entreprises ?
                Plus maintenant ! Avec notre réseau de panneaux LED, vous
                bénéficiez d'une solution de communication visuelle performante
                et accessible à tous.
              </p>
              <p className="text-neutral-400 text-sm md:text-base mb-4">
                Faites rayonner votre marque au cœur de la ville :
              </p>
              <ul className="list-disc list-inside text-neutral-400 text-sm md:text-base mb-4">
                <li>
                  Visibilité garantie dans les zones les plus fréquentées.
                </li>
                <li>
                  Personnalisation : adaptez vos contenus à vos objectifs.
                </li>
                <li>Changez votre publicité instantanément.</li>
              </ul>
              <p className="text-neutral-400 text-sm md:text-base">
                Vous souhaitez augmenter votre visibilité et attirer de nouveaux
                clients ? Contactez-nous dès maintenant pour découvrir nos
                formules d’abonnement.
              </p>
            </div>

            {/* Image à droite */}
            <div className="flex justify-center sm:justify-end items-center">
              <Image
                src="/abonnementimg.png"
                alt="Publicité LED"
                width={400}
                height={400}
                className="rounded-xl shadow-lg w-[200px] h-[200px] sm:w-[400px] sm:h-[400px]"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="offre">
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F35AFF] to-[#00D8FF] mb-10">
            Choisissez votre package
          </h2>
          <div className="relative w-full min-h-[40rem] md:min-h-[50rem]">
            <Tabs
              tabs={tabs}
              containerClassName="mb-6"
              activeTabClassName="bg-gray-700 text-white"
              tabClassName="text-sm md:text-base font-medium px-6 py-2"
              contentClassName="w-full"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Package;