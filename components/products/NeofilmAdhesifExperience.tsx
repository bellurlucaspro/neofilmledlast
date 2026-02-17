"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Info, Layers, Zap, Monitor, Cpu, Eye, Maximize, Box, Move, Download, Quote, ChevronDown, Check } from "lucide-react";
import dynamic from "next/dynamic";
import ProductComparisonTable from "./ProductComparisonTable";
import { Product, CategoryInfo } from "@/data/products";
import { cn } from "@/lib/utils";

import SectorSimulator from "@/components/neofilm/SectorSimulator";
import { sectorConfigurations } from "@/data/sectorData";
import ProductLayers from "@/components/neofilm/ProductLayers";
import ViewingDistance from "@/components/neofilm/ViewingDistance";
import FilmCalculator from "@/components/neofilm/FilmCalculator";
import ProductSpecs from "@/components/neofilm/ProductSpecs";
import RideauModularity from "@/components/neofilm/RideauModularity";
import NeofilmAdhesifBenefits from "@/components/neofilm/NeofilmAdhesifBenefits";
import NeofilmAdhesifContentManagement from "@/components/neofilm/NeofilmAdhesifContentManagement";
import ProjectProcess from "@/components/neofilm/ProjectProcess";
import ProductFAQ from "@/components/neofilm/ProductFAQ";

import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import SideNavigation from "@/components/home/SideNavigation";
import CategoryNavigator from "@/components/neofilm/CategoryNavigator";
import RelatedProducts from "@/components/neofilm/RelatedProducts";
import LedScrollProgress from "@/components/home/LedScrollProgress";

interface NeofilmAdhesifExperienceProps {
    product: Product;
    category: CategoryInfo;
}

