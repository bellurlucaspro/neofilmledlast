"use client";

import React from "react";
import { motion } from "framer-motion";
import { World } from "@/components/ui/Globe";

const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 46.2276, lng: 2.2137 }, // France
    autoRotate: true,
    autoRotateSpeed: 0.5,
};

const sampleArcs = [
    { order: 1, startLat: 48.8566, startLng: 2.3522, endLat: 40.7128, endLng: -74.0060, arcAlt: 0.3, color: "#00D8FF" }, // Paris -> NY
    { order: 2, startLat: 48.8566, startLng: 2.3522, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.1, color: "#CB52EE" }, // Paris -> London
    { order: 3, startLat: 48.8566, startLng: 2.3522, endLat: 52.5200, endLng: 13.4050, arcAlt: 0.1, color: "#00ff88" }, // Paris -> Berlin
    { order: 4, startLat: 48.8566, startLng: 2.3522, endLat: 43.2965, endLng: 5.3698, arcAlt: 0.1, color: "#FFD700" }, // Paris -> Marseille
    { order: 5, startLat: 48.8566, startLng: 2.3522, endLat: 45.7640, endLng: 4.8357, arcAlt: 0.1, color: "#00D8FF" }, // Paris -> Lyon
    { order: 6, startLat: 48.8566, startLng: 2.3522, endLat: 44.8378, endLng: -0.5792, arcAlt: 0.1, color: "#CB52EE" }, // Paris -> Bordeaux
    { order: 7, startLat: 48.8566, startLng: 2.3522, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.5, color: "#FFD700" }, // Paris -> Dubai
];

const InstallationMap = () => {
    return (
        <section className="relative h-[80vh] bg-[#030014] overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030014] to-transparent z-20" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030014] to-transparent z-20" />

            <div className="relative z-30 text-center mb-10 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6"
                >
                    <span className="text-xs font-bold font-orbitron text-white uppercase tracking-[0.2em] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Réseau Actif
                    </span>
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-black font-orbitron text-white leading-tight">
                    INTERVENTION <span className="text-[#00D8FF]">GLOBALE</span>
                </h2>
                <p className="text-white/60 font-outfit text-lg mt-4 max-w-lg mx-auto">
                    Nos équipes se déplacent partout en France et en Europe pour assurer une installation sans frontières.
                </p>
            </div>

            <div className="absolute inset-0 z-10 w-full h-full">
                <World globeConfig={globeConfig} data={sampleArcs} />
            </div>
        </section>
    );
};

export default InstallationMap;
