"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Grid,
    Layers,
    Zap,
    Monitor,
    Cpu,
    Eye,
    Maximize,
    Box,
    ChevronRight,
    Compass
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Product } from "@/data/products";

interface ProductComparisonTableProps {
    product: Product;
}

const ProductComparisonTable: React.FC<ProductComparisonTableProps> = ({ product }) => {
    const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

    const specRows = [
        { key: 'pitch', label: 'PITCH', icon: <Grid className="w-5 h-5" /> },
        { key: 'density', label: 'DENSITÉ / M²', icon: <Layers className="w-5 h-5" /> },
        { key: 'brightness', label: 'LUMINOSITÉ', icon: <Zap className="w-5 h-5" /> },
        { key: 'resolution', label: 'RÉSOLUTION', icon: <Monitor className="w-5 h-5" /> },
        { key: 'scan', label: 'SCAN MODE', icon: <Cpu className="w-5 h-5" /> },
        { key: 'viewDistance', label: 'DISTANCE DE VUE', icon: <Eye className="w-5 h-5" /> },
        { key: 'moduleSize', label: 'TAILLE MODULE', icon: <Maximize className="w-5 h-5" /> }
    ];

    if (!product.variants || product.variants.length === 0) return null;

    return (
        <section className="py-24 px-4 md:px-6 overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(0,216,255,0.05)_0%,transparent_70%)] blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="relative group/table">
                    {/* Futuristic Container */}
                    <div className="relative overflow-x-auto rounded-[2rem] border border-white/10 bg-[#030014]/80 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] no-scrollbar">

                        <table className="w-full text-left border-collapse min-w-[900px]">
                            <thead>
                                <tr>
                                    {/* Sidebar Header */}
                                    <th className="p-8 w-[280px] border-b border-white/5 bg-black/40 sticky left-0 z-40 backdrop-blur-3xl border-r border-white/10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                                <Compass className="w-5 h-5 text-white/40" />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-orbitron font-black text-white/30 tracking-[0.2em] uppercase block">Exploration</span>
                                                <span className="text-sm font-orbitron font-black text-white tracking-wider uppercase">Caractéristiques</span>
                                            </div>
                                        </div>
                                    </th>

                                    {/* Variant Headers */}
                                    {product.variants.map((variant, idx) => (
                                        <th
                                            key={idx}
                                            onMouseEnter={() => setHoveredColumn(idx)}
                                            onMouseLeave={() => setHoveredColumn(null)}
                                            className={cn(
                                                "p-10 text-center border-b border-white/5 transition-all duration-500 relative min-w-[200px]",
                                                hoveredColumn === idx ? "bg-white/[0.03]" : "bg-transparent"
                                            )}
                                        >
                                            <div className="flex flex-col items-center gap-4">
                                                <span className="text-[9px] font-orbitron font-black text-white/20 uppercase tracking-[0.3em]">Série</span>
                                                <motion.h3
                                                    className="text-3xl font-black font-orbitron tracking-tighter"
                                                    animate={{ color: hoveredColumn === idx ? product.color : "#ffffff" }}
                                                >
                                                    {variant.name}
                                                </motion.h3>
                                                <motion.div
                                                    className="w-12 h-1 rounded-full opacity-20"
                                                    animate={{
                                                        backgroundColor: product.color,
                                                        width: hoveredColumn === idx ? 48 : 24,
                                                        opacity: hoveredColumn === idx ? 1 : 0.2
                                                    }}
                                                />
                                            </div>

                                            {/* Column Glow Line (Header side) */}
                                            {hoveredColumn === idx && (
                                                <motion.div
                                                    layoutId="column-line"
                                                    className="absolute right-0 top-0 bottom-0 w-1 z-10"
                                                    style={{ background: `linear-gradient(to bottom, transparent, ${product.color}, transparent)` }}
                                                />
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody className="font-outfit">
                                {specRows.map((row, rowIdx) => (
                                    <tr key={rowIdx} className="group/row">
                                        {/* Label Side Cell */}
                                        <td className="p-8 border-b border-white/5 bg-black/40 sticky left-0 z-30 backdrop-blur-3xl border-r border-white/10 transition-colors group-hover/row:bg-white/[0.02]">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/30 group-hover/row:text-white group-hover/row:border-white/20 transition-all duration-500">
                                                    {row.icon}
                                                </div>
                                                <span className="text-[11px] font-orbitron font-black text-white/40 tracking-[0.15em] group-hover/row:text-white transition-colors">
                                                    {row.label}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Value Cells */}
                                        {product.variants!.map((variant, colIdx) => (
                                            <td
                                                key={colIdx}
                                                onMouseEnter={() => setHoveredColumn(colIdx)}
                                                onMouseLeave={() => setHoveredColumn(null)}
                                                className={cn(
                                                    "p-8 text-center transition-all duration-500 relative border-b border-white/5",
                                                    hoveredColumn === colIdx ? "bg-white/[0.05] text-white scale-[1.02] z-10 shadow-2xl" : "text-white/60"
                                                )}
                                            >
                                                <span className={cn(
                                                    "text-lg font-bold transition-all duration-500",
                                                    hoveredColumn === colIdx ? "tracking-wider" : "tracking-normal"
                                                )}>
                                                    {/* @ts-ignore */}
                                                    {variant[row.key] || '-'}
                                                </span>

                                                {/* Active Column Background Enhancement */}
                                                <AnimatePresence>
                                                    {hoveredColumn === colIdx && (
                                                        <motion.div
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            className="absolute inset-0 pointer-events-none"
                                                            style={{
                                                                background: `radial-gradient(circle at center, ${product.color}05 0%, transparent 100%)`
                                                            }}
                                                        />
                                                    )}
                                                </AnimatePresence>

                                                {/* Right Accent Line for focused column */}
                                                {hoveredColumn === colIdx && (
                                                    <motion.div
                                                        layoutId="column-line-body"
                                                        className="absolute right-0 top-0 bottom-0 w-1 z-10"
                                                        style={{ background: product.color }}
                                                    />
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Bottom Gradient Neon Line */}
                    <div className="absolute -bottom-2 -left-2 -right-2 h-1 bg-gradient-to-r from-transparent via-[#00D8FF] to-[#CB52EE] blur-[2px] opacity-50 rounded-full" />
                    <div className="absolute -bottom-2 -left-2 -right-2 h-[1px] bg-gradient-to-r from-transparent via-[#00D8FF] to-[#CB52EE] opacity-100 rounded-full" />
                </div>

                {/* Mobile Scroll Indicator */}
                <div className="mt-8 flex justify-center lg:hidden">
                    <div className="flex items-center gap-3 text-white/30 text-[10px] font-orbitron font-black uppercase tracking-[0.2em] px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md">
                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ChevronRight className="w-4 h-4" />
                        </motion.div>
                        Faites glisser pour comparer
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductComparisonTable;
