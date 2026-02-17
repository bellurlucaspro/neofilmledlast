"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    Zap,
    Monitor,
    Smartphone,
    Layout,
    Layers,
    Maximize,
    Activity,
    Cpu,
    Wifi,
    Network,
    ChevronRight,
    ArrowRight,
    Search,
    Plus
} from "lucide-react";
import { cn } from "@/lib/utils";
import ProductModal from "../ui/ProductModal";
import { products, ProductCategory } from "@/data/products";

// Mapping for Home Categories to Data Categories
const CATEGORY_MAP: Record<string, ProductCategory> = {
    transparent: 'transparent',
    immersive: 'dynamisation',
    portable: 'portable'
};

// Product Data Categories (Static metadata for Home)
const categories = [
    {
        id: "transparent",
        title: "Écrans Transparents",
        tagline: "Ultra-Haute Transparence",
        icon: Layout,
        color: "#CB52EE",
        image: "/transparent-led-film.png",
        telemetry: {
            resolution: "4K UHD",
            transparency: "92%",
            status: "OPTIMISÉ",
            signal: "WIFI 6"
        },
        features: ["Film Adhésif", "Structure Mesh", "Intégration Vitrine"]
    },
    {
        id: "immersive",
        title: "Dynamisation d'Espace",
        tagline: "Dynamisation Retail",
        icon: Monitor,
        color: "#00D8FF",
        image: "/indoor-dynamization-tower.png",
        telemetry: {
            resolution: "8K READY",
            transparency: "0%",
            status: "STABLE",
            signal: "FIBRE"
        },
        features: ["Murs Modulaires", "Écrans Flexibles", "Gestion Cloud"]
    },
    {
        id: "portable",
        title: "Solutions Portables",
        tagline: "Événementiel Agile",
        icon: Smartphone,
        color: "#F35AFF",
        image: "/portable-led-butterfly.png",
        telemetry: {
            resolution: "FULL HD",
            transparency: "70%",
            status: "NOMADE",
            signal: "5G"
        },
        features: ["Kakémonos Pliables", "Totems 360°", "Setup Rapide"]
    }
];

