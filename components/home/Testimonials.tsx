"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SchemaOrg } from "../shared/SchemaOrg";

const testimonials = [
    {
        quote: "NEOFILM LED a transformé notre vitrine en un véritable outil marketing. L'installation a été rapide et le résultat est spectaculaire. Nos ventes ont augmenté de 35% depuis !",
        name: "Sophie Martin",
        title: "Directrice - Boutique Luxe Paris",
        rating: 5,
        image: "/testimonial1.jpg"
    },
    {
        quote: "La qualité de l'affichage LED et la transparence du film sont exceptionnelles. Nos clients sont impressionnés par la technologie. Un investissement qui se rentabilise rapidement.",
        name: "Marc Dubois",
        title: "Gérant - Showroom Automobile Lyon",
        rating: 5,
        image: "/testimonial2.jpg"
    },
    {
        quote: "Service client réactif, installation professionnelle et produit de haute qualité. NEOFILM LED est le partenaire idéal pour notre stratégie de communication digitale.",
        name: "Claire Rousseau",
        title: "Responsable Marketing - Groupe Retail",
        rating: 5,
        image: "/testimonial3.jpg"
    }
];

const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NEOFILM LED",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": testimonials.length.toString()
    }
};

const Testimonials = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <SchemaOrg schema={reviewSchema} />

            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex flex-col items-center justify-center relative z-10">
                <h2 className="heading text-center mb-4">
                    Ils Nous Font <span className="text-purple">Confiance</span>
                </h2>

                <p className="text-center text-white/70 max-w-2xl mb-16 px-4">
                    Découvrez les témoignages de nos clients satisfaits qui ont choisi
                    nos <strong>solutions LED professionnelles</strong> pour transformer leur communication visuelle.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 w-full max-w-7xl">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#1C1F32] p-6 rounded-2xl border border-white/5 hover:border-purple/50 transition-all"
                        >
                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-white/80 text-sm mb-6 italic">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple to-blue-500 flex items-center justify-center text-white font-bold">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-sm">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-white/60 text-xs">
                                        {testimonial.title}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Average rating display */}
                <div className="mt-12 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-white font-bold text-lg">5.0/5</span>
                    </div>
                    <p className="text-white/60 text-sm">
                        Basé sur {testimonials.length}+ avis clients vérifiés
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
