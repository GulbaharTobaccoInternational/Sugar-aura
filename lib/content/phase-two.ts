import { services, generalFAQs } from './services';

export const serviceNotes = [
  { title: 'Tradition, with a little sweetness.', benefits: ['Sugar-based hair removal', 'A ritual inspired by Sudanese beauty heritage', 'Areas and suitability discussed individually'] },
  { title: 'Your hair, in a different light.', benefits: ['Inspiration shaped around your hair', 'Everyday and occasion styling conversations', 'A finishing touch in your own space'] },
  { title: 'Consideration, down to your fingertips.', benefits: ['Personal preferences for hands and feet', 'Shape, finish and comfort discussed together', 'A little pause in a familiar setting'] },
];

export const hairGallery = [
  { src: '/images/hair.webp', alt: 'Long dark hair styled in soft sculptural waves', title: 'Softly sculpted', category: 'Waves', note: 'Movement, light and a softly polished finish. Share the shape and volume you love; your hair’s texture and length guide what is achievable.' },
  { src: '/images/hair-chignon.webp', alt: 'Dark hair arranged in a softly sculpted low chignon', title: 'Quietly composed', category: 'Updos', note: 'A gathered silhouette for a considered occasion. Discuss comfort, accessories and the look you have in mind before a styling plan is confirmed.' },
  { src: '/images/hair-sleek.webp', alt: 'Long sleek dark hair against a cream satin blouse', title: 'Simply luminous', category: 'Sleek finishes', note: 'Clean lines and natural-looking shine. Your reference image is a starting point for a conversation about products, finish and heat styling.' },
];
export const nailGallery = [
  { src: '/images/nail-detail.webp', alt: 'Natural French manicure on softly draped lavender silk', title: 'The art of restraint', category: 'The manicure', note: 'A quiet palette, a beautiful shape, a finish that feels like you.' },
  { src: '/images/manicure.webp', alt: 'Soft rose manicure resting on ivory towels', title: 'A softer shade', category: 'The details', note: 'Delicate colour and everyday polish, considered together.' },
  { src: '/images/pedicure.webp', alt: 'Soft pink pedicure beside a ceramic basin and fresh towels', title: 'A little grounding', category: 'The pedicure', note: 'A comfortable moment for your feet, in your familiar space.' },
];

export const hairTips = [
  { question: 'Before the styling moment', answer: 'Share your inspiration, your hair’s texture and length, and any product sensitivities. Ask how your hair should be prepared; washing requirements depend on the style and technique.' },
  { question: 'A little gentleness goes a long way', answer: 'Handle hair gently and choose care products that suit your hair type. Excessive heat can cause damage, so discuss a suitable heat setting with your stylist. A finished style should feel comfortable, without persistent pulling.' },
  { question: 'Keeping the finish beautiful', answer: 'Ask how to handle accessories, maintain your chosen style and return to your normal routine. The right approach depends on the products and techniques used; there is no single routine for every hairstyle.' },
];
export const nailTips = [
  { question: 'A shape for your everyday life', answer: 'Consider what feels comfortable for your hands and your routine. Bring an inspiration image and talk through the length and shape you would like; your provider can discuss the available options.' },
  { question: 'Care between beauty moments', answer: 'Use a suitable moisturiser according to its directions and be gentle with your nails and surrounding skin. Avoid using nails as tools or picking at polish. Ask about the right removal method for your chosen finish.' },
  { question: 'The questions worth asking', answer: 'Ask how reusable tools are prepared, which items are single use, and whether any existing polish needs special removal. Share sensitivities in advance. A cosmetic nail service does not treat a medical nail or skin condition.' },
];

export const faqGroups = [
  { key: 'essentials', label: 'Getting started', title: 'A beautiful beginning.', items: generalFAQs },
  ...services.map(service => ({ key: service.slug, label: service.shortTitle, title: service.title, items: service.faqs })),
];

export const contentSources = {
  sugar: { label: 'Cleveland Clinic · Understanding sugaring', url: 'https://health.clevelandclinic.org/what-is-sugaring' },
  hair: { label: 'AAD · Hair styling without damage', url: 'https://www.aad.org/public/diseases/hair-loss/hair-care/styling' },
  nails: { label: 'AAD · Manicure and pedicure safety', url: 'https://www.aad.org/public/everyday-care/nail-care-secrets/basics/pedicures/manicure-pedicure-safety' },
};
