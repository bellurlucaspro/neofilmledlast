"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Maximize2, Minimize2, Sparkles, Sun, Scan } from "lucide-react";

const pitches = [
    { pitch: 5, label: "P5", distance: 5, description: "Ultra-Haute Définition", usage: "Petites surfaces (1-3m²)", viewDistance: "3-5m", densityEx: "~ 40,000 px/m²", brightness: "3000 - 5500 nits" },
    { pitch: 6, label: "P6", distance: 6, description: "Haute Définition", usage: "Surfaces moyennes", viewDistance: "4-6m", densityEx: "~ 25,600 px/m²", brightness: "3000 - 5500 nits" },
    { pitch: 8, label: "P8", distance: 8, description: "Haute Résolution", usage: "Surfaces standard", viewDistance: "6-8m", densityEx: "~ 15,625 px/m²", brightness: "3500 - 5500 nits" },
    { pitch: 10, label: "P10", distance: 10, description: "Résolution Standard", usage: "Grandes surfaces", viewDistance: "8-10m", densityEx: "~ 10,000 px/m²", brightness: "3500 - 5500 nits" },
    { pitch: 16, label: "P16", distance: 16, description: "Longue Distance", usage: "Très grandes surfaces", viewDistance: "12-16m", densityEx: "~ 3,900 px/m²", brightness: "4000 - 5500 nits" },
    { pitch: 20, label: "P20", distance: 20, description: "Très Longue Distance", usage: "Surfaces massives", viewDistance: "15-20m+", densityEx: "~ 2,500 px/m²", brightness: "4000 - 5500 nits" },
];

interface ViewingDistanceProps {
    product: any;
}

