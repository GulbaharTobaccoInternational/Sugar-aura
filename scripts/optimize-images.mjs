import path from 'node:path';
import sharp from 'sharp';
// Optional regeneration helper. Pass a folder containing hero.png, sudanese-halwa.png,
// hair.png, manicure.png, home-ritual.png and pedicure.png after regenerating assets.
const source = process.argv[2];
if (!source) throw new Error('Usage: node scripts/optimize-images.mjs /absolute/source-image-folder');
for (const name of ['hero','sudanese-halwa','hair','manicure','home-ritual','pedicure']) {
  await sharp(path.join(source,`${name}.png`)).resize({width:name==='hero'?1920:1300,withoutEnlargement:true}).webp({quality:86,effort:6}).toFile(`public/images/${name}.webp`);
}
await sharp(path.join(source,'hero.png')).resize(1200,630,{fit:'cover',position:'right'}).jpeg({quality:85}).toFile('public/images/og.jpg');
console.log('Optimized six photographs and Open Graph image.');