const NeofilmAdhesifExperience: React.FC<NeofilmAdhesifExperienceProps> = ({ product, category }) => {
    const { scrollY } = useScroll();
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [showFaq, setShowFaq] = useState(false);

    // Hero Image Logic: Just one image for this specific experience
    const heroImage = product.image;

    // Parallax & Fade effects
    const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
    const heroY = useTransform(scrollY, [0, 500], [0, 100]);

    // Extract Quick Stats from product specs
    const quickStats = product.specs.slice(0, 4).map(spec => ({
        label: spec.label,
        value: spec.value
    }));

    // Define sections based on product type
    const isAdhesif = product.slug === 'neofilm-adhesif';

    const baseSections = [
        { id: "aperçu", label: "Impact" },
        { id: "secteurs", label: "Secteurs & Usages" },
        { id: "avantage", label: "Bénéfices" },
        { id: "pilotage", label: "Simplicité Pilotage" },
    ];

    const deservesCalculators = product.category === 'transparent' || product.category === 'dynamisation';

    const techSections = [
        ...(deservesCalculators ? [{ id: "distance", label: "Visibilité" }] : []),
        ...(isAdhesif ? [{ id: "technologie", label: "Secret Tech" }] : []),
        ...(deservesCalculators ? [{ id: "calculateur", label: "Configurateur" }] : []),
    ];

    const neofilmSections = [
        ...baseSections,
        ...(product.slug === 'rideau-led-transparent' ? [{ id: "modularite", label: "Modularité" }] : []),
        ...techSections,
        { id: "spécifications", label: "Fiche Technique" },
        ...(product.variants && product.variants.length > 0 ? [{ id: "modeles", label: "Modèles" }] : []),
        { id: "decouverte", label: "Solutions" },
        { id: "processus", label: "Expertise" },
    ];

    // Split title for the duo-tone effect
    const nameParts = product.name.split(' ');
    const firstPart = nameParts.slice(0, nameParts.length > 2 ? 2 : 1).join(' ');
    const lastPart = nameParts.slice(nameParts.length > 2 ? 2 : 1).join(' ');

    return (
        <div className="bg-[#030014] text-white overflow-hidden w-full relative">

            {/* Floating Side Nav */}
            <SideNavigation items={neofilmSections} />

            {/* Scroll Progress Gauge */}
            <LedScrollProgress product={product} />

            {/* --- HERO SECTION --- */}
            <section id="aperçu" className="relative min-h-screen flex items-center justify-center pt-20">
                <motion.div style={{ opacity: heroOpacity, y: heroY }} className="absolute inset-0 z-0">
                    {/* Aurora Background for Hero - MATCHING COLORS */}
                    <div className="absolute inset-0 opacity-60">
                        <BackgroundGradientAnimation
                            gradientBackgroundStart="#030014"
                            gradientBackgroundEnd="#030014"
                            firstColor="0, 216, 255"  // Cyan
                            secondColor="255, 215, 0" // Gold/Yellow
                            thirdColor="203, 82, 238" // Purple
                            fourthColor="0, 100, 255" // Deep Blue
                            fifthColor="128, 0, 128"  // Dark Purple
                            size="100%"
                            blendingValue="screen"
                        />
                    </div>
                </motion.div>

                <div className="container relative z-10 px-6 mx-auto flex flex-col justify-center min-h-[85vh] py-20">
                    <div className="w-full">
                        <CategoryNavigator currentProductSlug={product.slug} categorySlug={category.seoSlug} />
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black font-orbitron leading-[0.9] mb-8 tracking-tighter">
                                    {firstPart} <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-white to-[#00D8FF] animate-gradient-x uppercase">{lastPart}</span>
                                </h1>
                                <p className="text-lg md:text-2xl text-white/70 font-outfit font-light max-w-2xl mb-12 leading-relaxed">
                                    {product.shortDescription}
                                </p>

                                <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-16">
                                    <button
                                        onClick={() => document.getElementById('secteurs')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="px-6 py-4 md:px-8 md:py-4 bg-white text-black font-bold font-orbitron rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
                                        style={{ backgroundColor: 'white' }}
                                    >
                                        {product.slug === 'kakemono-led-portable-pliable' ? 'Obtenir mon devis salon' : 'Découvrir les Usages'}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button
                                        onClick={() => setShowVideoModal(true)}
                                        className="px-6 py-4 md:px-8 md:py-4 border border-white/30 text-white font-bold font-orbitron rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 group backdrop-blur-sm w-full sm:w-auto"
                                    >
                                        <span className="w-8 h-8 rounded-full bg-[#CB52EE] flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: product.color }}>
                                            <Play className="w-3 h-3 fill-white" />
                                        </span>
                                        {product.slug === 'kakemono-led-portable-pliable' ? 'Voir le montage (30s)' : 'Voir la Démo'}
                                    </button>
                                </div>

                                {/* Quick Stats Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
                                    {quickStats.map((stat, idx) => {
                                        const parts = stat.value.split(' ');
                                        const firstStat = parts[0];
                                        const restStat = parts.slice(1).join(' ');
                                        return (
                                            <div key={idx} className="space-y-2">
                                                <div className="flex flex-wrap items-baseline gap-1.5">
                                                    <span className="text-2xl md:text-3xl font-black font-orbitron text-white">{firstStat}</span>
                                                    {restStat && <span className="text-[10px] font-bold text-[#00D8FF] uppercase">{restStat}</span>}
                                                </div>
                                                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold border-l border-[#00D8FF]/50 pl-3">
                                                    {stat.label}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-5 relative">
                            {/* WOW BACKGROUND EFFECT FOR IMAGE */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00D8FF]/20 via-[#FFD700]/20 to-[#CB52EE]/20 blur-[120px] rounded-full animate-pulse" />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: "circOut" }}
                                className="relative z-10"
                            >
                                <motion.div
                                    className="cursor-pointer group/image relative"
                                    onClick={() => setShowVideoModal(true)}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image
                                        src={heroImage}
                                        alt={product.name}
                                        width={1000}
                                        height={1000}
                                        className="w-full h-auto drop-shadow-[0_0_80px_rgba(0,216,255,0.4)] transition-all duration-700"
                                        priority
                                    />

                                    {/* Hover Play Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-500">
                                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center scale-90 group-hover/image:scale-100 transition-transform duration-500 shadow-2xl">
                                            <Play className="w-8 h-8 fill-white ml-1 text-white" />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Technical Ornaments */}
                                <div className="absolute -top-8 -left-8 w-20 h-20 border-t-2 border-l-2 border-[#00D8FF]/30" />
                                <div className="absolute -bottom-8 -right-8 w-20 h-20 border-b-2 border-r-2 border-[#CB52EE]/30" />

                                {/* Floating Quote Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1, duration: 0.8 }}
                                    className="absolute -bottom-4 -left-12 hidden xl:block"
                                >
                                    <div className="bg-white/5 backdrop-blur-3xl border border-white/20 p-6 rounded-[2rem] shadow-2xl flex items-center gap-4 max-w-[280px]">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                            <Quote className="w-6 h-6 text-white/30" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: product.color }} />
                                                <span className="text-[10px] font-black font-orbitron uppercase tracking-widest text-white/40">Performance Pro</span>
                                            </div>
                                            <p className="text-[11px] font-outfit text-white/90 font-medium leading-snug">
                                                "L'innovation visuelle sans compromis."
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
                    >
                        <ChevronDown className="w-8 h-8" />
                    </motion.div>
                </div>
            </section>

            {/* --- SECTOR SIMULATOR --- */}
            <SectorSimulator
                product={product}
                sectorConfig={sectorConfigurations[product.slug]}
            />

            {/* --- BENEFITS / ADVANTAGES --- */}
            <div id="avantage">
                <NeofilmAdhesifBenefits product={product} />
            </div>

            {/* --- CONTENT MANAGEMENT / PILOTAGE --- */}
            <div id="pilotage">
                <NeofilmAdhesifContentManagement product={product} />
            </div>

            {/* --- EXTRA CONTENT (DYNAMIC) --- */}
            {deservesCalculators && (
                <div id="distance">
                    <ViewingDistance product={product} />
                </div>
            )}

            {product.slug === 'rideau-led-transparent' && (
                <div id="modularite">
                    <RideauModularity />
                </div>
            )}

            {isAdhesif && (
                <div id="technologie">
                    <ProductLayers />
                </div>
            )}

            {deservesCalculators && (
                <div id="calculateur">
                    <FilmCalculator product={product} />
                </div>
            )}

            {/* --- TECHNICAL SPECS GRID --- */}
            <ProductSpecs product={product} />

            {/* --- VARIANTS TABLE REDESIGN --- */}
            {product.variants && product.variants.length > 0 && (
                <div id="modeles">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 pt-24"
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-orbitron font-bold tracking-widest text-[#00D8FF] mb-6 uppercase"
                            style={{ color: product.color }}
                        >
                            <Cpu className="w-3 h-3 animate-spin-slow" />
                            Comparatif Technique
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black font-orbitron text-white leading-none tracking-tighter uppercase">
                            Modèles <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${product.color || "#CB52EE"}, #fff)` }}>
                                Disponibles
                            </span>
                        </h2>
                    </motion.div>

                    <ProductComparisonTable product={product} />
                </div>
            )}

            {/* --- RELATED SOLUTIONS --- */}
            <div id="decouverte">
                <RelatedProducts
                    currentProductSlug={product.slug}
                    currentCategory={product.category}
                />
            </div>

            {/* --- PROJECT PROCESS --- */}
            <div id="processus">
                <ProjectProcess />
            </div>

            {/* --- FINAL CTA --- */}
            <section className="py-20 md:py-32 px-6 relative overflow-hidden bg-[#030014]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(203,82,238,0.05),transparent_70%)]" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="max-w-4xl mx-auto text-center relative z-10"
                >
                    <h2 className="text-4xl md:text-6xl font-black font-orbitron mb-8 leading-tight">
                        PRÊT À L'IMPACT <br />
                        <span className="text-[#CB52EE] uppercase" style={{ color: product.color }}>VISUEL ?</span>
                    </h2>

                    <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
                        <Link
                            href="/contact"
                            className="px-10 py-5 bg-[#CB52EE] hover:bg-[#b038d1] text-white text-lg font-bold font-orbitron rounded-xl transition-all shadow-[0_0_30px_rgba(203,82,238,0.4)] hover:shadow-[0_0_50px_rgba(203,82,238,0.6)] hover:scale-105"
                            style={{ backgroundColor: product.color }}
                        >
                            Demander mon devis
                        </Link>
                        <button
                            onClick={() => setShowFaq(true)}
                            className="px-10 py-5 bg-transparent border border-white/20 hover:bg-white/10 text-white text-lg font-bold font-orbitron rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            Consulter la FAQ
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Video Modal */}
            <AnimatePresence>
                {showVideoModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setShowVideoModal(false)}
                    >
                        <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <iframe
                                className="w-full h-full"
                                // Using product video if available, fallback to default
                                src={product.video || "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"}
                                title={`${product.name} Demo`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            <button
                                onClick={() => setShowVideoModal(false)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
                            >
                                <ChevronDown className="w-6 h-6 rotate-180" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FAQ Modal Content */}
            <ProductFAQ
                product={product}
                isOpen={showFaq}
                onClose={() => setShowFaq(false)}
            />

        </div>
    );
};

// Helper to convert hex to RGB for the gradient animation
function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` :
        "203, 82, 238";
}

export default NeofilmAdhesifExperience;
