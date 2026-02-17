"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight, FaChevronLeft, FaPaperPlane, FaBuilding, FaProjectDiagram, FaRulerCombined, FaCalendarAlt } from "react-icons/fa";
import { Layers, Building2, Tv, Sparkles, Search, CheckCircle, RefreshCcw, Briefcase, DollarSign, Clock } from "lucide-react";
import PremiumSelect from "../ui/PremiumSelect";
import MagicButton from "../MagicButton";

const solutionTypes = [
    { id: "film-led", label: "Film LED Transparent", icon: <Layers className="w-8 h-8" /> },
    { id: "outdoor", label: "Enseigne Outdoor", icon: <Building2 className="w-8 h-8" /> },
    { id: "indoor", label: "Écran Indoor", icon: <Tv className="w-8 h-8" /> },
    { id: "sur-mesure", label: "Sur-mesure / Autre", icon: <Sparkles className="w-8 h-8" /> },
];

const projectPhases = [
    { id: "etude", label: "Étude de faisabilité", icon: <Search className="w-6 h-6" /> },
    { id: "valide", label: "Projet validé", icon: <CheckCircle className="w-6 h-6" /> },
    { id: "remplacement", label: "Remplacement", icon: <RefreshCcw className="w-6 h-6" /> },
];

const EnhancedContactForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        entreprise: "",
        secteur: "",
        solution: "",
        phase: "",
        emplacement: "",
        largeur: "",
        hauteur: "",
        ville: "",
        timing: "",
        budget: "",
        message: "",
    });

    const [status, setStatus] = useState({ type: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const totalSteps = 4;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelect = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
    const prevStep = () => setStep((s) => Math.max(s - 1, 1));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (step < totalSteps) {
            nextStep();
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ type: "success", message: "Votre demande a été envoyée avec succès ! Notre équipe vous recontactera sous 24h." });
            } else {
                const errorData = await response.json();
                setStatus({ type: "error", message: errorData.error || "Une erreur s'est produite." });
            }
        } catch (error) {
            setStatus({ type: "error", message: "Une erreur s'est produite. Veuillez réessayer." });
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses = "w-full p-4 bg-white/[0.03] backdrop-blur-sm border border-white/10 text-white rounded-xl outline-none focus:border-[#CB52EE]/50 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(203,82,238,0.1)] transition-all placeholder:text-white/20";
    const labelClasses = "text-sm text-white/50 ml-1 font-outfit uppercase tracking-wider text-[10px]";

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-6 text-[#00D8FF]">
                            <span className="p-2 rounded-lg bg-[#00D8FF]/10 border border-[#00D8FF]/20 text-xl"><FaBuilding /></span>
                            <h2 className="text-xl font-bold font-orbitron tracking-wide text-white">Identité & Entreprise</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className={labelClasses}>Prénom</label>
                                <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Jean" className={inputClasses} required />
                            </div>
                            <div className="space-y-2">
                                <label className={labelClasses}>Nom</label>
                                <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Dupont" className={inputClasses} required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className={labelClasses}>E-mail Professionnel</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="contact@entreprise.com" className={inputClasses} required />
                            </div>
                            <div className="space-y-2">
                                <label className={labelClasses}>Téléphone</label>
                                <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="06 12 34 56 78" className={inputClasses} required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className={labelClasses}>Nom de l'entreprise</label>
                                <input type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} placeholder="NEOFILM SAS" className={inputClasses} />
                            </div>
                            <div className="space-y-2">
                                <label className={labelClasses}>Secteur d'activité</label>
                                <PremiumSelect
                                    options={[
                                        { value: "retail", label: "Commerce / Retail" },
                                        { value: "immobilier", label: "Immobilier" },
                                        { value: "evenementiel", label: "Événementiel" },
                                        { value: "publicite", label: "Publicité / Régie" },
                                        { value: "autre", label: "Autre" }
                                    ]}
                                    value={formData.secteur}
                                    onChange={(val) => handleSelect("secteur", val)}
                                    placeholder="Sélectionnez un secteur"
                                    icon={<Briefcase />}
                                />
                            </div>
                        </div>
                    </motion.div>
                );
            case 2:
                // ... (Keep existing logic but update styling classes)
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-6 text-[#CB52EE]">
                            <span className="p-2 rounded-lg bg-[#CB52EE]/10 border border-[#CB52EE]/20 text-xl"><FaProjectDiagram /></span>
                            <h2 className="text-xl font-bold font-orbitron tracking-wide text-white">Votre Projet</h2>
                        </div>

                        <div className="space-y-4">
                            <p className={labelClasses}>Quel type de solution recherchez-vous ?</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {solutionTypes.map((type) => (
                                    <button
                                        key={type.id}
                                        type="button"
                                        onClick={() => handleSelect("solution", type.id)}
                                        className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-3 transition-all duration-300 group ${formData.solution === type.id
                                            ? "bg-[#00D8FF]/20 border-[#00D8FF] text-white shadow-[0_0_15px_rgba(0,216,255,0.3)]"
                                            : "bg-white/[0.03] border-white/10 text-white/50 hover:bg-white/[0.05] hover:border-white/30 hover:text-white"
                                            }`}
                                    >
                                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{type.icon}</span>
                                        <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wide text-center">{type.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className={labelClasses}>Où en est votre projet ?</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {projectPhases.map((phase) => (
                                    <button
                                        key={phase.id}
                                        type="button"
                                        onClick={() => handleSelect("phase", phase.id)}
                                        className={`p-4 rounded-xl border flex items-center gap-3 transition-all duration-300 ${formData.phase === phase.id
                                            ? "bg-[#CB52EE]/20 border-[#CB52EE] text-white shadow-[0_0_15px_rgba(203,82,238,0.3)]"
                                            : "bg-white/[0.03] border-white/10 text-white/50 hover:bg-white/[0.05] hover:border-white/30 hover:text-white"
                                            }`}
                                    >
                                        <span className="text-xl">{phase.icon}</span>
                                        <span className="text-xs font-semibold uppercase tracking-wide">{phase.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-6 text-[#00D8FF]">
                            <span className="p-2 rounded-lg bg-[#00D8FF]/10 border border-[#00D8FF]/20 text-xl"><FaRulerCombined /></span>
                            <h2 className="text-xl font-bold font-orbitron tracking-wide text-white">Détails Techniques</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className={labelClasses}>Emplacement</label>
                                <PremiumSelect
                                    options={[
                                        { value: "vitrine", label: "Vitrine" },
                                        { value: "interieur", label: "Intérieur" },
                                        { value: "facade", label: "Extérieur (Façade)" }
                                    ]}
                                    value={formData.emplacement}
                                    onChange={(val) => handleSelect("emplacement", val)}
                                    placeholder="Sélectionnez..."
                                    icon={<Layers />}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className={labelClasses}>Ville</label>
                                <input type="text" name="ville" value={formData.ville} onChange={handleChange} placeholder="Paris" className={inputClasses} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className={labelClasses}>Dimensions (Estimations)</label>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="relative">
                                    <input type="text" name="largeur" value={formData.largeur} onChange={handleChange} placeholder="Largeur" className={inputClasses} />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs">m</span>
                                </div>
                                <div className="relative">
                                    <input type="text" name="hauteur" value={formData.hauteur} onChange={handleChange} placeholder="Hauteur" className={inputClasses} />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs">m</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 4:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                        <div className="flex items-center gap-3 mb-6 text-[#CB52EE]">
                            <span className="p-2 rounded-lg bg-[#CB52EE]/10 border border-[#CB52EE]/20 text-xl"><FaCalendarAlt /></span>
                            <h2 className="text-xl font-bold font-orbitron tracking-wide text-white">Timing & Budget</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className={labelClasses}>Installation souhaitée</label>
                                <PremiumSelect
                                    options={[
                                        { value: "asap", label: "Dès que possible" },
                                        { value: "1-3-mois", label: "1 - 3 mois" },
                                        { value: "plus-6-mois", label: "+ 6 mois" }
                                    ]}
                                    value={formData.timing}
                                    onChange={(val) => handleSelect("timing", val)}
                                    placeholder="Choisir..."
                                    icon={<Clock />}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className={labelClasses}>Budget (HT)</label>
                                <PremiumSelect
                                    options={[
                                        { value: "moins-5k", label: "< 5k €" },
                                        { value: "5k-15k", label: "5k - 15k €" },
                                        { value: "plus-30k", label: "> 30k €" }
                                    ]}
                                    value={formData.budget}
                                    onChange={(val) => handleSelect("budget", val)}
                                    placeholder="Choisir..."
                                    icon={<DollarSign />}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className={labelClasses}>Message (Optionnel)</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Détails du projet..." className={`${inputClasses} h-32 resize-none`} />
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12 relative px-4">
                <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${(step / totalSteps) * 100}%` }}
                        className="h-full bg-gradient-to-r from-[#CB52EE] to-[#00D8FF] shadow-[0_0_10px_rgba(203,82,238,0.5)]"
                    />
                </div>
                {/* Steps dots */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between px-0">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${step >= i ? "bg-[#00D8FF] border-[#00D8FF] shadow-[0_0_10px_rgba(0,216,255,0.8)]" : "bg-[#030014] border-white/20"}`} />
                    ))}
                </div>
            </div>

            {/* Form Container */}
            <div className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-xl">
                {/* Decorative Background Layer - prevents overflow of blurs but allows Select to pop out */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00D8FF]/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#CB52EE]/10 rounded-full blur-[100px]" />
                </div>

                <form onSubmit={handleSubmit} className="relative z-10">
                    <AnimatePresence mode="wait">
                        {renderStep()}
                    </AnimatePresence>

                    <div className="mt-12 flex justify-between items-center border-t border-white/5 pt-8">
                        <button
                            type="button"
                            onClick={prevStep}
                            className={`flex items-center gap-2 text-white/40 hover:text-white transition-colors uppercase text-xs tracking-widest ${step === 1 ? "opacity-0 pointer-events-none" : ""}`}
                        >
                            <FaChevronLeft /> Précédent
                        </button>

                        <div className="flex items-center gap-4">
                            {step < totalSteps ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="px-8 py-3 rounded-full bg-white text-black font-bold font-orbitron hover:bg-[#00D8FF] hover:text-white hover:shadow-[0_0_20px_rgba(0,216,255,0.4)] transition-all flex items-center gap-2"
                                >
                                    SUIVANT <FaChevronRight className="text-xs" />
                                </button>
                            ) : (
                                <button type="submit" disabled={isSubmitting} className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent overflow-hidden rounded-full transition-all duration-300">
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#CB52EE] to-[#00707E] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                                    <div className="absolute inset-[2px] rounded-full bg-black/40 group-hover:bg-black/20 transition-colors duration-300 backdrop-blur-sm" />
                                    <div className="relative z-10 flex items-center gap-3">
                                        <span className="text-white font-bold font-orbitron tracking-wide text-base group-hover:tracking-wider transition-all duration-300">
                                            {isSubmitting ? "ENVOI..." : "ENVOYER LE PROJET"}
                                        </span>
                                        <FaPaperPlane className="text-white text-sm group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                    <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/50 group-hover:shadow-[0_0_30px_rgba(203,82,238,0.4)] transition-all duration-300" />
                                </button>
                            )}
                        </div>
                    </div>
                </form>

                {status.message && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-8 p-4 rounded-xl text-center border backdrop-blur-md ${status.type === "success" ? "bg-green-500/10 border-green-500/30 text-green-400" : "bg-red-500/10 border-red-500/30 text-red-400"}`}
                    >
                        {status.message}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default EnhancedContactForm;
