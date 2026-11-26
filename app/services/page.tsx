import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Accordion, Reveal } from '@/components/experience';
import { Picture, TextLink } from '@/components/shared';
import { ImageReveal } from '@/components/phase-two/motion';
import { PageCoda } from '@/components/phase-two/editorial';
import { ServiceExplorer } from '@/components/phase-two/interactions';
import { generalFAQs, services } from '@/lib/content/services';
export const metadata: Metadata={title:'Our Beauty Rituals',description:'An editorial collection of Traditional Sudanese Halwa, hair styling, and manicure and pedicure. Explore a beauty ritual that feels like you.',alternates:{canonical:'/services'}};
export default function ServicesPage(){return <div className="phase-two catalogue-page">
  <section className="catalogue-hero"><Picture src="/images/ritual-collection.webp" alt="A considered collection of sugar paste, hair and nail-care essentials in a sunlit home" priority sizes="100vw"/><div className="catalogue-shade"/><div className="container"><Reveal><p className="eyebrow">THE SUGAR & AURA COLLECTION</p><h1>Little rituals.<br/><em>Beautiful possibilities.</em></h1><p>Care inspired by tradition. Style that feels like you.<br/>A moment, thoughtfully brought home.</p><Link href="#collection" className="catalogue-discover">Explore the collection<ArrowDown size={17}/></Link></Reveal><span className="hero-edition">THREE SIGNATURE RITUALS<br/>ONE BEAUTIFULLY PERSONAL EXPERIENCE</span></div></section>
  <section className="catalogue-intro container section-pad"><p className="eyebrow">A LITTLE TIME, WELL SPENT</p><h2>Beauty belongs<br/><em>where you feel at ease.</em></h2><div><p>Your own space can be a lovely place for a beauty moment. Explore three core services, each with a different rhythm and a shared sense of considered care.</p><p>Choose a ritual below to discover its character, then visit the dedicated page for preparation, expectations and thoughtful answers.</p></div></section>
  <section id="collection" className="catalogue-explore container"><ServiceExplorer/></section>
  <section className="catalogue-statement container section-pad"><ImageReveal><Picture src="/images/beauty-arrival.webp" alt="A thoughtfully arranged beauty bag and fresh towels ready for an at-home ritual"/></ImageReveal><Reveal><p className="eyebrow">PERSONAL CARE, PERSONALLY CONSIDERED</p><h2>Three rituals.<br/><em>A personal experience.</em></h2><p>Your preferred finish, your familiar space, the questions you would like to ask. Those details belong at the beginning of every service conversation.</p><TextLink href="/why-us#your-ritual">Find a little inspiration</TextLink></Reveal></section>
  <section className="service-index container"><p className="eyebrow">YOUR NEXT BEAUTY MOMENT</p>{services.map(service=><Link href={`/services/${service.slug}`} key={service.slug}><span>{service.number}</span><h3>{service.title}</h3><span className="index-cta">Discover the ritual<ArrowUpRight size={22}/></span></Link>)}</section>
  <section className="catalogue-faq container section-pad"><div><p className="eyebrow">BEFORE YOU BEGIN</p><h2>A little clarity.<br/><em>A lovely beginning.</em></h2></div><Accordion items={[generalFAQs[1],generalFAQs[3],generalFAQs[5]]}/></section>
  <PageCoda eyebrow="YOUR BEAUTY. YOUR RITUAL." title="Make a little room" italic="for yourself." href="/why-us#your-ritual" link="Find your ritual"/>
</div>}
