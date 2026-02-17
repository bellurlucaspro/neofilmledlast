"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Database, Share2, Activity, ShieldCheck, Zap, Calendar, Layout, Image as ImageIcon, Monitor, AlertTriangle, Wifi, Rss, Network, Usb, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentManagementProps {
    product: any;
}

const NeofilmAdhesifContentManagement: React.FC<ContentManagementProps> = ({ product }) => {
    const isRideau = product.slug === 'rideau-led-transparent';

    const dynamicOperations = React.useMemo(() => [
        {
            id: "control",
            title: "Contrôle Mobile",
            subtitle: "Télécommande Digitale",
            icon: Smartphone,
            color: "#CB52EE",
            description: "Transformez votre smartphone en régie technique. L'application ViPlex Handy devient votre télécommande universelle pour piloter l'ensemble de votre réseau LED.",
            image: "/controle-mobile-app.png",
            telemetry: { speed: "0.2ms", signal: "99%", status: "OPTIMISÉ" }
        },
        {
            id: "planning",
            title: "Planification Cloud",
            subtitle: "Sync Globale",
            icon: Database,
            color: "#00D8FF",
            description: "Programmez vos campagnes avec une précision chirurgicale. Centralisez la gestion de vos écrans et automatisez vos diffusions depuis n'importe quel point du globe.",
            image: "/planification-cloud.png",
            telemetry: { speed: "1.1Gbps", signal: "SYNC", status: "STABLE" }
        },
        {
            id: "streaming",
            title: "Diffusion Live",
            subtitle: "Flux Direct",
            icon: Share2,
            color: "#F35AFF",
            description: "Vos créations prennent vie instantanément. Couplez l'image au son pour une immersion totale. Une latence ultra-faible pour une réactivité maximale.",
            image: isRideau ? "/bordeaux-lac-led.jpg" : "/diffusion-live-enhanced.png",
            telemetry: { speed: "4K HDR", signal: "LIVE", status: "DIFFUSION EN COURS" }
        }
    ], [isRideau]);

    const [activeOp, setActiveOp] = useState(dynamicOperations[0]);

    // Update activeOp if dynamicOperations changes (e.g. on navigation)
    React.useEffect(() => {
        setActiveOp(dynamicOperations.find(op => op.id === activeOp.id) || dynamicOperations[0]);
    }, [dynamicOperations]);

    return (
        <section id="gestion" className="py-32 px-6 relative w-full bg-black-100 overflow-hidden">
            {/* Background Grid & FX */}
            <div className="absolute inset-0 bg-[#030014] -z-20" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 mix-blend-overlay -z-10" />
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 border-b border-white/5 pb-10">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 font-orbitron text-xs font-bold tracking-[0.3em] uppercase mb-6"
                            style={{ color: product?.color || "#00D8FF" }}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: product?.color || "#00D8FF" }}></span>
                                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: product?.color || "#00D8FF" }}></span>
                            </span>
                            NEOHUB : Contrôle du {product.name}
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl lg:text-8xl font-black font-orbitron text-white leading-[1.1] md:leading-[0.9] tracking-tighter uppercase"
                        >
                            Pilotage & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] via-white to-[#00D8FF]" style={{ backgroundImage: `linear-gradient(to right, ${product?.color || "#CB52EE"}, #ffffff, #00D8FF)` }}>
                                AUTONOMIE CLOUD
                            </span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex gap-8"
                    >
                        <div className="text-right">
                            <p className="text-[10px] font-orbitron font-bold text-white/30 uppercase mb-1">Statut Système</p>
                            <p className="text-sm font-bold text-green-400 font-orbitron uppercase">Opérationnel</p>
                        </div>
                        <div className="w-px h-10 bg-white/10" />
                        <div className="text-right">
                            <p className="text-[10px] font-orbitron font-bold text-white/30 uppercase mb-1">Sync Cloud</p>
                            <p className="text-sm font-bold text-white font-orbitron underline decoration-[#00D8FF]" style={{ textDecorationColor: product?.color || "#00D8FF" }}>PRÉCISION 99.9%</p>
                        </div>
                    </motion.div>
                </div>

                {/* Main Spatial Interface */}
                <div className="grid lg:grid-cols-12 gap-10 items-stretch min-h-0 lg:min-h-[600px]">

                    {/* Operation HUDs Selection */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {dynamicOperations.map((op) => (
                            <button
                                key={op.id}
                                onClick={() => setActiveOp(op)}
                                className={cn(
                                    "relative p-1 rounded-2xl transition-all duration-500 overflow-hidden group",
                                    activeOp.id === op.id ? "bg-gradient-to-r from-white/10 to-transparent" : "hover:bg-white/5"
                                )}
                            >
                                <div className={cn(
                                    "relative p-6 rounded-2xl border transition-all duration-500 flex flex-col items-start gap-4",
                                    activeOp.id === op.id ? "bg-[#030014] border-white/20 shadow-2xl" : "bg-transparent border-transparent"
                                )}>
                                    <div className="flex items-center gap-4 w-full">
                                        <div className={cn(
                                            "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500",
                                            activeOp.id === op.id
                                                ? "bg-white text-black scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                                : "bg-white/5 text-white/40 grayscale group-hover:grayscale-0"
                                        )}>
                                            <op.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-orbitron font-bold text-white/20 uppercase tracking-widest leading-none mb-1">{op.subtitle}</p>
                                            <h3 className={cn(
                                                "text-xl font-black font-orbitron transition-all duration-500",
                                                activeOp.id === op.id ? "text-white" : "text-white/30"
                                            )}>{op.title}</h3>
                                        </div>
                                        {activeOp.id === op.id && (
                                            <motion.div layoutId="op-glow" className="ml-auto">
                                                <Zap className="w-5 h-5 animate-pulse" style={{ color: product.color }} />
                                            </motion.div>
                                        )}
                                    </div>

                                    <AnimatePresence>
                                        {activeOp.id === op.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-sm font-outfit text-white/60 leading-relaxed mt-4 border-t border-white/10 pt-4 italic">
                                                    {op.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </button>
                        ))}

                        {/* Real-time Telemetry Board */}
                        <div className="mt-auto p-8 rounded-3xl border border-white/5 bg-[#030014]/40 backdrop-blur-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4">
                                <Activity className="w-5 h-5 animate-pulse" style={{ color: product.color }} />
                            </div>
                            <h4 className="font-orbitron font-bold text-[10px] text-white/30 uppercase tracking-[0.2em] mb-6">Télémétrie en Direct</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="min-w-0">
                                    <p className="text-[9px] font-orbitron text-white/40 uppercase mb-1 whitespace-nowrap">Taux de Transfert</p>
                                    <p className="text-base md:text-xl font-black font-orbitron text-white whitespace-nowrap">{activeOp.telemetry.speed}</p>
                                </div>
                                <div className="text-right min-w-0">
                                    <p className="text-[9px] font-orbitron text-white/40 uppercase mb-1 whitespace-nowrap">État Connexion</p>
                                    <p className="text-base md:text-xl font-black font-orbitron whitespace-nowrap" style={{ color: product.color }}>{activeOp.telemetry.signal}</p>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-green-500" />
                                    <span className="text-[10px] font-black font-orbitron text-white/50 uppercase">{activeOp.telemetry.status}</span>
                                </div>
                                <motion.div
                                    className="h-1 flex-1 mx-4 bg-white/5 rounded-full overflow-hidden"
                                >
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="h-full"
                                        style={{ background: `linear-gradient(to right, transparent, ${product.color}, transparent)` }}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Live View Monitor - Spatial Center */}
                    <div className="lg:col-span-8 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeOp.id}
                                initial={{ opacity: 0, rotateY: 15, x: 50 }}
                                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                                exit={{ opacity: 0, rotateY: -15, x: -50 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="h-full w-full relative flex flex-col"
                                style={{ perspective: "1000px" }}
                            >
                                {/* Shadow FX */}
                                <div className="absolute -inset-10 rounded-full blur-[120px] mix-blend-screen transition-all duration-1000 animate-pulse"
                                    style={{ background: `radial-gradient(circle, ${product.color}20 0%, transparent 70%)` }}
                                />

                                <div className="flex-1 bg-black/80 rounded-[2.5rem] border border-white/20 overflow-hidden relative group backdrop-blur-md shadow-[0_40px_100px_rgba(0,0,0,0.5)]">

                                    {/* Monitor Frame UI */}
                                    <div className="absolute inset-0 border-[20px] border-white/5 pointer-events-none" />
                                    <div className="absolute top-8 left-8 flex items-center gap-4 z-20">
                                        <div className="px-4 py-1.5 bg-black/60 rounded-full border border-white/10 backdrop-blur-md flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                            <span className="text-[10px] font-black font-orbitron text-white tracking-widest uppercase">Vue en Direct</span>
                                        </div>
                                        <div className="px-4 py-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                                            <span className="text-[10px] font-bold font-orbitron text-white/50 tracking-widest uppercase truncate max-w-[124px] inline-block">NOEUD_0{activeOp.id === 'control' ? '1' : activeOp.id === 'planning' ? '2' : '3'} : ACTIF</span>
                                        </div>
                                    </div>

                                    {/* Innovative Asymmetric Title Container */}
                                    <div className="absolute bottom-0 left-0 right-0 z-20">
                                        <div className="relative mx-4 mb-4">
                                            {/* Main Container with Angled Design */}
                                            <div className="relative overflow-hidden" style={{
                                                clipPath: 'polygon(0 12px, 12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
                                            }}>
                                                {/* Multi-Layer Background */}
                                                <div className="absolute inset-0">
                                                    {/* Base Gradient */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/80" />

                                                    {/* Themed Color Accent */}
                                                    <div
                                                        className="absolute inset-0 opacity-20"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${activeOp.color}40 0%, transparent 50%)`
                                                        }}
                                                    />

                                                    {/* Cyber Grid Pattern */}
                                                    <div
                                                        className="absolute inset-0 opacity-10"
                                                        style={{
                                                            backgroundImage: `
                                                                linear-gradient(${activeOp.color}20 1px, transparent 1px),
                                                                linear-gradient(90deg, ${activeOp.color}20 1px, transparent 1px)
                                                            `,
                                                            backgroundSize: '20px 20px'
                                                        }}
                                                    />

                                                    {/* Scanline Effect */}
                                                    <div className="absolute inset-0 opacity-5 bg-gradient-to-b from-transparent via-white to-transparent animate-[scan_3s_ease-in-out_infinite]" />
                                                </div>

                                                {/* HUD Corner Brackets */}
                                                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 opacity-60" style={{ borderColor: activeOp.color }} />
                                                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 opacity-60" style={{ borderColor: activeOp.color }} />
                                                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 opacity-60" style={{ borderColor: activeOp.color }} />
                                                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 opacity-60" style={{ borderColor: activeOp.color }} />

                                                {/* Content */}
                                                <div className="relative px-6 py-4">
                                                    {/* Top Row: Title + Icon */}
                                                    <div className="flex items-center justify-between gap-4 mb-3">
                                                        <div className="flex-1">
                                                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black font-orbitron text-white uppercase italic leading-none tracking-tight">
                                                                {activeOp.title}
                                                            </h3>
                                                        </div>

                                                        {/* Hexagonal Icon Badge */}
                                                        <div className="relative flex-shrink-0">
                                                            <div
                                                                className="w-14 h-14 flex items-center justify-center relative"
                                                                style={{
                                                                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                                                                }}
                                                            >
                                                                <div
                                                                    className="absolute inset-0"
                                                                    style={{
                                                                        backgroundColor: `${activeOp.color}30`,
                                                                        boxShadow: `0 0 20px ${activeOp.color}60, inset 0 0 20px ${activeOp.color}20`
                                                                    }}
                                                                />
                                                                <activeOp.icon className="w-7 h-7 relative z-10" style={{ color: activeOp.color }} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Animated Data Bar */}
                                                    <div className="relative h-0.5 w-full mb-2 overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: "100%" }}
                                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                                            className="h-full relative"
                                                            style={{
                                                                background: `linear-gradient(90deg, transparent, ${activeOp.color}, ${activeOp.color}80, transparent)`
                                                            }}
                                                        >
                                                            {/* Pulse Effect */}
                                                            <div
                                                                className="absolute right-0 top-0 w-2 h-full animate-pulse"
                                                                style={{ backgroundColor: activeOp.color, boxShadow: `0 0 10px ${activeOp.color}` }}
                                                            />
                                                        </motion.div>
                                                    </div>

                                                    {/* Bottom Row: Subtitle + Status Indicator */}
                                                    <div className="flex items-center justify-between gap-4">
                                                        <p className="text-[10px] md:text-xs font-orbitron font-bold text-white/40 uppercase tracking-[0.2em]">
                                                            {activeOp.subtitle}
                                                        </p>

                                                        {/* Status Pulse */}
                                                        <div className="flex items-center gap-2">
                                                            <div
                                                                className="w-1.5 h-1.5 rounded-full animate-pulse"
                                                                style={{ backgroundColor: activeOp.color, boxShadow: `0 0 8px ${activeOp.color}` }}
                                                            />
                                                            <span className="text-[9px] font-orbitron font-bold uppercase tracking-wider" style={{ color: activeOp.color }}>
                                                                ACTIF
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Outer Glow Effect */}
                                            <div
                                                className="absolute -inset-[1px] -z-10 opacity-30 blur-sm"
                                                style={{
                                                    background: `linear-gradient(135deg, ${activeOp.color}40, transparent)`,
                                                    clipPath: 'polygon(0 12px, 12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Main content Image */}
                                    <div className="relative h-full w-full">
                                        <Image
                                            src={activeOp.image}
                                            alt={activeOp.title}
                                            fill
                                            className="object-cover brightness-75 group-hover:scale-105 group-hover:rotate-1 transition-all duration-1000"
                                        />

                                        {/* Digital Scan Layer */}
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] pointer-events-none bg-[length:100%_2px,3px_100%]" />
                                        <motion.div
                                            animate={{ top: ["0%", "100%"] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-px bg-white/20 z-10 shadow-[0_0_10px_white]"
                                        />
                                    </div>

                                    <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-3 z-20">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                        ))}
                                    </div>
                                </div>

                                {/* Tech Footer Stats */}
                                <div className="mt-8 grid grid-cols-3 gap-6">
                                    {[
                                        { label: "Stabilité", val: "99.9%" },
                                        { label: "Latence Sync", val: "Haute Vitesse" },
                                        { label: "Couverture", val: "Global" }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md flex flex-col gap-1">
                                            <span className="text-[10px] font-orbitron font-bold text-white/30 uppercase tracking-widest">{stat.label}</span>
                                            <span className="text-lg font-black font-orbitron text-white">{stat.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Accent Bubbles */}
            <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none opacity-20" style={{ background: product.color }} />
            <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none opacity-20" style={{ background: "#00D8FF" }} />

            {/* Software & Connectivity Sub-section (WOW UX/UI Design) */}
            <div className="max-w-7xl mx-auto mt-32 pt-32 border-t border-white/5 pb-24 relative">
                <div className="grid lg:grid-cols-12 gap-16 items-start relative">
                    {/* LEFT: HOLOGRAPHIC SOFTWARE SUITE */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:col-span-7 space-y-12"
                    >
                        <div className="space-y-6">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                className="h-px bg-gradient-to-r from-[#CB52EE] to-transparent w-32"
                            />
                            <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#CB52EE]/10 border border-[#CB52EE]/20 rounded-md">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#CB52EE] animate-pulse" />
                                <span className="text-[10px] font-orbitron font-bold text-[#CB52EE] uppercase tracking-[0.2em]">Core Intelligence v4.0</span>
                            </div>
                            <h3 className="text-5xl md:text-7xl font-black font-orbitron text-white leading-[1.1] uppercase italic pr-4">
                                Logiciel de <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] to-[#00D8FF] drop-shadow-[0_0_20px_rgba(203,82,238,0.3)] inline-block">Pilotage Dynamique</span>
                            </h3>
                            <p className="text-white/50 font-outfit text-xl leading-relaxed max-w-xl border-l-2 border-[#CB52EE]/30 pl-6 italic">
                                Zéro coût. Zéro limite. Un contrôle total sur chaque pixel, directement depuis votre interface cloud sécurisée.
                            </p>
                        </div>

                        {/* Interactive Feature Nodes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                            {[
                                { title: "Planification Intelligente", desc: "Calendrier prédictif", icon: Calendar, stat: "24/7", color: "#CB52EE" },
                                { title: "Mises en Page Dynamiques", desc: "Multi-fenêtrage", icon: Layout, stat: "∞", color: "#00D8FF" },
                                { title: "Importation Ultra", desc: "Formats 4K HDR", icon: ImageIcon, stat: "RAW", color: "#F35AFF" },
                                { title: "Auto-Maintenance", desc: "Maintenance IA", icon: AlertTriangle, stat: "SYNC", color: "#CB52EE" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="relative group p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/5 hover:border-[#CB52EE]/30 transition-all duration-500 overflow-hidden"
                                >
                                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#CB52EE]/5 rounded-full blur-[40px] group-hover:bg-[#CB52EE]/10 transition-colors" />

                                    <div className="flex items-center justify-between mb-6">
                                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-white/30 transition-all">
                                            <item.icon className="w-6 h-6 text-white" style={{ color: item.color }} />
                                        </div>
                                        <span className="font-orbitron text-[10px] font-black text-white/20 uppercase tracking-widest">{item.stat}</span>
                                    </div>

                                    <h4 className="text-lg font-bold font-orbitron text-white mb-2 uppercase tracking-tight group-hover:text-[#CB52EE] transition-colors">{item.title}</h4>
                                    <div className="flex items-center gap-3">
                                        <div className="h-0.5 w-8 bg-[#CB52EE]/30 group-hover:w-12 transition-all" />
                                        <p className="text-[10px] text-white/40 font-orbitron uppercase tracking-widest">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT: CONNECTIVITY HUB MATRIX */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative p-1 bg-gradient-to-b from-white/10 to-transparent rounded-[3rem]">
                            <div className="bg-[#030014]/80 backdrop-blur-3xl rounded-[2.9rem] p-10 md:p-14 relative overflow-hidden">
                                {/* Tech Aesthetics */}
                                <div className="absolute top-0 right-0 p-8 flex flex-col gap-1 items-end opacity-20">
                                    <div className="w-16 h-px bg-white" />
                                    <div className="w-8 h-px bg-white" />
                                </div>

                                <div className="relative z-10 space-y-16">
                                    <div className="text-center space-y-4">
                                        <h4 className="text-3xl font-black font-orbitron text-white uppercase italic tracking-tighter">
                                            Connectivité <br />
                                            <span className="text-[#00D8FF]">& Sync Cloud</span>
                                        </h4>
                                        <p className="text-[10px] font-orbitron font-bold text-white/30 uppercase tracking-[0.4em]">Infrastructure sans fil & filaire</p>
                                    </div>

                                    {/* Port Station Design */}
                                    <div className="space-y-4">
                                        {[
                                            { title: "Réseau Local", val: "WiFi 6 High Density", icon: Wifi, signal: "99%", delay: 0 },
                                            { title: "Autonomie", val: "4G/5G SIM Intégrée", icon: Rss, signal: "MAX", delay: 0.1 },
                                            { title: "Direct Link", val: "Câblage Blindé RJ45", icon: Network, signal: "STABLE", delay: 0.2 },
                                            { title: "Mode Offline", val: "Lecteur USB Autonome", icon: Usb, signal: "LOCAL", delay: 0.3 }
                                        ].map((conn, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: conn.delay }}
                                                className="flex items-center gap-6 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all group pointer-events-auto cursor-pointer"
                                            >
                                                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative flex-shrink-0 group-hover:scale-110 transition-transform">
                                                    <conn.icon className="w-6 h-6 text-[#00D8FF]" style={{ color: product.color }} />
                                                    <div className="absolute inset-0 bg-[#00D8FF]/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <p className="text-[9px] font-orbitron font-black text-white/20 uppercase tracking-widest">{conn.title}</p>
                                                        <span className="text-[9px] font-orbitron font-bold text-[#00D8FF]" style={{ color: product.color }}>{conn.signal}</span>
                                                    </div>
                                                    <p className="text-sm font-bold text-white uppercase truncate tracking-tight">{conn.val}</p>
                                                </div>

                                                <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-[#00D8FF] transition-colors" style={{ backgroundColor: `${product.color}20` }} />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* HUD Status Bar */}
                                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-orbitron font-bold text-white/20 mb-1 uppercase tracking-widest">Protocoles</span>
                                            <span className="text-[10px] font-bold text-white/60">TCP/IP • HTTP • MQTT</span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[8px] font-orbitron font-bold text-white/20 mb-1 uppercase tracking-widest">Encryption</span>
                                            <span className="text-[10px] font-bold text-green-500">AES-256 BIT</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Ornamental Light Leak */}
                                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00D8FF]/10 rounded-full blur-[100px] pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default NeofilmAdhesifContentManagement;
