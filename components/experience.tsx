'use client';

import { useEffect, useId, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { AnimatePresence, motion, MotionConfig, useAnimationControls, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { whatsappUrl } from '@/lib/booking';
import { services, type FAQ } from '@/lib/content/services';

const subscribeReady = () => () => {};
const clientReady = () => true;
const serverReady = () => false;
function useClientReady() { return useSyncExternalStore(subscribeReady, clientReady, serverReady); }

export function ExperienceProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function BookButton({ children = 'Book now', className = '', onClick }: {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a className={`button button-gold booking-link ${className}`} href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      {children}<ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
    </a>
  );
}

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  const controls = useAnimationControls();
  return <motion.div className={className} initial={false} animate={controls} onViewportEnter={entry => {
    // SSR and failed-JS content stays visible. Animate only as it approaches from below;
    // a rapid jump into already visible content must never leave a blank section.
    if (reduce || !entry || entry.boundingClientRect.top < window.innerHeight * .85) return;
    void controls.start({ opacity: [0, 1], y: [18, 0], transition: { duration: .48, delay: Math.min(delay, .24), ease: [.22, 1, .36, 1] } }).catch(() => controls.set({ opacity: 1, y: 0 }));
  }} viewport={{ once: true, margin: '0px 0px 120px 0px', amount: 0 }}>{children}</motion.div>;
}

export function HeroEntrance({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={false} animate={reduce ? {} : { opacity: [.7, 1], y: [12, 0] }} transition={{ duration: .45, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}

export function Parallax({ children, className = '' }: { children: ReactNode; className?: string }) {
  const target = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [12, -12]);
  return <motion.div ref={target} className={className} style={{ y: reduce ? 0 : y }}>{children}</motion.div>;
}

export function Accordion({ items }: { items: FAQ[] }) {
  const [active, setActive] = useState<number | null>(0);
  const id = useId();
  return <div className="accordion">{items.map((item, index) => <div className={`accordion-item ${active === index ? 'is-open' : ''}`} key={item.question}>
    <h3><button aria-expanded={active === index} aria-controls={`${id}-${index}`} id={`${id}-trigger-${index}`} onClick={() => setActive(active === index ? null : index)}><span>{item.question}</span><span className="accordion-symbol" aria-hidden="true" /></button></h3>
    <AnimatePresence initial={false}>{active === index && <motion.div id={`${id}-${index}`} role="region" aria-labelledby={`${id}-trigger-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .28 }}><p>{item.answer}</p></motion.div>}</AnimatePresence>
  </div>)}</div>;
}

export function ContactForm() {
  const ready = useClientReady();
  const [reviewed, setReviewed] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const status = useRef<HTMLDivElement>(null);
  useEffect(() => { if (reviewed) status.current?.focus(); }, [reviewed]);
  return <form ref={form} className="contact-form" onSubmit={event => { event.preventDefault(); if (form.current?.checkValidity()) setReviewed(true); }} onChange={() => { if (reviewed) setReviewed(false); }}>
    <p className="eyebrow">A NOTE TO SUGAR & AURA</p><h2>Let’s talk <em>beauty.</em></h2>
    <p className="form-notice"><span aria-hidden="true">✧</span> This form is a local preview; nothing will be sent or saved. To arrange a visit, use Book Now to continue on WhatsApp.</p>
    <div className="form-row"><div><label htmlFor="name">Your name <span>*</span></label><input id="name" name="name" autoComplete="name" required maxLength={100} placeholder="Full name" /></div><div><label htmlFor="email">Email address <span>*</span></label><input type="email" id="email" name="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></div></div>
    <div className="form-row"><div><label htmlFor="phone">Phone number <span>*</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" required pattern={'(?=(?:[^0-9]*[0-9]){7})[+0-9\\(\\) .\\-]{7,25}'} title="Use at least 7 digits and at most 25 characters. Spaces, +, brackets and hyphens are allowed." maxLength={25} placeholder="Your contact number" /></div><div><label htmlFor="service">Service of interest <span>*</span></label><select id="service" name="service" required defaultValue=""><option value="" disabled>Select a beauty ritual</option>{services.map(service => <option key={service.slug} value={service.slug}>{service.title}</option>)}<option value="general">A general enquiry</option></select></div></div>
    <label htmlFor="message">A little about what you have in mind <span>*</span></label><textarea id="message" name="message" required minLength={10} maxLength={3000} rows={5} placeholder="Tell us about your preferred service and location. Please don’t include sensitive health information." />
    <p className="small-copy">Fields marked * are required. See our <Link href="/privacy">privacy policy</Link> for how this preview works.</p>
    <button type="submit" disabled={!ready} className="button button-plum">Check enquiry <ArrowRight size={17} /></button>
    {reviewed && <div ref={status} tabIndex={-1} className="form-status" role="status"><Check size={21} /><div><strong>Your form is ready to review.</strong><p>This form is not connected to a delivery service. Your enquiry has not been sent or saved, and no appointment has been made.</p></div></div>}
  </form>;
}
