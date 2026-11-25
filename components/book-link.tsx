import { ArrowRight } from 'lucide-react';
import { business } from '@/lib/config/business';

export function BookLink({ className = '' }: { className?: string }) {
  return (
    <a className={`button button-gold ${className}`} href={business.whatsapp} target="_blank" rel="noopener noreferrer">
      Book now <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
    </a>
  );
}