const ProductsShowcase = () => {
    // Dynamically derive products by category from the central products.ts
    const productsByCategory = useMemo(() => {
        const mapping: Record<string, any[]> = {
            transparent: [],
            immersive: [],
            portable: []
        };

        products.forEach(p => {
            // Find which home category this product belongs to
            const homeCat = Object.keys(CATEGORY_MAP).find(key => CATEGORY_MAP[key] === p.category);

            if (homeCat) {
                mapping[homeCat].push({
                    name: p.name,
                    description: p.shortDescription || p.fullDescription.substring(0, 100) + "...",
                    link: `/${p.categorySeoSlug}/${p.slug}`,
                    image: p.image,
                    specs: p.specs.slice(0, 3).map(s => `${s.label}: ${s.value}`)
                });
            }
        });

        return mapping;
    }, []);

    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [isHovering, setIsHovering] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'single' | 'full'>('single');

    // Dynamic telemetry pulse
    const [pulse, setPulse] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setPulse(p => (p + 1) % 100), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="solutions" className="py-16 md:py-32 px-4 md:px-6 relative w-full overflow-hidden bg-[#030014]">
            {/* --- TECH BACKGROUND --- */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(3,0,20,0)_0%,rgba(3,0,20,1)_80%)]" />



            <div className="max-w-7xl mx-auto relative z-10">
                {/* --- HEADER --- */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6 shadow-2xl"
                    >
                        <Zap className="w-4 h-4" style={{ color: activeCategory.color }} />
                        <span className="text-[10px] font-bold font-orbitron tracking-[0.3em] text-white/50 uppercase">Neural Solution Hub</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black font-orbitron text-white leading-[0.9] tracking-tighter uppercase mb-8"
                    >
                        Solutions LED <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-transparent" style={{ backgroundImage: `linear-gradient(to right, white, ${activeCategory.color}, #00D8FF)` }}>
                            Professionnelles
                        </span>
                    </motion.h2>
                    <p className="text-white/40 font-outfit text-lg max-w-2xl mx-auto leading-relaxed">
                        Architecture d'affichage innovante conçue pour transformer <br className="hidden md:block" />
                        vos espaces commerciaux en expériences holographiques.
                    </p>
                </div>

                {/* --- MAIN INTERACTIVE CORE --- */}
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT: NEURAL NAVIGATION */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="font-orbitron text-[10px] text-white/20 font-black tracking-[0.5em] mb-8 uppercase px-4">Navigation_Système</div>

                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onMouseEnter={() => setActiveCategory(cat)}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "w-full relative group p-6 rounded-2xl border transition-all duration-500 overflow-hidden flex items-center gap-6",
                                    activeCategory.id === cat.id
                                        ? "bg-white/5 border-white/20 shadow-2xl"
                                        : "bg-transparent border-transparent grayscale opacity-40 hover:opacity-100 hover:grayscale-0"
                                )}
                            >
                                {/* Active Indicator Ring */}
                                {activeCategory.id === cat.id && (
                                    <motion.div
                                        layoutId="node-glow"
                                        className="absolute inset-0 rounded-2xl ring-2 ring-white/50 opacity-20"
                                        style={{ backgroundColor: `${cat.color}22` }}
                                    />
                                )}

                                {/* Icon Plate */}
                                <div className={cn(
                                    "w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 relative z-10",
                                    activeCategory.id === cat.id ? "bg-white text-black scale-110 shadow-xl" : "bg-white/5 text-white"
                                )}>
                                    <cat.icon className="w-8 h-8" />
                                    {activeCategory.id === cat.id && (
                                        <div className="absolute inset-0 rounded-xl animate-ping opacity-20" style={{ backgroundColor: cat.color }} />
                                    )}
                                </div>

                                <div className="text-left relative z-10 flex-1">
                                    <div className="text-[10px] font-orbitron font-bold opacity-30 tracking-widest uppercase mb-1">{cat.tagline}</div>
                                    <h3 className="text-2xl font-black font-orbitron text-white uppercase">{cat.title}</h3>
                                </div>

                                <ChevronRight className={cn(
                                    "w-6 h-6 transition-all duration-500",
                                    activeCategory.id === cat.id ? "text-white translate-x-0" : "text-white/20 -translate-x-4"
                                )} />
                            </button>
                        ))}

                        {/* Global Discovery CTA */}
                        <motion.button
                            onClick={() => { setModalMode('full'); setIsModalOpen(true); }}
                            className="w-full mt-10 group relative py-6 px-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                    <Search className="w-4 h-4 text-white/40" />
                                </div>
                                <span className="font-orbitron font-bold text-sm text-white tracking-widest uppercase">Catalogue Complet</span>
                            </div>
                            <Plus className="w-5 h-5 text-white/40 group-hover:rotate-90 transition-transform" />
                        </motion.button>
                    </div>

                    {/* RIGHT: HOLOGRAPHIC PROJECTION HUD */}
                    <div className="lg:col-span-7 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory.id}
                                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -50, scale: 1.05 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="relative aspect-[4/3] w-full rounded-[3rem] overflow-hidden border border-white/10 bg-[#0a0a20]/40 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)]"
                            >
                                {/* --- HUD OVERLAYS --- */}
                                {/* Corner Accents */}
                                <div className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-white/10 rounded-tl-3xl z-30" />
                                <div className="absolute bottom-10 right-10 w-24 h-24 border-b-2 border-r-2 border-white/10 rounded-br-3xl z-30" />

                                {/* Scanning Line */}
                                <motion.div
                                    animate={{ top: ['-10%', '110%'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-white/5 to-transparent z-20 pointer-events-none"
                                />

                                {/* Main Image with Parallax-ish Effect */}
                                <motion.div
                                    className="absolute inset-0 p-8 z-10"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden group">
                                        <Image
                                            src={activeCategory.image}
                                            alt={activeCategory.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60" />

                                        {/* Dynamic Features Floating */}
                                        <div className="absolute bottom-32 left-10 space-y-3">
                                            {activeCategory.features.map((feat, i) => (
                                                <motion.div
                                                    key={feat}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                                    className="flex items-center gap-3 px-4 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-white/80"
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeCategory.color }} />
                                                    <span className="text-xs font-orbitron font-bold tracking-wider">{feat}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* --- TELEMETRY DATA PANEL --- */}
                                <div className="absolute top-10 right-10 z-30 space-y-6 text-right">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl min-w-[200px] shadow-2xl">
                                        <div className="flex items-center justify-between gap-8 mb-6 border-b border-white/10 pb-4">
                                            <div className="flex items-center gap-2">
                                                <Activity className="w-4 h-4 text-green-400 animate-pulse" />
                                                <span className="text-[10px] font-orbitron font-bold text-white/40 uppercase">Télémétrie</span>
                                            </div>
                                            <span className="text-[10px] font-orbitron font-black text-green-400">ONLINE</span>
                                        </div>

                                        <div className="space-y-6">
                                            <DataPoint label="Résolution" value={activeCategory.telemetry.resolution} icon={Cpu} />
                                            <DataPoint label="Alpha Sync" value={activeCategory.telemetry.transparency} icon={Layers} />
                                            <DataPoint label="Signal" value={activeCategory.telemetry.signal} icon={Wifi} />
                                        </div>
                                    </div>

                                    {/* Alpha Graph Mockup */}
                                    <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-end gap-2 h-20">
                                        {[...Array(12)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-1 bg-white/20 transition-all duration-300"
                                                style={{
                                                    height: `${Math.random() * 100}%`,
                                                    backgroundColor: i > 8 ? activeCategory.color : 'rgba(255,255,255,0.2)'
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* HUD Command Bar (Integrated Action Bar) */}
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="absolute bottom-0 left-0 right-0 z-40"
                                >
                                    <button
                                        onClick={() => { setModalMode('single'); setIsModalOpen(true); }}
                                        className="w-full group relative py-4 px-6 md:py-8 md:px-10 flex items-center justify-between overflow-hidden"
                                    >
                                        {/* Background Glass Layer */}
                                        <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-3xl group-hover:bg-white/[0.08] transition-colors" />

                                        {/* Top Accent Line (Animated) */}
                                        <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
                                            <motion.div
                                                animate={{ x: ['-100%', '100%'] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                                                style={{ backgroundColor: activeCategory.color }}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 flex flex-col items-start translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="text-[10px] font-orbitron font-bold text-white/30 uppercase tracking-[0.4em] mb-1">Module_Action</span>
                                            <span className="text-xl md:text-2xl font-black font-orbitron text-white uppercase tracking-tighter">
                                                Déployer la gamme <span style={{ color: activeCategory.color }}>{activeCategory.id}</span>
                                            </span>
                                        </div>

                                        <div className="relative z-10 flex items-center gap-6">
                                            <div className="hidden md:flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 group-hover:translate-x-0">
                                                <span className="text-[8px] font-orbitron font-bold text-white/40 uppercase tracking-widest">Protocol</span>
                                                <span className="text-[10px] font-orbitron font-black text-white">ACCESS_GRANTED</span>
                                            </div>
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                                                style={{
                                                    background: `linear-gradient(135deg, ${activeCategory.color}22 0%, ${activeCategory.color}44 100%)`,
                                                    border: `1px solid ${activeCategory.color}44`,
                                                    color: 'white'
                                                }}
                                            >
                                                <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>

                                        {/* Shimmer Effect */}
                                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                                    </button>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Aesthetic Shadow below projection */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
                    </div>
                </div>

                {/* --- FOOTER STATEMENT --- */}
                <div className="mt-32 flex flex-col md:flex-row items-center justify-between gap-8 py-12 border-t border-white/10">
                    <div className="flex items-center gap-6">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <Network className="w-8 h-8 text-white/20" />
                        </div>
                        <div>
                            <div className="text-white font-black font-orbitron text-lg uppercase mb-1">Expertise Européenne</div>
                            <p className="text-white/40 font-outfit text-sm">Design & Engineering basés à Lille, déploiement global.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] font-orbitron font-bold text-white/20 uppercase tracking-widest mb-1">Architecture</span>
                            <span className="text-sm font-bold font-orbitron text-white">MODULAIRE_ASYNC</span>
                        </div>
                        <div className="w-px h-10 bg-white/10 mx-4" />
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] font-orbitron font-bold text-white/20 uppercase tracking-widest mb-1">Performance</span>
                            <span className="text-sm font-bold font-orbitron text-[#00D8FF]">HAUTE_DÉFINITION</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MODAL --- */}
            <ProductModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                products={productsByCategory[activeCategory.id as keyof typeof productsByCategory]}
                categoryTitle={activeCategory.title}
                categoryColor={activeCategory.color}
                mode={modalMode}
                catalogData={categories.map(cat => ({
                    category: { title: cat.title, color: cat.color },
                    products: productsByCategory[cat.id as keyof typeof productsByCategory]
                }))}
            />
        </section>
    );
};

const DataPoint = ({ label, value, icon: Icon }: any) => (
    <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
            <Icon className="w-3 h-3 text-white/30" />
            <span className="text-[9px] font-orbitron font-bold text-white/30 uppercase tracking-tighter">{label}</span>
        </div>
        <span className="text-xs font-orbitron font-black text-white">{value}</span>
    </div>
);

export default ProductsShowcase;
