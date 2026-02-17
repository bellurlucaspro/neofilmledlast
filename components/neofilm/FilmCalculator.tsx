"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ruler, Grid3x3, Calculator, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

interface FilmFormat {
    width: number;
    height: number;
    label: string;
    color: string;
}

// Film formats available
const FILM_FORMATS: Record<string, FilmFormat> = {
    LARGE: { width: 1000, height: 400, label: "1000 x 400mm", color: "#00D8FF" },
    SMALL: { width: 1000, height: 240, label: "1000 x 240mm", color: "#CB52EE" }
};

interface FilmLayout {
    filmType: 'LARGE' | 'SMALL' | 'STANDARD' | 'HALF' | 'FLEX' | 'INDOOR_XL' | 'INDOOR_SQ';
    orientation: 'horizontal' | 'vertical';
    columns: number;
    rows: number;
    totalFilms: number;
    coverage: { width: number; height: number };
}

interface FilmCalculatorProps {
    product: any;
}

const FilmCalculator: React.FC<FilmCalculatorProps> = ({ product }) => {
    const [windowWidth, setWindowWidth] = useState(2000); // mm
    const [windowHeight, setWindowHeight] = useState(2000); // mm

    // Dynamic Film Formats based on product
    const formats: Record<string, FilmFormat> = useMemo(() => {
        if (product.slug === 'rideau-led-transparent') {
            return {
                STANDARD: { width: 1000, height: 500, label: "1000 x 500mm", color: "#CB52EE" },
                HALF: { width: 500, height: 500, label: "500 x 500mm", color: "#00D8FF" }
            };
        }
        if (product.slug === 'ecran-flexible-led') {
            return {
                FLEX: { width: 320, height: 160, label: "320 x 160mm", color: "#00D8FF" }
            };
        }
        if (product.slug === 'mur-led-indoor') {
            return {
                INDOOR_XL: { width: 500, height: 1000, label: "500 x 1000mm", color: "#CB52EE" },
                INDOOR_SQ: { width: 500, height: 500, label: "500 x 500mm", color: "#00D8FF" }
            };
        }
        return FILM_FORMATS;
    }, [product.slug]);

    // Calculate optimal layout
    const calculateLayout = useMemo((): FilmLayout[] => {
        const layouts: FilmLayout[] = [];

        // Try available formats
        Object.entries(formats).forEach(([key, format]) => {
            const filmType = key as 'LARGE' | 'SMALL' | 'STANDARD' | 'HALF' | 'FLEX' | 'INDOOR_XL' | 'INDOOR_SQ';

            // VERTICAL MOUNTING
            const colsV = Math.floor(windowWidth / format.height);
            const rowsV = Math.floor(windowHeight / format.width);
            layouts.push({
                filmType,
                orientation: 'vertical',
                columns: colsV,
                rows: rowsV,
                totalFilms: colsV * rowsV,
                coverage: { width: colsV * format.height, height: rowsV * format.width }
            });

            // HORIZONTAL MOUNTING
            const colsH = Math.floor(windowWidth / format.width);
            const rowsH = Math.floor(windowHeight / format.height);
            layouts.push({
                filmType,
                orientation: 'horizontal',
                columns: colsH,
                rows: rowsH,
                totalFilms: colsH * rowsH,
                coverage: { width: colsH * format.width, height: rowsH * format.height }
            });
        });

        return layouts.sort((a, b) => a.totalFilms - b.totalFilms);
    }, [windowWidth, windowHeight, formats]);

    // Select the best layout (usually the one with most films/coverage, which is last after sort)
    const bestLayout = calculateLayout.length > 0 ? calculateLayout[calculateLayout.length - 1] : calculateLayout[0];

    const [selectedLayout, setSelectedLayout] = useState<FilmLayout>(bestLayout);

    // Update selected layout when calculations change (Reset to best)
    React.useEffect(() => {
        setSelectedLayout(bestLayout);
    }, [calculateLayout]);

    const filmFormat = formats[selectedLayout.filmType];

    return (
        <section id="calculateur" className="py-32 px-6 relative bg-gradient-to-b from-[#030014] via-[#0f0520] to-[#030014] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10" style={{ backgroundColor: product.color }} />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#00D8FF]/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 backdrop-blur-sm mb-6"
                        style={{ background: `linear-gradient(to right, ${product.color}33, #00D8FF33)` }}
                    >
                        <Calculator className="w-4 h-4" style={{ color: product.color }} />
                        <span className="text-white/90 font-outfit text-sm tracking-wider uppercase font-bold">Calculateur Intelligent</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black font-orbitron text-white leading-tight mb-6"
                    >
                        Configurez Votre <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${product.color}, #00D8FF)` }}>Projet</span>
                    </motion.h2>
                    <p className="text-white/60 text-lg font-outfit max-w-3xl mx-auto">
                        Entrez les dimensions de votre surface et visualisez instantanément la configuration optimale.
                    </p>
                </div>

                <div className="grid md:grid-cols-12 gap-8">
                    {/* Left: Controls */}
                    <div className="md:col-span-4 space-y-6">
                        {/* Dimension Inputs */}
                        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                            <h3 className="text-white font-bold font-orbitron mb-6 flex items-center gap-2">
                                <Ruler className="w-5 h-5" style={{ color: product.color }} />
                                Dimensions de la Surface
                            </h3>

                            {/* Width Slider */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <label className="text-white/70 text-sm font-outfit">Largeur</label>
                                    <div className="border px-3 py-1 rounded-lg" style={{ backgroundColor: `${product.color}33`, borderColor: `${product.color}80` }}>
                                        <span className="font-bold font-orbitron" style={{ color: product.color }}>{windowWidth}mm</span>
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    min="500"
                                    max="10000"
                                    step="100"
                                    value={windowWidth}
                                    onChange={(e) => setWindowWidth(Number(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                                    style={{ accentColor: product.color }}
                                />
                                <div className="flex justify-between text-xs text-white/30 mt-1 font-mono">
                                    <span>0.5m</span>
                                    <span>10m</span>
                                </div>
                            </div>

                            {/* Height Slider */}
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <label className="text-white/70 text-sm font-outfit">Hauteur</label>
                                    <div className="bg-[#00D8FF]/20 border border-[#00D8FF]/50 px-3 py-1 rounded-lg">
                                        <span className="text-[#00D8FF] font-bold font-orbitron">{windowHeight}mm</span>
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    min="500"
                                    max="10000"
                                    step="100"
                                    value={windowHeight}
                                    onChange={(e) => setWindowHeight(Number(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00D8FF]"
                                />
                                <div className="flex justify-between text-xs text-white/30 mt-1 font-mono">
                                    <span>0.5m</span>
                                    <span>10m</span>
                                </div>
                            </div>
                        </div>

                        {/* Layout Options */}
                        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                            <h3 className="text-white font-bold font-orbitron mb-4 flex items-center gap-2">
                                <Grid3x3 className="w-5 h-5" style={{ color: product.color }} />
                                Configurations Possibles
                            </h3>
                            <div className="space-y-2">
                                {calculateLayout.map((layout, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedLayout(layout)}
                                        className={`w-full p-4 rounded-xl border transition-all text-left ${selectedLayout === layout
                                            ? 'border-transparent'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                                            }`}
                                        style={selectedLayout === layout ? {
                                            background: `linear-gradient(to right, ${product.color}33, #00D8FF33)`,
                                            borderColor: product.color
                                        } : {}}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-white font-bold font-orbitron text-sm">
                                                {formats[layout.filmType].label}
                                            </span>
                                            {selectedLayout === layout && (
                                                <CheckCircle2 className="w-4 h-4 text-white" />
                                            )}
                                        </div>
                                        <div className="text-xs text-white/50 font-outfit">
                                            {layout.orientation === 'horizontal' ? 'Horizontal' : 'Vertical'} • {layout.totalFilms} modules
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>


                    </div>

                    {/* Right: Visual Preview */}
                    <div className="md:col-span-8">
                        <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col overflow-hidden">
                            {/* Animated background gradient */}
                            <motion.div
                                animate={{
                                    background: [
                                        `radial-gradient(circle at 20% 50%, ${product.color}15 0%, transparent 50%)`,
                                        `radial-gradient(circle at 80% 50%, ${product.color}15 0%, transparent 50%)`,
                                        `radial-gradient(circle at 20% 50%, ${product.color}15 0%, transparent 50%)`,
                                    ],
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 opacity-50"
                            />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-white font-bold font-orbitron text-xl">
                                        Aperçu du Montage
                                    </h3>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/20 backdrop-blur-sm"
                                    >
                                        <motion.div
                                            animate={{ boxShadow: [`0 0 10px ${filmFormat.color}`, `0 0 20px ${filmFormat.color}`, `0 0 10px ${filmFormat.color}`] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-3 h-3 rounded-sm"
                                            style={{ backgroundColor: filmFormat.color }}
                                        />
                                        <span className="text-white/90 font-outfit text-sm font-semibold">{filmFormat.label}</span>
                                    </motion.div>
                                </div>

                                {/* Visual Grid */}
                                <div className="flex-1 flex items-center justify-center p-4">
                                    <div className="relative">
                                        {/* Scale indicator */}
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute -top-10 left-0 right-0 text-center"
                                        >
                                            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm">
                                                <span className="text-xs text-white/60 font-mono">
                                                    {(windowWidth / 1000).toFixed(1)}m × {(windowHeight / 1000).toFixed(1)}m
                                                </span>
                                            </div>
                                        </motion.div>

                                        {/* Grid Container */}
                                        <motion.div
                                            key={`${selectedLayout.filmType}-${selectedLayout.orientation}`}
                                            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                                            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                                            transition={{ duration: 0.6, type: "spring" }}
                                            className="relative rounded-2xl p-4 border-2 shadow-2xl"
                                            style={{
                                                width: Math.min(350, windowWidth / 10),
                                                height: Math.min(350, windowHeight / 10),
                                                background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 100%)`,
                                                borderColor: `${filmFormat.color}40`,
                                                boxShadow: `0 0 40px ${filmFormat.color}20, inset 0 0 40px rgba(255,255,255,0.05)`,
                                            }}
                                        >
                                            {/* Film Grid */}
                                            <div
                                                className="grid gap-1.5 h-full w-full"
                                                style={{
                                                    gridTemplateColumns: `repeat(${selectedLayout.columns}, 1fr)`,
                                                    gridTemplateRows: `repeat(${selectedLayout.rows}, 1fr)`,
                                                }}
                                            >
                                                {Array.from({ length: selectedLayout.totalFilms }).map((_, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0, rotateY: -90 }}
                                                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                                        transition={{
                                                            delay: idx * 0.015,
                                                            duration: 0.4,
                                                            type: "spring",
                                                            stiffness: 200
                                                        }}
                                                        whileHover={{
                                                            scale: 1.05,
                                                            zIndex: 10,
                                                            transition: { duration: 0.2 }
                                                        }}
                                                        className="relative rounded-lg border backdrop-blur-sm flex items-center justify-center group cursor-pointer overflow-hidden"
                                                        style={{
                                                            backgroundColor: `${filmFormat.color}25`,
                                                            borderColor: `${filmFormat.color}60`,
                                                        }}
                                                    >
                                                        {/* Film number */}
                                                        <span className="relative z-10 text-white/50 group-hover:text-white text-[10px] font-bold font-mono transition-colors">
                                                            {idx + 1}
                                                        </span>

                                                        {/* Animated gradient on hover */}
                                                        <motion.div
                                                            className="absolute inset-0"
                                                            initial={{ opacity: 0 }}
                                                            whileHover={{ opacity: 1 }}
                                                            style={{
                                                                background: `linear-gradient(135deg, ${filmFormat.color}40 0%, transparent 100%)`
                                                            }}
                                                        />

                                                        {/* Glow on hover */}
                                                        <motion.div
                                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                            style={{
                                                                boxShadow: `inset 0 0 30px ${filmFormat.color}60, 0 0 15px ${filmFormat.color}40`
                                                            }}
                                                        />

                                                        {/* Shine effect */}
                                                        <motion.div
                                                            className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                                            animate={{
                                                                background: [
                                                                    'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                                                                    'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                                                                ],
                                                                x: ['-100%', '200%']
                                                            }}
                                                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                                                        />
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Connection indicators with glow */}
                                            {selectedLayout.orientation === 'vertical' ? (
                                                <>
                                                    {/* VERTICAL = PORTRAIT = Connections on TOP/BOTTOM */}
                                                    <motion.div
                                                        animate={{ opacity: [0.6, 1, 0.6] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                        className="absolute -top-2 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                                                        style={{ filter: 'blur(1px)', boxShadow: '0 0 10px rgba(250, 204, 21, 0.8)' }}
                                                    />
                                                    <motion.div
                                                        animate={{ opacity: [0.6, 1, 0.6] }}
                                                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                                        className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                                                        style={{ filter: 'blur(1px)', boxShadow: '0 0 10px rgba(250, 204, 21, 0.8)' }}
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    {/* HORIZONTAL = LANDSCAPE = Connections on LEFT/RIGHT */}
                                                    <motion.div
                                                        animate={{ opacity: [0.6, 1, 0.6] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                        className="absolute -left-2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-yellow-400 to-transparent"
                                                        style={{ filter: 'blur(1px)', boxShadow: '0 0 10px rgba(250, 204, 21, 0.8)' }}
                                                    />
                                                    <motion.div
                                                        animate={{ opacity: [0.6, 1, 0.6] }}
                                                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                                        className="absolute -right-2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-yellow-400 to-transparent"
                                                        style={{ filter: 'blur(1px)', boxShadow: '0 0 10px rgba(250, 204, 21, 0.8)' }}
                                                    />
                                                </>
                                            )}
                                        </motion.div>

                                        {/* Dimension labels */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="absolute -bottom-20 left-0 right-0 flex justify-center gap-3"
                                        >
                                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm">
                                                <span className="text-xs text-white/60 font-mono">Grille: {selectedLayout.columns} × {selectedLayout.rows}</span>
                                                <span className="text-white/30">•</span>
                                                <span className="text-xs text-white/60 font-outfit capitalize">{selectedLayout.orientation}</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Info Cards */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-24"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-4 text-center backdrop-blur-sm overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00D8FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative z-10">
                                            <div className="text-white/50 text-xs font-outfit uppercase mb-2 tracking-wider">Surface Couverte</div>
                                            <div className="text-white font-black font-orbitron text-lg">
                                                {(selectedLayout.coverage.width / 1000).toFixed(1)}m × {(selectedLayout.coverage.height / 1000).toFixed(1)}m
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-4 text-center backdrop-blur-sm overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#CB52EE]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative z-10">
                                            <div className="text-white/50 text-xs font-outfit uppercase mb-2 tracking-wider">Surface (m²)</div>
                                            <div className="text-white font-black font-orbitron text-lg">
                                                {((selectedLayout.coverage.width / 1000) * (selectedLayout.coverage.height / 1000)).toFixed(2)} m²
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-4 text-center backdrop-blur-sm overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00D8FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative z-10">
                                            <div className="text-white/50 text-xs font-outfit uppercase mb-2 tracking-wider">Format Film</div>
                                            <div className="text-white font-black font-orbitron">{filmFormat.label}</div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-4 text-center backdrop-blur-sm overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#CB52EE]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative z-10">
                                            <div className="text-white/50 text-xs font-outfit uppercase mb-2 tracking-wider">Orientation</div>
                                            <div className="text-white font-black font-orbitron capitalize">{selectedLayout.orientation}</div>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Total Films Summary Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-6 bg-gradient-to-r from-[#00D8FF]/10 to-[#CB52EE]/10 border border-white/10 rounded-xl p-6 flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#00D8FF]/20 to-[#CB52EE]/20 rounded-xl flex items-center justify-center border border-white/10">
                                            <Sparkles className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-white/60 text-xs font-outfit uppercase mb-1">Total Films Requis</div>
                                            <div className="text-white/80 text-sm font-outfit">
                                                Grille: {selectedLayout.columns} × {selectedLayout.rows} <span className="text-white/40">•</span> <span className="capitalize">{selectedLayout.orientation}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-white font-black font-orbitron text-4xl tracking-wider">
                                        {selectedLayout.totalFilms}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recommendation */}
                {windowHeight > 2000 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-6"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-yellow-500/20 border border-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                <ArrowRight className="w-6 h-6 text-yellow-400 rotate-90" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold font-orbitron mb-2">Montage Vertical Recommandé</h4>
                                <p className="text-white/70 text-sm font-outfit leading-relaxed">
                                    Pour une hauteur supérieure à 2m, nous recommandons un montage vertical (modules en portrait) pour optimiser la couverture verticale et faciliter l'installation.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default FilmCalculator;
