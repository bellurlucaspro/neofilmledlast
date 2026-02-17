/**
 * Sector Use Case Data Configuration
 * 
 * Defines sector-specific use cases, benefits, KPIs, and CTAs for each LED product.
 * Used by SectorSimulator component to generate immersive case study showcases.
 */

import { LucideIcon } from 'lucide-react';
import { Store, Building2, Car, ShoppingBag, Briefcase, Sparkles, Users, Plane, Heart, Film, Dumbbell, Hotel, Palette, Zap, Utensils } from 'lucide-react';

export interface SectorData {
    id: string;
    label: string;
    title: string;
    description: string;
    fullAnalysis: string;
    color: string;
    icon: LucideIcon;
    image: string;
    images?: string[];
    stats: Array<{
        label: string;
        value: string;
    }>;
    benefits: string[];
}

export interface ProductSectorConfig {
    seoTitle: string;
    subtitle: string;
    badge: string;
    cta: string;
    sectors: SectorData[];
}

export const sectorConfigurations: Record<string, ProductSectorConfig> = {
    // ============================================
    // RIDEAU LED TRANSPARENT
    // ============================================
    'rideau-led-transparent': {
        seoTitle: 'Architecture & : FAÇADES LUMINEUSES',
        subtitle: 'Habillez vos vitrines de lumière avec une structure ultra-transparente et légère.',
        badge: 'IMPACT VISUEL',
        cta: 'Nous contacter',
        sectors: [
            {
                id: 'retail-telephony',
                label: 'Boutique Téléphonie',
                title: 'Vitrine Connectée High-Tech',
                description: 'Transformez vos vitrines en écrans transparents pour vos lancements produits.',
                fullAnalysis: 'Les boutiques de téléphonie et high-tech utilisent le Rideau LED pour attirer les regards tout en gardant une transparence totale. Idéal pour diffuser les spots des derniers smartphones ou offres forfaits, sans occulter l\'intérieur du magasin lumineux.',
                color: '#00D8FF',
                icon: Store,
                image: '/NEOFILM LED - FILM ADHESIF TRANSPARENT LED - VITRINE boutique retail.jpg',
                stats: [
                    { label: 'Trafic', value: '+45%' },
                    { label: 'Modernité', value: '100%' },
                    { label: 'Visibilité', value: 'Max' }
                ],
                benefits: [
                    'Modernité absolue du point de vente',
                    'Mise en avant dynamique des promotions',
                    'Transparence préservée (lumière naturelle)',
                    'Attraction flux passants garantie'
                ]
            },
            {
                id: 'pharmacy',
                label: 'Pharmacie',
                title: 'Communication Santé Dynamique',
                description: 'Diffusez vos conseils santé, promotions et services de manière moderne et engageante.',
                fullAnalysis: 'Les pharmacies modernes utilisent le rideau LED pour communiquer sur les campagnes de prévention, les services (vaccination, dépistage), et les promotions parapharmacie. La transparence permet de conserver la visibilité rassurante de l\'officine.',
                color: '#CB52EE',
                icon: Heart,
                image: '/pharmacie-etoile-1.jpg',
                stats: [
                    { label: 'Engagement', value: 'Fort' },
                    { label: 'Modernité', value: '+35%' },
                    { label: 'Services', value: 'x5' }
                ],
                benefits: [
                    'Communication santé publique valorisée et visible',
                    'Promotion services annexes (vaccination, orthopédie)',
                    'Image moderne et innovante de l\'officine',
                    'Rotation messages préventifs automatisée'
                ]
            },
            {
                id: 'automotive',
                label: 'Concession Auto',
                title: 'Showroom Transparent Premium',
                description: 'Mettez en valeur vos véhicules avec des animations techniques et promotions sans masquer les modèles exposés.',
                fullAnalysis: 'Les concessions automobiles premium adoptent le rideau LED pour créer des expériences immersives : caractéristiques techniques animées, offres de financement, événements de lancement. La transparence garantit la visibilité permanente des véhicules.',
                color: '#FF6B35',
                icon: Car,
                image: '/auto-showroom-1.jpg',
                stats: [
                    { label: 'Impact visuel', value: 'Unique' },
                    { label: 'Visites', value: '+30%' },
                    { label: 'Prestige', value: 'Premium' }
                ],
                benefits: [
                    'Mise en scène premium des véhicules exposés',
                    'Affichage caractéristiques techniques dynamiques',
                    'Événements de lancement immersifs et mémorables',
                    'Différenciation forte vs concurrence traditionnelle'
                ]
            },
            {
                id: 'youtube-studio',
                label: 'Studio Youtube',
                title: 'Décor Studio Interactif',
                description: 'Créez un décor vidéo évolutif et transparent pour vos tournages.',
                fullAnalysis: 'Les créateurs de contenu et studios utilisent le Rideau LED pour enrichir leurs décors sans fond vert. La transparence permet de garder de la profondeur (vue sur la ville ou régie) tout en affichant des éléments graphiques, logos ou invités en visio directement dans l\'espace.',
                color: '#E62117',
                icon: Film,
                image: '/Studio Youtube - NEORILM - RIDEAU TRANSPARENT LED.png',
                stats: [
                    { label: 'Immersion', value: 'Totale' },
                    { label: 'Production', value: '+Rapide' },
                    { label: 'Visuel', value: 'Unique' }
                ],
                benefits: [
                    'Décor dynamique modifiable instantanément',
                    'Interaction fond/forme unique',
                    'Transparence pour profondeur de champ',
                    'Luminosité adaptée aux caméras'
                ]
            },
            {
                id: 'downtown',
                label: 'Boutique Centre-Ville',
                title: 'Vitrine Iconique & Différenciation',
                description: 'Créez une vitrine mémorable qui attire l\'œil dans les rues commerçantes animées.',
                fullAnalysis: 'En centre-ville, la concurrence visuelle est intense. Le rideau LED permet aux boutiques de se démarquer avec des animations créatives, des messages personnalisés et une identité visuelle forte, tout en respectant les contraintes architecturales.',
                color: '#00D8FF',
                icon: Sparkles,
                image: '/Vitrine rideau led transprent - Neofilm.jpg',
                stats: [
                    { label: 'Différenciation', value: 'Forte' },
                    { label: 'Mémorisation', value: '+50%' },
                    { label: 'Trafic', value: '+28%' }
                ],
                benefits: [
                    'Différenciation immédiate dans rue commerçante',
                    'Créativité et animations personnalisées illimitées',
                    'Respect contraintes architecturales et patrimoniales',
                    'Effet "wow" garanti sur les passants'
                ]
            }
        ]
    },

    // ============================================
    // MUR LED INDOOR
    // ============================================
    'mur-led-indoor': {
        seoTitle: 'Immersion & : EXPÉRIENCE 4K',
        subtitle: 'Transformez vos espaces intérieurs en univers visuels époustouflants et mémorables.',
        badge: 'RÉALITÉ IMMERSIVE',
        cta: 'Nous contacter',
        sectors: [
            {
                id: 'luxury-retail',
                label: 'Retail Luxe',
                title: 'Expérience Immersive Premium',
                description: 'Sublimez votre espace de vente avec un mur LED haute définition qui renforce votre image de marque.',
                fullAnalysis: 'Les enseignes de luxe utilisent les murs LED pour créer des univers immersifs : défilés virtuels, storytelling de marque, mise en scène produits. La haute définition et la taille imposante créent un impact émotionnel fort et mémorable.',
                color: '#FFD700',
                icon: Sparkles,
                image: '/BLOC RIGIDE LED SHOP - NEOFILM LED.jpg',
                stats: [
                    { label: 'Impact', value: 'Maximal' },
                    { label: 'Temps visite', value: '+45%' },
                    { label: 'Image marque', value: 'Premium' }
                ],
                benefits: [
                    'Storytelling de marque immersif et émotionnel',
                    'Mise en scène produits spectaculaire et mémorable',
                    'Différenciation ultra-premium vs concurrence',
                    'Flexibilité totale des contenus selon saisons'
                ]
            },
            {
                id: 'restaurant-immersif',
                label: 'Restaurant Immersif',
                title: 'Expérience Gastronomique Visuelle',
                description: 'Créez une ambiance unique et changez de décor selon le menu ou le service.',
                fullAnalysis: 'Les restaurants utilisent les murs LED pour immerger les clients dans des paysages grandioses ou des ambiances thématiques. Le contenu haute définition sublime l\'expérience culinaire et favorise le partage sur les réseaux sociaux.',
                color: '#FF6B35',
                icon: Utensils,
                image: '/BAR RESTAURANT IMMERSIF LED - BLOC RIGIDE - NEOFILM.jpg',
                stats: [
                    { label: 'Ambiance', value: 'Unique' },
                    { label: 'Ticket moyen', value: '+15%' },
                    { label: 'Instagram', value: 'Viral' }
                ],
                benefits: [
                    'Diners thématiques immersifs et mémorables',
                    'Carte et menus animés appétissants',
                    'Attractivité visuelle forte depuis la rue',
                    'Décor changeant instantanément sans travaux'
                ]
            },
            {
                id: 'fitness-gym',
                label: 'Salle de Sport',
                title: 'Motivation & Cours Virtuels',
                description: 'Dynamisez vos espaces d\'entraînement avec des murs LED motivants.',
                fullAnalysis: 'Les salles de sport premium installent des murs LED pour diffuser des cours collectifs virtuels, des paysages inspirants pour le cardio, ou des messages de motivation. L\'immersion visuelle booste la performance et fidélise les membres.',
                color: '#00D8FF',
                icon: Dumbbell,
                image: '/SALLE DE SPORT ECRAN INTERIEUR LED.jpg',
                stats: [
                    { label: 'Motivation', value: 'Max' },
                    { label: 'Fidélisation', value: '+20%' },
                    { label: 'Image', value: 'Premium' }
                ],
                benefits: [
                    'Cours virtuels immersifs grandeur nature',
                    'Paysages évasifs pour zones cardio',
                    'Branding fort et motivation visuelle',
                    'Informations club et planning en temps réel'
                ]
            },
            {
                id: 'coworking',
                label: 'Coworking Premium',
                title: 'Ambiance & Communication Moderne',
                description: 'Créez une atmosphère inspirante et communiquez efficacement avec vos membres.',
                fullAnalysis: 'Les espaces de coworking premium utilisent les murs LED pour créer des ambiances de travail stimulantes, afficher les événements communautaires, et valoriser les membres. Installation dans lobby ou espaces communs.',
                color: '#FF6B35',
                icon: Briefcase,
                image: '/Videowall_ws.jpg',
                stats: [
                    { label: 'Ambiance', value: 'Inspirante' },
                    { label: 'Communauté', value: '+35%' },
                    { label: 'Modernité', value: 'Premium' }
                ],
                benefits: [
                    'Ambiances de travail modulables selon moments',
                    'Communication événements et workshops en temps réel',
                    'Valorisation membres et success stories',
                    'Image moderne et tech attractive pour prospects'
                ]
            },
            {
                id: 'airport',
                label: 'Aéroport',
                title: 'Information & Publicité Haute Visibilité',
                description: 'Informez et captivez les voyageurs avec des écrans XXL haute définition.',
                fullAnalysis: 'Les aéroports installent des murs LED dans les zones d\'attente et de passage pour l\'information voyageurs, la publicité premium, et l\'animation des espaces. Format XXL adapté aux grandes distances de vision.',
                color: '#00D8FF',
                icon: Plane,
                image: '/HALL BUILDING - NEOFILM.jpg',
                stats: [
                    { label: 'Audience', value: 'Massive' },
                    { label: 'Visibilité', value: 'XXL' },
                    { label: 'Dwell time', value: 'Élevé' }
                ],
                benefits: [
                    'Information voyageurs claire et visible à distance',
                    'Monétisation publicitaire premium à fort CPM',
                    'Animation espaces d\'attente et réduction stress',
                    'Flexibilité contenus selon flux et événements'
                ]
            }
        ]
    },

    // ============================================
    // ÉCRAN FLEXIBLE LED
    // ============================================
    'ecran-flexible-led': {
        seoTitle: 'Créativité & : DESIGN ORGANIQUE',
        subtitle: 'Épousez toutes les formes architecturales pour une personnalisation sans limites.',
        badge: 'LIBERTÉ CRÉATIVE',
        cta: 'Nous contacter',
        sectors: [
            {
                id: 'flagship',
                label: 'Architecture Flagship',
                title: 'Intégration Design Iconique',
                description: 'Créez des installations LED qui deviennent des éléments architecturaux à part entière.',
                fullAnalysis: 'Les flagship stores de marques premium utilisent les écrans flexibles pour créer des installations architecturales uniques : colonnes LED, plafonds courbes, murs organiques. L\'écran devient élément de design intégré.',
                color: '#FFD700',
                icon: Building2,
                image: '/IMMERSIVE SPACE - NEOFILM LED - BLOC RIGIDE LED.jpg',
                stats: [
                    { label: 'Unicité', value: 'Totale' },
                    { label: 'Instagram', value: '+80%' },
                    { label: 'Mémorisation', value: '+65%' }
                ],
                benefits: [
                    'Intégration architecturale sur-mesure et unique',
                    'Installations courbes, cylindriques, organiques',
                    'Effet "wow" garanti et forte viralité sociale',
                    'Différenciation absolue vs concurrence'
                ]
            },
            {
                id: 'event-stand',
                label: 'Stand Événementiel',
                title: 'Signalétique Courbe & Impactante',
                description: 'Créez un stand unique avec des écrans LED flexibles qui attirent tous les regards.',
                fullAnalysis: 'Les stands événementiels doivent se démarquer. L\'écran flexible permet de créer des formes audacieuses (vagues, colonnes) pour une visibilité maximale et un effet "wow" garanti sur votre audience.',
                color: '#CB52EE',
                icon: Sparkles,
                image: '/stand evenement.jpg',
                stats: [
                    { label: 'Trafic', value: '+60%' },
                    { label: 'Impact', value: 'Fort' },
                    { label: 'Mémorisation', value: 'Max' }
                ],
                benefits: [
                    'Design sur-mesure et formes uniques',
                    'Visibilité maximale sur le salon',
                    'Installation rapide et modulaire',
                    'Contenu dynamique et immersif'
                ]
            },
            {
                id: 'design-retail',
                label: 'Design Retail',
                title: 'Mise en Scène Produits Créative',
                description: 'Sublimez vos produits avec des installations LED qui épousent vos concepts.',
                fullAnalysis: 'Les boutiques design utilisent les écrans flexibles pour créer des mises en scène produits uniques : présentoirs courbes, vitrines cylindriques, installations suspendues. L\'écran s\'adapte au concept créatif.',
                color: '#00D8FF',
                icon: Sparkles,
                image: '/NEOFILM - LED WALL - SHOP.jpg',
                stats: [
                    { label: 'Créativité', value: 'Illimitée' },
                    { label: 'Différenciation', value: 'Forte' },
                    { label: 'Conversion', value: '+35%' }
                ],
                benefits: [
                    'Liberté créative totale pour mise en scène',
                    'Installations sur-mesure adaptées au concept',
                    'Flexibilité contenus selon collections',
                    'Image innovante et avant-gardiste'
                ]
            },
            {
                id: 'train-station',
                label: 'Gare',
                title: 'Information Voyageurs & Publicité',
                description: 'Modernisez vos gares avec des écrans flexibles pour l\'information et la publicité.',
                fullAnalysis: 'Les gares sont des lieux de fort passage. Les écrans flexibles s\'adaptent à l\'architecture (colonnes, murs courbes) pour diffuser de l\'information voyageurs claire ou des publicités premium impactantes.',
                color: '#FF6B35',
                icon: Plane,
                image: '/gareledsouple.png',
                stats: [
                    { label: 'Audience', value: 'Massive' },
                    { label: 'Visibilité', value: '100%' },
                    { label: 'Revenus', value: '++' }
                ],
                benefits: [
                    'Information voyageurs en temps réel',
                    'Monétisation publicitaire premium',
                    'Adaptation à l\'architecture complexe',
                    'Durabilité et fiabilité 24/7'
                ]
            },
            {
                id: 'event-space',
                label: 'Espace Événementiel',
                title: 'Scénographie Modulable',
                description: 'Transformez vos espaces événementiels avec des installations LED adaptables.',
                fullAnalysis: 'Les espaces événementiels utilisent les écrans flexibles pour créer des scénographies modulables : scènes courbes, décors immersifs, installations suspendues. Adaptation rapide selon types d\'événements.',
                color: '#CB52EE',
                icon: Users,
                image: '/LED-Video-Walls_Restaurants_02e.jpg',
                stats: [
                    { label: 'Flexibilité', value: 'Totale' },
                    { label: 'Impact visuel', value: 'Maximal' },
                    { label: 'Polyvalence', value: 'Multi-événements' }
                ],
                benefits: [
                    'Scénographies modulables selon événements',
                    'Installations courbes et suspendues spectaculaires',
                    'Adaptation rapide aux besoins clients',
                    'Différenciation forte vs salles traditionnelles'
                ]
            }
        ]
    },



    // ============================================
    // KINETIC LED ROTATIF
    // ============================================
    'totem-led-rotatif': {
        seoTitle: 'Animation & : KINETIC 360°',
        subtitle: 'Créez des expériences visuelles 3D spectaculaires avec la technologie LED cinétique',
        badge: 'SCÉNARIO RÉEL',
        cta: 'Nous contacter',
        sectors: [
            {
                id: 'flagship-retail',
                label: 'Flagship Retail',
                title: 'Installation Iconique & Virale',
                description: 'Créez une installation LED cinétique qui devient la signature visuelle de votre flagship.',
                fullAnalysis: 'Les flagship stores de marques premium utilisent le Kinetic LED pour créer des installations spectaculaires : sculptures lumineuses 3D, animations de marque immersives, expériences visuelles mémorables. L\'effet cinétique attire l\'œil et génère une forte viralité sociale.',
                color: '#FFD700',
                icon: Sparkles,
                image: '/Pop up store - totem led 360° - NEOFILM LED.png',
                stats: [
                    { label: 'Effet "wow"', value: 'Garanti' },
                    { label: 'Partages sociaux', value: '+120%' },
                    { label: 'Temps visite', value: '+55%' }
                ],
                benefits: [
                    'Installation iconique devenant signature du lieu',
                    'Effet 3D spectaculaire et hypnotisant',
                    'Viralité sociale et couverture médiatique forte',
                    'Différenciation absolue vs concurrence'
                ]
            },
            {
                id: 'innovation-showroom',
                label: 'Showroom Innovation',
                title: 'Démonstration Technologique Immersive',
                description: 'Démontrez votre expertise technologique avec une installation LED cinétique avant-gardiste.',
                fullAnalysis: 'Les showrooms tech et innovation utilisent le Kinetic LED pour démontrer leur maîtrise technologique : visualisations de données 3D, démonstrations produits immersives, expériences interactives. L\'installation devient preuve de l\'innovation de la marque.',
                color: '#00D8FF',
                icon: Zap,
                image: '/Conférence professionnelle avec colonnes numériques - Totem kinetic 360° - NEOFILM LED.png',
                stats: [
                    { label: 'Innovation perçue', value: '+90%' },
                    { label: 'Engagement', value: '+75%' },
                    { label: 'Mémorisation', value: '+80%' }
                ],
                benefits: [
                    'Démonstration concrète de l\'expertise tech',
                    'Visualisations de données spectaculaires en 3D',
                    'Expérience visiteur immersive et mémorable',
                    'Image de marque innovante et avant-gardiste'
                ]
            },
            {
                id: 'tech-museum',
                label: 'Musée Tech',
                title: 'Installation Artistique Interactive',
                description: 'Enrichissez vos expositions with une installation LED cinétique interactive.',
                fullAnalysis: 'Les musées de sciences et technologies utilisent le Kinetic LED pour créer des installations interactives : visualisations scientifiques, œuvres d\'art numérique, expériences pédagogiques. L\'aspect cinétique renforce l\'engagement et la compréhension.',
                color: '#CB52EE',
                icon: Palette,
                image: '/TOTEM ROTATIF 360° - KINETIC LED - SALON EVENT 6 NEOFILM LED.png',
                stats: [
                    { label: 'Engagement', value: '+85%' },
                    { label: 'Temps exposition', value: '+60%' },
                    { label: 'Pédagogie', value: 'Renforcée' }
                ],
                benefits: [
                    'Pédagogie renforcée par visualisations 3D',
                    'Engagement visiteurs maximisé par effet cinétique',
                    'Installation artistique et scientifique unique',
                    'Expérience mémorable favorisant le bouche-à-oreille'
                ]
            },
            {
                id: 'event-space-kinetic',
                label: 'Espace Événementiel',
                title: 'Scénographie Spectaculaire',
                description: 'Transformez vos événements avec une installation LED cinétique centrale.',
                fullAnalysis: 'Les espaces événementiels premium utilisent le Kinetic LED comme élément central de scénographie : lancements produits, galas, conventions. L\'installation crée un point focal spectaculaire et mémorable.',
                color: '#FF6B35',
                icon: Users,
                image: '/TOTEM ROTATIF 360° - KINETIC LED - SALON EVENT 6 NEOFILM LED.png',
                stats: [
                    { label: 'Impact visuel', value: 'Maximal' },
                    { label: 'Mémorisation', value: '+70%' },
                    { label: 'Satisfaction', value: '+65%' }
                ],
                benefits: [
                    'Point focal spectaculaire pour événements premium',
                    'Scénographies dynamiques adaptées aux moments',
                    'Effet "wow" garanti sur les participants',
                    'Différenciation forte vs événements traditionnels'
                ]
            },
            {
                id: 'artistic-installation',
                label: 'Installation Artistique',
                title: 'Œuvre Numérique Immersive',
                description: 'Créez des œuvres d\'art numérique spectaculaires avec la technologie LED cinétique.',
                fullAnalysis: 'Les artistes et galeries utilisent le Kinetic LED pour créer des œuvres d\'art numérique immersives : sculptures lumineuses, installations interactives, performances visuelles. La technologie devient médium artistique.',
                color: '#CB52EE',
                icon: Sparkles,
                image: '/Hotel - totem rotatif 360° LED - neofilm.png',
                stats: [
                    { label: 'Unicité', value: 'Totale' },
                    { label: 'Engagement', value: '+95%' },
                    { label: 'Viralité', value: 'Forte' }
                ],
                benefits: [
                    'Création d\'œuvres numériques uniques et spectaculaires',
                    'Interactivité et immersion maximales',
                    'Viralité sociale et couverture médiatique',
                    'Renouvellement artistique et innovation'
                ]
            }
        ]
    },

    // ============================================
    // STAND LED ROULANT
    // ============================================
    'stand-led-roulant': {
        seoTitle: 'Flexibilité & : COMMERCE CONNECTÉ',
        subtitle: 'Déplacez votre point de vente au gré des flux clients pour une visibilité maximale.',
        badge: 'MOBILITÉ STRATÉGIQUE',
        cta: 'Nous contacter',
        sectors: [
            {
                id: 'popup-mobile',
                label: 'Pop-up Store',
                title: 'Point de Vente Mobile Impactant',
                description: 'Créez un point de vente éphémère ultra-visible avec un stand LED mobile.',
                fullAnalysis: 'Les marques utilisent le stand LED roulant pour leurs pop-up stores : lancements produits, opérations spéciales, tests de marché. Mobilité totale permettant rotations rapides entre sites à fort trafic.',
                color: '#00D8FF',
                icon: Store,
                image: '/POP UP STORE STAND LED ROULETTE.png',
                stats: [
                    { label: 'Visibilité', value: '+95%' },
                    { label: 'Trafic', value: '+70%' },
                    { label: 'Mobilité', value: 'Totale' }
                ],
                benefits: [
                    'Installation ultra-rapide for activations éphémères',
                    'Mobilité totale entre sites à fort trafic',
                    'Visibilité maximale grâce au format vertical',
                    'Contenus dynamiques adaptés selon lieux'
                ]
            },
            {
                id: 'mall-promo',
                label: 'Centre Commercial',
                title: 'Promotion Mobile & Flexible',
                description: 'Animez vos espaces commerciaux with un stand LED mobile et impactant.',
                fullAnalysis: 'Les centres commerciaux utilisent le stand LED roulant pour les promotions temporaires : événements saisonniers, partenariats marques, animations. Rotation entre zones selon flux et événements.',
                color: '#FFD700',
                icon: ShoppingBag,
                image: '/STAND- COMPTOIR LED ROULETTE - PORTABLE - CENTRE COMMERCIAL - NEOFILM.png',
                stats: [
                    { label: 'Flexibilité', value: 'Multi-zones' },
                    { label: 'Engagement', value: '+60%' },
                    { label: 'ROI', value: 'Optimisé' }
                ],
                benefits: [
                    'Rotation flexible entre zones selon flux',
                    'Promotions en temps réel et ciblées',
                    'Alternative moderne aux PLV traditionnelles',
                    'Monétisation possible via partenariats marques'
                ]
            },
            {
                id: 'expo-salon',
                label: 'Salon & Expo',
                title: 'Signalétique Dynamique Mobile',
                description: 'Guidez et informez les visiteurs avec une signalétique LED mobile.',
                fullAnalysis: 'Les organisateurs de salons utilisent le stand LED roulant for la signalétique dynamique : orientation visiteurs, programme événements, sponsors. Repositionnement facile selon besoins.',
                color: '#CB52EE',
                icon: Briefcase,
                image: '/SALON- EXPO - STAND ROULETTES LED - NEOFILM.png',
                stats: [
                    { label: 'Orientation', value: '+80%' },
                    { label: 'Information', value: 'Temps réel' },
                    { label: 'Flexibilité', value: 'Totale' }
                ],
                benefits: [
                    'Signalétique dynamique repositionnable à volonté',
                    'Information événements en temps réel',
                    'Valorisation sponsors et partenaires',
                    'Réutilisation pour événements futurs'
                ]
            },
            {
                id: 'field-activation',
                label: 'Bar / Boîte de nuit',
                title: 'Ambiance & Offres Dynamiques',
                description: 'Illuminez vos soirées with un affichage mobile pour menus, artistes et VIP.',
                fullAnalysis: 'Dans le monde de la nuit, l\'impact visuel crée l\'expérience. Le Stand LED Roulant permet d\'afficher les tarifs, les DJ sets ou les partenaires with une luminosité éclatante qui perce l\'obscurité. Déplaçable instantanément pour gérer les flux ou créer des zones VIP exclusives.',
                color: '#FF6B35',
                icon: Zap,
                image: '/BAR STAND- COMPTOIR LED PORTABLE NEOFILM.png',
                stats: [
                    { label: 'Ventes Bar', value: '+40%' },
                    { label: 'Ambiance', value: 'Unique' },
                    { label: 'Visibilité', value: '100%' }
                ],
                benefits: [
                    'Mise en avant des offres en temps réel',
                    'Création d\'ambiance lumineuse immersive',
                    'Visibilité maximale même dans le noir',
                    'Support ultra-résistant et mobile'
                ]
            },
            {
                id: 'dynamic-signage',
                label: 'Hall d\'accueil',
                title: 'Accueil Premium & Digital',
                description: 'Modernisez votre accueil with un support dynamique pour informer et orienter.',
                fullAnalysis: 'Le premier contact est décisif. Le Stand LED Roulant transforme votre hall en espace connecté, diffusant messages de bienvenue, plan du bâtiment ou informations corporate. Son design élégant s\'intègre parfaitement aux environnements les plus prestigieux.',
                color: '#00D8FF',
                icon: Building2,
                image: '/HALL D\'ACCUEIL STAND - COMPTOIR LED.png',
                stats: [
                    { label: 'Image', value: 'Premium' },
                    { label: 'Satisfaction', value: '+90%' },
                    { label: 'Orientation', value: 'Facile' }
                ],
                benefits: [
                    'Image de marque moderne et innovante',
                    'Information visiteurs en temps réel',
                    'Orientation et wayfinding simplifié',
                    'Contenu modifiable à distance'
                ]
            }
        ]
    },

    // ============================================
    // NEOFILM ADHESIF (existing, enhanced)
    // ============================================
    'neofilm-adhesif': {
        seoTitle: 'Transparence & : VITRINE DYNAMIQUE',
        subtitle: 'Digitalisez vos surfaces vitrées tout en préservant 85% de transparence.',
        badge: 'INNOVATION INVISIBLE',
        cta: 'Nous contacter',
        sectors: [
            {
                id: 'hospitality',
                label: 'Façades & Vitrines',
                title: 'Façades Vitrées Dynamiques',
                description: 'Transformez vos façades et vitrines vitrées en écrans LED géants. Le NEOFILM Adhésif sublime vos espaces with une transparence exceptionnelle.',
                fullAnalysis: 'La communication corporate doit être flexible et inspirante. Le NEOFILM Adhésif permet d\'afficher l\'identité de marque ou des informations en temps réel with une qualité d\'image exceptionnelle.',
                color: '#CB52EE',
                icon: Building2,
                image: '/facade.jpg',
                images: [
                    '/facade.jpg',
                    '/NEOFILM led - Vitrine dynamique transparente.jpg',
                    '/transparent-led-screen -NEOFILM LED.jpg',
                    '/Façade led transparent vidéo exterieur.png'
                ],
                stats: [
                    { label: 'Satisfaction', value: '+++' },
                    { label: 'Ambiance', value: 'Unique' },
                    { label: 'Souvenir', value: 'Fort' }
                ],
                benefits: [
                    'Support de communication innovant',
                    'Effet "Whaou" garanti sur les visiteurs',
                    'Adaptabilité aux différents contenus',
                    'Installation rapide et esthétique'
                ]
            },
            {
                id: 'retail',
                label: 'Espace Commercial',
                title: 'Vitrines Vivantes & Attraction Flux',
                description: 'Remplacez vos vitrophanies par un affichage dynamique géré à distance. Plus de collage/décollage, changez de campagne en un clic.',
                fullAnalysis: 'Fini les coûts et délais liés aux vitrophanies papier qu\'il faut coller et décoller à chaque opération. Le film LED transparent permet une gestion centralisée à distance et la multiplication des annonceurs de manière instantanée sur une même surface, maximisant ainsi la rentabilité et la réactivité de vos espaces commerciaux.',
                color: '#00D8FF',
                icon: Store,
                image: '/escalator.png',
                stats: [
                    { label: 'Visibilité', value: '+40%' },
                    { label: 'Engagement', value: '+25%' },
                    { label: 'Transparence', value: '85%' }
                ],
                benefits: [
                    'Suppression des coûts d\'impression et de pose',
                    'Multiplication des annonceurs en instantané',
                    'Gestion centralisée à distance',
                    'Visibilité produits préservée (85% transparence)'
                ]
            }
        ]
    },


    // ============================================
    // KAKEMONO LED PLIABLE
    // ============================================
    'kakemono-led-portable-pliable': {
        seoTitle: 'Impact & : SIGNALÉTIQUE MOBILE',
        subtitle: 'Déployez votre communication haute définition en 30 secondes, partout.',
        badge: 'AGILITÉ TERRAIN',
        cta: 'Nous contacter',
        sectors: [
            {
                id: 'trade-show',
                label: 'Salons & Expos',
                title: 'Stand Impactant & Visibilité',
                description: 'Démarquez-vous instantanément sur les salons professionnels.',
                fullAnalysis: 'Dans l\'univers hyper-concurrentiel des salons, capter l\'attention est vital. Le Kakemono LED remplace les roll-ups statiques par des vidéos dynamiques HD, attirant 5x plus de visiteurs sur votre stand.',
                color: '#00D8FF',
                icon: Briefcase,
                image: '/ECRAN LED PLIABE salon et expo NEOFILM.png',
                stats: [
                    { label: 'Trafic', value: '+500%' },
                    { label: 'Impact', value: 'Max' },
                    { label: 'Setup', value: '30sec' }
                ],
                benefits: [
                    'Montage 30s chrono',
                    'Visibilité à 20 mètres',
                    'Contenu vidéo dynamique',
                    'Transport valise inclus'
                ]
            },
            {
                id: 'popup',
                label: 'Showrooms & Pop-up',
                title: 'Boutique Éphémère Digitale',
                description: 'Créez une expérience client immersive dans n\'importe quel espace.',
                fullAnalysis: 'Pour les pop-up stores et showrooms, l\'agilité est clé. Le Kakemono LED permet de scénariser vos produits instantanément, diffusant des défilés, tutoriels ou ambiances de marque avec une qualité d\'image exceptionnelle.',
                color: '#CB52EE',
                icon: Store,
                image: '/ECRAN LED PLIABE showroom NEOFILM.png',
                stats: [
                    { label: 'Ventes', value: '+35%' },
                    { label: 'Image', value: 'Pro' },
                    { label: 'Surface', value: 'Minimale' }
                ],
                benefits: [
                    'Scénographie instantanée',
                    'Mise en avant produits',
                    'Encombrement minimal',
                    'Autonomie totale'
                ]
            },
            {
                id: 'corporate-event',
                label: 'Séminaires & Events',
                title: 'Conférences Dynamiques',
                description: 'Professionnalisez vos présentations et accueillez vos invités en grand.',
                fullAnalysis: 'Le Kakemono LED rehausse l\'image de vos événements corporate. Utilisé en signalétique d\'accueil, plan de salle ou relais vidéo sur scène, il assure une communication fluide et premium auprès de vos collaborateurs et VIP.',
                color: '#FF6B35',
                icon: Users,
                image: '/ECRAN LED PLIABE séminaire event NEOFILM.png',
                stats: [
                    { label: 'Accueil', value: 'Premium' },
                    { label: 'Attention', value: '100%' },
                    { label: 'Clarté', value: 'HD' }
                ],
                benefits: [
                    'Signalétique VIP',
                    'Relais vidéo conférence',
                    'Image de marque innovante',
                    'Installation sans technicien'
                ]
            },
            {
                id: 'hospitality',
                label: 'Hôtellerie & Loisirs',
                title: 'Accueil & Services Premium',
                description: 'Sublimez votre lobby et informez vos clients en temps réel.',
                fullAnalysis: 'L\'hôtellerie de luxe adopte le Kakemono LED pour digitaliser l\'accueil sans travaux. Idéal pour présenter le menu du restaurant, les soins du spa ou guider les séminaires, il apporte une touche technologique haut de gamme.',
                color: '#FFD700',
                icon: Hotel,
                image: '/ECRAN LED PLIABE HOTEL 6 NEOFILM.png',
                stats: [
                    { label: 'Attention', value: 'Max' },
                    { label: 'Image', value: 'Premium' },
                    { label: 'Ventes', value: '+20%' }
                ],
                benefits: [
                    'Design élégant (Cadre Alu)',
                    'Mise à jour instantanée (Wifi)',
                    'Mobile (Roulettes)',
                    'Silencieux (Fanless)'
                ]
            }
        ]
    }
};
