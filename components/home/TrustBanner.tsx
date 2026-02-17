"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
    { name: "CGR Cinémas", logo: "/logos/cgr.png" },
    { name: "SEDADI", logo: "/logos/sedadi.png" },
    { name: "ONAIR FITNESS", logo: "/logos/onair.png" },
    { name: "Radio France", logo: "/logos/radiofrance.png" },
    { name: "Opéra de Monte-Carlo", logo: "/logos/montecarlopera.png" },
];

const TrustBanner = () => {
    return (
        <div className="w-full bg-[#030014]/80 backdrop-blur-xl border-y border-white/10 py-12 overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* Decorative Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#F35AFF]/50 to-transparent" />

            <div className="w-full mx-auto mb-8 text-center px-4">
                <h3 className="text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] opacity-80 font-orbitron">
                    Ils nous font confiance
                </h3>
            </div>

            <div className="flex relative items-center w-full">
                {/* Infinite scrolling marquee */}
                <motion.div
                    className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
                    animate={{ x: [0, -2000] }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...partners, ...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="flex flex-shrink-0 items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 px-4 md:px-8 group"
                        >
                            <span className="text-white text-lg md:text-xl font-black italic tracking-tighter group-hover:text-[#FF2D85] transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] font-orbitron">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Side Gradients for smooth fade - using #030014 for seamless fit with bg */}
                <div className="absolute inset-y-0 left-0 w-20 md:w-60 bg-gradient-to-r from-[#030014] via-[#030014]/80 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 md:w-60 bg-gradient-to-l from-[#030014] via-[#030014]/80 to-transparent z-10" />
            </div>

            {/* Decorative Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#00D8FF]/30 to-transparent" />
        </div>
    );
};

export default TrustBanner;
