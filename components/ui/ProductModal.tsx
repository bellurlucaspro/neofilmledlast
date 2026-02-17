"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface Product {
    name: string;
    description: string;
    link: string;
    image: string;
    specs?: string[];
}

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    products: Product[];
    categoryTitle: string;
    categoryColor: string;
    mode?: 'single' | 'full';
    catalogData?: { category: { title: string; color: string }; products: Product[] }[];
}

const ProductModal: React.FC<ProductModalProps> = ({
    isOpen,
    onClose,
    products,
    categoryTitle,
    categoryColor,
    mode = 'single',
    catalogData
}) => {
    // Handle ESC key to close modal
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-[#0a0a1f]/95 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl pointer-events-auto custom-scrollbar"
                            style={{
                                boxShadow: mode === 'single' ? `0 0 60px ${categoryColor}40` : `0 0 60px rgba(255,255,255,0.1)`
                            }}
                        >
                            {/* Close Button - Sticky Floating */}
                            <div className="sticky top-0 z-50 flex justify-end pt-6 pr-6 pointer-events-none h-0 overflow-visible">
                                <button
                                    onClick={onClose}
                                    className="w-10 h-10 rounded-full bg-black/20 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all group pointer-events-auto backdrop-blur-md"
                                    aria-label="Fermer"
                                >
                                    <X className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                                </button>
                            </div>

                            {/* Header */}
                            <div className="p-8 md:p-12 border-b border-white/10 relative overflow-hidden">
                                {mode === 'single' ? (
                                    <>
                                        <motion.h2
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className="text-3xl md:text-4xl lg:text-5xl font-black font-orbitron mb-4"
                                            style={{
                                                color: categoryColor,
                                                textShadow: `0 0 30px ${categoryColor}50`
                                            }}
                                        >
                                            {categoryTitle}
                                        </motion.h2>
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-white/70 text-lg"
                                        >
                                            Découvrez notre gamme complète de solutions LED
                                        </motion.p>
                                    </>
                                ) : (
                                    <div className="text-center">
                                        <motion.h2
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-4xl md:text-6xl font-black font-orbitron text-white mb-4 uppercase"
                                        >
                                            CATALOGUE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D8FF] to-[#CB52EE]">COMPLET</span>
                                        </motion.h2>
                                        <p className="text-white/50 text-lg">L'excellence visuelle sous toutes ses formes</p>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-12 space-y-16">
                                {mode === 'single' ? (
                                    <ProductGrid products={products} categoryColor={categoryColor} />
                                ) : (
                                    catalogData?.map((section, idx) => (
                                        <div key={idx} className="relative">
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="w-2 h-8 rounded-full" style={{ backgroundColor: section.category.color }} />
                                                <h3 className="text-2xl md:text-3xl font-bold font-orbitron text-white uppercase">
                                                    {section.category.title}
                                                </h3>
                                                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                                            </div>
                                            <ProductGrid products={section.products} categoryColor={section.category.color} />
                                        </div>
                                    ))
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

const ProductGrid = ({ products, categoryColor }: { products: Product[], categoryColor: string }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="group relative bg-[#0f0f2a]/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/20 overflow-hidden transition-all hover:shadow-xl"
                style={{
                    boxShadow: `0 0 0 ${categoryColor}00`,
                    transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${categoryColor}50`;
                    e.currentTarget.style.boxShadow = `0 0 30px ${categoryColor}20`;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.boxShadow = `0 0 0 ${categoryColor}00`;
                }}
            >
                {/* Product Image */}
                <div className="relative h-48 w-full overflow-hidden bg-black/20">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f2a] to-transparent opacity-60" />
                </div>

                {/* Product Info */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 font-orbitron group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                        {product.name}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 line-clamp-3">
                        {product.description}
                    </p>

                    {/* Specs */}
                    {product.specs && product.specs.length > 0 && (
                        <div className="mb-4 space-y-1">
                            {product.specs.map((spec, i) => (
                                <div key={i} className="flex items-center text-xs text-white/50">
                                    <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: categoryColor }} />
                                    {spec}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* CTA Button */}
                    <Link
                        href={product.link}
                        className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl font-semibold text-sm transition-all border relative overflow-hidden group/btn"
                        style={{
                            borderColor: `${categoryColor}40`,
                            color: categoryColor,
                            backgroundColor: `${categoryColor}10`
                        }}
                    >
                        <span className="relative z-10 group-hover/btn:text-white transition-colors">Voir le produit →</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
                        <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" style={{ backgroundColor: categoryColor }} />
                    </Link>
                </div>
            </motion.div>
        ))}
    </div>
);

export default ProductModal;
