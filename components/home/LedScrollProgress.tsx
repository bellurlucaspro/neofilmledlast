"use client";

import React from "react";
import { Product } from "@/data/products";
import { motion, useScroll, useSpring } from "framer-motion";

interface LedScrollProgressProps {
    product?: Product;
}

const LedScrollProgress: React.FC<LedScrollProgressProps> = ({ product }) => {
    const { scrollYProgress } = useScroll();

    // Smooth physics for the LED fill
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const primaryColor = product?.color || "#CB52EE";

    return (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 h-[50vh] hidden lg:flex flex-col items-center justify-center pointer-events-none">

            {/* Glass Container Housing */}
            <div className="relative w-4 h-full rounded-full bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] overflow-hidden p-[5px]">

                {/* Track */}
                <div className="relative w-full h-full bg-black/40 rounded-full overflow-hidden">

                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 w-full h-full opacity-20"
                        style={{
                            backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '100% 20px'
                        }}
                    />

                    {/* Progress Fill (Fluid Light) */}
                    <motion.div
                        className="absolute top-0 left-0 right-0 bg-gradient-to-b shadow-[0_0_20px_rgba(203,82,238,0.5)]"
                        style={{
                            height: "100%",
                            scaleY,
                            transformOrigin: "top",
                            background: `linear-gradient(to bottom, ${primaryColor}, #00707E, #00707E)`,
                            boxShadow: `0 0 20px ${primaryColor}80`
                        }}
                    >
                        {/* Leading Edge Glow */}
                        <div className="absolute bottom-0 left-0 right-0 h-4 bg-white blur-[4px] opacity-80 translate-y-2" />
                    </motion.div>
                </div>

                {/* Markers Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between py-6 items-center pointer-events-none">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-0.5 h-0.5 rounded-full bg-white/30"
                        />
                    ))}
                </div>
            </div>

            {/* Decorative Top Cap */}
            <div className="absolute -top-6 w-px h-6 bg-gradient-to-b from-transparent to-white/10" />

            {/* Decorative Bottom Cap */}
            <div className="absolute -bottom-6 w-px h-6 bg-gradient-to-t from-transparent to-white/10" />

        </div>
    );
};

export default LedScrollProgress;
