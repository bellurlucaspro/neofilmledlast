import { MetadataRoute } from 'next';
import { products, categories } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://neofilmled.com';
    const currentDate = new Date();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/a-propos`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/installation`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/signaletique-led-indoor`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];

    // Category pages (using new SEO slugs)
    const categoryPages: MetadataRoute.Sitemap = Object.values(categories).map(cat => ({
        url: `${baseUrl}/${cat.seoSlug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Product pages (using new categorySeoSlug)
    const productPages: MetadataRoute.Sitemap = products.flatMap(product => [
        // Main product page
        {
            url: `${baseUrl}/${product.categorySeoSlug}/${product.slug}`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        // Pricing page
        {
            url: `${baseUrl}/${product.categorySeoSlug}/${product.slug}-tarifs`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        // Demo page
        {
            url: `${baseUrl}/${product.categorySeoSlug}/${product.slug}-demo`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
    ]);

    return [...staticPages, ...categoryPages, ...productPages];
}

