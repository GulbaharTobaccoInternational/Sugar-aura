import Image from 'next/image';
import { business } from '@/lib/config/business';
import { BookLink } from './book-link';

export function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <div className="header-brand">
          <Image
            className="brand-logo"
            src="/branding/sugar-and-aura.webp"
            alt="Sugar & Aura"
            width={900}
            height={294}
            unoptimized
          />
          <span className="header-tagline">{business.descriptor}</span>
        </div>
        <BookLink className="header-book" />
      </div>
    </header>
  );
}
