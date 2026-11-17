'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigation } from '@/lib/config/business';
import { BookButton } from './experience';
import { useDialog } from './use-dialog';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { ref: menu, open: openDialog, close: closeDialog, onClose: onDialogClose, onCancel: onDialogCancel, onKeyDown: onDialogKeyDown, closing } = useDialog(260);
  const trigger = useRef<HTMLButtonElement>(null);
  const close = () => closeDialog(true);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    const onResize = () => { if (window.innerWidth >= 1100) closeDialog(true); };
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); };
  }, [closeDialog]);
  const active = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);
  return <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
    <div className="nav-shell">
      <Link className="brand" href="/" aria-label="Sugar and Aura home"><Image src="/branding/logo-light.svg" alt="Sugar & Aura — Traditional Sudanese Sweet" width={315} height={75} priority /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.href} href={item.href} className={active(item.href) ? 'active' : ''} aria-current={active(item.href) ? 'page' : undefined}>{item.label}</Link>)}</nav>
      <BookButton className="header-book" />
      <button ref={trigger} className="menu-trigger icon-button" aria-label="Open navigation menu" aria-haspopup="dialog" onClick={() => openDialog()}><Menu size={27} /></button>
    </div>
    <dialog ref={menu} className="mobile-menu" data-closing={closing || undefined} aria-label="Navigation menu" onKeyDown={onDialogKeyDown} onCancel={onDialogCancel} onClose={onDialogClose}>
      <div className="mobile-menu-top"><Link href="/" onClick={close}><Image src="/branding/logo-light.svg" alt="Sugar & Aura" width={230} height={55} /></Link><button onClick={() => closeDialog()} className="icon-button" aria-label="Close navigation menu"><X size={25} /></button></div>
      <p className="eyebrow">A LITTLE TIME, JUST FOR YOU</p>
      <nav aria-label="Mobile navigation">{navigation.map((item, index) => <Link key={item.href} href={item.href} className={active(item.href) ? 'active' : ''} aria-current={active(item.href) ? 'page' : undefined} onClick={close}><span className="menu-number">0{index + 1}</span>{item.label}<ArrowUpRight size={20} /></Link>)}</nav>
      <BookButton onClick={close} />
      <p className="script">Self-care feels better at home.</p>
    </dialog>
  </header>;
}
