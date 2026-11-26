import { whatsappUrl } from '@/lib/booking';

export const business = {
  name: 'Sugar & Aura',
  descriptor: 'Traditional Sudanese Halwa',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'https://sugar-and-aura-beauty.vinu-gulbahartobacco.chatgpt.site'),
  email: '',
  phone: '',
  whatsapp: whatsappUrl,
  hours: '',
  social: [] as { label: string; url: string }[],
  booking: { mode: 'whatsapp' as const },
  contact: { mode: 'local-demo' as const },
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/services' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'About', href: '/about' },
  { label: 'Areas', href: '/areas' },
  { label: 'Contact', href: '/contact' },
];
