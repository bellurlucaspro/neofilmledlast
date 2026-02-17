const fs = require('fs').promises;
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const PROJECT_ROOT = path.join(__dirname, '..');

// Extensions d'images à vérifier
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif', '.mp4', '.pdf'];

async function getAllImages() {
    const images = [];

    async function scanDir(dir) {
        const entries = await fs.readdir(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);

            if (entry.isDirectory()) {
                await scanDir(fullPath);
            } else if (entry.isFile()) {
                const ext = path.extname(entry.name).toLowerCase();
                if (IMAGE_EXTENSIONS.includes(ext)) {
                    images.push({
                        name: entry.name,
                        path: fullPath,
                        size: (await fs.stat(fullPath)).size
                    });
                }
            }
        }
    }

    await scanDir(PUBLIC_DIR);
    return images;
}

async function searchInFiles(searchTerm, dir) {
    const extensions = ['.tsx', '.ts', '.jsx', '.js', '.css', '.json'];
    let found = false;

    async function scan(currentDir) {
        if (found) return;

        const entries = await fs.readdir(currentDir, { withFileTypes: true });

        for (const entry of entries) {
            if (found) break;

            const fullPath = path.join(currentDir, entry.name);

            if (entry.isDirectory()) {
                // Ignorer node_modules et .next
                if (entry.name !== 'node_modules' && entry.name !== '.next' && entry.name !== 'out') {
                    await scan(fullPath);
                }
            } else if (entry.isFile()) {
                const ext = path.extname(entry.name).toLowerCase();
                if (extensions.includes(ext)) {
                    try {
                        const content = await fs.readFile(fullPath, 'utf8');
                        if (content.toLowerCase().includes(searchTerm.toLowerCase())) {
                            found = true;
                            break;
                        }
                    } catch (err) {
                        // Ignorer les erreurs de lecture
                    }
                }
            }
        }
    }

    await scan(dir);
    return found;
}

async function findUnusedImages() {
    console.log('🔍 Scanning for unused images...\n');

    const images = await getAllImages();
    const unused = [];
    const used = [];
    let checked = 0;

    for (const image of images) {
        checked++;
        process.stdout.write(`\rProgress: ${checked}/${images.length}`);

        // Ignorer les fichiers optimisés (.avif, .webp) générés automatiquement
        const ext = path.extname(image.name).toLowerCase();
        const baseName = path.basename(image.name, ext);

        // Si c'est un fichier optimisé, vérifier si l'original existe
        if (ext === '.avif' || ext === '.webp') {
            const originalExists = images.some(img =>
                path.basename(img.name, path.extname(img.name)) === baseName &&
                ['.png', '.jpg', '.jpeg'].includes(path.extname(img.name).toLowerCase())
            );

            if (originalExists) {
                // Fichier optimisé avec original, on le garde
                continue;
            }
        }

        const isUsed = await searchInFiles(image.name, PROJECT_ROOT);

        if (isUsed) {
            used.push(image);
        } else {
            unused.push(image);
        }
    }

    console.log('\n');
    return { unused, used, total: images.length };
}

async function generateReport() {
    const { unused, used, total } = await findUnusedImages();

    console.log('\n' + '='.repeat(60));
    console.log('📊 RAPPORT');
    console.log('='.repeat(60));
    console.log(`Total images: ${total}`);
    console.log(`Images utilisées: ${used.length}`);
    console.log(`Images non utilisées: ${unused.length}`);

    const totalUnusedSize = unused.reduce((sum, img) => sum + img.size, 0);
    console.log(`Espace récupérable: ${(totalUnusedSize / 1024 / 1024).toFixed(2)} MB`);

    if (unused.length > 0) {
        console.log('\n📝 Liste des images non utilisées (triées par taille):');
        console.log('='.repeat(60));

        // Trier par taille (plus grandes en premier)
        unused.sort((a, b) => b.size - a.size);

        for (const img of unused.slice(0, 50)) { // Top 50
            console.log(`  - ${img.name} (${(img.size / 1024 / 1024).toFixed(2)} MB)`);
        }

        if (unused.length > 50) {
            console.log(`  ... et ${unused.length - 50} autres fichiers`);
        }

        // Générer un fichier de commandes pour supprimer
        const deleteCommands = unused.map(img => `Remove-Item "${img.path}" -Force`).join('\n');
        await fs.writeFile(
            path.join(__dirname, 'delete-unused-images.ps1'),
            `# Script de suppression des images non utilisées\n# Généré le ${new Date().toISOString()}\n# Total: ${unused.length} fichiers, ${(totalUnusedSize / 1024 / 1024).toFixed(2)} MB\n\n` + deleteCommands
        );

        console.log('\n✅ Script de suppression généré: scripts/delete-unused-images.ps1');
        console.log('   Pour supprimer: .\\scripts\\delete-unused-images.ps1');
    } else {
        console.log('\n✨ Aucune image non utilisée trouvée!');
    }
}

generateReport().catch(console.error);
