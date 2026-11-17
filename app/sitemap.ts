import type { MetadataRoute } from 'next';
import { business } from '@/lib/config/business';
import { services } from '@/lib/content/services';
import { articles } from '@/lib/content/journal';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/services', '/why-us', '/about', '/areas', '/contact', '/faq', '/privacy', '/terms', '/journal', ...services.map(service => `/services/${service.slug}`), ...articles.map(article => `/journal/${article.slug}`)].map(path => ({ url: `${business.siteUrl}${path}/`, changeFrequency: 'monthly', priority: path === '' ? 1 : path.startsWith('/services') ? .8 : .6 }));
}
