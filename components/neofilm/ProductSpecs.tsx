"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Zap, Eye, Monitor, Cpu, Grid, Layers, Scale, Move } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProductSpecsProps {
    product: any;
}

const ProductSpecs: React.FC<ProductSpecsProps> = ({ product }) => {
    // Extract key specs for the bento grid
    const getSpec = (label: string) => product?.specs?.find((s: any) => s.label.toLowerCase().includes(label.toLowerCase()))?.value || "—";

    // Default main specs
    const transparency = getSpec("Transparence");
    const pitch = getSpec("Pitch") || getSpec("Densité");
    const brightness = getSpec("Luminosité");
    const weight = getSpec("Poids");
    const refresh = getSpec("Rafraîchissement");
    const dimensions = getSpec("Dimensions");
    const angle = getSpec("Angle");

    // Variant State
    const [selectedVariant, setSelectedVariant] = useState<any>(product?.variants?.[0] || null);

    // Auto-rotate variants if not interacted
    useEffect(() => {
        if (!product?.variants) return;
        const interval = setInterval(() => {
            // Optional: Auto-rotation logic could go here, but might annoy user if they are reading
        }, 5000);
        return () => clearInterval(interval);
    }, [product?.variants]);

    return (
        <section id="spécifications" className="py-24 px-6 relative w-full bg-black-100 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a0b2e] via-[#030014] to-black opacity-80" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 border-b border-white/10 pb-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 font-orbitron text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6"
                            style={{ color: product?.color || "#00D8FF" }}
                        >
                            <Zap className="w-4 h-4 shadow-[0_0_10px_currentColor]" />
                            Architecture Technique
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-black font-orbitron text-white leading-[0.9] tracking-tighter uppercase"
                        >
                            FICHE & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00D8FF] to-[#CB52EE]">
                                TECHNIQUE
                            </span>
                        </motion.h2>
                    </div>

                    <Link
                        href={`/catalogue?product=${product.slug}&autoPrint=true`}
                        className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all cursor-pointer"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        <span className="relative flex items-center gap-3 font-orbitron font-bold text-sm text-white uppercase tracking-wider">
                            <Download className="w-4 h-4 text-[#00D8FF]" />
                            Fiche Technique PDF
                        </span>
                    </Link>
                </div>

                {/* --- FUTURISTIC HUD VARIANT SELECTOR --- */}
                {product.variants && (
                    <div className="mb-32 space-y-12">
                        {/* 1. Vanguard Horizontal Selector */}
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#00D8FF]/50" />
                                <h3 className="text-xl font-bold font-orbitron text-white uppercase tracking-[0.3em] flex items-center gap-3">
                                    <Grid className="w-5 h-5 text-[#CB52EE] animate-pulse" />
                                    Systèmes Déployables
                                </h3>
                                <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#00D8FF]/50" />
                            </div>

                            <div className="flex flex-wrap justify-center gap-4 p-2 bg-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-md">
                                {product.variants.map((variant: any, idx: number) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedVariant(variant)}
                                        className={cn(
                                            "relative px-8 py-4 rounded-xl font-orbitron font-bold transition-all duration-500 group overflow-hidden",
                                            selectedVariant?.name === variant.name
                                                ? "text-white"
                                                : "text-white/40 hover:text-white/80"
                                        )}
                                    >
                                        {/* Selection Indicators */}
                                        {selectedVariant?.name === variant.name && (
                                            <>
                                                <motion.div
                                                    layoutId="vanguard-bg"
                                                    className="absolute inset-0 bg-[#CB52EE] shadow-[0_0_20px_rgba(203,82,238,0.5)]"
                                                />
                                                <motion.div
                                                    initial={{ x: "-100%" }}
                                                    animate={{ x: "200%" }}
                                                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full skew-x-12 z-20"
                                                />
                                            </>
                                        )}
                                        <span className="relative z-10 uppercase tracking-widest">{variant.name}</span>
                                        <div className="absolute top-0 left-0 w-1 h-1 bg-white/20" />
                                        <div className="absolute bottom-0 right-0 w-1 h-1 bg-white/20" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 2. Holographic Detail Panel */}
                        <div className="relative max-w-5xl mx-auto">
                            {/* Outer Frame Accents */}
                            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-[#00D8FF]/30 rounded-tl-2xl" />
                            <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-[#CB52EE]/30 rounded-tr-2xl" />
                            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-[#CB52EE]/30 rounded-bl-2xl" />
                            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-[#00D8FF]/30 rounded-br-2xl" />

                            <AnimatePresence mode="wait">
                                {selectedVariant && (
                                    <motion.div
                                        key={selectedVariant.name}
                                        initial={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                                        exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
                                        transition={{ duration: 0.5, ease: "circOut" }}
                                        className="relative bg-white/[0.03] backdrop-blur-[30px] border border-white/10 rounded-[2.5rem] p-10 md:p-16 overflow-hidden shadow-2xl shadow-black/50"
                                    >
                                        {/* HUD Scanning Line */}
                                        <motion.div
                                            initial={{ y: "-100%" }}
                                            animate={{ y: "200%" }}
                                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D8FF]/40 to-transparent z-20 pointer-events-none"
                                        />

                                        {/* HUD Content Layout */}
                                        <div className="relative z-10 grid lg:grid-cols-12 gap-8 xl:gap-16 items-center">

                                            {/* Tech Specs Main Column */}
                                            <div className="lg:col-span-8 pr-4 xl:pr-12">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-2 h-2 rounded-full bg-[#00D8FF] animate-pulse" />
                                                    <span className="font-orbitron text-xs font-bold tracking-[0.4em] text-[#00D8FF] uppercase">
                                                        Data_Link_Established
                                                    </span>
                                                </div>
                                                <h2 className="text-4xl md:text-5xl xl:text-7xl font-black font-orbitron text-white leading-none tracking-tighter mb-8 uppercase break-words pr-4">
                                                    {selectedVariant.name}
                                                </h2>

                                                {selectedVariant.description && (
                                                    <motion.p
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        className="text-sm font-outfit text-white/60 leading-relaxed mb-8 border-l-2 border-[#CB52EE]/50 pl-4 py-1 italic shadow-[0_0_15px_rgba(203,82,238,0.1)]"
                                                    >
                                                        {selectedVariant.description}
                                                    </motion.p>
                                                )}

                                                <div className="space-y-8">
                                                    {/* Custom Gauge: Pixel Density */}
                                                    <div className="relative">
                                                        <div className="flex justify-between items-end mb-4">
                                                            <div className="text-xs font-orbitron font-bold text-white/40 uppercase tracking-widest">Densité de Pixels</div>
                                                            <div className="text-3xl font-black font-orbitron" style={{ color: product.color || "#00D8FF" }}>{selectedVariant.density}</div>
                                                        </div>
                                                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: "100%" }}
                                                                transition={{ duration: 1, delay: 0.3 }}
                                                                className="h-full shadow-[0_0_15px_currentColor]"
                                                                style={{ background: `linear-gradient(to right, ${product.color || "#00D8FF"}, #fff)`, color: product.color || "#00D8FF" }}
                                                            />
                                                        </div>
                                                        <div className="mt-2 flex justify-between text-[10px] font-mono text-white/20 uppercase tracking-widest">
                                                            <span>Min_Range</span>
                                                            <span>Optimal_Performance_Zone</span>
                                                        </div>
                                                    </div>

                                                    {/* Bit Depth / Color Info */}
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                                            <div className="text-[10px] font-orbitron text-white/30 uppercase mb-2">Rafraîchissement</div>
                                                            <div className="text-xl font-bold font-orbitron text-white">3840Hz</div>
                                                        </div>
                                                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                                            <div className="text-[10px] font-orbitron text-white/30 uppercase mb-2">Scan Mode</div>
                                                            <div className="text-xl font-bold font-orbitron text-white">{selectedVariant.scan}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Technical Indicators Grid */}
                                            <div className="lg:col-span-4 grid grid-cols-2 gap-2 xl:gap-4">
                                                {/* Gauge: Brightness */}
                                                <div className="group px-2 py-4 xl:px-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00D8FF]/30 transition-all flex flex-col items-center text-center h-full min-h-[150px] justify-center">
                                                    <div className="relative w-12 h-12 xl:w-16 xl:h-16 mb-4 flex-shrink-0">
                                                        <svg className="w-full h-full transform -rotate-90">
                                                            <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/5 xl:hidden" />
                                                            <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/5 hidden xl:block" />
                                                            <motion.circle
                                                                cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="4"
                                                                strokeDasharray="125"
                                                                initial={{ strokeDashoffset: 125 }}
                                                                animate={{ strokeDashoffset: 125 - (125 * 0.8) }}
                                                                className="text-[#00D8FF] drop-shadow-[0_0_5px_#00D8FF] xl:hidden"
                                                            />
                                                            <motion.circle
                                                                cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="4"
                                                                strokeDasharray="176"
                                                                initial={{ strokeDashoffset: 176 }}
                                                                animate={{ strokeDashoffset: 176 - (176 * 0.8) }}
                                                                className="text-[#00D8FF] drop-shadow-[0_0_5px_#00D8FF] hidden xl:block"
                                                            />
                                                        </svg>
                                                        <Zap className="absolute inset-0 m-auto w-4 h-4 xl:w-5 xl:h-5 text-[#00D8FF]" />
                                                    </div>
                                                    <div className="text-[9px] font-orbitron text-white/40 uppercase mb-2 tracking-[0.1em]">Luminosité</div>
                                                    <div className="text-[10px] xl:text-[12px] font-bold font-orbitron leading-none text-white tracking-tighter w-full">{selectedVariant.brightness}</div>
                                                </div>

                                                {/* Indicator: Distance */}
                                                <div className="group px-2 py-4 xl:px-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#CB52EE]/30 transition-all flex flex-col items-center text-center h-full min-h-[150px] justify-center">
                                                    <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform flex-shrink-0">
                                                        <Move className="w-4 h-4 xl:w-5 xl:h-5 text-[#CB52EE]" />
                                                    </div>
                                                    <div className="text-[9px] font-orbitron text-white/40 uppercase mb-2 tracking-[0.1em]">Distance Min.</div>
                                                    <div className="text-[10px] xl:text-[12px] font-bold font-orbitron leading-none text-white tracking-tighter w-full">{selectedVariant.viewDistance}</div>
                                                </div>

                                                {/* Indicator: Resolution */}
                                                <div className="group px-2 py-4 xl:px-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all flex flex-col items-center text-center h-full min-h-[150px] justify-center">
                                                    <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform flex-shrink-0">
                                                        <Monitor className="w-4 h-4 xl:w-5 xl:h-5 text-white/60" />
                                                    </div>
                                                    <div className="text-[9px] font-orbitron text-white/40 uppercase mb-2 tracking-[0.1em]">Résolution</div>
                                                    <div className="text-[9px] xl:text-[11px] font-bold font-orbitron leading-tight text-white tracking-tighter w-full break-all">
                                                        {selectedVariant.resolution}
                                                    </div>
                                                </div>

                                                {/* Indicator: Module */}
                                                <div className="group px-2 py-4 xl:px-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all flex flex-col items-center text-center h-full min-h-[150px] justify-center">
                                                    <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform flex-shrink-0">
                                                        <Scale className="w-4 h-4 xl:w-5 xl:h-5 text-white/60" />
                                                    </div>
                                                    <div className="text-[9px] font-orbitron text-white/40 uppercase mb-2 tracking-[0.1em]">Format Module</div>
                                                    <div className="text-[9px] xl:text-[11px] font-bold font-orbitron leading-tight text-white tracking-tighter w-full break-all">
                                                        {selectedVariant.moduleSize}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Status Bar */}
                                        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-white/10 uppercase tracking-[0.5em]">
                                            <span>Hardware_v.4.2 // Stand_LED_Control</span>
                                            <div className="flex gap-4">
                                                <span className="flex items-center gap-1"><div className="w-1 h-1 rounded-full bg-green-500" /> ONLINE</span>
                                                <span className="flex items-center gap-1"><div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" /> SYNC</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                )}


                {/* --- STANDARD SPECS BENTO GRID (REMODELED) --- */}
                <h3 className="text-xl font-bold font-orbitron text-white/50 mb-8 uppercase tracking-widest text-center border-t border-white/10 pt-16">
                    Détails Environnementaux
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Weight */}
                    <SpecCard
                        icon={<Scale className="w-6 h-6" />}
                        label="Poids Plume"
                        value={product.detailedSpecs?.avgPower ? "7.5 kg" : weight} // Fallback logic
                        sub="Par Panneau"
                        color="#00D8FF"
                    />

                    {/* Consumption */}
                    <SpecCard
                        icon={<Zap className="w-6 h-6" />}
                        label="Consommation Moy."
                        value={product.detailedSpecs?.avgPower || "200 W/m²"}
                        sub="Haute Efficacité"
                        color="#FFD700"
                    />

                    {/* Lifespan */}
                    <SpecCard
                        icon={<Layers className="w-6 h-6" />}
                        label="Durée de Vie"
                        value={product.detailedSpecs?.lifespan || "100 000 H"}
                        sub="Utilisation 24/7"
                        color="#CB52EE"
                    />

                    {/* Protection */}
                    <SpecCard
                        icon={<Monitor className="w-6 h-6" />}
                        label="Protection IP"
                        value="IP65 / IP54"
                        sub="Avant / Arrière"
                        color="#ffffff"
                    />
                </div>

            </div>
        </section>
    );
};

const SpecCard = ({ icon, label, value, sub, color }: any) => (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group">
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ color: color }}>
            {icon}
        </div>
        <div className="text-white/40 text-xs font-orbitron uppercase tracking-widest mb-2">{label}</div>
        <div className="text-2xl md:text-3xl font-bold font-orbitron text-white mb-1">{value}</div>
        <div className="text-white/30 text-xs font-outfit">{sub}</div>
    </div>
);

export default ProductSpecs;
