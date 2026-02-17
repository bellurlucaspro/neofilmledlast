import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { FaLocationArrow } from "react-icons/fa6";

const Approach = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="avantage">
      <section className="w-full py-20">
        <h1 className="heading text-center text-4xl font-bold">
          Personnalisez votre vitrine avec{" "}
          <span className="bg-gradient-to-r from-[#F35AFF] via-[#9F4CFF] to-[#00D8FF] text-transparent bg-clip-text">
            NEOFILMLED
          </span>
        </h1>
        <p className="text-center text-white mt-4 max-w-3xl mx-auto text-sm sm:text-base">
          Transformez votre espace de vente, salle de réunion, réception, front
          desk ou salle de spectacle grâce à une solution clé en main
          parfaitement adaptée à vos besoins et à votre projet.
        </p>

        {/* Première rangée de cartes */}
        <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
          <Card
            title="Auto-adhésif"
            icon={<AceternityIcon order="AUTO-ADHESIF" />}
            des="Facile à poser, il se fixe directement sur toutes vos surfaces vitrées sans nécessiter de support supplémentaire."
          />
          <Card
            title="Ultra fin"
            icon={<AceternityIcon order="ULTRA FIN" />}
            des="Avec une épaisseur minimale, il s’intègre facilement à toutes les surfaces sans altérer leur esthétique."
          />
          <Card
            title="Econome"
            icon={<AceternityIcon order="ECONOME" />}
            des="Réduisez votre consommation énergétique grâce à une technologie LED basse consommation."
          />
        </div>

        {/* Nouvelle rangée de cartes avec ajustement pour petits écrans */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 mt-[-4rem] sm:mt-[-4rem]">
          <Card
            title="Adaptable"
            icon={<AceternityIcon order="ADAPTABLE" />}
            des="Compatible avec toutes les surfaces, il s’adaptent à vos besoins et à votre espace sans contrainte."
          />
          <Card
            title="Modulaire"
            icon={<AceternityIcon order="MODULAIRE" />}
            des="Combinez plusieurs modules pour créer des affichages de tailles variées selon vos projets."
          />
          <Card
            title="Transparent"
            icon={<AceternityIcon order="TRANSPARENT" />}
            des="Préservez la visibilité tout en diffusant vos contenus avec une transparence optimale."
          />
        </div>
        <div className="mt-8 flex justify-center">
          <MagicButton
            title="Lancez la vidéo !"
            icon={<FaLocationArrow />}
            position="right"
            onClick={() => setShowVideo(true)}
          />
        </div>

        {/* Vidéo Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative bg-black rounded-lg shadow-lg overflow-hidden w-[90vw] max-w-4xl aspect-video">
              {/* Bouton "Fermer" */}
              <button
                className="absolute top-4 right-4 text-white bg-red-600 p-2 rounded-full hover:bg-red-700 transition z-50 focus:outline-none"
                onClick={() => setShowVideo(false)}
              >
                &#x2715;
              </button>
              {/* YouTube Iframe */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/CdHGDjHZVJc?autoplay=1&rel=0&modestbranding=1&loop=1&playlist=CdHGDjHZVJc"
                title="Présentation Neofilm"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[20rem] rounded-3xl "
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
