"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Play, Eye } from "lucide-react";
import { Product, CategoryInfo } from "@/data/products";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { navItems } from "@/data";
import { SchemaOrg } from "@/components/shared/SchemaOrg";

interface DemoTemplateProps {
    product: Product;
    category: CategoryInfo;
}

export const DemoTemplate: React.FC<DemoTemplateProps> = ({ product, category }) => {
    return (
        <>
            <main className="relative bg-black-100 flex flex-col w-full min-h-screen">
                <FloatingNav navItems={navItems} />

                <div className="pt-32 pb-10 px-5 sm:px-10">
                    <div className="max-w-7xl mx-auto">
                        <Breadcrumb
                            items={[
                                { label: category.name, href: `/${category.seoSlug}` },
                                { label: product.name, href: `/${product.categorySeoSlug}/${product.slug}` },
                                { label: "Démonstration", href: `/${product.categorySeoSlug}/${product.slug}-demo` }
                            ]}
                        />

                        <div className="grid lg:grid-cols-2 gap-12 mt-10">
                            {/* Left Column: Content */}
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple to-pink-600 mb-6 leading-tight">
                                    Démonstration :<br />
                                    {product.name}
                                </h1>
                                <p className="text-xl text-white/80 mb-8">
                                    Découvrez la puissance et la transparence de nos écrans LED en conditions réelles.
                                    Réservez votre démo privée ou visitez notre showroom.
                                </p>

                                <div className="space-y-8 mb-10">
                                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-2xl shadow-purple/10">
                                        <Image
                                            src={product.image}
                                            alt={`Démonstration ${product.name}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                                            <Eye className="w-6 h-6 text-purple mb-2" />
                                            <h3 className="font-bold text-white mb-1">Showroom Paris</h3>
                                            <p className="text-xs text-white/60">Venez voir nos écrans en action dans notre showroom parisien sur rendez-vous.</p>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                                            <Play className="w-6 h-6 text-purple mb-2" />
                                            <h3 className="font-bold text-white mb-1">Visio-Live</h3>
                                            <p className="text-xs text-white/60">Démonstration à distance via visioconférence pour découvrir les détails techniques.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: CTA / Form Link */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-pink-500/20 blur-3xl rounded-full opacity-20" />
                                <div className="relative bg-black-200 border border-white/10 rounded-3xl p-8 shadow-2xl">
                                    <h2 className="text-2xl font-bold text-white mb-6">
                                        Réserver votre démo
                                    </h2>
                                    <p className="text-white/70 mb-8">
                                        Nos experts vous présentent le {product.name} et répondent à toutes vos questions techniques.
                                    </p>

                                    <div className="space-y-4">
                                        <Link href="/contact" className="block w-full">
                                            <button className="w-full py-4 bg-purple hover:bg-purple/90 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-purple/20">
                                                <Eye className="w-5 h-5" />
                                                Prendre Rendez-vous
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </Link>

                                        <div className="flex items-center justify-center gap-4 text-sm text-white/50 pt-4">
                                            <span className="flex items-center gap-1">
                                                <Check className="w-3 h-3 text-purple" /> Gratuit
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Check className="w-3 h-3 text-purple" /> Sur mesure
                                            </span>
                                        </div>
                                    </div>

                                    {/* Technical Recap */}
                                    <div className="mt-8 pt-8 border-t border-white/10">
                                        <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Points clés à découvrir</h3>
                                        <ul className="space-y-2">
                                            {product.features.slice(0, 4).map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-white/70">
                                                    <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
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
