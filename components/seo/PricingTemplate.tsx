"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Calculator, FileText, Phone } from "lucide-react";
import { Product, CategoryInfo } from "@/data/products";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { navItems } from "@/data";
import { SchemaOrg } from "@/components/shared/SchemaOrg";

interface PricingTemplateProps {
    product: Product;
    category: CategoryInfo;
}

export const PricingTemplate: React.FC<PricingTemplateProps> = ({ product, category }) => {
    // Generate FAQ schema specifically for pricing
    const faqs = [
        {
            question: `Quel est le prix du ${product.name} ?`,
            answer: `Le prix du ${product.name} dépend de la surface (m²), du pitch (résolution) et des contraintes d'installation. Nos solutions démarrent généralement à partir de 1500€/m² pour les écrans transparents.`
        },
        {
            question: "Que comprend le devis NEOFILM ?",
            answer: "Votre devis inclut : les modules LED, l'alimentation, le contrôleur (sending box), les câblages, et en option : l'installation, la structure de support et la maintenance."
        },
        {
            question: "Existe-t-il des facilités de paiement ?",
            answer: "Oui, nous proposons des solutions de leasing (locatio financier) sur 24 à 60 mois, permettant de lisser l'investissement et de préserver votre trésorerie."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
            }
        }))
    };

    return (
        <>
            <SchemaOrg schema={faqSchema} />
            <main className="relative bg-black-100 flex flex-col w-full min-h-screen">
                <FloatingNav navItems={navItems} />

                <div className="pt-32 pb-10 px-5 sm:px-10">
                    <div className="max-w-7xl mx-auto">
                        <Breadcrumb
                            items={[
                                { label: category.name, href: `/${category.seoSlug}` },
                                { label: product.name, href: `/${product.categorySeoSlug}/${product.slug}` },
                                { label: "Tarifs", href: `/${product.categorySeoSlug}/${product.slug}-tarifs` }
                            ]}
                        />

                        <div className="grid lg:grid-cols-2 gap-12 mt-10">
                            {/* Left Column: Content */}
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 mb-6 leading-tight">
                                    Tarifs & Devis :<br />
                                    {product.name}
                                </h1>
                                <p className="text-xl text-white/80 mb-8">
                                    Obtenez une estimation précise pour votre projet d'affichage LED.
                                    Transparence totale, sans frais cachés.
                                </p>

                                <div className="space-y-8 mb-10">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                            <Calculator className="w-5 h-5 text-green-400" />
                                            Ce qui influence le prix
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-white/70">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                                <span><strong>La Surface (m²) :</strong> Plus l'écran est grand, plus le coût au m² est dégressif.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-white/70">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                                <span><strong>Le Pitch (Résolution) :</strong> Une densité de pixels plus élevée (P2 vs P3.9) augmente le coût.</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-white/70">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                                <span><strong>L'Exposition :</strong> Vitrine (haute luminosité) vs Intérieur standard.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-2xl p-6">
                                        <h3 className="text-lg font-bold text-green-400 mb-2">
                                            Estimation Budget
                                        </h3>
                                        <div className="text-3xl font-bold text-white mb-2">
                                            Sur Devis
                                        </div>
                                        <p className="text-sm text-white/60 mb-4">
                                            Chaque projet est unique. Nous nous engageons à vous fournir une réponse sous 24h.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/10">Installation incluse</span>
                                            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/10">Garantie 2 ans</span>
                                            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/10">Formation</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: CTA / Form Link */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-purple/20 blur-3xl rounded-full opacity-20" />
                                <div className="relative bg-black-200 border border-white/10 rounded-3xl p-8 shadow-2xl">
                                    <h2 className="text-2xl font-bold text-white mb-6">
                                        Demander un devis gratuit
                                    </h2>
                                    <p className="text-white/70 mb-8">
                                        Remplissez le formulaire de contact pour recevoir votre offre personnalisée.
                                        Nos experts vous conseillent sur la meilleure configuration.
                                    </p>

                                    <div className="space-y-4">
                                        <Link href="/contact" className="block w-full">
                                            <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
                                                <FileText className="w-5 h-5" />
                                                Demander mon devis
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </Link>

                                        <div className="flex items-center justify-center gap-4 text-sm text-white/50 pt-4">
                                            <span className="flex items-center gap-1">
                                                <Check className="w-3 h-3 text-green-500" /> Sans engagement
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Check className="w-3 h-3 text-green-500" /> Réponse 24h
                                            </span>
                                        </div>
                                    </div>

                                    {/* Product Mini Card */}
                                    <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                                        <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-white/10">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs text-white/50 uppercase tracking-wider">Produit concerné</p>
                                            <p className="font-bold text-white">{product.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="mt-20 max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold text-white mb-8 text-center">Questions fréquentes sur les tarifs</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="font-bold text-white mb-2">{faq.question}</h3>
                                        <p className="text-white/70 text-sm">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-auto">
                    <PremiumFooter />
                </div>
            </main>
        </>
    );
};
