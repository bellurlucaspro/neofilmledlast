// Product data structure for LED display solutions

export type ProductCategory = 'transparent' | 'dynamisation' | 'portable';

export interface Product {
    id: string;
    slug: string;
    oldSlug?: string; // For 301 redirects
    categorySeoSlug: string; // Optimized category slug (e.g., 'film-led-transparent')
    category: ProductCategory;
    categoryName: string;
    name: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    gallery?: string[];
    features: string[];
    specs: {
        label: string;
        value: string;
    }[];
    applications: string[];
    price?: string;
    video?: string;
    color: string;
    seo: {
        title: string;
        description: string;
        keywords: string;
    };
    variants?: {
        name: string;
        pitch: string;
        density: string;
        ledType: string;
        moduleSize: string;
        resolution: string;
        transparency: string;
        brightness: string;
        scan: string;
        viewDistance: string;
        description?: string;
    }[];
    detailedSpecs?: {
        material: string;
        maxPower: string;
        avgPower: string;
        voltage: string;
        lifespan: string;
        thickness?: string;
        resolution?: string; // For print layout
        brightness?: string; // For print layout
    };
    faqs?: {
        question: string;
        answer: string;
    }[];
}

export interface CategoryInfo {
    id: ProductCategory;
    slug: string; // Old slug (for backward compatibility)
    seoSlug: string; // New optimized SEO slug
    oldSlug: string; // For 301 redirects
    keyword: string; // Main SEO keyword
    name: string;
    title: string;
    description: string;
    image: string;
    color: string;
    features: string[];
    seo: {
        title: string;
        description: string;
        keywords: string;
    };
}

// Category definitions
export const categories: Record<ProductCategory, CategoryInfo> = {
    transparent: {
        id: 'transparent',
        slug: 'affichages-led-transparents',
        seoSlug: 'film-led-transparent',
        oldSlug: 'affichages-led-transparents',
        keyword: 'film led transparent',
        name: 'Affichages LED Transparents',
        title: 'Nos affichages LED transparents',
        description: 'Transformez n\'importe quelle surface vitrée en un puissant mur vidéo sans obstruer la vue. Nos solutions (films adhésifs et rideaux LED) conservent une transparence optimale pour laisser entrer la lumière et attirer les regards, tout en sublimant votre façade.',
        image: '/filmbg.jpg',
        color: '#CB52EE',
        features: [
            'Films adhésifs & Rideaux LED',
            'Transformation de vitrine en écran',
            'Transparence & Luminosité préservées',
            'Visibilité Intérieur/Extérieur'
        ],
        seo: {
            title: 'Affichage LED Transparent Vitrine | Film & Rideau LED Invisible - NEOFÍLM',
            description: 'Transformez vos vitrines en écrans géants sans perdre la transparence. Découvrez nos films LED adhésifs et rideaux LED invisibles. La solution N°1 pour le retail de luxe et les showrooms.',
            keywords: 'affichage led transparent, film led vitrine, écran invisible, rideau led transparent, vitrine connectée, publicité vitrine magasin, écran adhésif transparent, neofilm transparent'
        }
    },
    dynamisation: {
        id: 'dynamisation',
        slug: 'affichages-led-dynamisation',
        seoSlug: 'mur-led-interieur',
        oldSlug: 'affichages-led-dynamisation',
        keyword: 'mur led intérieur',
        name: 'Affichages LED de Dynamisation',
        title: 'Nos affichages LED de dynamisation d\'espace intérieur',
        description: 'Remplacez vos affichages statiques par une communication visuelle instantanée et pilotable à distance. Grâce à nos blocs muraux, écrans flexibles et rideaux transparents, gérez l\'ambiance de tout votre réseau de boutiques en un clic.',
        image: '/ctrcommerciauxneofilm.png',
        color: '#00D8FF',
        features: [
            'Gestion centralisée multisites',
            'Mise à jour instantanée des contenus',
            'Murs LED & Écrans Flexibles',
            'Modernisation du parcours client'
        ],
        seo: {
            title: 'Mur LED Intérieur & Écran Souple | Solutions Affichage Dynamique - NEOFÍLM',
            description: 'Dynamisez vos espaces intérieurs avec nos Murs LED Haute Définition et Écrans Flexibles 360°. Solutions d\'affichage digital pour centres commerciaux, boutiques et halls d\'entreprise.',
            keywords: 'mur led intérieur, écran led flexible, affichage dynamique magasin, colonne led, écran led courbe, digital signage paris, mur d\'images led, neofilm dynamique'
        }
    },
    portable: {
        id: 'portable',
        slug: 'affichages-led-portables',
        seoSlug: 'ecran-led-portable',
        oldSlug: 'affichages-led-portables',
        keyword: 'écran led portable',
        name: 'Affichages LED Portables',
        title: 'Nos affichages LED portables',
        description: 'Marquez les esprits lors de vos salons et événements avec des solutions mobiles ultra-impactantes. Kakémonos dépliables, totems rotatifs 360° ou stands roulants : déployez une signalétique vidéo captivante en quelques minutes.',
        image: '/transpaimg.png',
        color: '#F35AFF',
        features: [
            'Idéal pour Salons & Événements',
            'Kakémonos & Totems Rotatifs 360°',
            'Installation rapide & Mobile',
            'Effet \'Whaou\' garanti'
        ],
        seo: {
            title: 'Affichage LED Portable & Mobile | Totem, Kakémono & Stand - NEOFÍLM',
            description: 'Solutions LED nomades pour salons et événements. Totems rotatifs 360°, Kakémonos pliables et Stands LED roulants. Installation en 5 minutes. Soyez vu partout.',
            keywords: 'kakemono led, totem led rotatif, écran led portable, stand led salon, affichage mobile événementiel, roll-up digital, neofilm portable, plv dynamique'
        }
    }
};

