import React from 'react';
import type { Metadata } from 'next';
import { navItems } from '@/data';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import PremiumFooter from '@/components/PremiumFooter';
import { CheckCircle, ArrowRight, Play, Info } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Signalétique LED Indoor & Solutions LED Portables | Dynamisation d'Espace - NEOFILM",
    description: "Solutions LED innovantes pour signalétique indoor, dynamisation d'espace et affichage portable. Film LED adhésif, rideau transparent, rideaux LED - NEOFILM.",
    alternates: {
        canonical: 'https://neofilmled.com/signaletique-led-indoor',
    },
    openGraph: {
        title: "Signalétique LED Indoor & Solutions Portables | Dynamisation d'Espace - NEOFILM",
        description: "Solutions LED innovantes pour signalétique indoor, dynamisation d'espace et affichage portable. Film LED adhésif, rideau transparent, écrans flexibles.",
        url: 'https://neofilmled.com/signaletique-led-indoor',
        siteName: 'NEOFÍLM LED',
        locale: 'fr_FR',
        type: 'website',
        images: [{ url: '/SALLE DE SPORT ECRAN INTERIEUR LED.jpg', width: 1200, height: 630, alt: 'Signalétique LED Indoor Neofilm' }],
    },
};

export default function SignaletiquePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Qu’est-ce que le film LED adhésif ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Le film LED adhésif est une technologie d'affichage transparent qui se colle directement sur les vitrages existants, transformant les vitrines en écrans vidéo tout en conservant la transparence et la luminosité naturelle."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Quelle solution LED portable choisir pour un salon ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Le Kakemono LED Pliable est idéal pour une installation rapide (plug-and-play), tandis que le Kinetic LED Rotatif offre une visibilité à 360 degrés pour un impact maximal."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Peut-on installer un écran LED sur une colonne ronde ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Oui, grâce à nos Écrans Flexibles LED (Soft Modules), nous pouvons habiller des colonnes, des angles arrondis ou créer des formes concaves et convexes sur-mesure."
                        }
                    }
                ]
            },
            {
                "@type": "Product",
                "name": "Signalétique LED Indoor NEOFILM",
                "description": "Solutions d'affichage LED pour intérieur : films transparents, murs LED haute définition et écrans portables pour boutiques et événements.",
                "brand": {
                    "@type": "Brand",
                    "name": "NEOFILM LED"
                }
            }
        ]
    };

    return (
        <main className="relative bg-[#030014] min-h-screen text-white overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <FloatingNav navItems={navItems} />

            {/* H1 - Hero Section */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030014] to-[#030014] z-0" />
                <h1 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 mb-6 max-w-5xl leading-tight">
                    Signalétique LED Indoor & Solutions LED Portables
                </h1>
                <p className="relative z-10 text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-10 font-outfit">
                    Transformez vos espaces intérieurs et boostez votre visibilité événementielle grâce à l'affichage dynamique nouvelle génération.
                    De la transparence du film LED adhésif à la flexibilité des écrans courbes.
                </p>
                <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                    <a href="#solutions" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform font-outfit">
                        Découvrir nos solutions
                    </a>
                    <a href="/contact" className="px-8 py-3 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors font-outfit">
                        Demander un devis
                    </a>
                </div>
            </section>

            {/* H2 - Nos Solutions */}
            <section id="solutions" className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-16 text-center text-blue-100">
                    Nos Solutions d'Affichage LED Innovantes
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Solution 1 */}
                    <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                        <h3 className="text-2xl font-bold font-orbitron text-purple-300 mb-4">Film LED Adhésif Transparent</h3>
                        <p className="text-gray-300 mb-6 font-outfit leading-relaxed">
                            Le <strong>NEOFILM Adhésif</strong> est une révolution technologique qui transforme n'importe quelle surface vitrée en un écran vidéo dynamique tout en conservant 85% de transparence.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start gap-2 text-sm text-gray-400 font-outfit"><CheckCircle className="w-4 h-4 text-purple-400 mt-1" /> Installation directe sur vitre existante</li>
                            <li className="flex items-start gap-2 text-sm text-gray-400 font-outfit"><CheckCircle className="w-4 h-4 text-purple-400 mt-1" /> Transparence exceptionnelle (85%)</li>
                            <li className="flex items-start gap-2 text-sm text-gray-400 font-outfit"><CheckCircle className="w-4 h-4 text-purple-400 mt-1" /> Invisible une fois éteint</li>
                        </ul>
                        <a href="/solutions/transparent/neofilm-adhesif" className="text-purple-300 hover:text-purple-200 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                            En savoir plus <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Solution 2 */}
                    <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                        <h3 className="text-2xl font-bold font-orbitron text-blue-300 mb-4">Mur LED Indoor (Bloc Rigide)</h3>
                        <p className="text-gray-300 mb-6 font-outfit leading-relaxed">
                            Des murs d'images sans bords offering une résolution 4K/8K pour une immersion totale. Contraste profond et colorimétrie fidèle pour sublimer vos contenus.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start gap-2 text-sm text-gray-400 font-outfit"><CheckCircle className="w-4 h-4 text-blue-400 mt-1" /> Pitch ultra-fin (P1.2 à P4)</li>
                            <li className="flex items-start gap-2 text-sm text-gray-400 font-outfit"><CheckCircle className="w-4 h-4 text-blue-400 mt-1" /> Maintenance avant simplifiée</li>
                            <li className="flex items-start gap-2 text-sm text-gray-400 font-outfit"><CheckCircle className="w-4 h-4 text-blue-400 mt-1" /> Silence absolu (Fanless)</li>
                        </ul>
                        <a href="/solutions/dynamisation/mur-led-indoor" className="text-blue-300 hover:text-blue-200 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                            En savoir plus <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Solution 3 */}
                    <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                        <h3 className="text-2xl font-bold font-orbitron text-pink-300 mb-4">Écran Flexible LED</h3>
                        <p className="text-gray-300 mb-6 font-outfit leading-relaxed">
                            Épousez toutes les courbes architecturales avec nos modules LED souples. Colonnes, vagues, angles arrondis : l'écran s'adapte à votre design.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start gap-2 text-sm text-gray-400 font-outfit"><CheckCircle className="w-4 h-4 text-pink-400 mt-1" /> Flexibilité totale (Concave/Convexe)</li>
                            <li className="flex items-start gap-2 text-sm text-gray-400 font-outfit"><CheckCircle className="w-4 h-4 text-pink-400 mt-1" /> Installation magnétique</li>
                            <li className="flex items-start gap-2 text-sm text-gray-400 font-outfit"><CheckCircle className="w-4 h-4 text-pink-400 mt-1" /> Design organique sur-mesure</li>
                        </ul>
                        <a href="/solutions/dynamisation/ecran-flexible-led" className="text-pink-300 hover:text-pink-200 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                            En savoir plus <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Solution 4 */}
                    <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                        <h3 className="text-2xl font-bold font-orbitron text-amber-300 mb-4">Solutions LED Portables</h3>
                        <p className="text-gray-300 mb-6 font-outfit leading-relaxed">
                            L'affichage dynamique qui vous suit partout. Kakemono LED pliable, Totem rotatif 360° et Stand LED roulant pour vos événements.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start gap-2 text-sm text-gray-400 font-outfit"><CheckCircle className="w-4 h-4 text-amber-400 mt-1" /> Kakemono : Déploiement en 30 secondes</li>
                            <li className="flex items-start gap-2 text-sm text-gray-400 font-outfit"><CheckCircle className="w-4 h-4 text-amber-400 mt-1" /> Totem Rotatif : Effet "Whaou" 360°</li>
                            <li className="flex items-start gap-2 text-sm text-gray-400 font-outfit"><CheckCircle className="w-4 h-4 text-amber-400 mt-1" /> Stand Roulant : Comptoir mobile</li>
                        </ul>
                        <a href="/solutions/portable" className="text-amber-300 hover:text-amber-200 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                            En savoir plus <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* H2 - Applications Types */}
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-16 text-center text-white">
                        Scénarios Clients & Applications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* App 1 - Salle de Sport */}
                        <div className="group relative overflow-hidden rounded-xl border border-white/10 h-80">
                            <div className="absolute inset-0">
                                <Image
                                    src="/SALLE DE SPORT ECRAN INTERIEUR LED.jpg"
                                    alt="Ecran LED Salle de Sport"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            </div>
                            <div className="relative h-full p-6 flex flex-col justify-end">
                                <h3 className="text-xl font-bold font-orbitron text-white mb-2">Salles de Sport & Fitness</h3>
                                <p className="text-sm text-blue-300 font-outfit mb-2">L'immersion au service de la performance</p>
                                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    Installez un Mur LED Indoor pour diffuser des coachings virtuels grandeur nature.
                                </p>
                            </div>
                        </div>

                        {/* App 2 - Coworking */}
                        <div className="group relative overflow-hidden rounded-xl border border-white/10 h-80">
                            <div className="absolute inset-0">
                                <Image
                                    src="/Videowall_ws.jpg"
                                    alt="Mur LED Coworking"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            </div>
                            <div className="relative h-full p-6 flex flex-col justify-end">
                                <h3 className="text-xl font-bold font-orbitron text-white mb-2">Coworking & Corporate</h3>
                                <p className="text-sm text-purple-300 font-outfit mb-2">Communication interne moderne</p>
                                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    Dynamisez vos lobbys avec des murs d'images HD silencieux.
                                </p>
                            </div>
                        </div>

                        {/* App 3 - Gares */}
                        <div className="group relative overflow-hidden rounded-xl border border-white/10 h-80">
                            <div className="absolute inset-0">
                                <Image
                                    src="/gareledsouple.png"
                                    alt="Ecran LED Gare"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            </div>
                            <div className="relative h-full p-6 flex flex-col justify-end">
                                <h3 className="text-xl font-bold font-orbitron text-white mb-2">Gares & Lieux de Transit</h3>
                                <p className="text-sm text-orange-300 font-outfit mb-2">Information haute visibilité</p>
                                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    Habillez colonnes et piliers pour une communication à 360°.
                                </p>
                            </div>
                        </div>

                        {/* App 4 - Retail */}
                        <div className="group relative overflow-hidden rounded-xl border border-white/10 h-80">
                            <div className="absolute inset-0">
                                <Image
                                    src="/NEOFILM LED - FILM ADHESIF TRANSPARENT LED - VITRINE boutique retail.jpg"
                                    alt="Ecran LED Retail"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            </div>
                            <div className="relative h-full p-6 flex flex-col justify-end">
                                <h3 className="text-xl font-bold font-orbitron text-white mb-2">Retail & Espace Commercial</h3>
                                <p className="text-sm text-cyan-300 font-outfit mb-2">Contenu vivant sur vitrines</p>
                                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    Remplacez vos vitrophanies statiques par le Neofilm Adhésif.
                                </p>
                            </div>
                        </div>

                        {/* App 5 - Stands */}
                        <div className="group relative overflow-hidden rounded-xl border border-white/10 h-80">
                            <div className="absolute inset-0">
                                <Image
                                    src="/stand evenement.jpg"
                                    alt="Stand LED Event"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            </div>
                            <div className="relative h-full p-6 flex flex-col justify-end">
                                <h3 className="text-xl font-bold font-orbitron text-white mb-2">Stands Événementiels</h3>
                                <p className="text-sm text-pink-300 font-outfit mb-2">Sortez du lot instantanément</p>
                                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    Nos Kakemonos LED captent l'attention avec des formes audacieuses.
                                </p>
                            </div>
                        </div>

                        {/* App 6 - Showroom Auto (New) */}
                        <div className="group relative overflow-hidden rounded-xl border border-white/10 h-80">
                            <div className="absolute inset-0">
                                <Image
                                    src="/auto-showroom-1.jpg"
                                    alt="Ecran LED Showroom Auto"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            </div>
                            <div className="relative h-full p-6 flex flex-col justify-end">
                                <h3 className="text-xl font-bold font-orbitron text-white mb-2">Showrooms Automobiles</h3>
                                <p className="text-sm text-red-300 font-outfit mb-2">Mise en valeur premium</p>
                                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    Affichez les caractéristiques tech sur vitres ou murs LED.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* H2 - Pourquoi choisir NEOFILM */}
            <section className="py-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-12 text-white">
                        Pourquoi choisir NEOFILM LED ?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                        <div className="p-4">
                            <h4 className="font-bold text-lg text-blue-300 mb-2 font-orbitron">Expertise Technique</h4>
                            <p className="text-gray-400 text-sm font-outfit">Une maîtrise complète, du pitch ultra-fin à la transparence maximale.</p>
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-lg text-purple-300 mb-2 font-orbitron">Solutions Sur-Mesure</h4>
                            <p className="text-gray-400 text-sm font-outfit">Une gamme flexible qui s'adapte à votre architecture, pas l'inverse.</p>
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-lg text-green-300 mb-2 font-orbitron">Accompagnement 360°</h4>
                            <p className="text-gray-400 text-sm font-outfit">De l'étude de faisabilité à l'installation et la maintenance.</p>
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-lg text-amber-300 mb-2 font-orbitron">Garantie & Fiabilité</h4>
                            <p className="text-gray-400 text-sm font-outfit">Des composants de haute qualité (SMD Gold Wire, IC haute fréquence) garantissant une fiabilité et une durabilité exceptionnelles.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* H2 - FAQ */}
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-white/5">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-10 text-center text-white">
                        Questions Fréquentes (FAQ)
                    </h2>
                    <div className="space-y-6">
                        <div className="collapse collapse-plus bg-[#030014] border border-white/10 rounded-xl">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title text-xl font-medium font-orbitron text-white">
                                Qu’est-ce que le film LED adhésif ?
                            </div>
                            <div className="collapse-content">
                                <p className="text-gray-300 font-outfit">C'est un film transparent intégrant des micro-LEDs qui se colle directement sur une vitre. Il permet de diffuser de la vidéo tout en gardant la transparence du verre (85%). C'est LA solution pour digitaliser une vitrine sans travaux lourds.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-[#030014] border border-white/10 rounded-xl">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium font-orbitron text-white">
                                Comment fonctionne un rideau transparent LED ?
                            </div>
                            <div className="collapse-content">
                                <p className="text-gray-300 font-outfit">Il s'agit d'une structure légère en maille d'aluminium (Media Mesh) où sont fixées les barrettes de LED. Il offre une transparence élevée (jusqu'à 80%) et laisse passer la lumière naturelle, tout en étant assez lumineux pour être visible en plein soleil.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-[#030014] border border-white/10 rounded-xl">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium font-orbitron text-white">
                                Quelle solution LED portable choisir pour un salon ?
                            </div>
                            <div className="collapse-content">
                                <p className="text-gray-300 font-outfit">Pour la rapidité, le Kakemono LED Pliable est imbattable (installé en 30s). Pour l'impact visuel à 360°, le Kinetic LED Rotatif est idéal. Pour un accueil client, le Stand LED Roulant combine comptoir et écran.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-[#030014] border border-white/10 rounded-xl">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium font-orbitron text-white">
                                Peut-on personnaliser les contenus des écrans LED ?
                            </div>
                            <div className="collapse-content">
                                <p className="text-gray-300 font-outfit">Oui, tous nos systèmes sont pilotables à distance (WiFi/Cloud/HDMI). Vous pouvez changer vos vidéos, images et textes instantanément depuis un ordinateur ou un smartphone, ou programmer des playlists automatisées.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Conversion */}
            <section className="py-24 px-6 md:px-12 lg:px-24 text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-6 text-white max-w-4xl mx-auto">
                    Demandez Votre Étude Personnalisée
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-outfit">
                    Vous avez un projet de digitalisation ? Ne laissez pas vos espaces statiques.
                    Contactez nos experts pour une simulation gratuite et découvrez comment la technologie LED peut transformer votre visibilité.
                </p>
                <a href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform font-orbitron shadow-[0_0_40px_rgba(79,70,229,0.4)]">
                    DEMANDER UN DEVIS GRATUIT <ArrowRight className="w-6 h-6" />
                </a>
            </section>

            <PremiumFooter />
        </main>
    );
}
