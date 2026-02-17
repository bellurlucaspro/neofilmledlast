import { Metadata } from 'next';

interface PageMetadataProps {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
}

export function generatePageMetadata({
    title,
    description,
    keywords,
    canonical,
    ogImage = '/logoneofilm.png',
}: PageMetadataProps): Metadata {
    const baseUrl = 'https://neofilmled.com';
    const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

    return {
        title,
        description,
        keywords: keywords?.split(',').map(k => k.trim()),
        alternates: {
            canonical: fullCanonical,
        },
        openGraph: {
            title,
            description,
            url: fullCanonical,
            siteName: 'NEOFILM LED',
            locale: 'fr_FR',
            type: 'website',
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}
