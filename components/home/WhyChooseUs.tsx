"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Zap,
    Users,
    Compass,
    Target,
    Cpu,
    ChevronRight,
    Activity,
    LineChart,
    Layers,
    Shield
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const expertisePillars = [
    {
        id: "conseil",
        title: "Expertise & Conseil Stratégique",
        description: "Solution d'ingénierie LED sur-mesure pour vos projets architecturaux à Paris. Analyse photométrique et design structurel pour un impact maximal.",
        icon: Compass,
        color: "#CB52EE",
        gridClass: "lg:col-span-1",
        tags: ["Audit", "Design", "ROI"]
    },
    {
        id: "installation",
        title: "Installation de Précision",
        description: "Déploiement millimétré par nos ingénieurs certifiés. Intégration invisible de films adhésifs et rideaux Media Mesh.",
        icon: Target,
        color: "#00D8FF",
        gridClass: "lg:col-span-1 lg:row-span-1",
        tags: ["Millimétré", "Certifié"]
    },
    {
        id: "techno",
        title: "Propulsion Technologique",
        description: "Accès exclusif aux dernières innovations LED : ultra-transparence, luminosité 5500 nits et gestion IA de la consommation énergétique.",
        icon: Cpu,
        color: "#FF2D85",
        gridClass: "lg:col-span-1",
        tags: ["R&D", "Innovation"]
    },
    {
        id: "support",
        title: "Maintenance Proactive 360°",
        description: "Service après-vente Premium avec télésurveillance IA. Nous assurons la pérennité de votre parc d'écrans 24h/24.",
        icon: ShieldCheck,
        color: "#CB52EE",
        gridClass: "lg:col-span-1",
        tags: ["Support 24/7", "Premium"]
    }
];

const stats = [
    { value: "92%", label: "Alpha Transparency", sub: "Clarté Cristalline", icon: Layers },
    { value: "5.5K", label: "Nits Luminosité", sub: "Visibilité Plein Soleil", icon: Zap },
    { value: "100%", label: "Sur-Mesure", sub: "Design Architectural", icon: Target },
    { value: "SLA", label: "Support Expert", sub: "Assistance Proactive", icon: Shield }
];

