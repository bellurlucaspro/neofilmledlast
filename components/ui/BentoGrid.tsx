import { useState } from "react";
import { useSpring, animated } from "@react-spring/web"; // Pour les animations
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento flex flex-col space-y-4",
        className,
        id === 6
          ? "shadow-input dark:shadow-none" // Pas d'animation pour id === 6
          : "hover:shadow-xl transition duration-200 shadow-input dark:shadow-none" // Animation pour les autres
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Bande avec texte pour la boîte 1 */}
      {id === 1 && (
        <div className="relative">
          <div
            className="absolute top-0 left-0 right-0 z-10 py-2 px-4 rounded-t-3xl"
            style={{
              backgroundColor: "#01031A",
            }}
          >
            <p
              className="text-lg md:text-xl lg:text-2xl font-bold text-center"
              style={{
                background: "linear-gradient(90deg, #F35AFF, #00D8FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              TRANSFORMEZ VOS VITRINE EN AFFICHE VIDÉO
            </p>
          </div>

          {/* Texte en dessous en blanc */}
          <div className="absolute top-12 left-0 right-0 px-4">
            <p className="text-sm md:text-base lg:text-lg font-light text-white text-center">
              Donnez un style infini à votre vitrine grâce à notre film
              transparent à LED !
            </p>
          </div>
        </div>
      )}

      {/* Bande avec texte pour la boîte 2 */}
      {id === 2 && (
        <div className="relative">
          {/* Bande supérieure avec le texte en dégradé */}
          <div
            className="absolute top-0 left-0 right-0 z-10 py-1 px-4 rounded-t-3xl"
            style={{
              backgroundColor: "#01031A",
            }}
          >
            <p
              className="text-sm md:text-lg lg:text-xl font-bold text-center"
              style={{
                background: "linear-gradient(90deg, #F35AFF, #00D8FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              IMPACTANT
            </p>
          </div>
        </div>
      )}

      {/* Boîte avec id === 3 */}
      {id === 3 && (
        <div className="relative">
          {/* Bande supérieure avec le texte en dégradé */}
          <div
            className="absolute top-0 left-0 right-0 z-10 py-1"
            style={{
              backgroundColor: "#01031A", // Nouvelle couleur de la bande
            }}
          >
            <p
              className="text-sm md:text-lg lg:text-xl font-bold text-center"
              style={{
                background: "linear-gradient(90deg, #F35AFF, #00D8FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SOUPLESSE
            </p>
          </div>

          {/* Contenu principal avec suppression des éléments inutiles */}
          <div className="w-full h-full absolute z-0">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center ")}
              />
            )}
          </div>
        </div>
      )}
      {/* Boîte avec id === 4 */}
      {id === 4 && (
        <div className="relative">
          <div
            className="absolute top-0 left-0 right-0 z-10 py-1"
            style={{
              backgroundColor: "#01031A",
            }}
          >
            <p
              className="text-sm md:text-lg lg:text-xl font-bold text-center"
              style={{
                background: "linear-gradient(90deg, #F35AFF, #00D8FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              LA NOUVELLE ÈRE DES ÉCRANS EST LÀ
            </p>
          </div>
          <div className="w-full h-full absolute z-0">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center")}
              />
            )}
          </div>
        </div>
      )}

      {/* Contenu principal */}
      <div className="w-full h-full absolute z-0">
        {img && (
          <img
            src={img}
            alt={img}
            className={cn(imgClassName, "object-cover object-center ")}
          />
        )}
      </div>

      <div
        className={`absolute right-0 -bottom-5 ${
          id === 5 && "w-full opacity-80"
        }`}
      >
        {spareImg && (
          <img
            src={spareImg}
            alt={spareImg}
            className="object-cover object-center w-full h-full"
          />
        )}
      </div>

      <div
        className={cn(
          titleClassName,
          "relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          {description}
        </div>
        <div
          className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
        >
          {title}
        </div>

        {(id === 5 || id === 6) && (
          <div
            className="absolute top-[-20px] left-0 right-0 z-20 py-2 rounded-t-3xl"
            style={{
              backgroundColor: "#01031A", // Couleur sombre pour la barre
            }}
          >
            <p
              className="text-sm md:text-lg lg:text-xl font-bold text-center"
              style={{
                background: "linear-gradient(90deg, #F35AFF, #00D8FF)", // Texte en dégradé
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {id === 5 ? "94% TRANSPARENCE" : "POSE FACILE"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const GradientGlow = () => {
  const glowStyles = useSpring({
    loop: true,
    from: { opacity: 0.3, scale: 1 },
    to: { opacity: 0.7, scale: 1.1 },
    config: { duration: 3000 },
  });

  return (
    <animated.div
      style={{
        ...glowStyles,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "1000px",
        height: "1000px",
        background: "linear-gradient(90deg, #00D8FF, #F35AFF)",
        filter: "blur(200px)",
        borderRadius: "50%",
        zIndex: 1000,
        pointerEvents: "none",
      }}
    />
  );
};

export const EnhancedBentoGrid = () => {
  return (
    <div className="relative">
      {/* Gradient Glow */}
      <GradientGlow />

      {/* Grid Container */}
      <BentoGrid className="relative z-10">
        <BentoGridItem
          id={1}
          title="Vitrine Vidéo"
          description="Transformez vos vitrines en affiche vidéo !"
        />
        <BentoGridItem
          id={2}
          title="Impactant"
          description="Un impact visuel impressionnant."
        />
        <BentoGridItem
          id={3}
          title="Souplesse"
          description="Flexible et moderne."
        />
        <BentoGridItem
          id={4}
          title="Nouvelle Ère"
          description="Découvrez les écrans du futur."
        />
        <BentoGridItem
          id={5}
          title="94% Transparence"
          description="Clarté et performance."
        />
        <BentoGridItem
          id={6}
          title="Pose Facile"
          description="Installation simple et rapide."
        />
      </BentoGrid>
    </div>
  );
};
