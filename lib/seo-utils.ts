/**
 * SEO Utilities for NEOFILM LED
 * Functions for generating SEO-optimized slugs, metadata, and URLs
 */

/**
 * Génère un slug SEO optimisé à partir d'un texte
 * - Minuscules uniquement
 * - Tirets pour les espaces
 * - Suppression accents et caractères spéciaux
 * - Suppression mots vides
 * - Limite à 60 caractères
 * 
 * @param text - Texte à convertir en slug
 * @param maxLength - Longueur maximale du slug (défaut: 60)
 * @returns Slug SEO optimisé
 */
export function generateSeoSlug(text: string, maxLength: number = 60): string {
    const stopWords = ['le', 'la', 'les', 'de', 'du', 'des', 'un', 'une', 'et', 'ou', 'pour', 'avec', 'sans', 'sur', 'dans'];

    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Supprime accents
        .replace(/[^a-z0-9\s-]/g, '') // Garde uniquement alphanumériques, espaces, tirets
        .trim()
        .split(/\s+/)
        .filter(word => !stopWords.includes(word)) // Retire mots vides
        .join('-')
        .replace(/-+/g, '-') // Évite tirets multiples
        .substring(0, maxLength)
        .replace(/-$/, ''); // Supprime tiret final si présent
}

/**
 * Vérifie si un slug existe déjà et ajoute un suffixe si nécessaire
 * 
 * @param slug - Slug à vérifier
 * @param existingSlugs - Liste des slugs existants
 * @returns Slug unique
 */
export function ensureUniqueSlug(slug: string, existingSlugs: string[]): string {
    let uniqueSlug = slug;
    let counter = 1;

    while (existingSlugs.includes(uniqueSlug)) {
        uniqueSlug = `${slug}-${counter}`;
        counter++;
    }

    return uniqueSlug;
}

/**
 * Génère les métadonnées SEO alignées (URL, Title, H1)
 * 
 * @param productName - Nom du produit
 * @param categoryKeyword - Mot-clé de la catégorie
 * @param brandName - Nom de la marque (défaut: NEOFÍLM)
 * @returns Objet contenant slug, url, title, h1, canonical
 */
export function generateSeoMetadata(
    productName: string,
    categoryKeyword: string,
    brandName: string = 'NEOFÍLM'
) {
    const slug = generateSeoSlug(productName);
    const categorySlug = generateSeoSlug(categoryKeyword);

    // Capitaliser la première lettre de chaque mot pour le title
    const categoryTitle = categoryKeyword
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

    return {
        slug,
        categorySeoSlug: categorySlug,
        url: `/${categorySlug}/${slug}`,
        title: `${productName} | ${categoryTitle} - ${brandName}`,
        h1: productName,
        canonical: `https://neofilmled.com/${categorySlug}/${slug}`
    };
}

/**
 * Génère les métadonnées pour une page tarifs
 * 
 * @param productName - Nom du produit
 * @param categorySlug - Slug de la catégorie
 * @param productSlug - Slug du produit
 * @returns Métadonnées pour la page tarifs
 */
export function generatePricingPageMetadata(
    productName: string,
    categorySlug: string,
    productSlug: string
) {
    return {
        url: `/${categorySlug}/${productSlug}-tarifs`,
        title: `Prix ${productName} | Tarifs & Devis Gratuit - NEOFÍLM`,
        h1: `Tarifs ${productName}`,
        canonical: `https://neofilmled.com/${categorySlug}/${productSlug}-tarifs`,
        description: `Découvrez les tarifs du ${productName}. Devis personnalisé gratuit sous 24h. Prix au m² dégressifs. Installation partout en France.`
    };
}

/**
 * Génère les métadonnées pour une page démo
 * 
 * @param productName - Nom du produit
 * @param categorySlug - Slug de la catégorie
 * @param productSlug - Slug du produit
 * @returns Métadonnées pour la page démo
 */
