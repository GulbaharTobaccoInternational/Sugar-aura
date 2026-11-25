import type { Metadata, Viewport } from 'next';
import '@fontsource/cormorant-garamond/latin-400.css';
import '@fontsource/cormorant-garamond/latin-500.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/dm-sans/latin-600.css';
import '@fontsource/allura/latin-400.css';
import { Header } from '@/components/header';
import { business } from '@/lib/config/business';
import './globals.css';

const title = 'Sugar & Aura | Sudanese Halwa & At-Home Beauty in the UAE';
const description = 'Discover Traditional Sudanese Halwa depilation, hair styling, and manicure and pedicure from Sugar & Aura in the comfort of your home in the UAE.';
const socialImage = { url: '/images/og.jpg', width: 1200, height: 630, alt: 'Sugar & Aura at-home beauty rituals' };

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  applicationName: business.name,
  openGraph: { type: 'website', locale: 'en_AE', url: '/', siteName: business.name, title, description, images: [socialImage] },
  twitter: { card: 'summary_large_image', title, description, images: [socialImage] },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#350362' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
