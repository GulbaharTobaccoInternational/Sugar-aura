import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/experience';
import { FinalCTA, Picture, TextLink } from '@/components/shared';
import { articles } from '@/lib/content/journal';

export const metadata: Metadata = { title: 'The Beauty Journal', description: 'Notes on beauty, personal rituals and the lovely art of slowing down. Explore the Sugar & Aura Beauty Journal.', alternates: { canonical: '/journal' } };

export default function JournalPage() {
  return <><section className="faq-page-intro"><div className="container"><p className="eyebrow">NOTES ON BEAUTY & SLOW LIVING</p><h1>The Beauty <em>Journal.</em></h1><p>A little inspiration for your everyday rituals. Make a cup of something lovely and stay a while.</p></div></section><section className="container section-pad journal-page"><div className="journal-grid">{articles.map((article, i) => <Reveal key={article.slug} delay={i * .06}><Link href={`/journal/${article.slug}`} className="journal-image" aria-label={`Read ${article.title}`}><Picture src={article.image} alt={article.alt} priority={i === 0} sizes="(max-width: 767px) 90vw, 30vw" /></Link><p className="eyebrow">{article.category}</p><h3><Link href={`/journal/${article.slug}`}>{article.title}</Link></h3><p>{article.intro}</p><TextLink href={`/journal/${article.slug}`}>Read the story</TextLink></Reveal>)}</div></section><FinalCTA /></>;
}
