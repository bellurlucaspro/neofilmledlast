"use client";

import { FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa"; // Icônes des réseaux sociaux

const Footervrai = () => {
  return (
    <footer className="w-full bg-[#1C1F32] text-white mt-20 py-12 rounded-t-[15px]">
      {/* Conteneur centré */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
        {/* Section "Suivez-nous" */}
        <div>
          <h2 className="text-lg font-extrabold mb-2">SUIVEZ-NOUS</h2>
          <p
            className="text-sm mb-4"
            style={{
              background: "linear-gradient(90deg, #F35AFF 0%, #00D8FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Suivez notre actualité sur nos réseaux sociaux
          </p>
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-white hover:scale-105 transition"
              style={{
                background: "linear-gradient(90deg, #00D8FF, #F35AFF)",
              }}
            >
              <FaLinkedin size={20} />
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-white hover:scale-105 transition"
              style={{
                background: "linear-gradient(90deg, #00D8FF, #F35AFF)",
              }}
            >
              <FaYoutube size={20} />
            </a>
            {/* TikTok */}
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-white hover:scale-105 transition"
              style={{
                background: "linear-gradient(90deg, #00D8FF, #F35AFF)",
              }}
            >
              <FaTiktok size={20} />
            </a>
          </div>
          {/* Texte "À venir bientôt" */}
          <p className="mt-4 text-gray-300 text-sm">À venir bientôt !</p>
        </div>

        {/* Section "Navigation" */}
        <div>
          <h2 className="text-lg font-extrabold mb-2">Navigation</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#hero"
                className="text-[#00D8FF] hover:underline transition"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#secteur"
                className="text-[#00D8FF] hover:underline transition"
              >
                Secteurs
              </a>
            </li>
            <li>
              <a
                href="#avantage"
                className="text-[#00D8FF] hover:underline transition"
              >
                Avantages
              </a>
            </li>
            <li>
              <a
                href="#resolution"
                className="text-[#00D8FF] hover:underline transition"
              >
                Resolutions
              </a>
            </li>
            <li>
              <a
                href="#utilisation"
                className="text-[#00D8FF] hover:underline transition"
              >
                Utilisation
              </a>
            </li>
            <li>
              <a
                href="#offre"
                className="text-[#00D8FF] hover:underline transition"
              >
                Nos offres
              </a>
            </li>
          </ul>
        </div>

        {/* Section "Informations" */}
        <div>
          <h2 className="text-lg font-extrabold mb-2">Informations</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-[#00D8FF] hover:underline transition">
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a href="#" className="text-[#00D8FF] hover:underline transition">
                Mentions légales
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright et mention d'agence digitale */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>Copyright © 2025 - Tous droits réservés</p>
        <p className="mt-2">
          Site réalisé par l'agence digitale <strong>Otika</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footervrai;
