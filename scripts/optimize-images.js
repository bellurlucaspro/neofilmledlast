const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];
const SIZES = [640, 750, 828, 1080, 1200, 1920]; // Responsive sizes

async function optimizeImage(inputPath, filename) {
    const ext = path.extname(filename).toLowerCase();

    if (!SUPPORTED_FORMATS.includes(ext)) {
        return;
    }

    const baseName = path.basename(filename, ext);
    const dir = path.dirname(inputPath);
    const avifPath = path.join(dir, `${baseName}.avif`);

    try {
        await fs.access(avifPath);
        return;
    } catch (e) { }

    console.log(`📸 Optimizing: ${filename}`);

    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        // Generate AVIF (best compression)
        await image
            .avif({ quality: 80, effort: 6 })
            .toFile(path.join(dir, `${baseName}.avif`));

        // Generate WebP (fallback)
        await image
            .webp({ quality: 85, effort: 6 })
            .toFile(path.join(dir, `${baseName}.webp`));

        // Generate responsive sizes for large images
        if (metadata.width > 1200) {
            for (const size of SIZES) {
                if (size < metadata.width) {
                    await sharp(inputPath)
                        .resize(size, null, { withoutEnlargement: true })
                        .avif({ quality: 80, effort: 6 })
                        .toFile(path.join(dir, `${baseName}-${size}w.avif`));

                    await sharp(inputPath)
                        .resize(size, null, { withoutEnlargement: true })
                        .webp({ quality: 85, effort: 6 })
                        .toFile(path.join(dir, `${baseName}-${size}w.webp`));
                }
            }
        }

        console.log(`✅ Optimized: ${filename}`);
    } catch (error) {
        console.error(`❌ Error optimizing ${filename}:`, error.message);
    }
}

async function processDirectory(dirPath) {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile()) {
            await optimizeImage(fullPath, entry.name);
        }
    }
}

async function main() {
    console.log('🚀 Starting image optimization...\n');
    console.log(`📁 Scanning directory: ${PUBLIC_DIR}\n`);

    const startTime = Date.now();

    try {
        await processDirectory(PUBLIC_DIR);

        const duration = ((Date.now() - startTime) / 1000).toFixed(2);
        console.log(`\n✨ Optimization complete in ${duration}s`);
        console.log('\n💡 Next steps:');
        console.log('   1. Update image references to use .avif format');
        console.log('   2. Add <picture> elements with fallbacks where needed');
        console.log('   3. Test image loading on different browsers');
    } catch (error) {
        console.error('❌ Optimization failed:', error);
        process.exit(1);
    }
}

main();
