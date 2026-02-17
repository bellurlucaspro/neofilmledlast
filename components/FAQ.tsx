"use client";

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web"; // Import pour la lueur animée

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qu’est-ce que le NEOFILM LED ?",
      answer:
        "Neofilm est un film adhésif transparent à LED, permettant de transformer n'importe quelle surface vitrée ou Plexiglas en un vitrage vidéo dynamique, pouvant diffuser des vidéos 3D et RA. Ce film transparent permet de couvrir des espaces vitrés XXL offrant une expérience immersive indescriptible. Vous pouvez également dissocier chaque film transparent pour diffuser différents contenus vidéo en simultané.",
    },
    {
      question: "La gestion des vidéos est-elle simple ?",
      answer:
        "Absolument ! Le système est livré avec un contrôleur (box) facile d'utilisation. Vous pouvez charger vos contenus (mp4, jpg...) via un pc, une clé USB, un câble HDMI ou via le cloud pour une gestion à distance. C'est aussi simple que de gérer un second écran d'ordinateur.",
    },
    {
      question: "Une solution transparente",
      answer:
        "Léger comme une plume et facile à installer, NEOFILM est la solution d'affichage LED adhésive la plus discrète du marché. Sa transparence jusqu'à 95% vous permet de conserver la luminosité naturelle de vos espaces et la vue sur l'extérieur.",
    },
    {
      question: "Comment installer le NEOFILM ?",
      answer:
        "Le film est auto-adhésif et se colle directement sur la face intérieure de votre vitrage existant. Pas besoin de gros travaux de structure. Nos équipes s'occupent de la pose pour garantir un résultat parfait sans bulles ni plis.",
    },
    {
      question: "Quelle est la garantie ?",
      answer:
        "Nos films LED sont garantis 2 ans pièces et main d'œuvre. Nous proposons également des contrats de maintenance pour assurer la pérennité de votre installation au-delà de cette période.",
    },
    {
      question: "Puis-je l'installer sur n'importe quel vitre ?",
      answer:
        "Oui, tant que la surface est lisse, propre et en verre (ou plexiglas). Le film est découpable et modulable pour s'adapter à toutes les formes et tailles de vitrages, même courbes.",
    },
    {
      question: "Quelle est la durée de vie ?",
      answer:
        "La durée de vie estimée des LED est supérieure à 100 000 heures (soit plus de 10 ans en utilisation continue), grâce à une dissipation thermique optimisée et une faible consommation électrique.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  // Style dynamique basé sur la taille de l'écran
  const getDynamicMargin = () => {
    if (typeof window !== "undefined") {
      if (window?.innerWidth <= 640) return "700px"; // Mobile
      if (window?.innerWidth <= 1024) return "420px"; // Tablettes
      return "270px"; // Ordinateurs
    }
  };

  return (
    <section
      className="w-full py-20 relative" // Relative pour la position de la lueur
      style={{
        backgroundColor: "#1C1F32",
        color: "#FFF",
        borderRadius: "15px", // Rayon de bordure
        maxWidth: "900px", // Réduction de la largeur
        margin: `${getDynamicMargin()} auto`, // Marges dynamiques
      }}
    >
      <div className="px-4 relative z-10">
        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#F35AFF] to-[#00D8FF] mb-10">
          Questions Fréquemment Posées
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-4 border border-neutral-700 rounded-lg"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3
                  className="text-lg font-bold"
                  style={{ color: openIndex === index ? "#F35AFF" : "#FFF" }}
                >
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                  style={{ color: "#F35AFF" }}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-neutral-400 text-sm md:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
