"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Cpu, Wifi, Smartphone, Layers, Zap } from "lucide-react";

const metrics = [
    { label: "Transparence", value: "85%", sub: "Alpha_Clearance", icon: Layers, color: "#00D8FF" },
    { label: "Luminosité", value: "5500", sub: "Nits_Peak", icon: Zap, color: "#CB52EE" },
    { label: "Impact Visuel", value: "MAX", sub: "UX_Engagement", icon: Activity, color: "#F35AFF" },
    { label: "Rafraîchissement", value: "3840", sub: "Hz_Sync", icon: Cpu, color: "#00707E" },
    { label: "Connectivité", value: "IOT", sub: "Remote_Cloud", icon: Wifi, color: "#00D8FF" },
    { label: "Contrôle", value: "HD", sub: "Smart_Mobile", icon: Smartphone, color: "#CB52EE" },
];

const KeyNumbers = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-[#030014]">
            {/* HUD Scanning Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute top-0 left-0 w-full h-px bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-scan" style={{ top: '20%' }} />
                <div className="absolute top-0 left-0 w-full h-px bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-scan" style={{ top: '60%', animationDelay: '2s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT: MAIN HUD GAUGE (5 Cols) */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
                        >
                            {/* Circular HUD Elements with Continuous Rotation */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-full h-full relative"
                            >
                                <svg className="w-full h-full rotate-[-90deg]">
                                    <circle
                                        cx="50%" cy="50%" r="45%"
                                        className="fill-none stroke-white/5 stroke-2"
                                    />
                                    <motion.circle
                                        cx="50%" cy="50%" r="45%"
                                        className="fill-none stroke-[#00D8FF] stroke-[4]"
                                        strokeDasharray="100, 100"
                                        initial={{ strokeDashoffset: 100 }}
                                        whileInView={{ strokeDashoffset: 15 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, ease: "easeOut" }}
                                    />
                                </svg>

                                {/* Decorative Floating HUD Points (Now rotating with the gauge) */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00D8FF] shadow-[0_0_20px_#00D8FF]" />
                            </motion.div>

                            {/* Inner Metric */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="space-y-1"
                                >
                                    <span className="text-[10px] font-orbitron font-black text-white/30 uppercase tracking-[0.3em]">Core_Metrics</span>
                                    <div className="text-6xl md:text-8xl font-black font-orbitron text-white leading-none">
                                        85<span className="text-2xl text-[#00D8FF] font-black">%</span>
                                    </div>
                                    <div className="text-xs font-orbitron font-bold text-[#00D8FF] uppercase tracking-widest mt-2">Purity_Index</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: TELEMETRY GRID (7 Cols) */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-12">
                            <Activity className="w-6 h-6 text-[#CB52EE] animate-pulse" />
                            <h2 className="text-2xl md:text-3xl font-black font-orbitron text-white uppercase tracking-tighter">
                                TÉLÉMÉTRIE <span className="text-white/20">SYSTÈME</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {metrics.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all group"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <Icon className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: item.color }} />
                                            <span className="text-[8px] font-orbitron font-bold text-white/20 uppercase">Valid_Data</span>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-2xl font-black font-orbitron text-white">{item.value}</div>
                                            <div className="text-[10px] font-orbitron font-black uppercase tracking-wider" style={{ color: item.color }}>
                                                {item.label}
                                            </div>
                                            <div className="text-[8px] font-orbitron text-white/20 uppercase tracking-widest pt-2 border-t border-white/5">
                                                {item.sub}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Additional Info / CTA Bar */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="mt-12 p-4 rounded-xl bg-gradient-to-r from-[#CB52EE]/10 to-transparent border-l-2 border-[#CB52EE] flex items-center justify-between"
                        >
                            <span className="text-[10px] font-orbitron font-bold text-white/60 uppercase tracking-widest ml-4">Certification European_Safety IP65 Ready</span>
                            <div className="h-1 w-12 bg-white/20 rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default KeyNumbers;