const WhyChooseUs = () => {
    const [isHovering, setIsHovering] = useState<string | null>(null);
    return (
        <section id="why-choose-us" className="py-16 md:py-32 relative w-full overflow-hidden">
            {/* Background Architecture */}
            <div className="absolute inset-0 bg-grid-white/[0.015] bg-[size:50px_50px] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(3,0,20,0)_0%,rgba(3,0,20,1)_100%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* --- HEADER --- */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6"
                    >
                        <Activity className="w-3 h-3 text-[#00D8FF]" />
                        <span className="text-[10px] font-bold font-orbitron tracking-widest text-white/50 uppercase">Matrix_D'expertise</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black font-orbitron text-white leading-[0.9] tracking-tighter uppercase mb-8"
                    >
                        Pourquoi choisir <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] via-white to-[#00D8FF]">Neofilm LED ?</span>
                    </motion.h2>

                    <p className="text-white/40 font-outfit text-lg max-w-3xl mx-auto leading-relaxed">
                        Plus qu'un fournisseur, nous sommes votre partenaire en <Link href="/a-propos" className="text-white hover:text-[#00D8FF] transition-colors font-bold underline decoration-white/30 underline-offset-4">ingénierie visuelle</Link>.
                        Nous transformons vos vitrines en canaux de communication spectaculaires grâce à une expertise technique sans compromis.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <span className="text-xl font-orbitron font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                            "L'important ce n'est pas la vue, mais d'être vu !"
                        </span>
                    </div>
                </div>

                {/* --- BENTO EXPERTISE MATRIX --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 relative">


                    {expertisePillars.map((pillar, idx) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={cn(
                                "group relative overflow-hidden rounded-[2.5rem] border transition-all duration-500 p-8 flex flex-col justify-between",
                                pillar.gridClass,
                                "bg-[#0a0a20]/60 backdrop-blur-3xl border-white/10 hover:border-white/20"
                            )}
                            style={{
                                boxShadow: isHovering === pillar.id ? `0 20px 50px -10px ${pillar.color}33` : 'none'
                            }}
                            onMouseEnter={() => setIsHovering(pillar.id)}
                            onMouseLeave={() => setIsHovering(null)}
                        >
                            {/* Inner Glow Overlay */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                                style={{ background: `radial-gradient(circle at center, ${pillar.color} 0%, transparent 70%)` }}
                            />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 relative overflow-hidden"
                                        style={{
                                            background: `linear-gradient(135deg, ${pillar.color}22 0%, ${pillar.color}44 100%)`,
                                            border: `1px solid ${pillar.color}44`,
                                            color: pillar.color
                                        }}
                                    >
                                        <pillar.icon className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                                    </div>
                                    <div className="flex gap-2">
                                        {pillar.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-[9px] font-orbitron font-bold px-2 py-1 rounded-md uppercase tracking-widest border"
                                                style={{
                                                    color: `${pillar.color}cc`,
                                                    borderColor: `${pillar.color}33`,
                                                    backgroundColor: `${pillar.color}11`
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3
                                    className="text-2xl font-black font-orbitron text-white uppercase mb-4 leading-tight group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                                    style={{
                                        backgroundImage: isHovering === pillar.id ? `linear-gradient(to right, white, ${pillar.color})` : 'none'
                                    }}
                                >
                                    {pillar.title}
                                </h3>
                                <p className="text-white/50 font-outfit text-sm leading-relaxed max-w-md group-hover:text-white/80 transition-colors">
                                    {pillar.description}
                                </p>
                            </div>

                            <div className="mt-8 relative z-10 flex items-center justify-between">
                                <div
                                    className="h-[1px] flex-1 transition-all duration-700 opacity-20 group-hover:opacity-100"
                                    style={{ background: `linear-gradient(to right, transparent, ${pillar.color}, transparent)` }}
                                />
                                <ChevronRight
                                    className="w-6 h-6 ml-4 transition-all duration-500"
                                    style={{ color: isHovering === pillar.id ? pillar.color : 'rgba(255,255,255,0.2)' }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- HOLOGRAPHIC STATS HUD --- */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (idx * 0.1) }}
                            className="relative group p-4 md:p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] flex flex-col items-center text-center overflow-hidden transition-all hover:bg-white/[0.05]"
                        >
                            {/* Color Glow Indicator (Top) */}
                            <div
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] opacity-50"
                                style={{ background: `linear-gradient(to right, transparent, ${idx % 2 === 0 ? '#CB52EE' : '#00D8FF'}, transparent)` }}
                            />

                            {/* Center Glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none"
                                style={{ background: `radial-gradient(circle at center, ${idx % 2 === 0 ? '#CB52EE' : '#00D8FF'} 0%, transparent 70%)` }}
                            />

                            <div className="relative z-10 w-full flex flex-col items-center">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <stat.icon className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                                </div>

                                <span
                                    className="text-5xl md:text-6xl font-black font-orbitron mb-2 block tracking-tighter text-transparent bg-clip-text"
                                    style={{ backgroundImage: `linear-gradient(to bottom, white 50%, ${idx % 2 === 0 ? '#CB52EE' : '#00D8FF'}cc)` }}
                                >
                                    {stat.value}
                                </span>

                                <span className="text-[10px] font-orbitron font-bold text-white/30 uppercase tracking-[0.2em] mb-1">{stat.label}</span>
                                <span
                                    className="text-[10px] font-orbitron font-black uppercase tracking-[0.2em]"
                                    style={{ color: idx % 2 === 0 ? '#CB52EE' : '#00D8FF' }}
                                >
                                    {stat.sub}
                                </span>
                            </div>

                            {/* Laser Edge Animation */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                <motion.div
                                    animate={{ left: ['-100%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute bottom-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
