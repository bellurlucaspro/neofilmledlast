"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Smartphone, Infinity, Zap } from "lucide-react";

import { products, ProductCategory } from "@/data/products";

interface RelatedProductsProps {
    currentProductSlug: string;
    currentCategory?: ProductCategory;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentProductSlug, currentCategory }) => {
    const [suggestedSolutions, setSuggestedSolutions] = React.useState<any[]>([]);

    React.useEffect(() => {
        // Logic to suggest 3 different products - Client side only to avoid hydration mismatch
        // 1. Get products in the same category (excluding current)
        let related = products.filter(p => p.slug !== currentProductSlug && p.category === currentCategory);

        // 2. If not enough products in same category, add from other categories
        if (related.length < 3) {
            const others = products.filter(p => p.slug !== currentProductSlug && p.category !== currentCategory);
            // Shuffle others to vary suggestions
            const shuffledOthers = [...others].sort(() => 0.5 - Math.random());
            related = [...related, ...shuffledOthers].slice(0, 3);
        } else {
            // Shuffle same category for variety if more than 3
            related = related.sort(() => 0.5 - Math.random()).slice(0, 3);
        }

        const mapped = related.map(p => ({
            title: p.name,
            category: p.categoryName,
            description: p.shortDescription,
            image: p.image,
            slug: p.slug,
            categorySlug: p.categorySeoSlug,
            color: p.color,
            icon: p.category === 'transparent' ? <Layers className="w-5 h-5" /> :
                p.category === 'portable' ? <Smartphone className="w-5 h-5" /> : <Infinity className="w-5 h-5" />,
            specs: p.specs.slice(0, 3).map(s => s.value)
        }));

        setSuggestedSolutions(mapped);
    }, [currentProductSlug, currentCategory]);

    if (suggestedSolutions.length === 0) return null;

    return (
        <section id="decouverte" className="py-16 md:py-24 px-4 md:px-6 relative bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-12 md:mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6"
                        >
                            <Zap className="w-3.5 h-3.5 text-[#CB52EE]" />
                            <span className="text-[10px] font-orbitron font-black text-white/40 uppercase tracking-[0.3em]">Écosystème NEOFILM</span>
                        </motion.div>
                        <h2 className="text-3xl md:text-6xl font-black font-orbitron text-white leading-tight">
                            EXPLOREZ D'AUTRES <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB52EE] to-[#00D8FF]">PERSPECTIVES</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-white/40 font-outfit text-base md:text-lg leading-relaxed">
                        Chaque espace a ses contraintes, chaque projet mérite sa technologie. Découvrez nos solutions pour une immersion totale.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                    {suggestedSolutions.map((product, idx) => (
                        <Link
                            key={product.slug}
                            href={`/solutions/${product.categorySlug}/${product.slug}/`}
                            className="group relative"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="h-full bg-white/[0.02] border border-white/10 rounded-[24px] md:rounded-[30px] overflow-hidden flex flex-col transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 group-hover:translate-y-[-10px]"
                            >
                                {/* Product Image Container */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />

                                    {/* Icon Badge */}
                                    <div className="absolute top-4 left-4 md:top-6 md:left-6 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white shadow-2xl">
                                        {product.icon}
                                    </div>

                                    {/* Category Tag */}
                                    <div className="absolute top-4 right-4 md:top-6 md:right-6 px-2 py-1 md:px-3 md:py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                                        <span className="text-[8px] font-orbitron font-bold text-white/60 tracking-widest uppercase">{product.category}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold font-orbitron text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
                                        {product.title}
                                    </h3>
                                    <p className="text-white/40 text-[14px] leading-relaxed font-outfit mb-8 line-clamp-3">
                                        {product.description}
                                    </p>

                                    {/* Specs Line */}
                                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                                        {product.specs.map((spec: string, sIdx: number) => (
                                            <span
                                                key={sIdx}
                                                className="text-[9px] font-orbitron font-bold text-white/30 border border-white/5 px-2 py-1 rounded-md bg-white/[0.02] tracking-widest pointer-events-none"
                                            >
                                                {spec}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Floating CTA Arriving on Hover */}
                                    <div className="mt-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                                        <span className="text-[10px] font-orbitron font-bold text-[#00D8FF] tracking-[0.2em] uppercase">Découvrir l'innovation</span>
                                        <ArrowRight className="w-5 h-5 text-[#00D8FF]" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* Section Connector */}
                <div className="mt-24 flex justify-center">
                    <div className="w-px h-24 bg-gradient-to-b from-white/10 to-transparent" />
                </div>
            </div>
        </section>
    );
};

export default RelatedProducts;
