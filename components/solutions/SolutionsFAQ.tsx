"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SchemaOrg, generateFAQSchema } from "../shared/SchemaOrg";

const faqs = [
    {
        question: "Quelle est la différence entre NEOFILM LED et un écran LED classique ?",
        answer: "NEOFILM LED est un film LED transparent adhésif qui se pose directement sur une vitrine, offrant 85% de transparence. Un écran LED classique est opaque et nécessite une structure de support. NEOFILM permet de conserver la visibilité de vos produits tout en diffusant du contenu vidéo."
    },
    {
        question: "Quelle solution LED choisir pour mon commerce ?",
        answer: "Pour une vitrine : NEOFILM LED (transparent, installation rapide). Pour une façade extérieure : Enseigne LED Outdoor (haute luminosité, IP65). Pour un espace intérieur : Écran LED Indoor (haute résolution, design épuré). Contactez-nous pour un conseil personnalisé."
    },
    {
        question: "Combien de temps dure l'installation d'une solution LED ?",
        answer: "NEOFILM LED : 2-4 heures. Écran LED Indoor : 4-8 heures. Enseigne LED Outdoor : 1-3 jours selon la complexité. Toutes nos installations incluent la formation à la gestion du contenu."
    },
    {
        question: "Quelle est la durée de vie d'un écran LED professionnel ?",
        answer: "Nos solutions LED ont une durée de vie de 50 000 à 100 000 heures selon le modèle, soit environ 10-15 ans en utilisation normale (8h/jour). Nous proposons des garanties de 3 à 5 ans selon les produits."
    },
    {
        question: "Les écrans LED consomment-ils beaucoup d'énergie ?",
        answer: "Nos technologies LED sont optimisées pour une faible consommation. Un écran NEOFILM LED de 2m² consomme environ 200-300W, soit l'équivalent de 3-4 ampoules classiques. Les écrans s'adaptent automatiquement à la luminosité ambiante pour économiser l'énergie."
    },
    {
        question: "Comment gérer le contenu sur mes écrans LED ?",
        answer: "Tous nos écrans incluent un logiciel de gestion de contenu intuitif accessible depuis n'importe quel ordinateur ou smartphone. Planifiez vos contenus, créez des playlists, et mettez à jour vos écrans en temps réel. Formation incluse à l'installation."
    },
    {
        question: "Les écrans LED fonctionnent-ils en extérieur par tous les temps ?",
        answer: "Nos enseignes LED Outdoor sont certifiées IP65 : résistantes à la pluie, neige, poussière et températures extrêmes (-20°C à +50°C). La luminosité de 5000+ nits garantit une visibilité parfaite même en plein soleil."
    },
    {
        question: "Proposez-vous un service de maintenance ?",
        answer: "Oui, nous proposons des contrats de maintenance préventive avec intervention sous 48h en cas de besoin. Support technique disponible 7j/7. Pièces de rechange disponibles immédiatement pour tous nos produits."
    }
];

const SolutionsFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20">
            <SchemaOrg schema={generateFAQSchema(faqs)} />

            <div className="max-w-4xl mx-auto px-4">
                <h2 className="heading text-center mb-4">
                    Questions <span className="text-purple">Fréquentes</span>
                </h2>

                <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
                    Vous avez des questions sur nos <strong>solutions LED</strong> ?
                    Trouvez toutes les réponses ici ou contactez notre équipe d'experts.
                </p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-[#1C1F32] rounded-xl border border-white/5 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                            >
                                <span className="text-white font-semibold pr-8">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-purple flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-white/70 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-white/60 mb-4">Vous ne trouvez pas la réponse à votre question ?</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-purple/10 hover:bg-purple/20 border border-purple/50 rounded-lg text-white font-medium transition-all"
                    >
                        Contactez nos experts
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SolutionsFAQ;
