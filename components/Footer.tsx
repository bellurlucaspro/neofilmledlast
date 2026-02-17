"use client";

import { Tabs } from "./ui/tabs";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Footer = () => {
  const tabs = [
    {
      title: "Pourquoi Nous ?",
      value: "product",
      content: (
        <div
          className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-2xl font-bold text-white"
          style={{
            marginTop: "0",
            backgroundColor: "#04071D", // Couleur de fond
            border: "1px solid #1C1F32", // Bordure fine ajoutée
          }}
        >
          <p className="mb-4">
            Pourquoi choisir{" "}
            <span
              className="font-extrabold font-orbitron"
              style={{
                background: "linear-gradient(90deg, #CB52EE 14%, #00707E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              NEOFILMLED ?
            </span>
          </p>
          <p className="text-base font-normal leading-relaxed">
            L'écran à film LED transparent représente une avancée innovante dans
            le domaine des technologies d'affichage. Il se distingue par une
            transparence remarquable, des couleurs éclatantes et une luminosité
            élevée. Grâce à la technologie invisible PCB ou Mesh, il peut
            atteindre une transparence de 95 % tout en conservant des capacités
            d'affichage exceptionnelles. Une fois éteint, le film LED offre une
            transparence quasi totale, se fondant parfaitement dans son
            environnement.
          </p>
          <div className="mt-6 flex justify-center sm:justify-start">
            <img
              src="/voiture.png"
              alt="Voiture avec film LED transparent"
              className="w-full max-w-[90%] sm:max-w-full sm:w-auto rounded-xl shadow-md transform scale-110 sm:scale-100 mx-auto sm:mx-0"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Effet whaouu !",
      value: "services",
      content: (
        <div
          className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-2xl font-bold text-white"
          style={{
            marginTop: "0",
            backgroundColor: "#04071D", // Couleur de fond
            border: "1px solid #1C1F32", // Bordure fine ajoutée
          }}
        >
          <div className="text-4xl font-bold bg-gradient-to-r from-[#CB52EE] to-[#00707E] text-transparent bg-clip-text font-orbitron">
            <TextGenerateEffect
              words="Effet WHAOUUU !!!"
              className="font-extrabold"
              duration={0.7}
              filter={true}
            />
          </div>
          <p className="mt-6 text-sm font-normal leading-relaxed">
            Offrez à votre clientèle un spectacle visuel avant même qu’elle
            n’ait franchi le pas de votre commerce ! Grâce à leur conception
            transparente, ces écrans créent une illusion spectaculaire, donnant
            l'impression que le contenu flotte dans les airs. Ils captivent
            immédiatement l'attention des passants et les immergent dans un
            univers visuel unique. Que ce soit pour promouvoir vos collections
            phares ou enrichir l'expérience en magasin, ces écrans garantissent
            une présentation dynamique et haute en couleur, devenant ainsi un
            véritable atout pour les commerces modernes.
          </p>
          <div className="mt-6 flex justify-center">
            <img
              src="/elevateur.png"
              alt="Écran LED sur un élévateur"
              className="w-full max-w-[85%] rounded-xl shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Espaces dynamiques",
      value: "playground",
      content: (

        <div
          className="w-full overflow-hidden relative rounded-2xl p-6 md:p-10 text-white bg-[#04071D] border border-[#1C1F32]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
            {/* Text Column */}
            <div className="flex flex-col justify-center" >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Digitalisez vos <br />
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] to-[#00707E] font-orbitron">
                  ESPACES INTÉRIEURS & COMMERCIAUX
                </span>
              </h3>
              <p className="text-base font-normal leading-relaxed text-neutral-300 mb-6">
                Transformez vos <strong className="text-white">façades vitrées</strong> et <strong className="text-white">parois intérieures</strong> en supports de communication percutants.
                Notre technologie de film LED transparent permet de créer des <strong className="text-white">murs vidéo</strong> sans occulter la lumière ni la vue, idéal pour les <strong className="text-white">centres commerciaux</strong>, <strong className="text-white">aéroports</strong> et <strong className="text-white">boutiques de luxe</strong>.
              </p>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
                  <span>Visibilité jour et nuit (Haute luminosité)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                  <span>Installation simple sur vitrage existant</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-pink-500"></span>
                  <span>Transparence architecturale préservée</span>
                </li>
              </ul>
            </div >

            {/* Images Column with Grid */}
            < div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full" >
              <div className="relative group overflow-hidden rounded-xl border border-white/10 h-48 sm:h-auto">
                <img
                  src="/espaceinterieur.png"
                  alt="Ecran LED Transparent Intérieur - Centre Commercial"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 flex items-end p-4">
                  <span className="text-white font-semibold text-sm">Design Intérieur</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl border border-white/10 h-48 sm:h-auto">
                <img
                  src="/espaceexterieur.png"
                  alt="Vitrine LED Haute Luminosité - Retail"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 flex items-end p-4">
                  <span className="text-white font-semibold text-sm">Vitrine Vidéo</span>
                </div>
              </div>
            </div >
          </div >
        </div >
      ),

    },
  ];

  return (
    <footer className="w-full pt-20 pb-30 relative">
      <div className="h-auto relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20 [perspective:200px]">
        <div className="relative w-full min-h-[40rem] md:min-h-[60rem] [transform-style:preserve-3d]">
          <Tabs
            tabs={tabs}
            containerClassName="mb-4"
            contentClassName="w-full"
            activeTabClassName="bg-gray-700 text-white"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
