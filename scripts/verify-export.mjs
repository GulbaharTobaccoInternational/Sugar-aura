import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const root = path.resolve('out');
const routes = ['/', '/services', '/services/sudanese-halwa', '/services/hair-styling', '/services/manicure-pedicure', '/why-us', '/about', '/areas', '/contact', '/faq', '/privacy', '/terms', '/journal', '/journal/the-art-of-at-home-self-care', '/journal/understanding-traditional-sugaring', '/journal/keeping-your-manicure-beautiful'];
const titles = new Set();
const emirates = ['dubai','abu-dhabi','sharjah','ajman','ras-al-khaimah','fujairah','umm-al-quwain'];
let referenceCount = 0;
async function exists(file) { try { return (await fs.stat(file)).isFile(); } catch { return false; } }
for (const route of routes) {
  const file = path.join(root, route, 'index.html');
  const html = await fs.readFile(file, 'utf8');
  assert.ok(!/Sudanese Sweet|booking-dialog|wa\.me\/971505071965/i.test(html), `Outdated branding or booking: ${route}`);
  const ctas = [...html.matchAll(/<a\b[^>]*class="[^"]*booking-link[^"]*"[^>]*>/g)];
  assert.ok(ctas.length > 0, `Missing booking links: ${route}`);
  for (const [tag] of ctas) {
    assert.match(tag, /href="https:\/\/wa\.me\/971588807612"/);
    assert.match(tag, /target="_blank"/);
    assert.match(tag, /rel="noopener noreferrer"/);
  }
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `Missing or duplicate title: ${route}`); titles.add(title);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `Expected one h1: ${route}`);
  assert.match(html, /<meta name="description" content="[^"]+"/, `Missing description: ${route}`);
  assert.match(html, /<link rel="canonical" href="https:\/\//, `Missing canonical: ${route}`);
  assert.match(html, /<html lang="en"/, `Missing language: ${route}`);
  assert.ok(!/lorem ipsum|TODO|placeholder\.com/i.test(html), `Unfinished content: ${route}`);
  for (const [,url] of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[^"\s]*)"/g)) {
    const relative = decodeURIComponent(url).split('?')[0].split('#')[0];
    const target = path.join(root, relative);
    const found = await exists(target) || await exists(path.join(target,'index.html'));
    assert.ok(found, `Broken local reference: ${route} → ${relative}`); referenceCount++;
  }
  for(const [,tag] of html.matchAll(/(<img\b[^>]*>)/g)) assert.match(tag, /\balt="[^"]*"/,`Missing alt: ${route}`);
}
assert.ok(await exists(path.join(root,'sitemap.xml')));
assert.ok(await exists(path.join(root,'robots.txt')));
assert.ok(await exists(path.join(root,'404.html')));
for (const name of ['hero','sudanese-halwa','hair','manicure','pedicure','home-ritual','ritual-collection','sugaring-ritual','hair-chignon','hair-sleek','nail-detail','heritage-still-life','uae-courtyard','beauty-arrival']) {
  const image = await fs.stat(path.join(root,'images',name+'.webp'));
  assert.ok(image.size > 10000 && image.size < 300000, `Unexpected image size: ${name}`);
}
const areas = await fs.readFile(path.join(root,'areas/index.html'),'utf8');
assert.ok(!/area-checker|name="location"|Let’s check|Check service area/.test(areas), 'Obsolete location search remains');
for (const slug of emirates) {
 const photo=await fs.stat(path.join(root,'images/emirates',slug+'.webp'));
 assert.ok(photo.size>10000 && photo.size<300000, `Unoptimized emirate photo: ${slug}`);
 assert.ok(areas.includes('/images/emirates/'+slug+'.webp'), `Missing emirate image: ${slug}`);
}
console.log(`Verified ${routes.length} content pages, unique SEO titles, heading hierarchy, ${referenceCount} local links/assets, 21 optimized photos and all seven emirates, sitemap, robots and 404.`);
