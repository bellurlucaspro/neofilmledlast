"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

interface SolutionCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    features: string[];
    specs: {
        label: string;
        value: string;
    }[];
    link?: string;
    isHighlighted?: boolean;
    color?: string; // Add color for dynamic branding
}

const SolutionCard: React.FC<SolutionCardProps> = ({
    id,
    title,
    description,
    image,
    features,
    specs,
    link,
    isHighlighted = false,
    color = "#CB52EE" // Default brand color
}) => {
    return (
        <CardContainer className="inter-var w-full py-10">
            <CardBody
                className="relative group/card dark:bg-black-100 w-full h-auto rounded-xl p-8 border flex flex-col lg:flex-row gap-10 transition-all duration-500 overflow-hidden"
                style={{
                    borderColor: `${color}33`, // 20% opacity border
                    boxShadow: `0 0 20px ${color}1A`, // 10% opacity shadow
                }}
            >
                {/* Visual Glow Effect */}
                <div
                    className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-transparent to-transparent group-hover/card:via-current transition-all duration-500"
                    style={{ color: color }}
                />

                {/* Left: Image with 3D Effect */}
                <div className="lg:w-1/2 relative">
                    <div
                        className="absolute -inset-1 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500"
                        style={{ backgroundColor: color }}
                    ></div>
                    <CardItem translateZ="100" className="w-full relative h-[300px] lg:h-full min-h-[300px]">
                        <Image
                            src={image}
                            alt={`${title} - Solution LED professionnelle NEOFILM`}
                            fill
                            className="object-cover rounded-xl shadow-2xl"
                        />
                        {isHighlighted && (
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#CB52EE] to-[#00707E] px-4 py-2 rounded-full text-white text-xs font-bold font-orbitron shadow-lg">
                                Solution Phare
                            </div>
                        )}
                    </CardItem>
                </div>

                {/* Right: Content */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                    <CardItem translateZ="50">
                        <h3 className="text-3xl font-black text-white mb-4 font-orbitron tracking-tight prose-h3:italic">
                            {title}
                        </h3>
                    </CardItem>

                    <CardItem translateZ="60">
                        <p className="text-white/70 mb-8 leading-relaxed font-outfit text-lg">
                            {description}
                        </p>
                    </CardItem>

                    {/* Features & Specs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <CardItem translateZ="70">
                            <h4 className="text-white font-bold mb-4 font-orbitron text-sm uppercase tracking-wider underline decoration-2 underline-offset-4" style={{ textDecorationColor: color }}>
                                Avantages Clés
                            </h4>
                            <ul className="space-y-3">
                                {features.slice(0, 4).map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 text-white/70 text-sm font-outfit">
                                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: color }} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardItem>

                        <CardItem translateZ="80">
                            <h4 className="text-white font-bold mb-4 font-orbitron text-sm uppercase tracking-wider underline decoration-2 underline-offset-4" style={{ textDecorationColor: color }}>
                                Spécifications
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                {specs.map((spec, index) => (
                                    <div key={index} className="bg-white/5 p-3 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
                                        <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">{spec.label}</div>
                                        <div className="text-white text-xs font-bold" style={{ color: color }}>{spec.value}</div>
                                    </div>
                                ))}
                            </div>
                        </CardItem>
                    </div>

                    {/* CTA */}
                    <CardItem translateZ="40" className="mt-auto">
                        {link && (
                            <Link
                                href={link}
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold font-orbitron transition-all shadow-xl group/btn overflow-hidden relative"
                                style={{ background: color }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    En savoir plus <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                            </Link>
                        )}
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
};

export default SolutionCard;
