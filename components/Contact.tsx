"use client";

import { useState } from "react";
import MagicButton from "./MagicButton"; // Bouton personnalisé
import { FaLocationArrow } from "react-icons/fa6"; // Icône pour le bouton

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Message de statut

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Votre message a été envoyé avec succès !");
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setStatus(errorData.error || "Une erreur s'est produite.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setStatus("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen py-20 flex flex-col items-center justify-center text-white mt-[-250px] sm:mt-[-200px] md:mt-[-150px]"
    >
      <h1
        className="text-center leading-none mb-6 font-black text-[4rem] sm:text-[5rem] md:text-[10rem] lg:text-[12rem]"
        style={{
          background: "linear-gradient(90deg, #F35AFF 0%, #00D8FF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          opacity: 0.3,
        }}
      >
        CONTACT
      </h1>

      <p className="text-center text-lg md:text-xl mb-12 text-neutral-400">
        Transformez vos espaces avec nos solutions de signalétique digitale
        sur-mesure. Contactez-nous pour un projet unique.
      </p>

      <form className="w-full max-w-4xl px-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom"
            className="w-full p-4 bg-[#1C1F32] text-white rounded-lg placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-[#00D8FF]"
            required
          />
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Prénom"
            className="w-full p-4 bg-[#1C1F32] text-white rounded-lg placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-[#00D8FF]"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            className="w-full p-4 bg-[#1C1F32] text-white rounded-lg placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-[#00D8FF]"
            required
          />
          <input
            type="text"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Téléphone"
            className="w-full p-4 bg-[#1C1F32] text-white rounded-lg placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-[#00D8FF]"
            required
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          className="w-full p-4 bg-[#1C1F32] text-white rounded-lg placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-[#00D8FF] h-32 resize-none mb-6"
          required
        />
        <div className="flex justify-center">
          <MagicButton
            type="submit"
            title="Envoyer mon message"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </form>

      {status && (
        <p
          className={`mt-6 ${status.includes("succès") ? "text-green-500" : "text-red-500"
            }`}
        >
          {status}
        </p>
      )}
    </section>
  );
};

export default Contact;
