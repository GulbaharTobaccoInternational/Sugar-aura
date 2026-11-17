'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, RotateCcw, Search, X, ZoomIn } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Accordion } from '@/components/experience';
import { useDialog } from '@/components/use-dialog';
import { services } from '@/lib/content/services';
import { faqGroups, serviceNotes } from '@/lib/content/phase-two';

export type GalleryImage = { src: string; alt: string; title: string; category: string; note: string };

function tabKey(event: KeyboardEvent<HTMLButtonElement>, index: number, length: number, select: (value: number) => void) {
  let next = index;
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % length;
  else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + length) % length;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = length - 1;
  else return;
  event.preventDefault(); select(next);
  const buttons = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
  buttons?.[next]?.focus();
}

export function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const id = useId();
  const service = services[active];
  return <div className="service-explorer">
    <div className="explorer-index" role="tablist" aria-label="Explore beauty services">{services.map((item, index) => <button key={item.slug} role="tab" id={`${id}-tab-${index}`} aria-selected={active === index} aria-controls={`${id}-panel`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => tabKey(event,index,services.length,setActive)}><span>{item.number}</span><span>{item.shortTitle}<small>{serviceNotes[index].title}</small></span><ArrowUpRight size={23} /></button>)}</div>
    <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} tabIndex={0} className="explorer-panel">
      <div className="explorer-photo"><Image key={service.image} src={service.image} alt={service.imageAlt} fill sizes="(max-width:767px) 100vw, 45vw" /><span className="photo-caption">THE SUGAR & AURA COLLECTION · {service.number}</span></div>
      <div className="explorer-copy" key={service.slug}><p className="eyebrow">{service.eyebrow}</p><h3>{serviceNotes[active].title}</h3><p>{service.description}</p><ul>{serviceNotes[active].benefits.map(note => <li key={note}><Check size={14} />{note}</li>)}</ul><Link className="text-link" href={`/services/${service.slug}`}>Explore {service.shortTitle}<ArrowRight size={17} /></Link></div>
    </div>
  </div>;
}

export function RitualProcess() {
  const steps = services[0].experience;
  const [active,setActive] = useState(0);
  const id = useId();
  return <div className="ritual-process"><div className="process-tabs" role="tablist" aria-label="The sugaring experience">{steps.map((step,index) => <button key={step.title} role="tab" id={`${id}-tab-${index}`} aria-controls={`${id}-panel`} aria-selected={active===index} tabIndex={active===index?0:-1} onClick={()=>setActive(index)} onKeyDown={event=>tabKey(event,index,steps.length,setActive)}><span>0{index+1}</span>{['The conversation','The ritual','The finishing touch'][index]}<ArrowRight size={17}/></button>)}</div><div role="tabpanel" tabIndex={0} id={`${id}-panel`} aria-labelledby={`${id}-tab-${active}`} className="process-story"><div key={active} className="tab-crossfade"><span className="process-big-number" aria-hidden="true">0{active+1}</span><p className="eyebrow">YOUR RITUAL, STEP BY STEP</p><h3>{steps[active].title}</h3><p>{steps[active].text}</p><p className="process-note">A general introduction. Exact steps are agreed with your provider.</p><button className="text-link" onClick={()=>setActive((active+1)%steps.length)}>{active===steps.length-1?'Back to the beginning':'Continue the ritual'}<ArrowRight size={17}/></button></div></div></div>;
}

