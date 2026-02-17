import { useState } from "react";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web"; // Import pour la lueur animée

const RecentProjects = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const cardsData = [
    {
      title: "Centres Commerciaux",
      description: "Dynamisez vos vitrines avec un affichage LED innovant. (Cliquez pour voir la démo)",
      image: "/ctrcommerciauxneofilm.png",
      video: "https://www.youtube.com/embed/Fm3GAikoIjg",
    },
    {
      title: "Cinémas",
      description: "Mettez vos films en lumière grâce aux écrans LED. (Cliquez pour voir la démo)",
      image: "/cinemaneofilm.png",
      video: "https://www.youtube.com/embed/SuObjEH-Ioo",
    },
    {
      title: "Restaurants",
      description: "Créez une ambiance unique avec des écrans modernes.",
      image: "/barneofilm.jpg",
    },
    {
      title: "Pharmacies",
      description: "Attirez l’attention avec une vitrine LED informative.",
      image: "/pharmaneofilm.jpeg",
    },
    {
      title: "Aéroports & Gares",
      description: "Orientez les voyageurs avec style et innovation.",
      image: "/aeroneofilm.png",
    },
    {
      title: "Coworking",
      description: "Modernisez vos espaces avec des écrans interactifs.",
      image: "/coworkingneofilm.png",
    },
  ];

  return (
    <section id="projets" className="relative">
      <div className="py-20 relative">
        {/* Section gauche avec le robot (inchangée) */}
        <div
          className="absolute top-[500px] left-[-700px] transform -translate-y-1/2 hidden lg:block"
          style={{
            maxHeight: "450px",
            zIndex: 1,
          }}
        >
          <img
            src="/robotlady.png"
            alt="Robot Lady"
            className="object-cover max-h-[1000px]"
          />
        </div>

        {/* Section texte */}
        <div className="relative z-10">
          <h1 className="heading text-center">
            Laissez aller votre{" "}
            <span
              className="font-bold"
              style={{
                background: "linear-gradient(90deg, #F35AFF, #00D8FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              imagination
            </span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white mt-6 text-center">
            NEOFILM - Un film transparent adhésif à LED qui s’adapte à toutes
            les entreprises
          </p>
        </div>

        {/* Fond gris (inchangé) */}
        <div
          className="absolute inset-x-0 mt-10 mx-auto hidden lg:block"
          style={{
            backgroundColor: "#D9D9D9",
            opacity: 0.13,
            borderRadius: "15px",
            height: "1050px",
            zIndex: 0,
          }}
        ></div>

        {/* Cartes */}
        <div className="relative mt-[-25px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 p-4 sm:p-4 z-20">
          {cardsData.map((card, index) => (
            <CardContainer
              key={index}
              className="relative w-full max-w-full sm:max-w-[340px] md:max-w-[360px] lg:max-w-[340px] bg-[#000319] rounded-xl p-4 sm:p-4 mx-auto"
            >
              <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-[#F35AFF]/[0.1] border-black/[0.1] h-auto">
                <CardItem
                  translateZ="50"
                  className="text-xl sm:text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {card.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                >
                  {card.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-2">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={300}
                    height={200}
                    className="h-48 sm:h-42 md:h-50 lg:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-4 sm:mt-6">
                  {card.video ? (
                    <CardItem
                      translateZ={20}
                      as="button"
                      onClick={() => setCurrentVideo(card.video)}
                      className="px-3 py-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold hover:shadow-lg transition-all"
                    >
                      ▶ Voir la vidéo
                    </CardItem>
                  ) : (
                    <CardItem
                      translateZ={20}
                      as="div"
                      className="px-3 py-2 rounded-xl text-xs font-normal dark:text-white cursor-pointer"
                    >
                      <Link href="#contact">Prendre rdv →</Link>
                    </CardItem>
                  )}

                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-3 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Contact
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {currentVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setCurrentVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
            >
              ✕
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`${currentVideo}?autoplay=1&rel=0&modestbranding=1`}
              title="Project Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default RecentProjects;
