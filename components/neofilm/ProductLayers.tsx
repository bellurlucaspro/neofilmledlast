"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductLayers = () => {
    const [activeLayer, setActiveLayer] = useState<number | null>(null);

    const layers = [
        { id: 4, title: "Film de Protection", desc: "Anti-UV et anti-rayures pour une durabilité maximale.", color: "bg-purple-500", zIndex: 40, offset: 0, opacity: "opacity-90" },
        { id: 3, title: "Circuit PCB Invisible", desc: "Micro-maillage de haute précision, quasi-imperceptible.", color: "bg-blue-500", zIndex: 30, offset: 50, isChip: true },
        { id: 2, title: "Micro-LEDs SMD", desc: "Haute luminosité (5000 nits) et contraste supérieur.", color: "bg-cyan-400", zIndex: 20, offset: 100, isGlowing: true },
        { id: 1, title: "Adhésif Optique", desc: "Application directe et sans bulle sur vitrage existant.", color: "bg-white", zIndex: 10, offset: 150, opacity: "opacity-30" },
    ];

    return (
        <section className="py-20 relative px-6 bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] overflow-hidden">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            {/* Background Glow - Subtle accent */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black font-orbitron text-white mb-6">
                        TECHNOLOGIE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">INVISIBLE</span>
                    </h2>
                    <p className="text-white/60 font-outfit max-w-2xl mx-auto">
                        Une ingénierie de précision en 4 couches ultra-fines pour une transparence et une durabilité exceptionnelles.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
                    {/* LEFT COLUMN: 3D VISUALIZATION */}
                    <div className="h-[600px] flex items-center justify-center perspective-1000 relative">
                        {layers.map((layer) => (
                            <LayerCard
                                key={layer.id}
                                {...layer}
                                isActive={activeLayer === layer.id}
                                onHover={() => setActiveLayer(layer.id)}
                                onLeave={() => setActiveLayer(null)}
                            />
                        ))}
                        <div className="absolute bottom-10 md:bottom-20 text-white/30 font-orbitron text-sm tracking-widest uppercase animate-pulse">
                            Épaisseur Totale: 2mm
                        </div>
                    </div>

                    {/* RIGHT COLUMN: INTERACTIVE LIST */}
                    <div className="space-y-4">
                        {layers.map((layer) => (
                            <motion.div
                                key={layer.id}
                                onMouseEnter={() => setActiveLayer(layer.id)}
                                onMouseLeave={() => setActiveLayer(null)}
                                className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer group
                                    ${activeLayer === layer.id
                                        ? 'bg-white/10 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)] scale-[1.02]'
                                        : 'bg-white/5 border-transparent hover:bg-white/10 opacity-70 hover:opacity-100'
                                    }
                                `}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-3 h-3 rounded-full ${layer.color} shadow-[0_0_10px_currentColor]`} />
                                    <div>
                                        <h3 className={`text-xl font-bold font-orbitron mb-1 transition-colors ${activeLayer === layer.id ? 'text-white' : 'text-white/80'}`}>
                                            {layer.title}
                                        </h3>
                                        <p className="text-sm font-outfit text-white/60 group-hover:text-white/80 transition-colors">
                                            {layer.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Soft Neon Separator */}
                <div className="mt-24 mb-16 relative flex items-center justify-center">
                    {/* Main Line */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80" />
                    {/* Glow Effect */}
                    <div className="absolute w-[60%] h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-[2px] opacity-70" />
                    {/* Intense Center */}
                    <div className="absolute w-[20%] h-[1px] bg-purple-400 blur-[4px] opacity-50" />
                </div>

                {/* Module Dimensions Visualization */}
                <div>
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold font-orbitron text-white">Dimensions des Modules</h3>
                        <p className="text-white/50 text-sm mt-2">Deux formats disponibles pour s'adapter à toutes les surfaces vitrées</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-16 items-end">
                        {/* Module 1000x400 */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="relative w-[300px] h-[120px] border border-[#00D8FF]/50 bg-[#00D8FF]/5 backdrop-blur-md rounded-lg flex items-center justify-center transition-all duration-500 group-hover:bg-[#00D8FF]/10 group-hover:shadow-[0_0_30px_rgba(0,216,255,0.2)]">
                                {/* Grid lines */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,216,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,216,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

                                {/* Dimensions */}
                                <div className="absolute -top-6 left-0 right-0 text-center text-[#00D8FF] text-xs font-mono">1000mm</div>
                                <div className="absolute -left-8 top-0 bottom-0 flex items-center text-[#00D8FF] text-xs font-mono transform -rotate-90">400mm</div>

                                <span className="text-white font-bold font-orbitron text-lg relative z-10">Standard</span>
                            </div>
                            <p className="text-sm text-white/50 font-outfit">Module Principal</p>
                        </div>

                        {/* Module 1000x240 */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="relative w-[300px] h-[72px] border border-[#CB52EE]/50 bg-[#CB52EE]/5 backdrop-blur-md rounded-lg flex items-center justify-center transition-all duration-500 group-hover:bg-[#CB52EE]/10 group-hover:shadow-[0_0_30px_rgba(203,82,238,0.2)]">
                                {/* Grid lines */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(203,82,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(203,82,238,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

                                {/* Dimensions */}
                                <div className="absolute -top-6 left-0 right-0 text-center text-[#CB52EE] text-xs font-mono">1000mm</div>
                                <div className="absolute -left-8 top-0 bottom-0 flex items-center text-[#CB52EE] text-xs font-mono transform -rotate-90">240mm</div>

                                <span className="text-white font-bold font-orbitron text-lg relative z-10">Compact</span>
                            </div>
                            <p className="text-sm text-white/50 font-outfit">Module Hauteur Réduite</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const LayerCard = ({ zIndex, offset, color, isChip = false, isGlowing = false, opacity = "opacity-90", isActive, onHover, onLeave }: any) => {
    return (
        <motion.div
            initial={{ rotateX: 55, rotateZ: -45, y: -200, opacity: 0 }}
            whileInView={{ rotateX: 55, rotateZ: -45, y: isActive ? offset * -2.5 : offset * -1.5, opacity: 1, scale: isActive ? 1.05 : 1 }}
            animate={{
                y: isActive ? offset * -2.5 : offset * -1.5,
                scale: isActive ? 1.05 : 1,
                rotateZ: isActive ? -35 : -45 // Slight rotation on hover for better view
            }}
            transition={{ duration: 0.5, type: "spring" }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className={`absolute w-64 h-64 md:w-80 md:h-80 rounded-2xl border border-white/20 backdrop-blur-sm shadow-2xl flex items-center justify-center cursor-pointer
                ${isActive ? 'border-white/50 shadow-[0_0_50px_rgba(255,255,255,0.2)] z-50' : ''}
                ${isGlowing ? 'shadow-[0_0_50px_rgba(0,216,255,0.3)]' : ''}
            `}
            style={{
                zIndex: isActive ? 100 : zIndex,
                transformStyle: "preserve-3d",
                background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)`
            }}
        >
            {/* Corner Accent */}
            <div className={`absolute top-0 left-0 w-full h-1 ${color} ${opacity}`} />

            {/* Simulated Content */}
            {isChip && (
                <div className="grid grid-cols-8 gap-2 opacity-20 w-full h-full p-4">
                    {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="bg-white/50 rounded-full w-1 h-1" />
                    ))}
                </div>
            )}

            {isGlowing && (
                <div className="grid grid-cols-8 gap-2 w-full h-full p-4">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="bg-cyan-400 rounded-sm w-full h-full shadow-[0_0_10px_rgba(0,216,255,0.8)] animate-pulse" />
                    ))}
                </div>
            )}
        </motion.div>
    )
}

export default ProductLayers;
