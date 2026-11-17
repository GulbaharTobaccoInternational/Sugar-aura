import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Flower2, Heart, House, Sparkles } from 'lucide-react';
import { business, navigation } from '@/lib/config/business';
import { services } from '@/lib/content/services';
import { BookButton, HeroEntrance, Reveal } from './experience';

export function TextLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return <Link className={`text-link ${className}`} href={href}>{children}<ArrowRight size={18} strokeWidth={1.4} /></Link>;
}

export function Picture({ src, alt, className = '', priority = false, sizes = '(max-width: 767px) 100vw, 50vw' }: { src: string; alt: string; className?: string; priority?: boolean; sizes?: string }) {
  return <div className={`picture ${className}`}><Image src={src} alt={alt} fill sizes={sizes} priority={priority} /></div>;
}

export function EditorialHero({ eyebrow, title, italic, description, image, alt, children }: { eyebrow: string; title: string; italic: string; description: string; image: string; alt: string; children?: React.ReactNode }) {
  return <section className="editorial-hero">
    <div className="editorial-hero-copy"><HeroEntrance><p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p><h1>{title}<br /><em>{italic}</em></h1><p className="hero-description">{description}</p>{children || <BookButton />}</HeroEntrance><span className="hero-bottom-note">BEAUTIFULLY CONSIDERED. PERSONALLY YOURS.</span></div>
    <Picture src={image} alt={alt} priority className="editorial-hero-image" /><span className="editorial-stamp" aria-hidden="true">a little time<br /><em>just for you</em><span>✧</span></span>
  </section>;
}

export const values = [
  { Icon: House, title: 'Beauty at your doorstep', short: 'WE COME TO YOUR HOME', text: 'Your familiar space. A beautifully personal ritual.' },
  { Icon: Flower2, title: 'Clean, considerate care', short: 'CARE IN EVERY DETAIL', text: 'Space to discuss products, preparation and comfort.' },
  { Icon: Heart, title: 'Individual attention', short: 'YOUR MOMENT, YOUR WAY', text: 'Thoughtful details, shaped around your preferences.' },
  { Icon: Sparkles, title: 'A more personal luxury', short: 'PREMIUM CARE AT HOME', text: 'The pleasure of feeling beautifully looked after.' },
];

export function ValuesSection({ compact = false }: { compact?: boolean }) {
  return <section className={`values-section container ${compact ? 'compact' : ''}`}>
    {!compact && <Reveal className="section-heading centered"><p className="eyebrow">THOUGHTFUL BY NATURE</p><h2>More than beauty.<br /><em>A feeling of being cared for.</em></h2><p>The little things make a lovely difference.</p></Reveal>}
    <div className="values-grid">{values.map(({ Icon, title, text }, index) => <Reveal key={title} delay={index * .06}><span className="value-icon"><Icon size={31} strokeWidth={1.15} /></span><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
  </section>;
}

export function ServiceCollection({ heading = true }: { heading?: boolean }) {
  return <section className="section-pad service-collection container">
    {heading && <Reveal className="section-heading split-heading"><div><p className="eyebrow">YOUR BEAUTY, YOUR RITUAL</p><h2>A little care.<br /><em>In every beautiful detail.</em></h2></div><TextLink href="/services">Explore all services</TextLink></Reveal>}
    <div className="collection-grid">{services.map((service, index) => <Reveal key={service.slug} delay={index * .08} className="collection-card"><Link href={`/services/${service.slug}`} className="collection-image-link" aria-label={`Discover ${service.title}`}><Picture src={service.image} alt={service.imageAlt} sizes="(max-width: 767px) 90vw, 30vw" /><span className="collection-number">{service.number}</span><span className="image-link-arrow"><ArrowRight size={23} /></span></Link><p className="eyebrow">{service.eyebrow}</p><h3><Link href={`/services/${service.slug}`}>{service.shortTitle}</Link></h3><p>{service.description}</p><TextLink href={`/services/${service.slug}`}>Discover the ritual</TextLink></Reveal>)}</div>
  </section>;
}

export function Journey() {
  return <section className="journey section-pad"><div className="container"><Reveal className="section-heading centered"><p className="eyebrow">THE SUGAR & AURA EXPERIENCE</p><h2>Your home.<br /><em>Your beautiful little escape.</em></h2></Reveal><div className="journey-grid">{[
    ['01', 'Explore your ritual', 'Find the care that feels like you. Discover our signature sweet, hair styling and nail rituals.'],
    ['02', 'Plan your visit', 'Discuss your location, preferences and availability with us on WhatsApp before your visit is confirmed.'],
    ['03', 'Enjoy beauty at home', 'When a visit is agreed, settle into your own space and make a little time for yourself.'],
  ].map(([number, title, text]) => <Reveal key={number}><span className="journey-number">{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div><p className="journey-note">Arrange your visit with us on WhatsApp. Appointments are confirmed in conversation.</p></div></section>;
}

export function FinalCTA() {
  return <section className="final-cta"><div className="cta-flower" aria-hidden="true">✧</div><Reveal className="container"><p className="eyebrow">A BEAUTIFUL MOMENT, MADE FOR YOU</p><h2>Your most beautiful moments<br /><em>begin at home.</em></h2><p>Discover a more personal approach to beauty and self-care.</p><BookButton /><span className="cta-signature script">Your beauty. Our priority.</span></Reveal></section>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-main"><div className="footer-brand"><Link href="/" aria-label="Sugar and Aura home"><Image src="/branding/logo-light.svg" alt="Sugar & Aura — Traditional Sudanese Sweet" width={330} height={79} /></Link><p>Beauty rituals inspired by tradition.<br />Thoughtfully brought home.</p><span className="script">More beautiful days at home.</span></div><div><h2>Explore</h2>{navigation.map(item => <Link href={item.href} key={item.href}>{item.label}</Link>)}<Link href="/faq">FAQs</Link></div><div><h2>Your rituals</h2>{services.map(service => <Link href={`/services/${service.slug}`} key={service.slug}>{service.shortTitle}</Link>)}<Link href="/journal">Beauty Journal</Link></div><div><h2>Let’s connect</h2><p>UAE home-service beauty.<br />Availability confirmed individually.</p>{business.email && <a href={`mailto:${business.email}`}>{business.email}</a>}{business.phone && <a href={`tel:${business.phone}`}>{business.phone}</a>}{business.whatsapp && <a href={business.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp booking</a>}{business.hours && <p>{business.hours}</p>}<TextLink href="/contact">Contact us</TextLink>{business.social.map(social => <a href={social.url} key={social.label} target="_blank" rel="noopener noreferrer">{social.label}</a>)}</div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Sugar & Aura. All rights reserved.</p><span>CONSIDERED CARE. BEAUTIFULLY AT HOME.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div></div></footer>;
}
