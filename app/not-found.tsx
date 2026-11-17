import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
export default function NotFound() { return <section className="not-found container"><p className="eyebrow">A LITTLE DETOUR</p><h1>Let’s bring<br /><em>you home.</em></h1><p>We couldn’t find that page. Your next beautiful ritual is a little closer from here.</p><Link href="/" className="button button-gold">Return home <ArrowRight size={18} /></Link></section>; }
