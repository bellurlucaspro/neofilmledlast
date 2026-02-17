"use client";

import React from "react";
import { FaLocationArrow, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import { motion } from "framer-motion";

const PremiumFooter = ({ hideAnimation = false }: { hideAnimation?: boolean }) => {
    const navLinks = [
        { name: "Accueil", link: "/" },
        { name: "Solutions", link: "/solutions" },
        { name: "NEOFILM LED", link: "/produits/neofilm" },
        { name: "À propos", link: "/a-propos" },
        { name: "Contact", link: "/contact" },
    ];

    const socialLinks = [
        { icon: <FaLinkedin />, link: "#" },
        { icon: <FaYoutube />, link: "#" },
        { icon: <FaTiktok />, link: "#" },
    ];

    return (
        <footer className="w-full relative bg-[#030014] overflow-hidden" id="contact">
            {/* Aurora Background Stage */}
            <div className="h-[50rem] w-full relative flex items-center justify-center">
                {!hideAnimation && (
                    <BackgroundGradientAnimation
                        gradientBackgroundStart="transparent"
                        gradientBackgroundEnd="transparent"
                        firstColor="108, 0, 162"
                        secondColor="0, 112, 126"
                        thirdColor="203, 82, 238"
                        fourthColor="0, 216, 255"
                        fifthColor="108, 0, 162"
                        pointerColor="203, 82, 238"
                        size="60%"
                        blendingValue="soft-light"
                        className="z-0"
                    />
                )}

                {/* Massive Background Text (Vision) */}
                <div className="absolute inset-x-0 bottom-0 select-none pointer-events-none z-10 flex justify-center translate-y-1/2 overflow-hidden">
                    <span className="text-[20vw] font-orbitron font-black text-transparent stroke-white/5 stroke-1 opacity-20 uppercase whitespace-nowrap tracking-wider"
                        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}>
                        NEOFILM
                    </span>
                </div>

                <div className="relative z-20 flex flex-col items-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="font-orbitron font-black text-5xl md:text-7xl lg:text-9xl tracking-tight uppercase mb-8 leading-[0.9]">
                            ÉCLAIRER <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] via-[#F35AFF] to-[#00D8FF] drop-shadow-[0_0_30px_rgba(203,82,238,0.3)]">LE FUTUR</span>
                        </h2>
                        <p className="font-outfit text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            L'excellence française de l'affichage LED dynamique.<br className="hidden md:block" />
                            <span className="text-white font-medium">Prêt à transformer votre perception ?</span>
                        </p>

                        <div className="flex justify-center">
                            <a href="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 bg-transparent overflow-hidden rounded-full transition-all duration-300">
                                {/* Animated Background Gradient */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#CB52EE] to-[#00707E] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Shine Effect */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                                {/* Inner Glow */}
                                <div className="absolute inset-[2px] rounded-full bg-black/40 group-hover:bg-black/20 transition-colors duration-300 backdrop-blur-sm" />

                                {/* Content */}
                                <div className="relative z-10 flex items-center gap-4">
                                    <span className="text-white font-bold font-orbitron tracking-widest text-base group-hover:tracking-[0.2em] transition-all duration-300">
                                        DÉMARRER MON PROJET
                                    </span>
                                    <FaLocationArrow className="text-white text-sm group-hover:rotate-45 group-hover:scale-110 transition-transform duration-300" />
                                </div>

                                {/* Outer Glow on Hover */}
                                <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/50 group-hover:shadow-[0_0_40px_rgba(203,82,238,0.5)] transition-all duration-300" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bento Navigation Section */}
            <div className="max-w-7xl mx-auto px-6 pb-20 pt-10 relative z-30">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Brand Card */}
                    <div className="md:col-span-2 p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col justify-between group hover:border-white/20 transition-all duration-500">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <img src="/logoneofilm.png" alt="NEOFILM LED" className="h-12 w-auto" />
                            </div>
                            <p className="font-syne text-white/40 text-lg leading-relaxed max-w-sm">
                                L'important ça n'est pas la vue mais d'être vu !
                            </p>
                        </div>
                        <div className="flex gap-6 mt-12">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    className="text-white/30 hover:text-[#CB52EE] text-2xl transition-all duration-300 transform hover:scale-110"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Card */}
                    <div className="p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 group hover:border-white/20 transition-all duration-500">
                        <h3 className="font-orbitron text-xs font-black tracking-widest text-[#CB52EE] uppercase mb-8">Navigation</h3>
                        <nav className="flex flex-col gap-5 font-orbitron">
                            {navLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.link}
                                    className="text-white/40 hover:text-white flex items-center group/link transition-all text-[11px] font-bold tracking-[0.2em] uppercase"
                                >
                                    <span className="w-0 group-hover/link:w-6 h-[2px] bg-gradient-to-r from-[#CB52EE] to-[#00D8FF] transition-all mr-0 group-hover/link:mr-3 opacity-0 group-hover/link:opacity-100 rounded-full" />
                                    <span className="group-hover/link:translate-x-1 transition-transform group-hover/link:text-transparent group-hover/link:bg-clip-text group-hover/link:bg-gradient-to-r group-hover/link:from-[#CB52EE] group-hover/link:to-[#00D8FF]">
                                        {link.name}
                                    </span>
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Card */}
                    <div className="p-6 md:p-8 rounded-3xl bg-[#CB52EE]/10 backdrop-blur-xl border border-[#CB52EE]/20 group hover:bg-[#CB52EE]/20 transition-all duration-500">
                        <h3 className="font-orbitron text-xs font-black tracking-widest text-white uppercase mb-8">Contact</h3>
                        <div className="space-y-6 font-outfit">
                            <div className="space-y-1">
                                <p className="text-white/40 text-xs tracking-widest uppercase">Expertise</p>
                                <a
                                    href="https://www.google.com/maps/place/France"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white text-lg hover:text-[#CB52EE] transition-colors"
                                >
                                    France
                                </a>
                            </div>
                            <div className="space-y-1">
                                <p className="text-white/40 text-xs tracking-widest uppercase">Parlons-en</p>
                                <a href="mailto:contact@neofilmled.com" className="text-white text-lg hover:text-[#CB52EE] transition-colors">contact@neofilmled.com</a>
                            </div>
                        </div>
                        <div className="mt-12">
                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-white"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                />
                            </div>
                            <p className="text-white/30 text-[10px] uppercase tracking-widest mt-2">Prêt pour le déploiement</p>
                        </div>
                    </div>
                </div>

                {/* Legend Bar */}
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-orbitron tracking-[0.2em] text-white/20 uppercase gap-6">
                    <div className="flex gap-8">
                        <a href="/mentions-legales" className="hover:text-white/60 transition-colors">Mentions légales</a>
                        <a href="/politique-de-confidentialite" className="hover:text-white/60 transition-colors">Confidentialité</a>
                    </div>
                    <span className="text-center md:text-right">
                        Créé et géré par <a href="https://otika.fr" target="_blank" rel="noopener noreferrer" className="hover:text-[#CB52EE] transition-colors">OTIKA AGENCE DIGITALE</a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default PremiumFooter;
