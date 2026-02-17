"use client";

import React, { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import { products, categories } from "@/data/products";
import { Printer, ArrowLeft, Target, Cpu, Zap, Layers, ChevronRight, Hexagon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

function CatalogueContent() {
    const searchParams = useSearchParams();
    const targetProductSlug = searchParams.get('product');
    const autoPrint = searchParams.get('autoPrint');

    useEffect(() => {
        if (autoPrint === 'true' && targetProductSlug) {
            // Include a small delay to ensure rendering is complete
            const timer = setTimeout(() => {
                window.print();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [autoPrint, targetProductSlug]);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="bg-[#030014] min-h-screen text-white print:text-black">
            {/* --- PRINT STYLES --- */}
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    body {
                        background-color: #030014 !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    .no-print {
                        display: none !important;
                    }
                    .print-break-before {
                        break-before: page;
                    }
                    .print-break-after {
                        break-after: page;
                    }
                    * {
                        -webkit-print-color-adjust: exact !important;
                    }
                }
            `}</style>


            {/* --- CONTROLS --- */}
            <div className="fixed top-6 right-6 z-50 flex gap-4 no-print">
                <Link
                    href="/"
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:border-[#00D8FF] hover:bg-white/10 transition-all group"
                    title="Retour"
                >
                    <ArrowLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
                </Link>
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-3 px-8 h-14 rounded-full bg-gradient-to-r from-[#CB52EE] to-[#00D8FF] hover:brightness-110 text-white font-bold font-orbitron tracking-wider shadow-[0_0_30px_rgba(203,82,238,0.4)] transition-all transform hover:scale-105"
                >
                    <Printer className="w-5 h-5" />
                    <span className="hidden md:inline">IMPRIMER MODE HD</span>
                </button>
            </div>

            {/* --- 1. COVER PAGE : "THE MONOLITH" --- */}
            {!targetProductSlug && (
                <div className="w-full h-[297mm] relative flex flex-col bg-[#020010] overflow-hidden print-break-after">
                    {/* Cyberpunk Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

                    {/* Ornamental Circles */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#00D8FF]/20 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#CB52EE]/20 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

                    {/* Main Content */}
                    <div className="relative z-10 w-full h-full flex flex-col justify-between p-[20mm]">

                        {/* Header: Brand */}
                        <div className="flex justify-between items-start">
                            <Image src="/logo_neofilm_full.png" alt="NEOFILM" width={300} height={80} className="w-[60mm] h-auto" />
                            <div className="text-right">
                                <h3 className="font-orbitron font-bold text-white/50 tracking-[0.3em] text-sm">ÉDITION DIGITALE</h3>
                                <div className="h-[1px] w-[50mm] bg-[#00D8FF] mt-2 ml-auto" />
                            </div>
                        </div>

                        {/* Center: The "Title" Block */}
                        <div className="relative">
                            <div className="absolute -left-[10mm] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#CB52EE] to-transparent" />

                            <h1 className="text-[120px] leading-[0.85] font-black font-orbitron text-white mix-blend-overlay opacity-30 absolute top-[-60px] left-[-5px]">
                                FUTURE
                            </h1>
                            <h1 className="text-[80px] leading-[0.9] font-black font-orbitron text-white relative z-10">
                                CATALOGUE<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] to-[#00D8FF]">
                                    SOLUTIONS
                                </span>
                            </h1>

                            <div className="mt-8 flex items-center gap-6">
                                <span className="text-[80px] font-thin font-orbitron text-white/20">20</span>
                                <div className="h-[2px] w-[30mm] bg-white/20" />
                                <span className="text-[80px] font-bold font-orbitron text-white">26</span>
                            </div>

                            <p className="mt-8 max-w-[80mm] text-white/60 font-outfit text-lg tracking-wide border-l border-white/20 pl-6">
                                L'ingénierie visuelle par excellence. Découvrez comment nous transformons l'espace urbain avec la lumière.
                            </p>
                        </div>

                        {/* Footer: Tech Pattern */}
                        <div className="w-full flex justify-between items-end">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 border border-[#00D8FF] flex items-center justify-center rounded">
                                    <Target className="text-[#00D8FF]" />
                                </div>
                                <div className="w-12 h-12 border border-[#CB52EE] flex items-center justify-center rounded">
                                    <Zap className="text-[#CB52EE]" />
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-orbitron font-bold text-white/80 tracking-widest text-sm">NEOFILM LED SYSTEMS</p>
                                <p className="font-outfit text-white/40 text-xs mt-1">PARIS • MONACO • GENÈVE</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* --- 2. CATEGORY PAGES --- */}
            {Object.values(categories).filter(c => !targetProductSlug || products.some(p => p.category === c.id && p.slug === targetProductSlug)).map((category, catIdx) => (
                <div key={category.slug}>
                    {/* SEPARATOR: "THE GATE" */}
                    {!targetProductSlug && (
                        <div className="w-full h-[297mm] relative bg-black flex items-center justify-center overflow-hidden print-break-before">
                            {/* Huge Background Text */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                                <h2 className="text-[300px] font-black font-orbitron text-white leading-none -rotate-90 whitespace-nowrap">
                                    {category.name.split(' ')[0]}
                                </h2>
                            </div>

                            {/* Content Card */}
                            <div className="relative z-10 w-[80%] border-y border-[#00D8FF]/30 py-20 bg-black/50 backdrop-blur-sm">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#00D8FF] rotate-45" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-[#00D8FF] rotate-45" />

                                <span className="block text-center text-[#CB52EE] font-orbitron text-xl uppercase tracking-[1em] mb-4">
                                    CHAPITRE 0{catIdx + 1}
                                </span>
                                <h2 className="text-6xl md:text-8xl font-black font-orbitron text-white text-center mb-8 uppercase tracking-tighter">
                                    {category.name}
                                </h2>
                                <p className="text-center text-white/60 font-outfit text-xl max-w-2xl mx-auto leading-relaxed">
                                    {category.description}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* PRODUCTS: "THE BLUEPRINT" Layout */}
                    {products
                        .filter(p => p.category === category.id && (!targetProductSlug || p.slug === targetProductSlug))
                        .map((product, pIdx) => (
                            <div key={product.id} className={`w-full h-[297mm] relative bg-[#050508] overflow-hidden ${!targetProductSlug ? 'print-break-before' : ''}`}>
                                {/* HUD Overlays */}
                                <div className="absolute top-8 left-8 w-[200px] h-[1px] bg-white/20" />
                                <div className="absolute top-8 left-8 w-[1px] h-[200px] bg-white/20" />
                                <div className="absolute top-8 right-8 text-right font-orbitron text-xs text-white/30 tracking-widest uppercase">
                                    RÉF: {product.slug.toUpperCase().substring(0, 8)} <br /> STATUT: ACTIF
                                </div>

                                <div className="h-full flex flex-col p-[15mm] pt-[20mm]">
                                    {/* 1. Header Area */}
                                    <div className="mb-8 relative flex justify-between items-end">
                                        <div>
                                            <div className="flex items-baseline gap-4 mb-2">
                                                <span className="px-3 py-1 rounded bg-[#00D8FF]/10 border border-[#00D8FF]/30 text-[#00D8FF] text-xs font-bold font-orbitron tracking-widest">
                                                    {category.name}
                                                </span>
                                            </div>
                                            <h3 className="text-5xl md:text-6xl font-black font-orbitron text-white uppercase tracking-tight mb-2 leading-none">
                                                {product.name}
                                            </h3>
                                            <div className="h-1 w-[100px] bg-gradient-to-r from-[#CB52EE] to-transparent" />
                                        </div>

                                        {/* CTA BUTTON (Visible in Print now) */}
                                        <Link
                                            href={`/solutions/${category.slug}/${product.slug}`}
                                            className="hidden md:flex print:flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 hover:bg-[#00D8FF]/20 hover:border-[#00D8FF] transition-all group print:border-white/40 print:bg-black"
                                        >
                                            <span className="text-white font-bold font-orbitron text-xs tracking-widest whitespace-nowrap group-hover:text-[#00D8FF]">VOIR DÉTAILS</span>
                                            <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-[#00D8FF]" />
                                        </Link>
                                    </div>

                                    {/* 2. Main Visual Area (Grid Split) */}
                                    <div className="flex-1 grid grid-cols-12 gap-8 min-h-0 print:block print:gap-0">

                                        {/* Left: Image & Tech Overlay (Print: Split into stacked setup) */}
                                        <div className="col-span-12 md:col-span-7 print:w-[58%] print:float-left print:mr-[2%] relative rounded-[2rem] overflow-hidden border border-white/10 group bg-black/40 flex flex-col justify-center h-full max-h-[500px] print:h-auto print:max-h-none print:bg-transparent print:border-none print:rounded-none">

                                            {/* Image Container */}
                                            <div className="relative w-full h-[300px] md:h-full print:h-[280px] flex items-center justify-center p-8 print:p-0 print:mb-4 print:border print:border-white/20 print:rounded-2xl print:bg-black">
                                                {/* Screen Image (Next/Image) - Hidden in Print */}
                                                <div className="relative w-full h-full print:hidden">
                                                    <Image
                                                        src={product.image}
                                                        alt={product.name}
                                                        fill
                                                        className="object-contain hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>

                                                {/* Print Image (Standard img) - Visible ONLY in Print */}
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="hidden print:block w-full h-full object-contain p-4"
                                                />
                                            </div>

                                            {/* Data Overlay (Print: Static Block below image) */}
                                            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10 p-6 flex justify-between items-center z-20 print:static print:bg-transparent print:backdrop-blur-none print:border print:border-white/20 print:rounded-2xl print:p-3 print:h-[60px]">
                                                <div>
                                                    <p className="text-[#00D8FF] text-xs font-bold font-orbitron uppercase tracking-wider mb-1 print:text-[9px]">Résolution Max</p>
                                                    <p className="text-white font-bold text-lg print:text-sm">
                                                        {product.id === 'neofilm-adhesif' && product.detailedSpecs?.resolution
                                                            ? product.detailedSpecs.resolution
                                                            : (product.variants?.[0]?.resolution || product.detailedSpecs?.resolution || "4K ULTRA HD")}
                                                    </p>
                                                </div>
                                                <div className="h-8 w-[1px] bg-white/20" />
                                                <div>
                                                    <p className="text-[#CB52EE] text-xs font-bold font-orbitron uppercase tracking-wider mb-1 print:text-[9px]">Luminosité</p>
                                                    <p className="text-white font-bold text-lg print:text-sm">
                                                        {product.id === 'neofilm-adhesif' && product.detailedSpecs?.brightness
                                                            ? product.detailedSpecs.brightness
                                                            : (product.variants?.[0]?.brightness || product.detailedSpecs?.brightness || "5500 Nits")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right: Info Column (Print: Float Right) */}
                                        <div className="col-span-12 md:col-span-5 print:w-[40%] print:float-right flex flex-col gap-6 h-full text-left print:gap-4 print:h-auto">
                                            {/* Description */}
                                            <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5 flex-shrink-0 print:p-4 print:border-white/20 print:bg-transparent print:rounded-2xl">
                                                <p className="text-white/80 font-outfit text-sm leading-relaxed text-justify line-clamp-[8] print:line-clamp-none print:text-[10px] print:leading-tight">
                                                    {product.fullDescription}
                                                </p>
                                            </div>

                                            {/* Features List */}
                                            <div className="flex-1 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col print:p-4 print:border-white/20 print:bg-transparent print:rounded-2xl print:flex-none">
                                                <h4 className="font-orbitron font-bold text-white text-sm mb-6 flex items-center gap-2 border-b border-white/10 pb-4 print:mb-3 print:pb-2 print:text-xs">
                                                    <Hexagon className="w-4 h-4 text-[#CB52EE]" />
                                                    CARACTÉRISTIQUES CLÉS
                                                </h4>

                                                <div className="grid grid-cols-1 gap-y-4 gap-x-2 overflow-y-auto print:gap-y-2">
                                                    {product.features.map((feat, i) => (
                                                        <div key={i} className="flex items-start gap-3 group/feat">
                                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00D8FF] shadow-[0_0_8px_#00D8FF] group-hover/feat:scale-150 transition-all shrink-0 print:mt-1 print:w-1 print:h-1" />
                                                            <li className="text-sm text-white/70 font-outfit leading-snug group-hover/feat:text-white transition-colors print:text-[9px]">
                                                                {feat.split(":")[0]}
                                                            </li>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Clearfix for Print Floats */}
                                    <div className="hidden print:block print:clear-both print:h-4"></div>

                                    {/* 3. Bottom Specs Grid (HUD Style) */}
                                    <div className="mt-8 h-fit bg-[#0A0A15] border border-white/10 rounded-2xl p-6 relative print:mt-0 print:p-2 print:bg-transparent print:border print:border-white/20 print:rounded-2xl">
                                        <div className="absolute -top-3 left-6 px-2 bg-[#050508] text-[#00D8FF] text-xs font-bold font-orbitron tracking-widest backdrop-blur-xl print:text-[10px] print:bg-black">
                                            DONNÉES TECHNIQUES
                                        </div>

                                        <div className="grid grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden print:grid-cols-4 print:border-white/20 print:bg-white/10">
                                            {/* Dynamic Tech Specs Generation - Sliced to 8 to fit */}
                                            {(product.id === 'neofilm-adhesif' && product.detailedSpecs ?
                                                Object.entries(product.detailedSpecs).slice(0, 8) :
                                                (product.variants?.[0] ? Object.entries(product.variants[0]).slice(0, 8) : Object.entries(product.detailedSpecs || {}).slice(0, 8))
                                            ).map(([key, val], k) => (
                                                <div key={k} className="bg-[#050508] p-4 flex flex-col justify-center items-center text-center group hover:bg-[#0A0A15] transition-colors print:p-2 print:bg-transparent">
                                                    <span className="text-[#CB52EE] text-[10px] font-bold uppercase tracking-widest mb-1 opacity-70 group-hover:opacity-100 print:text-[8px] print:opacity-100 print:text-[#CB52EE]">
                                                        {key.replace(/([A-Z])/g, ' $1').replace('name', 'Modèle').replace('pitch', 'Pitch').replace('density', 'Densité').replace('resolution', 'Résolution').replace('brightness', 'Luminosité').replace('transparency', 'Transparence').replace('viewDistance', 'Dist. Vision').replace('ledType', 'Type LED').replace('scan', 'Scan Mode').replace('moduleSize', 'Taille Module').replace('avgPower', 'Conso Moy.').replace('maxPower', 'Conso Max.').replace('voltage', 'Voltage').replace('lifespan', 'Durée de Vie').replace('material', 'Matériau').trim()}
                                                    </span>
                                                    <span className="text-white font-bold font-orbitron text-sm print:text-white print:text-[9px] print:whitespace-nowrap">
                                                        {typeof val === 'string' ? val : 'N/A'}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            ))
            }
        </div >
    );
}

export default function CataloguePage() {
    return (
        <Suspense>
            <CatalogueContent />
        </Suspense>
    );
}
