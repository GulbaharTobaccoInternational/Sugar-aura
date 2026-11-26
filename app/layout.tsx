import type { Metadata, Viewport } from 'next';
import '@fontsource/cormorant-garamond/latin-400.css';
import '@fontsource/cormorant-garamond/latin-500.css';
import '@fontsource/cormorant-garamond/latin-400-italic.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/dm-sans/latin-600.css';
import '@fontsource/allura/latin-400.css';
import { ExperienceProvider } from '@/components/experience';
import { Header } from '@/components/header';
import { ReadingTools } from '@/components/phase-two/motion';
import { Footer } from '@/components/shared';
import { business } from '@/lib/config/business';
import './globals.css';
import './phase-two.css';
import './refinements.css';

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: { default: 'Sugar & Aura | Beautiful Days at Home', template: '%s | Sugar & Aura' },
  description: 'Discover Traditional Sudanese Halwa, hair styling, and manicure and pedicure. Thoughtful beauty rituals in the comfort of your home in the UAE.',
  applicationName: 'Sugar & Aura',
  openGraph: { type: 'website', locale: 'en_AE', siteName: 'Sugar & Aura', title: 'Sugar & Aura — Beautiful Days at Home', description: 'Traditional Sudanese Halwa, hair styling and nail care. Thoughtfully brought home.', images: [{ url: '/images/og.jpg', width: 1200, height: 630, alt: 'Sugar & Aura — warm, thoughtful beauty at home' }] },
  twitter: { card: 'summary_large_image', images: ['/images/og.jpg'] },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#300847' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><a href="#main" className="skip-link">Skip to content</a><ExperienceProvider><ReadingTools /><Header /><main id="main">{children}</main><Footer /></ExperienceProvider></body></html>;
}