export function ImageGallery({ images, label }: { images: GalleryImage[]; label: string }) {
  const [active,setActive] = useState(0);
  const [enlarged,setEnlarged] = useState(0);
  const { ref: dialog, open: openDialog, close: closeDialog, onClose: onDialogClose, onCancel: onDialogCancel, onKeyDown: onDialogKeyDown, closing } = useDialog();
  const trigger = useRef<HTMLButtonElement>(null);
  const id = useId();
  const reduce = useReducedMotion();
  const open = () => {setEnlarged(active);openDialog();};
  const move = (direction:number) => setEnlarged(previous=>(previous+direction+images.length)%images.length);
  return <div className="inspiration-gallery">
    <div className="gallery-tabs" role="tablist" aria-label={label}>{images.map((item,index)=><button key={item.src} role="tab" id={`${id}-tab-${index}`} aria-selected={active===index} aria-controls={`${id}-panel`} tabIndex={active===index?0:-1} onClick={()=>setActive(index)} onKeyDown={event=>tabKey(event,index,images.length,setActive)}>{item.category}</button>)}</div>
    <div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active}`} className="gallery-stage">
      <button ref={trigger} className="gallery-main" aria-label={`Enlarge ${images[active].title}`} onClick={open}><motion.div key={images[active].src} initial={reduce?false:{opacity:.55,scale:1.025}} animate={{opacity:1,scale:1}} transition={{duration:.28}}><Image src={images[active].src} alt={images[active].alt} fill sizes="(max-width:767px) 100vw, 55vw" /></motion.div><span className="gallery-zoom"><ZoomIn size={17}/> A closer look</span></button>
      <div className="gallery-caption"><span className="gallery-count">0{active+1}<span> / 0{images.length}</span></span><p className="eyebrow">A LITTLE INSPIRATION</p><h3>{images[active].title}</h3><p>{images[active].note}</p><p className="small-copy">Illustrative inspiration. Specific styles, products and finishes are confirmed individually.</p><div className="gallery-thumbs">{images.map((item,index)=><button key={item.src} className={active===index?'selected':''} aria-label={`View ${item.title}`} aria-pressed={active===index} onClick={()=>setActive(index)}><Image src={item.src} alt="" fill sizes="80px"/></button>)}</div></div>
    </div>
    <dialog ref={dialog} className="gallery-dialog" data-closing={closing || undefined} aria-label={`${label} enlarged photograph`} onClose={onDialogClose} onCancel={onDialogCancel} onKeyDown={event=>{onDialogKeyDown(event);if(event.key==='ArrowRight'){event.preventDefault();move(1)}if(event.key==='ArrowLeft'){event.preventDefault();move(-1)}}} onClick={event=>{if(event.target===dialog.current)closeDialog()}}><button className="icon-button gallery-close" aria-label="Close image gallery" onClick={()=>closeDialog()}><X size={24}/></button><div key={images[enlarged].src} className="lightbox-photo"><Image src={images[enlarged].src} alt={images[enlarged].alt} fill sizes="90vw"/></div><div className="lightbox-controls"><button className="icon-button" aria-label="Previous photograph" onClick={()=>move(-1)}><ChevronLeft/></button><p aria-live="polite">{images[enlarged].title}<span>0{enlarged+1} / 0{images.length}</span></p><button className="icon-button" aria-label="Next photograph" onClick={()=>move(1)}><ChevronRight/></button></div></dialog>
  </div>;
}

const nailModes = [
  {label:'The manicure',title:'A beautiful little gesture.',image:'/images/nail-detail.webp',alt:'French manicure against pale lavender silk',intro:'For the hands that do so much, a small moment of considered care. Talk through your preferred shape, length and finish, from a quiet natural look to a touch of colour.',details:['Share any existing polish or enhancements.','Discuss shaping, care steps and available finishes.','Ask about setting time and product-specific care.']},
  {label:'The pedicure',title:'A moment to feel grounded.',image:'/images/pedicure.webp',alt:'A softly polished pedicure beside ivory towels and a ceramic foot basin',intro:'Settle into a comfortable chair and give your feet a little attention. Discuss the included cosmetic care, your preferred finish and the practical setup for a visit at home.',details:['Confirm space, water and seating requirements.','Discuss comfort and any skin or nail concerns first.','Ask about suitable footwear and aftercare.']},
];
export function NailSwitcher() {
  const [active,setActive]=useState(0);const id=useId();const item=nailModes[active];
  return <div className="nail-switcher"><div className="nail-tabs" role="tablist" aria-label="Explore hand and foot care">{nailModes.map((mode,index)=><button role="tab" id={`${id}-tab-${index}`} aria-controls={`${id}-panel`} aria-selected={active===index} tabIndex={active===index?0:-1} onClick={()=>setActive(index)} onKeyDown={event=>tabKey(event,index,2,setActive)} key={mode.label}>{mode.label}<span>0{index+1}</span></button>)}</div><div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} tabIndex={0} className="nail-tab-panel"><div className="nail-tab-photo"><Image key={item.image} src={item.image} alt={item.alt} fill sizes="(max-width:767px) 100vw, 50vw"/></div><div key={active} className="tab-crossfade"><p className="eyebrow">HANDS & FEET, PERSONALLY CONSIDERED</p><h3>{item.title}</h3><p>{item.intro}</p><ol>{item.details.map((detail,index)=><li key={detail}><span>0{index+1}</span>{detail}</li>)}</ol><p className="small-copy">Exact service steps and product availability are discussed before your visit. These are cosmetic beauty services.</p></div></div></div>;
}

export function BeautyGuide() {
  const [step,setStep]=useState(0);const [focus,setFocus]=useState('');const [moment,setMoment]=useState('');const heading=useRef<HTMLHeadingElement>(null);const previousStep=useRef(step);
  useEffect(()=>{if(previousStep.current!==step){heading.current?.focus();previousStep.current=step;}},[step]);
  const index=focus==='skin'?0:focus==='hair'?1:focus==='nails'?2:moment==='occasion'?1:2;
  const service=services[index];const reset=()=>{setFocus('');setMoment('');setStep(0)};
  const questions=[{title:'What would you love a little time for?',options:[['skin','A traditional hair-removal ritual'],['hair','A beautiful hair moment'],['nails','Care for my hands or feet'],['exploring','I’m simply exploring']]},{title:'What kind of moment do you have in mind?',options:[['everyday','An everyday refresh'],['occasion','Getting ready for an occasion'],['pause','A quiet pause, just for me']]}];
  return <div className="beauty-guide" id="your-ritual"><div className="guide-intro"><p className="eyebrow">A LITTLE DISCOVERY</p><h2>What does your<br /><em>beauty moment look like?</em></h2><p>Two simple questions to explore our collection. Follow your preferences, find a little inspiration.</p><span className="script">Let’s find your ritual.</span></div><div className="guide-panel"><p className="guide-step">{step<2?`YOUR PREFERENCES · 0${step+1} OF 02`:'YOUR LITTLE STARTING POINT'}</p><h3 ref={heading} tabIndex={-1}>{step<2?questions[step].title:`A lovely place to begin: ${service.shortTitle}.`}</h3>{step<2?<><fieldset><legend className="sr-only">{questions[step].title}</legend>{questions[step].options.map(([value,label])=><label className="guide-option" key={value}><input type="radio" name={`guide-question-${step}`} value={value} checked={(step===0?focus:moment)===value} onChange={()=>step===0?setFocus(value):setMoment(value)}/><span>{label}</span><span className="radio-indicator" aria-hidden="true"/></label>)}</fieldset><div className="guide-actions">{step===1&&<button className="text-link" onClick={()=>setStep(0)}><ArrowLeft size={16}/>Back</button>}<button className="button button-gold" disabled={step===0?!focus:!moment} onClick={()=>setStep(step+1)}>{step===0?'A little more':'See my inspiration'}<ArrowRight size={17}/></button></div></>:<div className="guide-result"><p>{service.description}</p><p className="guide-explanation">{focus==='exploring'?`You’re exploring, and chose ${moment==='occasion'?'an occasion':'a personal refresh'}. This is one possible place to start.`:'This suggestion follows the service interest you selected.'} It is not a professional suitability assessment.</p><Link className="button button-gold" href={`/services/${service.slug}`}>Discover the ritual<ArrowRight size={17}/></Link><button className="guide-reset" onClick={reset}><RotateCcw size={14}/>Start again</button></div>}<p className="guide-privacy">A preference guide, not medical advice. Your answers are not sent or saved.</p></div></div>;
}

export function FAQBrowser() {
  const [query,setQuery]=useState('');const [category,setCategory]=useState('all');const inputId=useId();
  const groups=faqGroups.filter(group=>category==='all'||group.key===category).map(group=>({...group,items:group.items.filter(item=>(item.question+' '+item.answer).toLowerCase().includes(query.trim().toLowerCase()))})).filter(group=>group.items.length);
  const count=groups.reduce((total,group)=>total+group.items.length,0);
  return <div className="faq-browser"><aside><label htmlFor={inputId}>What’s on your mind?</label><div className="faq-search"><Search size={18}/><input id={inputId} type="search" placeholder="Search your questions" maxLength={100} value={query} onChange={event=>setQuery(event.target.value)}/></div><div className="faq-categories" aria-label="Question categories"><button aria-pressed={category==='all'} onClick={()=>setCategory('all')}>All questions<span>{faqGroups.reduce((n,g)=>n+g.items.length,0)}</span></button>{faqGroups.map(group=><button key={group.key} aria-pressed={category===group.key} onClick={()=>setCategory(group.key)}>{group.label}<ArrowUpRight size={16}/></button>)}</div><p>Can’t find your answer?<br/><Link href="/contact">A little conversation can help.</Link></p></aside><div className="faq-results"><p className="faq-result-count" role="status">{count} {count===1?'thoughtful answer':'thoughtful answers'}{query.trim()?` for “${query.trim()}”`:''}</p>{groups.map(group=><section className="faq-result-group" key={group.key}><p className="eyebrow">{group.label}</p><h2>{group.title}</h2><Accordion key={`${category}-${query}-${group.key}`} items={group.items}/></section>)}{count===0&&<div className="faq-empty"><span aria-hidden="true">✧</span><h2>A little different wording?</h2><p>We couldn’t find a question that matches. Try “booking”, “hair”, or “location”.</p><button className="text-link" onClick={()=>{setQuery('');setCategory('all')}}>Show every question<ArrowRight size={17}/></button></div>}</div></div>;
}
