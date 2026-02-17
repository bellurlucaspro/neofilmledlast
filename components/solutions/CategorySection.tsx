"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { Product, CategoryInfo } from "@/data/products";

interface CategorySectionProps {
    category: CategoryInfo;
    products: Product[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, products }) => {
    // Parallax Text Effect
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

    // Common viewport configuration for re-entrant animations
    const viewportConfig = { once: false, margin: "-100px" };

    return (
        <section
            id={category.id}
            className="relative py-32 scroll-mt-20 overflow-hidden"
        >
            {/* Animated Grid Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${category.color}15, transparent 70%)`
                    }}
                />
            </div>

            {/* Content Container (without side decorations) */}

            {/* Accent Line Top */}
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{
                background: `linear-gradient(90deg, transparent, ${category.color}60, transparent)`
            }} />

            <div className="relative max-w-7xl mx-auto px-5 sm:px-10">
                {/* Innovative Header Layout */}
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-20">
                    {/* Left: Vertical Title + Number */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportConfig}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                        style={{ y: yParallax }}
                    >
                        {/* Large Number Background */}
                        <div
                            className="absolute -left-4 top-0 text-[200px] font-black font-orbitron leading-none opacity-5 select-none"
                            style={{ color: category.color }}
                        >
                            {products.length < 10 ? `0${products.length}` : products.length}
                        </div>

                        {/* Vertical Title */}
                        <div className="relative pt-8">
                            <div className="flex items-start gap-4 mb-8">
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "5rem" }}
                                    viewport={viewportConfig}
                                    transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                                    className="w-1 rounded-full"
                                    style={{ background: `linear-gradient(180deg, ${category.color}, transparent)` }}
                                />
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Sparkles className="w-5 h-5" style={{ color: category.color }} />
                                        <span
                                            className="text-sm font-bold uppercase tracking-widest"
                                            style={{ color: category.color }}
                                        >
                                            {products.length} Solutions
                                        </span>
                                    </div>
                                    <h2
                                        className="text-5xl md:text-6xl font-black font-orbitron leading-[1.1] mb-6"
                                        style={{
                                            background: `linear-gradient(135deg, ${category.color}, white)`,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text'
                                        }}
                                    >
                                        {category.title.split(' ').map((word, i) => (
                                            <React.Fragment key={i}>
                                                <motion.span
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={viewportConfig}
                                                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                                    className="inline-block"
                                                >
                                                    {word}
                                                </motion.span>
                                                {i < category.title.split(' ').length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </h2>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={viewportConfig}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center gap-3 px-6 py-3 rounded-full border-2 font-bold text-sm transition-all"
                                style={{
                                    borderColor: category.color,
                                    color: category.color
                                }}
                            >
                                Explorer
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right: Description + Features in Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportConfig}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-6"
                    >
                        {/* Description */}
                        <p className="text-white/80 text-xl leading-relaxed font-outfit">
                            {category.description}
                        </p>

                        {/* Features Grid - Modern Cards */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {category.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={viewportConfig}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.1 + index * 0.1,
                                        ease: "backOut"
                                    }}
                                    className="group relative p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
                                >
                                    {/* Corner Accent */}
                                    <div
                                        className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-30 transition-opacity rounded-bl-full"
                                        style={{
                                            background: `radial-gradient(circle at top right, ${category.color}, transparent)`
                                        }}
                                    />

                                    {/* Icon */}
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                                        style={{ background: `${category.color}20` }}
                                    >
                                        <div
                                            className="w-2 h-2 rounded-full"
                                            style={{ background: category.color }}
                                        />
                                    </div>

                                    {/* Text */}
                                    <p className="text-white/90 text-sm font-outfit leading-relaxed">
                                        {feature}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Products Grid - Staggered Layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={viewportConfig}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1] // Custom refined easing
                            }}
                            className={index % 3 === 1 ? "lg:mt-8" : ""}
                        >
                            <ProductCard
                                id={product.id}
                                slug={product.slug}
                                category={product.categoryName}
                                categorySlug={category.seoSlug}
                                name={product.name}
                                shortDescription={product.shortDescription}
                                image={product.image}
                                features={product.features}
                                specs={product.specs}
                                color={product.color}
                                video={product.video}
                            />
                        </motion.div>
                    ))}

                    {/* Static Image for Transparent Category */}
                    {category.id === 'transparent' && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={viewportConfig}
                            transition={{
                                duration: 0.7,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="relative h-full min-h-[500px] rounded-[2rem] overflow-hidden border border-white/10 group"
                        >
                            <Image
                                src="/film transparents led vitrine - NEOFILM LED.jpg"
                                alt="Application Vitrine Neofilm"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                            {/* Optional: Add a subtle overlay or caption if needed, for now just the image as requested */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-white">
                                    VITRINE VIDÉO LED TRANSPARENTE
                                </span>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0">
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div
                    className="h-[1px] mt-px"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${category.color}40, transparent)`
                    }}
                />
            </div>
        </section>
    );
};

export default CategorySection;
