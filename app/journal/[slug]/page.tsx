import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FinalCTA, Picture, TextLink } from '@/components/shared';
import { articles } from '@/lib/content/journal';

export const dynamicParams = false;
export function generateStaticParams() { return articles.map(article => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const article = articles.find(item => item.slug === slug); return { title: article?.title, description: article?.intro, alternates: { canonical: `/journal/${slug}` }, openGraph: { type: 'article', title: article?.title, description: article?.intro, images: article ? [{ url: article.image, alt: article.alt }] : [] } }; }

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const article = articles.find(item => item.slug === slug); if (!article) notFound();
  return <><article><header className="article-header"><p className="eyebrow">{article.category}</p><h1>{article.title}</h1><p>SUGAR & AURA JOURNAL <span aria-hidden="true"> · </span> {article.readTime}</p></header><div className="article-cover"><Picture src={article.image} alt={article.alt} priority sizes="(max-width: 767px) 100vw, 1100px" /></div><div className="article-body container"><p className="article-intro">{article.intro}</p>{article.sections.map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}<TextLink href="/journal">Back to the Beauty Journal</TextLink></div></article><FinalCTA /></>;
}
