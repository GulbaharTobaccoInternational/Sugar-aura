/** One source of truth for click-to-chat. Opening a link never confirms a booking. */
export const WHATSAPP_NUMBER = '971505071965';
export const WHATSAPP_DISPLAY = '+971 50 507 1965';
export const EMIRATES = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'] as const;
export type Emirate = typeof EMIRATES[number];
export const BOOKING_SERVICES = {
  'sudanese-sweet': 'Traditional Sudanese Sweet Depilation',
  'hair-styling': 'Hair Styling',
  'manicure-pedicure': 'Manicure & Pedicure',
} as const;
export type BookingService = keyof typeof BOOKING_SERVICES;
export type BookingIntent = { service?: BookingService; emirate?: Emirate };

export function serviceFromPath(pathname: string): BookingService | undefined {
  const slug = pathname.replace(/\/+$/, '').split('/');
  if (slug.length !== 3 || slug[1] !== 'services') return undefined;
  return Object.hasOwn(BOOKING_SERVICES, slug[2]) ? slug[2] as BookingService : undefined;
}
export function createBookingMessage({ service, emirate }: BookingIntent = {}): string {
  const appointment = service ? `a ${BOOKING_SERVICES[service]} appointment at home` : 'a home beauty appointment';
  const details = service
    ? 'Could you please share the available appointment timings and booking details?'
    : emirate
      ? 'Could you please share your available services and appointment timings?'
      : 'Could you please share your available services, appointment timings, and booking details?';
  return `Hello Sugar & Aura! ✨\n\nI'd love to arrange ${appointment}${emirate ? ` in ${emirate}` : ''}.\n\n${details}\n\nThank you!`;
}
export function createWhatsAppUrl(intent: BookingIntent = {}): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(createBookingMessage(intent))}`;
}