const ViewingDistance: React.FC<ViewingDistanceProps> = ({ product }) => {
    // Determine pitches to display: use product variants if available, else default
    const availablePitches = React.useMemo(() => {
        if (product.variants && product.variants.length > 0) {
            return product.variants.map((v: any, index: number) => {
                const numericPitch = parseFloat(v.pitch);
                const isTransparent = product.category === 'transparent';
                return {
                    pitch: numericPitch || 3.9,
                    label: v.name,
                    distance: numericPitch,
                    description: index === 0 ? "Haute Résolution" : index === 1 ? "Standard Équilibré" : (isTransparent ? "Max Transparence" : "Haute Visibilité"),
                    usage: index === 0 ? "Vision Rapprochée" : "Vision Distance Moyenne",
                    viewDistance: v.viewDistance || "N/A",
                    densityEx: v.density || "N/A",
                    brightness: v.brightness || "N/A"
                };
            });
        }
        return pitches;
    }, [product]);

    const [activePitch, setActivePitch] = useState(availablePitches[1] || availablePitches[0]);

    // Update activePitch when availablePitches changes
    React.useEffect(() => {
        setActivePitch(availablePitches[1] || availablePitches[0]);
    }, [availablePitches]);


    // Calculate pixel density for visualization (inverse relationship)
    const getPixelSize = (pitch: number) => {
        // P5 = small dots (2px), P20 = large dots (8px)
        return Math.max(2, pitch / 2.5);
    };

    const getPixelGap = (pitch: number) => {
        // P5 = tight gap (2px), P20 = wide gap (10px)
        return Math.max(2, pitch / 2);
    };

    const getPixelCount = (pitch: number) => {
        // P5 = many pixels (400), P20 = few pixels (25)
        return Math.floor(400 / pitch);
    };

    return (
        <section id="distance" className="py-32 px-6 relative bg-gradient-to-b from-[#030014] via-[#0a0520] to-[#030014] overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse opacity-20" style={{ backgroundColor: product.color }} />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D8FF]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 backdrop-blur-sm mb-6"
                        style={{ background: `linear-gradient(to right, ${product.color}33, #00D8FF33)` }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: product.color }} />
                        <span className="text-white/90 font-outfit text-sm tracking-wider uppercase font-bold">Comprendre les Pitchs</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black font-orbitron text-white leading-tight mb-6"
                    >
                        Choisissez Votre <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${product.color}, #FF6B9D, #00D8FF)` }}>Résolution</span>
                    </motion.h2>
                    <p className="mt-6 text-white/60 text-lg font-outfit max-w-3xl mx-auto leading-relaxed">
                        Plus le pitch est <b className="text-[#00D8FF]">petit</b>, plus il y a de pixels = meilleure qualité de près.
                        Plus le pitch est <b style={{ color: product.color }}>grand</b>, moins il y a de pixels = visibilité optimale de loin.
                    </p>
                </div>

                {/* Main Comparison */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">

                    {/* Left: Pixel Density Visualization */}
                    <div className="lg:col-span-2">
                        <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl min-h-[600px] flex flex-col">

                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#00D8FF]/10" style={{ backgroundImage: `linear-gradient(to bottom right, ${product.color}1a, transparent, #00D8FF1a)` }} />

                            <div className="relative z-10 flex-1 flex flex-col">
                                {/* Title */}
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold font-orbitron text-white">Densité de Pixels</h3>
                                        <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
                                            <span className="font-bold font-orbitron text-xl" style={{ color: product.color }}>{activePitch.label}</span>
                                        </div>
                                    </div>
                                    <p className="text-white/50 text-sm font-outfit">{activePitch.description}</p>
                                </div>

                                {/* Pixel Grid Visualization */}
                                <div className="flex-1 flex items-center justify-center py-8">
                                    <div className="relative group">
                                        {/* Screen Frame */}
                                        <div className="relative w-72 h-72 md:w-80 md:h-80 bg-black/90 border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,216,255,0.15)] ring-1 ring-white/5">

                                            {/* Tech Grid Background */}
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#00D8FF]/5" />

                                            {/* Pixel Grid */}
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={activePitch.pitch}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="absolute inset-0 flex items-center justify-center p-8 md:p-12 bg-black/40"
                                                >
                                                    <div className="grid place-content-center w-full h-full"
                                                        style={{
                                                            gridTemplateColumns: `repeat(${Math.ceil(60 / activePitch.pitch)}, 1fr)`,
                                                            gap: activePitch.pitch >= 10 ? '4px' : '2px', // Reduce gap for layout, visualize space via cell size
                                                            alignItems: 'center',
                                                            justifyItems: 'center'
                                                        }}>

                                                        {/* Ruler/Measurement for larger pitches */}
                                                        {activePitch.pitch >= 10 && (
                                                            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none">
                                                                <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                                                                <span className="text-[10px] text-white/50 font-outfit uppercase tracking-widest bg-black/50 px-2 rounded-full backdrop-blur-sm border border-white/5">
                                                                    Espace : {activePitch.pitch}mm
                                                                </span>
                                                            </div>
                                                        )}

                                                        {Array.from({ length: Math.pow(Math.ceil(60 / activePitch.pitch), 2) }).slice(0, 400).map((_, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ scale: 0, opacity: 0 }}
                                                                animate={{ scale: 1, opacity: 1 }}
                                                                transition={{ delay: i * 0.0015, duration: 0.2 }}
                                                                className="rounded-full relative"
                                                                style={{
                                                                    width: activePitch.pitch >= 10 ? '4px' : '3px',
                                                                    height: activePitch.pitch >= 10 ? '4px' : '3px',
                                                                    backgroundColor: i % 2 === 0 ? '#00D8FF' : product.color,
                                                                    boxShadow: `0 0 ${activePitch.pitch >= 10 ? 12 : 6}px ${i % 2 === 0 ? '#00D8FF' : product.color}`,
                                                                    opacity: 1 // Max opacity for clarity
                                                                }}
                                                            >
                                                                {/* Core bright spot */}
                                                                <div className="absolute inset-0 bg-white rounded-full opacity-40 blur-[1px]" />
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            </AnimatePresence>

                                            {/* Scanline Effect */}
                                            <motion.div
                                                animate={{ top: ['-20%', '120%'] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                                className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#00D8FF]/5 to-transparent pointer-events-none"
                                            />
                                            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000000_3px)] opacity-20 pointer-events-none" />

                                            {/* Glass Reflection */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                        </div>

                                        {/* Density Badge */}
                                        <motion.div
                                            key={activePitch.densityEx}
                                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            className="absolute -top-6 -right-6 z-20"
                                        >
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-[#00D8FF] blur-xl opacity-20 animate-pulse" />
                                                <div className="relative bg-[#0a0520]/90 backdrop-blur-md border border-[#00D8FF]/30 rounded-2xl p-4 shadow-xl flex flex-col items-center min-w-[140px] shadow-[#00D8FF]/10">
                                                    <div className="text-[10px] font-outfit uppercase tracking-widest text-white/50 mb-1">Densité Pixel</div>
                                                    <div className="text-xl font-bold font-orbitron text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, #00D8FF, ${product.color})` }}>
                                                        {activePitch.densityEx}
                                                    </div>
                                                    <div className="text-[10px] text-white/40 mt-1">pixels / m²</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Distance Indicator */}
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {/* Distance */}
                                        <div className="flex flex-col gap-2 min-w-0">
                                            <div className="flex items-center gap-2 text-[#00D8FF]">
                                                <Eye className="w-4 h-4" />
                                                <span className="text-white/50 text-xs font-outfit uppercase tracking-wider whitespace-nowrap">Distance</span>
                                            </div>
                                            <div className="text-white font-bold font-orbitron text-base md:text-xl tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">{activePitch.viewDistance}</div>
                                        </div>

                                        {/* Brightness */}
                                        <div className="flex flex-col gap-2 md:border-l border-white/10 md:pl-6 min-w-0">
                                            <div className="flex items-center gap-2" style={{ color: product.color }}>
                                                <Sun className="w-4 h-4" />
                                                <span className="text-white/50 text-xs font-outfit uppercase tracking-wider whitespace-nowrap">Luminosité</span>
                                            </div>
                                            <div className="text-white font-bold font-orbitron text-base md:text-lg tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">{activePitch.brightness}</div>
                                        </div>

                                        {/* Usage */}
                                        <div className="flex flex-col gap-2 md:border-l border-white/10 md:pl-6">
                                            <div className="flex items-center gap-2 text-[#00D8FF]">
                                                <Scan className="w-4 h-4" />
                                                <span className="text-white/50 text-xs font-outfit uppercase tracking-wider">Usage</span>
                                            </div>
                                            <div className="text-white/80 font-medium font-outfit text-sm leading-snug">{activePitch.usage}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Pitch Selector */}
                    <div className="flex flex-col gap-3">
                        {availablePitches.map((p: any) => (
                            <motion.button
                                key={p.pitch}
                                onClick={() => setActivePitch(p)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`relative p-5 rounded-2xl border transition-all duration-300 text-left overflow-hidden group
                                    ${activePitch.pitch === p.pitch
                                        ? 'border-transparent shadow-2xl'
                                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                    }
                                `}
                                style={activePitch.pitch === p.pitch ? {
                                    background: `linear-gradient(to bottom right, ${product.color}4d, ${product.color}1a, transparent)`,
                                    borderColor: product.color,
                                    boxShadow: `0 0 30px ${product.color}4d`
                                } : {}}
                            >
                                {/* Active Indicator */}
                                {activePitch.pitch === p.pitch && (
                                    <motion.div
                                        layoutId="activePitch"
                                        className="absolute inset-0 opacity-20"
                                        style={{ background: `linear-gradient(to bottom right, ${product.color}, #00D8FF)` }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className={`font-orbitron font-black text-2xl transition-colors
                                            ${activePitch.pitch === p.pitch ? 'text-white' : 'text-white/50'}
                                        `}>
                                            {p.label}
                                        </span>

                                        {/* Icon based on pitch size */}
                                        {p.pitch <= 8 ? (
                                            <Minimize2 className={`w-5 h-5 ${activePitch.pitch === p.pitch ? 'text-[#00D8FF]' : 'text-white/30'}`} />
                                        ) : (
                                            <Maximize2 className={`w-5 h-5 transition-colors`} style={{ color: activePitch.pitch === p.pitch ? product.color : 'rgba(255,255,255,0.3)' }} />
                                        )}
                                    </div>

                                    <div className="flex justify-between items-center mb-1">
                                        <div className="text-xs text-white/40 font-outfit">{p.densityEx}</div>
                                        <div className="text-xs text-[#00D8FF]/70 font-outfit">{p.brightness}</div>
                                    </div>
                                    <div className={`text-sm font-outfit font-semibold ${activePitch.pitch === p.pitch ? 'text-white/90' : 'text-white/50'}`}>
                                        {p.viewDistance}
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Educational Info Cards */}
                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-[#00D8FF]/10 to-transparent border border-[#00D8FF]/30 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#00D8FF]/20 border border-[#00D8FF] rounded-xl flex items-center justify-center flex-shrink-0">
                                <Minimize2 className="w-6 h-6 text-[#00D8FF]" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold font-orbitron mb-2">Pitch Faible (P5-P8)</h4>
                                <p className="text-white/60 text-sm font-outfit leading-relaxed">
                                    <b className="text-[#00D8FF]">Plus de pixels</b> = image ultra-nette de près. Idéal pour petites surfaces (1-3m²) vues à courte distance (3-8m). Coût plus élevé mais qualité maximale.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-yellow-500/20 border border-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Sun className="w-6 h-6 text-yellow-500" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold font-orbitron mb-2">Luminosité & Soleil</h4>
                                <p className="text-white/60 text-sm font-outfit leading-relaxed">
                                    <b className="text-yellow-500">Haute Luminosité</b> indispensable pour les vitrines exposées au soleil. Nos écrans (jusqu'à 5500 nits) garantissent une visibilité parfaite même en plein jour.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br border rounded-2xl p-6 backdrop-blur-sm" style={{ background: `linear-gradient(to bottom right, ${product.color}1a, transparent)`, borderColor: `${product.color}4d` }}>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${product.color}33`, border: `1px solid ${product.color}` }}>
                                <Maximize2 className="w-6 h-6" style={{ color: product.color }} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold font-orbitron mb-2">Pitch Élevé (P16-P20)</h4>
                                <p className="text-white/60 text-sm font-outfit leading-relaxed">
                                    <b style={{ color: product.color }}>Pixels plus espacés</b> = Transparence maximale. Idéal pour les très grandes surfaces vues de loin (&gt;15m). L'espacement permet de voir à travers l'écran.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-white/30 text-xs font-outfit italic">
                        * Simulation visuelle simplifiée pour illustrer le principe de densité et d'espacement.
                    </p>
                </div>
            </div >
        </section >
    );
};

export default ViewingDistance;
