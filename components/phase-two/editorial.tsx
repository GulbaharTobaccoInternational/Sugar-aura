import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BookButton, Reveal } from '@/components/experience';
import { Picture } from '@/components/shared';
import { contentSources } from '@/lib/content/phase-two';

export function PageCoda({eyebrow,title,italic,href='/contact',link='A little conversation',tone='paper'}:{eyebrow:string;title:string;italic:string;href?:string;link?:string;tone?:'paper'|'plum'|'blush'}) {
  return <section className={`page-coda coda-${tone}`}><div className="container"><Reveal><p className="eyebrow">{eyebrow}</p><h2>{title}<br/><em>{italic}</em></h2></Reveal><div className="coda-actions"><BookButton/><Link href={href} className="text-link">{link}<ArrowRight size={17}/></Link><p>Arrange your visit on WhatsApp.<br/>Appointments are confirmed in conversation.</p></div></div></section>;
}
export function ResearchNote({type}:{type:keyof typeof contentSources}) {
  const source=contentSources[type];
  return <p className="research-note">A little further reading: <a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}<ArrowRight size={12}/></a><span>General information. Exact services and suitability are confirmed individually.</span></p>;
}
export function ServiceNext({href,label,number}:{href:string;label:string;number:string}) {
  return <Link href={href} className="service-next container"><span className="eyebrow">CONTINUE YOUR DISCOVERY</span><span className="service-next-title"><small>{number}</small>{label}<ArrowRight size={34} strokeWidth={1}/></span></Link>;
}
export function ButterflySignature({light=false}:{light?:boolean}) {
  return <div className={`butterfly-signature ${light?'light':''}`}><Image src="/branding/butterfly.svg" alt="" width={70} height={64}/><span className="script">With care, Sugar & Aura</span></div>;
}
export function VisitPreparation({image,title,items}:{image:string;title:string;items:string[]}) {
  return <section className="visit-preparation section-pad container"><Picture src={image} alt="Considered beauty details in a softly lit home"/><Reveal><p className="eyebrow">A LITTLE PREPARATION</p><h2>{title}</h2><ol>{items.map((item,index)=><li key={item}><span>0{index+1}</span><p>{item}</p></li>)}</ol></Reveal></section>;
}
