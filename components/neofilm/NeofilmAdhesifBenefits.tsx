"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface NeofilmAdhesifBenefitsProps {
    product: any;
}

const NeofilmAdhesifBenefits: React.FC<NeofilmAdhesifBenefitsProps> = ({ product }) => {
    const [showVideo, setShowVideo] = useState(false);

    // Default benefits if features are sparse
    const displayFeatures = product?.features?.length >= 6
        ? product.features.slice(0, 6)
        : [
            "Performance Premium",
            "Installation Pro",
            "Économie d'Énergie",
            "Design Invisible",
            "Garantie 3 Ans",
            "Support Technique"
        ];

    return (
        <section id="avantage" className="py-24 px-6 relative w-full bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] overflow-hidden">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 border-b border-white/5 pb-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 font-orbitron text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase mb-6"
                            style={{ color: product?.color || "#CB52EE" }}
                        >
                            <Sparkles className="w-4 h-4 shadow-[0_0_10px_rgba(203,82,238,0.5)]" />
                            Solutions Clé en Main
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl lg:text-8xl font-black font-orbitron text-white leading-[1.1] md:leading-[0.9] tracking-tighter uppercase"
                        >
                            Atouts & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] via-white to-[#00D8FF]" style={{ backgroundImage: `linear-gradient(to right, ${product?.color || "#CB52EE"}, #ffffff, #00D8FF)` }}>
                                INNOVATIONS
                            </span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-md text-left md:text-right flex flex-col items-start md:items-end"
                    >
                        <div className="flex gap-6 md:gap-8 mb-8">
                            <div className="flex flex-col items-start lg:items-end min-w-0">
                                <p className="text-[10px] font-orbitron font-bold text-white/30 uppercase tracking-widest mb-1">Qualité</p>
                                <p className="text-[13px] md:text-sm font-black text-[#00D8FF] font-orbitron uppercase border-l-2 lg:border-l-0 lg:border-r-2 border-[#CB52EE]/50 pl-3 lg:pl-0 lg:pr-3 whitespace-nowrap">Grade Premium</p>
                            </div>
                            <div className="flex flex-col items-start lg:items-end min-w-0">
                                <p className="text-[10px] font-orbitron font-bold text-white/30 uppercase tracking-widest mb-1">Installation</p>
                                <p className="text-[13px] md:text-sm font-black text-white font-orbitron uppercase border-l-2 lg:border-l-0 lg:border-r-2 border-white/20 pl-3 lg:pl-0 lg:pr-3 whitespace-nowrap">Sur Mesure</p>
                            </div>
                        </div>
                        <p className="text-white/50 font-outfit text-sm md:text-base leading-relaxed">
                            Transformez votre espace de vente, salle de réunion ou réception grâce à une solution clé en main parfaitement adaptée à vos besoins et à votre projet.
                        </p>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {displayFeatures.map((feature: string, idx: number) => {
                        const [title, desc] = feature.includes(':')
                            ? feature.split(':')
                            : [feature, `Optimisation maximale du ${feature.toLowerCase()} pour une intégration parfaite.`];

                        const cleanTitle = title.trim();
                        const cleanDesc = desc.trim();

                        return (
                            <BenefitCard
                                key={idx}
                                title={cleanTitle}
                                icon={(() => {
                                    const words = cleanTitle.split(' ');
                                    // For short prefixes or specific SEO keywords, take the first two words
                                    if (words.length > 1 && (
                                        words[0].length <= 3 ||
                                        ['haute', 'ultra', 'sans', 'architecture', 'structure', 'conception', 'intégration'].includes(words[0].toLowerCase())
                                    )) {
                                        return `${words[0]} ${words[1]}`;
                                    }
                                    return words[0];
                                })()}
                                description={cleanDesc}
                                color={product?.color}
                            />
                        );
                    })}
                </div>

                {/* Video Button */}
                <div className="flex justify-center mt-12">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowVideo(true)}
                        className="px-8 py-4 bg-gradient-to-r from-[#CB52EE] to-[#00D8FF] text-white font-bold font-orbitron rounded-xl shadow-[0_0_30px_rgba(203,82,238,0.3)] hover:shadow-[0_0_50px_rgba(203,82,238,0.5)] transition-all flex items-center gap-3"
                        style={{ backgroundImage: `linear-gradient(to right, ${product?.color || "#CB52EE"}, #00D8FF)` }}
                    >
                        <Play className="w-5 h-5 fill-current" />
                        Lancez la vidéo !
                    </motion.button>
                </div>

                {/* Video Modal */}
                <AnimatePresence>
                    {showVideo && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
                            onClick={() => setShowVideo(false)}
                        >
                            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <iframe
                                    className="w-full h-full"
                                    src={product?.video || "https://www.youtube.com/embed/CdHGDjHZVJc?autoplay=1&rel=0"}
                                    title={`Présentation ${product?.name}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                <button
                                    onClick={() => setShowVideo(false)}
                                    className="absolute top-4 right-4 p-3 bg-red-600 hover:bg-red-700 rounded-full text-white transition-colors z-50 shadow-lg"
                                >
                                    ✕
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

const BenefitCard = ({ title, icon, description, color }: { title: string, icon: string, description: string, color?: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[250px] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden group cursor-default"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#CB52EE]/5 via-transparent to-[#00D8FF]/5" style={{ backgroundImage: `linear-gradient(to bottom right, ${color}20, transparent, #00D8FF20)` }} />

            <AnimatePresence mode="wait">
                {!isHovered ? (
                    <motion.div
                        key="icon"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center p-6 text-center"
                    >
                        <div className="relative group">
                            <div className="absolute inset-[-10px] bg-gradient-to-r from-[#CB52EE] to-[#00D8FF] blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full px-12" />
                            <span className="relative text-2xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/40 group-hover:from-white group-hover:to-white/80 transition-all uppercase tracking-tighter">
                                {icon}
                            </span>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center bg-gradient-to-b from-black/20 to-black/60"
                    >
                        <h3 className="text-xl font-black font-orbitron text-white mb-4 uppercase tracking-wider">
                            {title}
                        </h3>
                        <p className="text-sm font-outfit text-white/70 leading-relaxed">
                            {description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Corner visual accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />
        </motion.div>
    );
};

export default NeofilmAdhesifBenefits;