// Product database
export const products: Product[] = [
    // TRANSPARENT CATEGORY
    {
        id: 'neofilm-adhesif',
        slug: 'neofilm-adhesif',
        categorySeoSlug: 'film-led-transparent',
        category: 'transparent',
        categoryName: 'Affichages LED Transparents',
        name: 'NEOFILM Adhésif',
        shortDescription: 'Film LED transparent adhésif pour vitrine - Transformez vos vitrages en écrans vidéo',
        fullDescription: 'Le NEOFILM Adhésif est notre solution phare pour transformer n\'importe quelle surface vitrée en un écran LED haute définition. Avec une transparence de 85%, il permet de conserver la visibilité sur vos produits tout en diffusant du contenu vidéo dynamique. Installation rapide par adhésion directe sur le vitrage existant.',
        image: '/film transparents adhésif led - NEOFILM.jpg',
        video: 'https://www.youtube.com/embed/CdHGDjHZVJc?autoplay=1&rel=0&modestbranding=1',
        gallery: ['/film transparents adhésif led - NEOFILM.jpg', '/film transparent led adhésif - neofilm led (produit).avif'],
        features: [
            'Transparence exceptionnelle de 85%',
            'Pose adhésive sur vitrage existant',
            'Visibilité optimale jour et nuit',
            'Solution quasi-invisible éteinte',
            'Installation rapide et propre',
            'Luminosité intelligente auto-adaptative'
        ],
        specs: [
            { label: 'Transparence', value: '92 %' },
            { label: 'Densité Pixels', value: '25 600 px/m²' },
            { label: 'Luminosité', value: '5500 nits' },
            { label: 'Angle Vision', value: '160°' },
            { label: 'Rafraîchissement', value: '≥ 3840 Hz' },
            { label: 'Poids', value: '~ 2kg/m² (Ultra Léger)' },
        ],
        detailedSpecs: {
            material: 'PET + Puces IC haute température',
            maxPower: '800 W/m²',
            avgPower: '300 W/m²',
            voltage: '110-240V AC',
            lifespan: '100 000 Heures',
            thickness: '1.2mm',
            resolution: '4K ULTRA HD',
            brightness: '5500 Nits'
        },

        applications: [
            'Vitrines de magasins',
            'Showrooms automobiles',
            'Agences bancaires',
            'Centres commerciaux',
            'Hôtels et restaurants'
        ],
        color: '#CB52EE',
        seo: {
            title: 'NEOFÍLM Adhésif - Le Film LED Transparent N°1 pour Vitrine | Haute Transparence',
            description: 'Révolutionnez votre vitrine avec le Film LED Adhésif NEOFÍLM. 85% de transparence, installation directe sur verre, invisible éteint. Devis gratuit pour votre projet d\'affichage innovant.',
            keywords: 'film led transparent, neofilm adhésif, écran vitrine transparent, led sur verre, affichage dynamique vitrine, écran publicitaire transparent, technologie led invisible'
        },
        faqs: [
            {
                question: "Comment s'installe le NEOFILM Adhésif ?",
                answer: "L'installation est simple : le film est autocollant et s'applique directement sur la face intérieure de vos vitres existantes. Aucun perçage ni structure lourde n'est requis."
            },
            {
                question: "Le film est-il visible de l'extérieur lorsqu'il est éteint ?",
                answer: "Non, avec sa transparence de 85%, le film est pratiquement invisible lorsqu'il n'est pas utilisé, préservant l'esthétique de votre vitrine."
            },
            {
                question: "Quelle est la durée de vie du produit ?",
                answer: "La durée de vie est estimée à 100 000 heures, soit plus de 10 ans en utilisation standard."
            },
            {
                question: "Peut-on le poser sur des surfaces courbes ?",
                answer: "Oui, la flexibilité du matériau PET permet une application sur des vitrages légèrement courbes, offrant ainsi une grande liberté de design."
            }
        ]
    },
    {
        id: 'rideau-led-transparent',
        slug: 'rideau-led-transparent',
        categorySeoSlug: 'film-led-transparent',
        category: 'transparent',
        categoryName: 'Affichages LED Transparents',
        name: 'Rideau LED Transparent',
        shortDescription: 'Mur rideau LED modulaire en maille aluminium - Idéal pour façades et grands volumes',
        fullDescription: 'Une révolution structurelle. Contrairement aux films, le Rideau LED repose sur une technologie "Media Mesh" : des LEDs SMD montées sur une structure en maille d\'aluminium ultra-légère et robuste. Démontable, réparable et modulaire (panneaux 1000x500mm), il permet de créer des écrans géants, des formes courbes ou des angles à 90°, tout en conservant une transparence de 70-80%. Parfait pour les vitrines exposées au soleil grâce à sa haute luminosité.',
        image: '/rideau-led-hero-card.png',
        video: 'https://www.youtube.com/embed/H5NsIRwc-Ds?autoplay=1&rel=0&modestbranding=1',
        gallery: ['/rideau-led-hero-card.png', '/vitrine-rideau-led-enhanced.png'],
        features: [
            'Structure Aluminium Démontable',
            'Architecture Modulaire',
            'Transparence Optimale 80%',
            'Luminosité Haute-Fidélité',
            'Résistance Sans Verre',
            'Finesse Ultra-Fine 10mm'
        ],
        specs: [
            { label: 'Transparence', value: '70% - 80%' },
            { label: 'Luminosité', value: '4500 - 6000 nits' },
            { label: 'Structure', value: 'Aluminium Mesh' },
            { label: 'Module', value: '1000 x 500 mm' },
            { label: 'Poids', value: '7.5 kg/m²' },
            { label: 'Maintenance', value: 'Avant / Arrière' }
        ],
        variants: [
            {
                name: 'P2.6-5.2',
                pitch: '2.6-5.2 mm',
                density: '73 964 points/m²',
                ledType: 'SMD1921',
                moduleSize: '1000 x 500 mm',
                resolution: '384 x 96 points',
                transparency: '60%',
                brightness: '4500 nits',
                scan: '1/32 Scan',
                viewDistance: '2.5 à 50 m'
            },
            {
                name: 'P3.9-7.8',
                pitch: '3.9-7.8 mm',
                density: '32 873 points/m²',
                ledType: 'SMD1921',
                moduleSize: '1000 x 500 mm',
                resolution: '256 x 64 points',
                transparency: '75%',
                brightness: '5000 nits',
                scan: '1/28 Scan',
                viewDistance: '4-80 m'
            },
            {
                name: 'P7.8-7.8',
                pitch: '7.8-7.8 mm',
                density: '16 436 points/m²',
                ledType: 'SMD3535',
                moduleSize: '1000 x 500 mm',
                resolution: '128 x 32 points',
                transparency: '80%',
                brightness: '6000 nits',
                scan: '1/16 Scan',
                viewDistance: '8-80 m'
            }
        ],
        detailedSpecs: {
            material: 'Aluminium aviation 6063',
            maxPower: '400 W/m²',
            avgPower: '180 W/m² (Éco-énergie)',
            voltage: 'CA 110 V/220 V ± 10 %',
            lifespan: '100 000 heures',
            thickness: '10mm'
        },
        applications: [
            'Showrooms Automobiles (Jaguar, Rolls Royce)',
            'Façades Media Mesh & Bâtiments',
            'Ascenseurs Panoramiques & Garde-corps',
            'Centres Commerciaux & Atriums',
            'Scénographie Événementielle'
        ],
        color: '#CB52EE',
        seo: {
            title: 'Rideau LED Transparent - Mur Média Mesh pour Façade & Showroom | NEOFÍLM',
            description: 'Rideau LED modulaire transparent haute luminosité. Structure légère, transparence 80%, idéal pour façades d\'immeubles et grands showrooms. La solution Media Mesh par excellence.',
            keywords: 'rideau led transparent, media mesh, façade led, écran led géant transparent, mur led vitrine, affichage led architectural, écran maillé led'
        }
    },

    // DYNAMISATION CATEGORY
    {
        id: 'mur-led-indoor',
        slug: 'mur-led-indoor',
        categorySeoSlug: 'mur-led-interieur',
        category: 'dynamisation',
        categoryName: 'Affichages LED de Dynamisation',
        name: 'Mur LED Indoor (Série Pro)',
        shortDescription: 'Solution mur vidéo haute fidélité - Cabinets modulaires 500x500 / 500x1000',
        fullDescription: 'Le Mur LED Indoor de la Série Pro est le standard de l\'affichage digital pour les environnements intérieurs exigeants. Conçu autour de cabinets en aluminium moulé sous pression ultra-légers (7,5kg), il permet une configuration modulaire infinie. Équipé de pixels SMD1515 haute performance et d\'un taux de rafraîchissement atteignant 7680Hz, il garantit une image fluide et stable, même lors de captations vidéo. Sa gestion thermique optimisée et sa faible consommation électrique en font une solution durable et rentable pour le retail, les studios TV et les centres de congrès.',
        image: '/mur-led-pro-hero.png',
        video: 'https://www.youtube.com/embed/NGTnsKL0STs?autoplay=1&rel=0&modestbranding=1',
        features: [
            'Cabinets ultra-légers en aluminium (7.5kg)',
            'Technologie SMD1515 Gold-Wire de haute stabilité',
            'Taux de rafraîchissement extrême jusqu\'à 7680 Hz',
            'Double format de cabinet : 500x500 / 500x1000 mm',
            'Contraste dynamique ≥4000:1 pour des noirs profonds',
            'Angle de vision extra-large 140°/140°',
            'Consommation éco-responsable (50-80 W/moyenne)',
            'Degré de protection IP6X (Anti-poussière)'
        ],
        specs: [
            { label: 'Rafraîchissement', value: '3840 Hz - 7680 Hz' },
            { label: 'Luminosité', value: '500 - 3500+ cd/m²' },
            { label: 'Pixel Config', value: 'SMD1515' },
            { label: 'Scan Mode', value: '1/32 ou 1/64' },
            { label: 'Contraste', value: '4000:1' },
            { label: 'Temp Couleur', value: '6500K - 8500K' },
            { label: 'Poids Cabinet', value: '7.5 kg (500x500)' },
            { label: 'Protection', value: 'IP6X' }
        ],
        detailedSpecs: {
            material: 'Aluminium moulé sous pression',
            maxPower: '120 W/pièce (Peak)',
            avgPower: '50-80 W/pièce (Consommation réelle)',
            voltage: 'CA 110V ~ 220V (50/60Hz)',
            lifespan: '100 000 heures',
            thickness: '65mm (Ultra-finesse)'
        },
        variants: [
            {
                name: 'Modèle P1.56',
                pitch: '1.56 mm',
                density: '409 600 pts/m²',
                ledType: 'SMD1515 Premium',
                moduleSize: '250 x 250 mm',
                resolution: '160 x 160 px',
                transparency: 'N/A',
                brightness: '800 nits',
                scan: '1/32 Scan',
                viewDistance: '1.5m+'
            },
            {
                name: 'Modèle P1.95',
                pitch: '1.95 mm',
                density: '262 144 pts/m²',
                ledType: 'SMD1515 Premium',
                moduleSize: '250 x 250 mm',
                resolution: '128 x 128 px',
                transparency: 'N/A',
                brightness: '800 nits',
                scan: '1/32 Scan',
                viewDistance: '2m+'
            },
            {
                name: 'Modèle P2.9',
                pitch: '2.97 mm',
                density: '112 896 pts/m²',
                ledType: 'SMD1515 High-Refresh',
                moduleSize: '250 x 250 mm',
                resolution: '84 x 84 px',
                transparency: 'N/A',
                brightness: '1000 nits',
                scan: '1/28 Scan',
                viewDistance: '3m+'
            },
            {
                name: 'Modèle P3.9',
                pitch: '3.91 mm',
                density: '65 536 pts/m²',
                ledType: 'SMD1515 Balanced',
                moduleSize: '250 x 250 mm',
                resolution: '64 x 64 px',
                transparency: 'N/A',
                brightness: '1200 nits',
                scan: '1/16 Scan',
                viewDistance: '4m+'
            },
            {
                name: 'Modèle P4.8',
                pitch: '4.81 mm',
                density: '43 264 pts/m²',
                ledType: 'SMD1515 Value',
                moduleSize: '250 x 250 mm',
                resolution: '52 x 52 px',
                transparency: 'N/A',
                brightness: '1200 nits',
                scan: '1/13 Scan',
                viewDistance: '5m+'
            }
        ],
        applications: [
            'Studios TV & Plateaux de tournage',
            'Salles de contrôle & Centres opérationnels',
            'Retail de Luxe & Flagship Stores',
            'Salles de conférence & Auditoriums',
            'Lobbys de sièges sociaux',
            'Événementiel Indoor Haute Résolution'
        ],
        color: '#00D8FF',
        seo: {
            title: 'Mur LED Intérieur Pro - Écran Géant Haute Résolution (P1.5 - P4.8) | NEOFÍLM',
            description: 'Le standard du Mur LED Intérieur. Qualité d\'image 4K/8K, rafraîchissement 7680Hz. Pour studios TV, salles de conférence et retail de luxe. Installation fixe ou locative.',
            keywords: 'mur led intérieur, écran led pitch fin, mur d\'images hd, écran led studio tv, mur vidéo modulaire, affichage led magasin luxe, cabinet led 500x500'
        },
        faqs: [
            {
                question: "Quel pitch choisir pour mon mur LED intérieur ?",
                answer: "Le choix du pitch dépend de la distance de recul : plus le public est proche, plus le pitch doit être fin (P1.5 à P1.9 pour moins de 2m, P2.9 à P3.9 pour 3-5m)."
            },
            {
                question: "Le mur LED est-il bruyant ?",
                answer: "Non, nos systèmes utilisent une dissipation thermique passive sans ventilateur pour les modèles intérieurs, garantissant un fonctionnement totalement silencieux."
            },
            {
                question: "Peut-on l'utiliser pour de la diffusion en direct ?",
                answer: "Absolument. Avec un taux de rafraîchissement élevé de 3840Hz ou 7680Hz, nos murs LED sont parfaitement adaptés à la captation vidéo et au direct sans scintillement."
            }
        ]
    },
    {
        id: 'ecran-flexible-led',
        slug: 'ecran-flexible-led',
        categorySeoSlug: 'mur-led-interieur',
        category: 'dynamisation',
        categoryName: 'Affichages LED de Dynamisation',
        name: 'Écran Flexible LED',
        shortDescription: 'Solution d\'affichage 360° - Courbure illimitée et gestion Cloud centralisée',
        fullDescription: 'L\'Écran Flexible LED (Bloc LED Souple) est la réponse aux défis architecturaux les plus complexes. Grâce à ses modules de 320x160mm ultra-flexibles, il épouse parfaitement les colonnes, les vagues et les surfaces concaves ou convexes. Équipé d\'un système de gestion de contenu basé sur le Cloud, il permet une diffusion 4K (3840×2160) avec un contraste saisissant de 4000:1. Sa conception robuste assure une durée de vie de 100 000 heures, le rendant idéal pour les installations permanentes en retail et aéroports.',
        image: '/flexible-led-hero.png',
        video: 'https://www.youtube.com/embed/BYl_ql2p_IE?autoplay=1&rel=0&modestbranding=1',
        features: [
            'Flexibilité totale 360° (Concave/Convexe/Cylindrique)',
            'Résolution 4K Ultra-Haute Définition (3840×2160)',
            'Gestion de contenu centralisée via Cloud CMS',
            'Taux de rafraîchissement élevé ≥3840 Hz',
            'Contraste dynamique ultra-profond 4000:1',
            'Support multi-format : 3D, SWF, Vidéo HD',
            'Installation polyvalente : Mural, Suspendu, Plafond, Sol',
            'Durée de vie industrielle de 100 000 heures'
        ],
        specs: [
            { label: 'Flexibilité', value: '360° Illimitée' },
            { label: 'Résolution', value: '4K Ready (3840×2160)' },
            { label: 'Luminosité', value: '500 cd/m² (Optimisé Intérieur)' },
            { label: 'Rafraîchissement', value: '3840 Hz' },
            { label: 'Contraste', value: '4000:1' },
            { label: 'Colorimétrie', value: 'RVB (Full Color)' },
            { label: 'Angle Vision', value: '110° / 110°' },
            { label: 'Gestion', value: 'Cloud CMS' }
        ],
        detailedSpecs: {
            material: 'PCB Flexible Haute Résistance',
            maxPower: '400 W/m²',
            avgPower: '150 W/m² (Basse consommation)',
            voltage: '100-240 Vca',
            lifespan: '100 000 heures',
            thickness: '9mm'
        },
        variants: [
            {
                name: 'Modèle P1.53',
                pitch: '1.53 mm',
                density: '422 753 pts/m²',
                ledType: 'SMD High-Density',
                moduleSize: '320 x 160 mm',
                resolution: 'High Definition',
                transparency: 'N/A',
                brightness: '500 nits',
                scan: 'Dynamique',
                viewDistance: '1.5m+'
            },
            {
                name: 'Modèle P2.0',
                pitch: '2 mm',
                density: '250 000 pts/m²',
                ledType: 'SMD Standard',
                moduleSize: '320 x 160 mm',
                resolution: '128 x 64 px',
                transparency: 'N/A',
                brightness: '500 nits',
                scan: 'Dynamique',
                viewDistance: '2m+'
            },
            {
                name: 'Modèle P2.5',
                pitch: '2.5 mm',
                density: '160 000 pts/m²',
                ledType: 'SMD Balanced',
                moduleSize: '320 x 160 mm',
                resolution: '128 x 64 px',
                transparency: 'N/A',
                brightness: '800 nits',
                scan: 'Dynamique',
                viewDistance: '2.5m+'
            }
        ],
        applications: [
            'Colonnes et Piliers Commerciaux',
            'Magasins de Détail & Boutiques de Luxe',
            'Halls d\'Exposition & Musées',
            'Aéroports, Métros & Terminaux',
            'Hôtels, Restaurants & Bars',
            'Signalétique Architecturale Unique'
        ],
        color: '#00D8FF',
        seo: {
            title: 'Écran LED Flexible & Courbe 360° - Colonnes & Architecture | NEOFÍLM',
            description: 'Libérez votre créativité avec nos Écrans LED Flexibles. Courbures concaves, convexes, cylindres. Résolution 4K pour une immersion totale en point de vente.',
            keywords: 'écran led flexible, dalle led souple, colonne led, affichage led courbe, écran 360 led, habillage poteau led, architecture digitale'
        }
    },

    // PORTABLE CATEGORY
    {
        id: 'kakemono-led-pliable',
        slug: 'kakemono-led-portable-pliable',
        oldSlug: 'kakemono-led-pliable',
        categorySeoSlug: 'ecran-led-portable',
        category: 'portable',
        categoryName: 'Affichages LED Portables',
        name: 'Kakemono LED Pliable',
        shortDescription: 'Déployez un écran LED HD de 2m² en moins de 30 secondes. Idéal pour vos salons et showrooms, ce roll-up digital nouvelle génération remplace vos kakemonos statiques. Transportable en flight-case et plug-and-play, il diffuse vos contenus vidéo avec une luminosité intense pour capter 100% du trafic visiteur.',
        fullDescription: 'Révolutionnez votre communication événementielle avec le Kakémono LED Pliable, la solution d\'affichage dynamique conçue pour les professionnels en mouvement. Alliant la finesse d\'un écran haute définition (FHD) à la praticité d\'un roll-up, ce support publicitaire lumineux offre une fluidité d\'image exceptionnelle (3840Hz) pour captiver votre audience instantanément. Conçu pour une installation sans outil en moins de 30 secondes, il garantit un impact visuel maximal dans les salons, showrooms et galeries marchandes, tout en restant remarquablement simple à transporter.',
        image: '/kakemono-led-hero.png',
        video: 'https://www.youtube.com/embed/4YXU3PJpYPA?autoplay=1&rel=0&modestbranding=1',
        features: [
            'Déploiement Éclair & Plug-and-Play (30 sec)',
            'Visibilité Exceptionnelle (1000 nits, 3840Hz)',
            'Mobilité Sans Compromis (Flight-case inclus)',
            'Résolution FHD (3840 x 1250 pixels)',
            'Intelligence Embarquée (RK3288 Quad-Core)',
            'Structure Premium en Aluminium moulé sous pression'
        ],
        specs: [
            { label: 'Résolution', value: '3840 * 1250P (FHD)' },
            { label: 'Luminosité', value: '1000 cd/m² (Intérieur HD)' },
            { label: 'Processeur', value: 'RK3288 Quad-Core' },
            { label: 'Mémoire', value: '2Go RAM / 8Go ROM' },
            { label: 'Rafraîchissement', value: '3840 Hz' },
            { label: 'Contraste', value: '2000:1' },
            { label: 'Angle Vision', value: '178° (89/89/89/89)' },
            { label: 'Durée de vie', value: '50 000 Heures' }
        ],
        detailedSpecs: {
            material: 'Aluminium moulé sous pression',
            maxPower: 'Variable selon taille',
            avgPower: 'Consommation Éco -30%',
            voltage: '100-240 Vca 50/60 Hz',
            lifespan: '50 000 heures'
        },
        variants: [
            {
                name: 'Modèle Portrait 1920',
                pitch: 'P1.8 / P1.9',
                density: '289 050 pts/m²',
                ledType: 'LCD/LED Hybrid',
                moduleSize: '1920 x 640 mm',
                resolution: 'High Definition',
                transparency: 'N/A',
                brightness: '1000 nits',
                scan: 'Dynamique',
                viewDistance: '1.5m+'
            },
            {
                name: 'Grand Format 2070',
                pitch: 'P2 / P2.5',
                density: '160 000 pts/m²',
                ledType: 'LCD/LED Hybrid',
                moduleSize: '1280 x 2070 mm',
                resolution: 'FHD Premium',
                transparency: 'N/A',
                brightness: '1000 nits',
                scan: 'Dynamique',
                viewDistance: '2m+'
            },
            {
                name: 'Série Événementielle',
                pitch: 'P3',
                density: '111 111 pts/m²',
                ledType: 'SMD High Impact',
                moduleSize: 'Sur-mesure',
                resolution: 'Optimisée Distance',
                transparency: 'N/A',
                brightness: '1200 nits',
                scan: '1/32 Scan',
                viewDistance: '3m+',
                description: 'Combinez plusieurs panneaux côte à côte pour créer un écran géant sans limite de largeur. Les deux types de panneaux pliables sont entièrement compatibles pour une synchronisation parfaite.'
            }
        ],
        applications: [
            'Salons Professionnels & Foires',
            'Retail & Points de Vente',
            'Événements d\'Entreprise',
            'Halls d\'Accueil & Hôtels',
            'Signalétique digitale interactive'
        ],
        color: '#F35AFF',
        seo: {
            title: 'Kakemono LED Pliable & Portable | Totem Vidéo pour Salons - NEOFÍLM',
            description: 'Louez ou achetez votre Kakemono LED Pliable. Un affichage LED portable unique : installation 30s, écran HD, flight-case inclus. Boostez votre visibilité sur salons et événements.',
            keywords: 'kakemono led pliable, affichage led portable, totem led pliable, écran led transportable, affichage led événementiel'
        },
        faqs: [
            {
                question: "Combien de temps faut-il pour installer le Kakémono LED ?",
                answer: "C'est ultra-rapide ! Il se déplie en moins de 30 secondes. Il suffit de le brancher et la lecture commence automatiquement."
            },
            {
                question: "Peut-on l'utiliser en extérieur ?",
                answer: "Ce modèle est conçu pour une utilisation intérieure (salons, centres commerciaux). Pour l'extérieur, nous proposons d'autres solutions avec une luminosité plus élevée et une protection IP65."
            },
            {
                question: "Est-il facile à transporter ?",
                answer: "Oui, il est livré avec un flight-case robuste à roulettes. Sa structure en aluminium léger facilite les déplacements fréquents lors de vos événements."
            }
        ]
    },
    {
        id: 'totem-led-rotatif',
        slug: 'totem-led-rotatif',
        categorySeoSlug: 'ecran-led-portable',
        category: 'portable',
        categoryName: 'Affichages LED Portables',
        name: 'Kinetic LED Rotatif',
        shortDescription: 'Totems 360° spectaculaires - Effet "Whaou" garanti pour vos événements',
        fullDescription: 'Le Kinetic LED Rotatif crée un effet visuel spectaculaire qui attire tous les regards. Avec sa rotation fluide et ses 4 faces LED, il offre une visibilité à 360°. Conception modulaire et évolutive permettant d\'empiler plusieurs unités pour des configurations créatives illimitées.',
        image: '/totem-pink.png',
        video: 'https://www.youtube.com/embed/QayPVumGUtI?autoplay=1&rel=0&modestbranding=1',
        gallery: ['/totem-pink.png', '/totem-blue.png'],
        features: [
            'Conception modulaire et évolutive : Unités empilables pour configurations illimitées.',
            'Intégration LED parfaite : Haute résolution et luminosité pour images époustouflantes.',
            'Contrôle de mouvement programmable : Synchro vidéo précise et prévisualisation temps réel.',
            'Maintenance simplifiée : Modules détachables (6 unités) pour réparation facile.',
            'Motorisation de précision : Moteur pas à pas silencieux et stable.',
            'Réglage intelligent : Accélération/décélération fluide personnalisable.'
        ],
        specs: [
            { label: 'Rotation', value: '360° Programmable' },
            { label: 'Faces', value: '4 écrans synchronisés' },
            { label: 'Luminosité', value: '500-1200 nits' },
            { label: 'Rafraîchissement', value: '3840Hz - 7680Hz' },
            { label: 'Angle de vision', value: '160°/160°' },
            { label: 'Garantie', value: '3 Ans' }
        ],
        detailedSpecs: {
            material: 'Structure Aluminium Modulaire',
            maxPower: 'Variable selon config',
            avgPower: '150 W/m²',
            voltage: '100-240 V CA',
            lifespan: '100 000 heures',
            thickness: 'Modulaire'
        },
        variants: [
            {
                name: 'P1.25',
                pitch: '1.25 mm',
                density: '640 000 points/m²',
                ledType: 'SMD1010',
                moduleSize: '320 x 160 mm',
                resolution: 'Cabinet 640x480mm',
                transparency: 'N/A',
                brightness: '500-1200 nits',
                scan: '1/64 Scan',
                viewDistance: '1m+'
            },
            {
                name: 'P1.53',
                pitch: '1.53 mm',
                density: '422 753 points/m²',
                ledType: 'SMD1212',
                moduleSize: '320 x 160 mm',
                resolution: 'Cabinet 640x480mm',
                transparency: 'N/A',
                brightness: '500-1200 nits',
                scan: '1/52 Scan',
                viewDistance: '1.5m+'
            },
            {
                name: 'P1.86',
                pitch: '1.86 mm',
                density: '289 050 points/m²',
                ledType: 'SMD1515',
                moduleSize: '320 x 160 mm',
                resolution: 'Cabinet 640x480mm',
                transparency: 'N/A',
                brightness: '500-1200 nits',
                scan: '1/43 Scan',
                viewDistance: '2m+'
            },
            {
                name: 'P2',
                pitch: '2 mm',
                density: '250 000 points/m²',
                ledType: 'SMD1515',
                moduleSize: '320 x 160 mm',
                resolution: 'Cabinet 640x480mm',
                transparency: 'N/A',
                brightness: '500-1200 nits',
                scan: '1/40 Scan',
                viewDistance: '2m+'
            }
        ],
        applications: [
            'Lancements de produits',
            'Événements premium',
            'Centres commerciaux',
            'Showrooms',
            'Expositions artistiques'
        ],
        color: '#F35AFF',
        seo: {
            title: 'Totem LED Rotatif 360° (Kinetic) - Animation Visuelle Unique | NEOFÍLM',
            description: 'Créez l\'événement avec le Totem LED Rotatif. 3 écrans rotatifs indépendants pour une chorégraphie visuelle à 360°. L\'effet Whaou garanti pour vos lancements produits.',
            keywords: 'totem led rotatif, écran led motorisé, kinetic led, affichage 360, sculpture digitale, totem vidéo dynamique, innovation événementielle'
        }
    },
    {
        id: 'stand-led-roulant',
        slug: 'stand-led-roulant',
        categorySeoSlug: 'ecran-led-portable',
        category: 'portable',
        categoryName: 'Affichages LED Portables',
        name: 'Stand LED Roulant',
        shortDescription: 'Comptoir LED Créatif & Modulaire - Formes Personnalisables',
        fullDescription: 'Le Stand LED Roulant révolutionne l\'agencement d\'espace avec sa conception modulaire aux formes irrégulières. Idéal pour les comptoirs d\'accueil, DJ booths, ou stands d\'exposition, il s\'adapte à votre architecture sans jointure visible. Économie d\'énergie de 30% et fiabilité 24/7 grâce à son système de secours intégré.',
        image: '/stand-led-hero.png',
        video: 'https://www.youtube.com/embed/u429oPNpJ5s?autoplay=1&rel=0&modestbranding=1',
        gallery: [
            '/stand-led-black.png',
            '/stand-led-dim-front.png',
            '/stand-led-dim-back.png',
            '/stand-led-certificats.png'
        ],
        features: [
            'Formes personnalisables : Modules irréguliers pour designs uniques (courbes, angles).',
            'Assemblage sans jointure : Planéité parfaite pour une immersion visuelle totale.',
            'Économies d\'énergie : Réduisez votre consommation de 30% (Alim 200W/h).',
            'Fiabilité 24/7 : Conception avec système de secours pour fonctionnement continu.',
            'Haute définition : Résolution jusqu\'à 8K et rafraîchissement 3840Hz.',
            'Contrôle Qualité : Processus rigoureux garantissant stabilité et performance.'
        ],
        specs: [
            { label: 'Résolution', value: 'FHD / 4K / 8K' },
            { label: 'Luminosité', value: '800-1200 nits' },
            { label: 'Rafraîchissement', value: '3840 Hz' },
            { label: 'Contraste', value: '5000:1' },
            { label: 'Angle de vision', value: '170°' },
            { label: 'Garantie', value: '2 Ans' }
        ],
        detailedSpecs: {
            material: 'Modules Irréguliers Custom',
            maxPower: 'Variable selon config',
            avgPower: '300 W/m²',
            voltage: '100-240 V CA',
            lifespan: '100 000 heures',
            thickness: 'Sur mesure (Cabinet)'
        },
        variants: [
            {
                name: 'P1.25',
                pitch: '1.25 mm',
                density: '640 000 points/m²',
                ledType: 'SMD',
                moduleSize: '320 x 160 mm',
                resolution: 'Custom',
                transparency: 'N/A',
                brightness: '300-800 nits',
                scan: '1/64 Scan',
                viewDistance: '1m+'
            },
            {
                name: 'P1.56',
                pitch: '1.56 mm',
                density: '410 913 points/m²',
                ledType: 'SMD',
                moduleSize: '200 x 150 mm',
                resolution: 'Custom',
                transparency: 'N/A',
                brightness: '300-800 nits',
                scan: '1/52 Scan',
                viewDistance: '1.5m+'
            },
            {
                name: 'P1.667',
                pitch: '1.667 mm',
                density: '359 856 points/m²',
                ledType: 'SMD',
                moduleSize: '200 x 150 mm',
                resolution: 'Custom',
                transparency: 'N/A',
                brightness: '300-800 nits',
                scan: '1/45 Scan',
                viewDistance: '1.6m+'
            },
            {
                name: 'P1.86',
                pitch: '1.86 mm',
                density: '289 050 points/m²',
                ledType: 'SMD',
                moduleSize: '320 x 160 mm',
                resolution: 'Custom',
                transparency: 'N/A',
                brightness: '300-800 nits',
                scan: '1/43 Scan',
                viewDistance: '1.8m+'
            },
            {
                name: 'P2',
                pitch: '2 mm',
                density: '250 000 points/m²',
                ledType: 'SMD',
                moduleSize: '320 x 160 mm',
                resolution: 'Custom',
                transparency: 'N/A',
                brightness: '300-800 nits',
                scan: '1/40 Scan',
                viewDistance: '2m+'
            },
            {
                name: 'P2.5',
                pitch: '2.5 mm',
                density: '160 000 points/m²',
                ledType: 'SMD',
                moduleSize: '320 x 160 mm',
                resolution: 'Custom',
                transparency: 'N/A',
                brightness: '800 nits',
                scan: '1/32 Scan',
                viewDistance: '2.5m+'
            },
            {
                name: 'P3',
                pitch: '3 mm',
                density: '111 111 points/m²',
                ledType: 'SMD',
                moduleSize: '240 x 120 mm',
                resolution: 'Custom',
                transparency: 'N/A',
                brightness: '800 nits',
                scan: '1/32 Scan',
                viewDistance: '3m+'
            },
            {
                name: 'P4',
                pitch: '4 mm',
                density: '62 500 points/m²',
                ledType: 'SMD',
                moduleSize: '256 x 128 mm',
                resolution: 'Custom',
                transparency: 'N/A',
                brightness: '1200 nits',
                scan: '1/16 Scan',
                viewDistance: '4m+'
            },
            {
                name: 'P5',
                pitch: '5 mm',
                density: '40 000 points/m²',
                ledType: 'SMD',
                moduleSize: '320 x 160 mm',
                resolution: 'Custom',
                transparency: 'N/A',
                brightness: '1200 nits',
                scan: '1/16 Scan',
                viewDistance: '5m+'
            }
        ],
        applications: [
            'Aéroports & Gares',
            'Clubs & Discothèques',
            'Halls d\'Hôtel',
            'Salles de Réunion',
            'Cinémas Maison',
            'Affichage Publicitaire',
            'Éducation'
        ],
        color: '#00D8FF',
        seo: {
            title: 'Comptoir LED & Stand Roulant Custom | P1.25 à P5 - TOOSEN',
            description: 'Stand LED roulant et comptoir vidéo personnalisable. Modules irréguliers pour formes courbes et angles. Résolution jusqu\'à 8K, 3840Hz. Idéal DJ Booth, accueil, salons.',
            keywords: 'stand led roulant, comptoir led vidéo, écran led courbe, dj booth led, affichage aéroport led, toosen led'
        }
    }
];

// Helper functions
export const getProductsByCategory = (category: ProductCategory): Product[] => {
    return products.filter(p => p.category === category);
};

export const getProductBySlug = (slug: string): Product | undefined => {
    return products.find(p => p.slug === slug || p.oldSlug === slug);
};

export const getCategoryBySlug = (slug: string): CategoryInfo | undefined => {
    return Object.values(categories).find(c => c.slug === slug || c.seoSlug === slug);
};

export const getAllProductSlugs = (): string[] => {
    return products.map(p => p.slug);
};

export const getAllCategorySlugs = (): string[] => {
    return Object.values(categories).map(c => c.slug);
};