export function generateDemoPageMetadata(
    productName: string,
    categorySlug: string,
    productSlug: string
) {
    return {
        url: `/${categorySlug}/${productSlug}-demo`,
        title: `Démo ${productName} | Essai Gratuit & Présentation - NEOFÍLM`,
        h1: `Demander une démonstration ${productName}`,
        canonical: `https://neofilmled.com/${categorySlug}/${productSlug}-demo`,
        description: `Demandez une démonstration gratuite du ${productName}. Présentation sur site ou dans notre showroom. Essai sans engagement.`
    };
}

/**
 * Valide un slug SEO selon les critères Google
 * 
 * @param slug - Slug à valider
 * @returns true si le slug est valide, false sinon
 */
export function validateSeoSlug(slug: string): boolean {
    // Règles de validation
    const rules = {
        minLength: 3,
        maxLength: 70,
        pattern: /^[a-z0-9]+(-[a-z0-9]+)*$/,
        noConsecutiveDashes: !slug.includes('--'),
        noStartEndDash: !slug.startsWith('-') && !slug.endsWith('-')
    };

    return (
        slug.length >= rules.minLength &&
        slug.length <= rules.maxLength &&
        rules.pattern.test(slug) &&
        rules.noConsecutiveDashes &&
        rules.noStartEndDash
    );
}

/**
 * Génère une ancre de lien optimisée pour le SEO
 * 
 * @param keyword - Mot-clé principal
 * @param context - Contexte additionnel (optionnel)
 * @returns Texte d'ancre optimisé
 */
export function generateOptimizedAnchor(keyword: string, context?: string): string {
    if (context) {
        return `${keyword} ${context}`;
    }
    return keyword;
}

/**
 * Extrait le mot-clé principal d'un titre
 * 
 * @param title - Titre de la page
 * @returns Mot-clé principal
 */
export function extractMainKeyword(title: string): string {
    // Supprime la marque et les séparateurs
    return title
        .split('|')[0]
        .split('-')[0]
        .trim()
        .toLowerCase();
}

/**
 * Génère une meta description optimisée
 * 
 * @param productName - Nom du produit
 * @param mainBenefit - Bénéfice principal
 * @param cta - Call-to-action
 * @param maxLength - Longueur maximale (défaut: 155)
 * @returns Meta description
 */
export function generateMetaDescription(
    productName: string,
    mainBenefit: string,
    cta: string = 'Devis gratuit',
    maxLength: number = 155
): string {
    const description = `${productName}: ${mainBenefit}. ${cta}.`;

    if (description.length > maxLength) {
        return description.substring(0, maxLength - 3) + '...';
    }

    return description;
}

/**
 * Mapping des anciennes URLs vers les nouvelles (pour redirections 301)
 */
export const urlRedirectMap: Record<string, string> = {
    // Pages catégories
    '/solutions/affichages-led-transparents': '/film-led-transparent',
    '/solutions/affichages-led-dynamisation': '/mur-led-interieur',
    '/solutions/affichages-led-portables': '/ecran-led-portable',
    '/solutions': '/film-led-transparent',

    // Produits - Transparent
    '/solutions/affichages-led-transparents/neofilm-adhesif': '/film-led-transparent/neofilm-adhesif',
    '/solutions/affichages-led-transparents/rideau-led-transparent': '/film-led-transparent/rideau-led-mesh',

    // Produits - Dynamisation
    '/solutions/affichages-led-dynamisation/mur-led-indoor': '/mur-led-interieur/mur-led-pro',
    '/solutions/affichages-led-dynamisation/ecran-flexible-led': '/mur-led-interieur/ecran-flexible-360',

    // Produits - Portable
    '/solutions/affichages-led-portables/kakemono-led-pliable': '/ecran-led-portable/kakemono-pliable',
    '/solutions/affichages-led-portables/totem-led-rotatif': '/ecran-led-portable/totem-rotatif-360',
    '/solutions/affichages-led-portables/stand-led-roulant': '/ecran-led-portable/stand-roulant',
};

/**
 * Obtient l'URL de redirection pour une ancienne URL
 * 
 * @param oldUrl - Ancienne URL
 * @returns Nouvelle URL ou null si pas de redirection
 */
export function getRedirectUrl(oldUrl: string): string | null {
    return urlRedirectMap[oldUrl] || null;
}
