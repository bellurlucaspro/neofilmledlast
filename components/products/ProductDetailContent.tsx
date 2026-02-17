"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Package, Zap, Shield, Star, CheckCircle2, ShoppingCart, Info, Globe, Target, Palette, Cpu, Sparkles } from "lucide-react";
import ProductComparisonTable from "./ProductComparisonTable";
import RelatedProducts from "../neofilm/RelatedProducts";
import { Product, CategoryInfo } from "@/data/products";
import SectorSimulator from "../neofilm/SectorSimulator";
import { sectorConfigurations } from "@/data/sectorData";

interface ProductDetailContentProps {
    product: Product;
    category: CategoryInfo;
}

const ProductDetailContent: React.FC<ProductDetailContentProps> = ({ product, category }) => {
    const [selectedImage, setSelectedImage] = React.useState(product.image);

    // Reset selected image when product changes
    React.useEffect(() => {
        setSelectedImage(product.image);
    }, [product.image]);

    return (
        <div className="pb-20">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-20"
            >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Image Gallery */}
                    <div className="relative group perspective-1000">
                        {/* Custom Hero Background */}
                        <div className="absolute inset-0 scale-150 blur-2xl opacity-40 mix-blend-screen pointer-events-none">
                            <Image
                                src="/totem-bg.png"
                                alt="Background"
                                fill
                                sizes="100vw"
                                quality={50}
                                className="object-cover"
                            />
                        </div>

                        {/* Main Product Halo */}
                        <div
                            className="absolute -inset-4 rounded-full blur-3xl opacity-30 transition-colors duration-500"
                            style={{ backgroundColor: product.color }}
                        />

                        {/* Main Image Container */}
                        <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(203,82,238,0.3)]">
                            <Image
                                src={selectedImage}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Gallery Thumbnails */}
                        {product.gallery && product.gallery.length > 1 && (
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                                {product.gallery.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(img)}
                                        className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${selectedImage === img
                                            ? 'border-[#CB52EE] scale-110 shadow-[0_0_15px_#CB52EE]'
                                            : 'border-white/20 hover:border-white/60 opacity-70 hover:opacity-100'
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Vue ${idx + 1}`}
                                            fill
                                            sizes="64px"
                                            loading="lazy"
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Product Info */}
                    <div>
                        {/* Category Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                            style={{
                                background: `${product.color}20`,
                                border: `1px solid ${product.color}40`
                            }}
                        >
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: product.color }} />
                            <span className="text-sm font-semibold font-outfit" style={{ color: product.color }}>
                                {category.name}
                            </span>
                        </motion.div>

                        {/* Product Name */}
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-orbitron"
                            style={{
                                background: `linear-gradient(to right, ${product.color}, ${product.color}CC)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            {product.name}
                        </motion.h1>

                        {/* Short Description */}
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-white/80 mb-8 font-outfit leading-relaxed"
                        >
                            {product.shortDescription}
                        </motion.p>

                        {/* Full Description */}
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-white/70 mb-8 font-outfit leading-relaxed"
                        >
                            {product.fullDescription}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold font-orbitron transition-all shadow-xl hover:shadow-2xl group relative overflow-hidden"
                                style={{ background: product.color }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Demander un devis
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold font-orbitron transition-all border-2 hover:bg-white/5"
                                style={{
                                    borderColor: product.color,
                                    color: product.color
                                }}
                            >
                                Contactez-nous
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Sector Use Cases Section - NEW */}
            {sectorConfigurations[product.slug] && (
                <SectorSimulator
                    product={product}
                    sectorConfig={sectorConfigurations[product.slug]}
                />
            )}

            {/* Specifications Grid */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <h2 className="text-2xl md:text-3xl font-black mb-8 font-orbitron text-white">
                    Spécifications Techniques
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                    {product.specs.map((spec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all hover:scale-105"
                        >
                            <div className="text-white/40 text-xs uppercase font-bold tracking-widest mb-2">
                                {spec.label}
                            </div>
                            <div className="text-white text-xl font-bold" style={{ color: product.color }}>
                                {spec.value}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Features Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <h2 className="text-3xl font-black mb-12 font-orbitron text-white text-center">
                    Caractéristiques <span style={{ color: product.color }}>& Innovations</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.features.map((feature, index) => {
                        const [title, description] = feature.includes(':')
                            ? feature.split(':')
                            : [feature, ''];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl flex flex-col"
                            >
                                {/* Hover Gradient Background */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                    style={{ background: `radial-gradient(circle at center, ${product.color}, transparent 70%)` }}
                                />

                                {/* Icon/Accent */}
                                <div className="mb-6 w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                    <Check className="w-6 h-6" style={{ color: product.color }} />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3
                                        className="text-xl font-bold font-orbitron mb-3 leading-tight"
                                        style={{ color: 'white' }}
                                    >
                                        {title.trim()}
                                    </h3>
                                    {description && (
                                        <p className="text-white/60 font-outfit leading-relaxed">
                                            {description.trim()}
                                        </p>
                                    )}
                                </div>

                                {/* Bottom Line Accent */}
                                <div
                                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent to-transparent group-hover:from-transparent group-hover:via-white/40 group-hover:to-transparent w-full transition-all duration-700"
                                    style={{
                                        backgroundImage: `linear-gradient(90deg, transparent, ${product.color}, transparent)`
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* Applications Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <h2 className="text-3xl font-black mb-8 font-orbitron text-white">
                    Applications & Cas d'Usage
                </h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {product.applications.map((application, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all text-center hover:scale-105"
                        >
                            <Package className="w-8 h-8 mx-auto mb-3" style={{ color: product.color }} />
                            <span className="text-white/80 font-outfit text-sm">{application}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Why Choose Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <div className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 p-12">
                    <h2 className="text-3xl font-black mb-12 font-orbitron text-white text-center">
                        Pourquoi Choisir NEOFILM LED ?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                                style={{ background: `${product.color}20` }}
                            >
                                <Star className="w-8 h-8" style={{ color: product.color }} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white font-orbitron">Qualité Premium</h3>
                            <p className="text-white/70 font-outfit">
                                Composants de qualité professionnelle avec garantie constructeur
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                                style={{ background: `${product.color}20` }}
                            >
                                <Zap className="w-8 h-8" style={{ color: product.color }} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white font-orbitron">Installation Rapide</h3>
                            <p className="text-white/70 font-outfit">
                                Équipe d'experts pour une installation professionnelle et rapide
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                                style={{ background: `${product.color}20` }}
                            >
                                <Shield className="w-8 h-8" style={{ color: product.color }} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white font-orbitron">Support 24/7</h3>
                            <p className="text-white/70 font-outfit">
                                Assistance technique et maintenance préventive incluses
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Variants Comparison Table Section */}
            {product.variants && product.variants.length > 0 && (
                <div id="modeles">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black font-orbitron text-white mb-4 tracking-tighter">
                            MODÈLES <span style={{ color: product.color }}>DISPONIBLES</span>
                        </h2>
                        <p className="text-white/60 font-outfit max-w-2xl mx-auto text-sm md:text-base px-4">
                            Une gamme complète adaptée à chaque besoin de résolution et de luminosité.
                        </p>
                    </div>
                    <ProductComparisonTable product={product} />
                </div>
            )}

            {/* Detailed Specs Grid */}
            {product.detailedSpecs && (
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-black mb-8 font-orbitron text-white">
                        Informations Complémentaires
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(product.detailedSpecs).map(([key, value], index) => (
                            <div key={index} className="flex flex-col p-6 rounded-xl bg-white/[0.02] border border-white/10">
                                <span className="text-sm text-white/40 uppercase tracking-widest font-bold mb-2">
                                    {key === 'material' ? 'Matériau' :
                                        key === 'maxPower' ? 'Conso. Max' :
                                            key === 'avgPower' ? 'Conso. Moyenne' :
                                                key === 'voltage' ? 'Tension' :
                                                    key === 'lifespan' ? 'Durée de Vie' :
                                                        key === 'thickness' ? 'Épaisseur' : key}
                                </span>
                                <span className="text-lg font-outfit text-white">
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.section>
            )}

            {/* Process Section - Comment ça marche */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-32"
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black font-orbitron text-white mb-4">
                        VOTRE PROJET EN <span style={{ color: product.color }}>3 ÉTAPES</span>
                    </h2>
                    <p className="text-white/60 font-outfit max-w-2xl mx-auto">
                        Un accompagnement complet de l'étude technique à la mise en service.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            step: "01",
                            title: "Étude Technique",
                            desc: "Audit de l'emplacement, analyse de la luminosité et choix du pitch optimal."
                        },
                        {
                            step: "02",
                            title: "Installation & Pose",
                            desc: "Déploiement par nos techniciens certifiés avec configuration du système de contrôle."
                        },
                        {
                            step: "03",
                            title: "Mise en Service",
                            desc: "Formation à la gestion des contenus et mise en place de la maintenance préventive."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="relative p-8 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/[0.08] transition-all">
                            <div className="text-5xl font-black opacity-10 mb-4 font-orbitron absolute top-4 right-8 group-hover:opacity-20 transition-opacity" style={{ color: product.color }}>
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 font-orbitron">{item.title}</h3>
                            <p className="text-white/60 font-outfit leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* FAQ Section */}
            {product.faqs && product.faqs.length > 0 && (
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <h2 className="text-3xl font-black mb-12 font-orbitron text-white">
                        QUESTIONS <span style={{ color: product.color }}>FRÉQUENTES</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {product.faqs.map((faq, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: product.color }} />
                                    {faq.question}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed font-outfit pl-4.5">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.section>
            )}

            {/* Final CTA */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <div
                    className="rounded-2xl p-12 relative overflow-hidden"
                    style={{
                        background: `linear-gradient(135deg, ${product.color}10, ${product.color}05)`
                    }}
                >
                    <div className="relative z-10">
                        <h2 className="text-4xl font-black mb-6 font-orbitron text-white">
                            Prêt à Transformer Votre Espace ?
                        </h2>
                        <p className="text-xl text-white/70 mb-8 font-outfit max-w-2xl mx-auto">
                            Contactez nos experts pour un devis personnalisé et découvrez comment {product.name} peut révolutionner votre communication visuelle.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl text-white text-lg font-bold font-orbitron transition-all shadow-2xl hover:shadow-3xl hover:scale-105 group relative overflow-hidden"
                            style={{ background: product.color }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Demander un Devis Gratuit
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </div>
                </div>
            </motion.section>

            {/* Cross-Selling / Related Products */}
            <div className="mt-32">
                <RelatedProducts
                    currentProductSlug={product.slug}
                    currentCategory={product.category}
                />
            </div>
        </div>
    );
};

export default ProductDetailContent;
