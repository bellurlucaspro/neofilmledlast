"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Zap, Gem, Wrench } from "lucide-react";
import { SchemaOrg } from "../shared/SchemaOrg";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NEOFILM LED",
    "image": "https://neofilmled.com/logoneofilm.png",
    "description": "Leader français de la signalétique LED innovante. Spécialiste du film LED transparent pour vitrines et de l'affichage LED professionnel.",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR",
        "addressLocality": "France"
    },

    "email": "contact@neofilmled.com",
    "url": "https://neofilmled.com",
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "€€€",
    "areaServed": {
        "@type": "Country",
        "name": "France"
    }
};

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        value: "contact@neofilmled.com",
        description: "Réponse sous 24h",
        link: "mailto:contact@neofilmled.com"
    },

    {
        icon: MapPin,
        title: "Localisation",
        value: "France",
        description: "Interventions nationales",
        link: null
    },
    {
        icon: Clock,
        title: "Horaires",
        value: "Lun-Ven 9h-18h",
        description: "Support 24/7 disponible",
        link: null
    }
];

const ContactInfo = () => {
    return (
        <section className="py-20 relative z-10">
            <SchemaOrg schema={localBusinessSchema} />

            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black uppercase font-orbitron tracking-wider text-white mb-6">
                        NOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] to-[#00D8FF]">COORDONNÉES</span>
                    </h2>
                    <p className="font-outfit text-lg text-white/70 max-w-2xl mx-auto">
                        Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions
                        et vous accompagner sur votre projet d'<strong className="text-white font-semibold">affichage LED</strong>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        const content = (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="h-full bg-white/[0.03] backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-[#CB52EE]/50 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(203,82,238,0.1)] transition-all group flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#CB52EE]/10 to-[#00D8FF]/10 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-7 h-7 text-white/40 group-hover:text-white transition-colors duration-300" />
                                </div>

                                <h3 className="text-white font-orbitron font-bold tracking-wide mb-3 text-lg">{info.title}</h3>
                                <p className="text-white/90 font-outfit font-medium mb-2">{info.value}</p>
                                <p className="text-white/40 text-sm font-light">{info.description}</p>
                            </motion.div>
                        );

                        return info.link ? (
                            <a key={index} href={info.link} className="block h-full">
                                {content}
                            </a>
                        ) : (
                            <div key={index} className="h-full">{content}</div>
                        );
                    })}
                </div>

                {/* Additional Info Box */}
                <div className="mt-12 bg-gradient-to-r from-[#CB52EE]/5 to-[#00D8FF]/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">


                    <h3 className="text-2xl font-bold text-white mb-8 text-center font-orbitron tracking-wide relative z-10">
                        POURQUOI NOUS CONTACTER ?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
                        <div className="space-y-2 group flex flex-col items-center">
                            <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300 bg-white/[0.05] p-4 rounded-full border border-white/10 group-hover:border-[#FFD700]/50 shadow-[0_0_15px_rgba(255,215,0,0.1)]">
                                <Zap className="w-8 h-8 text-[#FFD700]" />
                            </div>
                            <div className="text-white font-bold text-lg font-orbitron">Devis Gratuit</div>
                            <p className="text-white/60 text-sm font-light">Réponse personnalisée sous 24h</p>
                        </div>
                        <div className="space-y-2 group flex flex-col items-center">
                            <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300 bg-white/[0.05] p-4 rounded-full border border-white/10 group-hover:border-[#00D8FF]/50 shadow-[0_0_15px_rgba(0,216,255,0.1)]">
                                <Gem className="w-8 h-8 text-[#00D8FF]" />
                            </div>
                            <div className="text-white font-bold text-lg font-orbitron">Conseil Expert</div>
                            <p className="text-white/60 text-sm font-light">Excellence Technique & Design</p>
                        </div>
                        <div className="space-y-2 group flex flex-col items-center">
                            <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300 bg-white/[0.05] p-4 rounded-full border border-white/10 group-hover:border-[#F35AFF]/50 shadow-[0_0_15px_rgba(243,90,255,0.1)]">
                                <Wrench className="w-8 h-8 text-[#F35AFF]" />
                            </div>
                            <div className="text-white font-bold text-lg font-orbitron">Sur Mesure</div>
                            <p className="text-white/60 text-sm font-light">Solutions adaptées à vos besoins</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
