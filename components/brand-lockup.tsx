import Image from 'next/image';
import { business } from '@/lib/config/business';

export function BrandLockup({ eager = false }: { eager?: boolean }) {
  return (
    <span className="brand-lockup">
      <Image
        src="/branding/sugar-and-aura-transparent.webp"
        alt="Sugar & Aura"
        width={900}
        height={294}
        loading={eager ? 'eager' : 'lazy'}
        unoptimized
      />
      <span className="brand-descriptor">{business.descriptor}</span>
    </span>
  );
}
