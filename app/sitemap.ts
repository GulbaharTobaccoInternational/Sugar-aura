import type { MetadataRoute } from 'next';
import { business } from '@/lib/config/business';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${business.siteUrl}/` }];
}
