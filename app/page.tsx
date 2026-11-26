import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, CalendarDays, Flower2, Heart, House, Sparkles } from 'lucide-react';
import { Accordion, BookButton, HeroEntrance, Parallax, Reveal } from '@/components/experience';
import { FinalCTA, Journey, Picture, ServiceCollection, TextLink, ValuesSection, values } from '@/components/shared';
import { services, generalFAQs } from '@/lib/content/services';
import { articles } from '@/lib/content/journal';

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function HomePage() {
  return <>
    <section className="home-hero">
      <div className="hero-image"><Image src="/images/hero.webp" alt="Woman enjoying a lavender tea mug on an ivory sofa in a sunlit home" fill priority sizes="100vw" /></div>
      <div className="hero-wash" />
      <div className="container hero-container"><HeroEntrance className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" />UAE HOME-SERVICE BEAUTY</p><h1>Traditional<br /><span>Sudanese Halwa</span></h1><p className="hero-mantra">NATURAL CARE. REAL RESULTS.</p><p className="hero-description">Beauty rituals inspired by tradition,<br className="desktop-break" /> thoughtfully brought to the comfort of your home.</p><div className="hero-service-links"><Link href="/services/hair-styling">Hair Styling</Link><span /><Link href="/services/manicure-pedicure">Manicure & Pedicure</Link></div><div className="hero-actions"><BookButton /><span className="priority-note"><CalendarDays size={24} strokeWidth={1.4} /><span>Your beauty.<br />Our priority.</span></span></div></HeroEntrance></div>
      <div className="hero-script script" aria-hidden="true">More beautiful<br />days at home.<span>♡</span></div>
      <a className="hero-scroll" href="#our-rituals" aria-label="Explore our beauty rituals"><ArrowDown size={16} /><span>SCROLL TO DISCOVER</span></a>
    </section>

    <section id="our-rituals" className="service-intro"><div className="container service-intro-grid"><div className="circle-services">{services.map((service, i) => <Reveal key={service.slug} delay={i * .05}><Link href={`/services/${service.slug}`} className="circle-service"><div className="circle-image"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 374px) 76px, (max-width: 767px) 90px, 116px" /></div><h2>{service.slug === 'sudanese-halwa' ? <>Sudanese Halwa<br />Depilation</> : service.shortTitle}</h2><span>{['SMOOTH SKIN, NATURALLY', 'YOUR STYLE, OUR CARE', 'BEAUTY IN EVERY DETAIL'][i]}</span></Link></Reveal>)}</div><div className="mini-values">{values.map(({ Icon, short, text }) => <div key={short}><Icon size={25} strokeWidth={1.15} /><div><h3>{short}</h3><p>{text}</p></div></div>)}</div></div></section>

    <div className="brand-ribbon"><div className="container"><span><Flower2 size={27} strokeWidth={1.2} /><span>ROOTED IN TRADITION<small>A considered beauty ritual</small></span></span><span><Heart size={27} strokeWidth={1.2} /><span>PERSONALLY YOURS<small>Your preferences, thoughtfully heard</small></span></span><span><House size={27} strokeWidth={1.2} /><span>BEAUTIFULLY AT HOME<small>Self-care, in your own space</small></span></span><p className="script">Self-care feels<br />better at home ♡</p></div></div>

    <section className="heritage section-pad container"><Reveal className="heritage-visual"><Picture src="/images/sudanese-halwa.webp" alt="Glossy dark brown Sudanese Halwa paste balls in a small wooden bowl" className="arch-image" /><div className="heritage-tag"><span>THE BEAUTY OF</span><span className="script">a sweet tradition</span><Sparkles size={20} strokeWidth={1} /></div></Reveal><Reveal className="heritage-copy"><p className="eyebrow">OUR SIGNATURE RITUAL</p><h2>A beautiful tradition,<br /><em>thoughtfully reimagined.</em></h2><div className="gold-line" /><p>Some beauty rituals carry more than a little care. They carry a sense of tradition, familiarity, and time beautifully spent.</p><p>Inspired by Sudanese beauty heritage, our signature Halwa is a sugar-based hair-removal ritual, approached with personal attention and brought into the comfort of your home.</p><p className="quiet-copy">A familiar tradition. A fresh moment for yourself.</p><TextLink href="/services/sudanese-halwa">Discover Traditional Sudanese Halwa</TextLink></Reveal></section>

    <div className="soft-section"><ValuesSection /></div>
    <ServiceCollection />
    <Journey />

    <section className="home-comfort section-pad container"><Reveal className="comfort-copy"><p className="eyebrow">A DIFFERENT KIND OF BEAUTY DESTINATION</p><h2>No place<br /><em>quite like home.</em></h2><p>Your favourite chair. Your own kind of quiet. A beauty moment that fits naturally into your day.</p><p>At-home beauty leaves room for what matters to you: privacy, a familiar setting, and the freedom to enjoy a little care in your own way.</p><div className="comfort-notes"><span><Heart size={19} /> A moment that’s yours</span><span><House size={19} /> Comfort comes first</span></div><TextLink href="/why-us#your-ritual">Find your own beauty ritual</TextLink></Reveal><Parallax className="comfort-visual"><Picture src="/images/home-ritual.webp" alt="A woman enjoying a serene beauty moment beside a sunlit window" /><span className="script">A little time,<br />just for you.</span></Parallax></section>

    <section className="journal-section section-pad"><div className="container"><Reveal className="section-heading split-heading"><div><p className="eyebrow">NOTES ON BEAUTY & SLOW LIVING</p><h2>The Beauty <em>Journal.</em></h2></div><TextLink href="/journal">A little inspiration</TextLink></Reveal><div className="journal-grid">{articles.map((article, i) => <Reveal key={article.slug} delay={i * .06}><Link className="journal-image" href={`/journal/${article.slug}`} aria-label={`Read ${article.title}`}><Picture src={article.image} alt={article.alt} sizes="(max-width: 767px) 90vw, 30vw" /><span><ArrowRight size={21} /></span></Link><p className="eyebrow">{article.category}</p><h3><Link href={`/journal/${article.slug}`}>{article.title}</Link></h3><p>{article.intro}</p><TextLink href={`/journal/${article.slug}`}>Read the story</TextLink></Reveal>)}</div></div></section>

    <section className="faq-preview section-pad container"><Reveal className="faq-intro"><p className="eyebrow">A LITTLE REASSURANCE</p><h2>Beautifully simple.<br /><em>Thoughtfully answered.</em></h2><p>A few things you might be wondering before your first at-home beauty moment.</p><TextLink href="/faq">All your questions</TextLink></Reveal><Reveal><Accordion items={generalFAQs.slice(1, 5)} /></Reveal></section>
    <FinalCTA />
  </>;
}
