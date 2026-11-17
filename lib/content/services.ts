export type FAQ = { question: string; answer: string };
export type Service = {
  slug: string; number: string; title: string; shortTitle: string; eyebrow: string;
  tagline: string; description: string; image: string; imageAlt: string;
  introTitle: string; intro: string; experience: { title: string; text: string }[];
  preparation: string[]; aftercare: string[]; faqs: FAQ[];
};

export const services: Service[] = [
  {
    slug: 'sudanese-sweet', number: '01', title: 'Traditional Sudanese Sweet', shortTitle: 'Sudanese Sweet',
    eyebrow: 'OUR SIGNATURE RITUAL', tagline: 'Rooted in tradition. Considered for you.',
    description: 'Discover a time-honoured sugar-based hair-removal ritual, brought into the comfort of your own space.',
    image: '/images/sugaring.webp', imageAlt: 'Warm amber sugar paste with lemon, linen and delicate white flowers',
    introTitle: 'A little sweetness. A beautiful tradition.',
    intro: 'Sugaring is a traditional method of hair removal using a sugar-based paste. Sudanese beauty traditions give this ritual a meaningful place in personal care. At Sugar & Aura, that heritage inspires a thoughtful, unhurried approach. The precise paste, technique and areas treated are discussed before a service is confirmed.',
    experience: [
      { title: 'Begin with a conversation', text: 'Share the areas you would like treated, your preferences and any sensitivities. The provider can explain the method and help you understand whether the service is appropriate for you.' },
      { title: 'A carefully prepared ritual', text: 'Your treatment area is prepared, and sugar-based paste is applied and removed in small sections. Technique and the sensation of the treatment vary by area and individual.' },
      { title: 'A considered finish', text: 'The final step is a gentle clean-up and a conversation about caring for the treated area. The aim is a comfortable, personal experience, with no promise of a particular result.' },
    ],
    preparation: ['Discuss recent hair removal, skincare products and any skin sensitivity before confirming a visit.', 'Ask your provider about suitable hair length and how to prepare the areas you have selected.', 'Prepare a clean, comfortable space with privacy and enough room for your treatment.'],
    aftercare: ['Follow the individual aftercare instructions given by your provider.', 'Treat freshly sugared skin gently and discuss when to resume your usual products and routines.', 'If you have an active skin concern or are unsure about suitability, seek advice from a qualified healthcare professional before booking.'],
    faqs: [
      { question: 'What is Traditional Sudanese Sweet?', answer: 'It is a traditional hair-removal ritual using sugar-based paste. Ingredients, consistency and application methods can differ. Ask about the exact service before you confirm your visit.' },
      { question: 'Is sugaring suitable for everyone?', answer: 'Suitability is individual. Share any sensitivities, active skin concerns, allergies or relevant treatments with your provider. A qualified healthcare professional can advise if you have a medical concern.' },
      { question: 'What results can I expect?', answer: 'Sugaring removes hair from the treated area. How the skin feels and how long results last vary with hair growth, technique and individual response; results are not guaranteed.' },
      { question: 'Can I choose the treatment areas?', answer: 'Tell us what you have in mind when discussing an enquiry. The provider will confirm the available areas, suitability and service details before any appointment is agreed.' },
    ],
  },
  {
    slug: 'hair-styling', number: '02', title: 'Hair Styling', shortTitle: 'Hair Styling',
    eyebrow: 'YOUR STYLE, YOUR OCCASION', tagline: 'Beautiful hair. Effortlessly you.',
    description: 'From softly polished everyday looks to something a little more special, make room for a beautiful hair moment at home.',
    image: '/images/hair.webp', imageAlt: 'Glossy dark hair in soft sculpted waves against a warm ivory interior',
    introTitle: 'Your personal finishing touch.',
    intro: 'The right hairstyle feels like an extension of you. Our at-home styling concept begins with your hair, your plans and the look you love. Bring your inspiration and discuss your preferences so that the provider can confirm what is achievable and which styling services are available.',
    experience: [
      { title: 'Everyday, beautifully considered', text: 'A smooth finish, softly shaped waves or a refreshed everyday look can be starting points for a styling conversation. These are examples of styling needs; specific techniques and availability must be confirmed.' },
      { title: 'A moment worth dressing for', text: 'An intimate dinner, a celebration or a personal milestone: share the occasion and your inspiration. Your hair length, texture and desired finish help shape the plan.' },
      { title: 'At home, at your pace', text: 'Settle into your own space, with your outfit and accessories close by. Discuss your preferred products, any sensitivities and practical needs before the visit.' },
    ],
    preparation: ['Share a reference image and describe your hair length, texture and current condition.', 'Confirm whether your hair should be freshly washed or prepared in another way.', 'Have a comfortable chair, a nearby mirror and access to a power outlet ready.'],
    aftercare: ['Ask for guidance on maintaining your particular style and handling any accessories.', 'Use your usual suitable hair-care products, following product directions.', 'Discuss heat styling and product sensitivities with the provider before the service.'],
    faqs: [
      { question: 'What styles can I request?', answer: 'Soft waves, a polished finish or occasion styling are examples of requests to discuss. The provider will confirm the available services and whether your preferred style suits your hair.' },
      { question: 'Should I wash my hair beforehand?', answer: 'Preparation depends on the styling plan and your hair. Confirm the recommended preparation when discussing the service rather than assuming every style needs the same starting point.' },
      { question: 'Can I share an inspiration photograph?', answer: 'Yes. An image is a useful starting point. Results can vary with hair length, texture and condition, so the final approach should be discussed in advance.' },
      { question: 'Are cutting and colouring included?', answer: 'The website describes hair styling. Cutting, colouring and other additional services are not confirmed offerings; ask directly before making plans.' },
    ],
  },
  {
    slug: 'manicure-pedicure', number: '03', title: 'Manicure & Pedicure', shortTitle: 'Manicure & Pedicure',
    eyebrow: 'BEAUTY IN EVERY DETAIL', tagline: 'Little details. A lovely difference.',
    description: 'A little time for your hands and feet, with thoughtful finishing touches and a moment to feel beautifully put together.',
    image: '/images/manicure.webp', imageAlt: 'Delicate nude pink manicure resting on ivory linen beside a white blossom',
    introTitle: 'Care, right down to your fingertips.',
    intro: 'There is something quietly lovely about freshly cared-for hands and feet. Our manicure and pedicure concept pairs a personal beauty moment with the comfort of being at home. Discuss your preferred finish, nail condition and comfort needs before the provider confirms the treatment details.',
    experience: [
      { title: 'The manicure moment', text: 'Talk through your preferred nail shape, length and finish. Nail shaping and polish are examples of options to discuss; the products and exact service steps are confirmed individually.' },
      { title: 'A pause for your feet', text: 'A pedicure can be a welcome moment of everyday care. Tell the provider about your comfort needs and preferred finish, and confirm the setup and included steps before your visit.' },
      { title: 'Details that matter', text: 'Feel comfortable asking how tools are prepared, which items are single use and what products are used. If you have a nail or skin concern, seek appropriate professional advice before a cosmetic treatment.' },
    ],
    preparation: ['Mention any existing polish or enhancements so removal requirements can be discussed.', 'Share product allergies, sensitivities and any nail or skin concerns before confirming a visit.', 'Prepare a well-lit, comfortable space and ask whether access to water is needed.'],
    aftercare: ['Allow your chosen finish to set as advised by the provider.', 'Wear comfortable footwear after a pedicure and follow the specific product-care guidance.', 'Discuss maintenance and removal with the provider; avoid picking at polish or enhancements.'],
    faqs: [
      { question: 'Can I request both a manicure and a pedicure?', answer: 'Share your preference when discussing an enquiry. Combined availability, included steps and the full service details should be confirmed before a visit.' },
      { question: 'Which polish finishes are available?', answer: 'Colours, brands and finishes have not been listed as confirmed offerings. Tell the provider what you would like so available options can be checked.' },
      { question: 'What should I ask about hygiene?', answer: 'Ask how reusable tools are cleaned and prepared, which items are single use, and how the treatment area will be set up. You should feel comfortable discussing your expectations before treatment.' },
      { question: 'Can cosmetic nail care treat a nail condition?', answer: 'This is a beauty service, not medical foot or nail care. If you have discomfort, a suspected infection or another nail or skin concern, seek guidance from a qualified healthcare professional.' },
    ],
  },
];

export const generalFAQs: FAQ[] = [
  { question: 'What is Sugar & Aura?', answer: 'Sugar & Aura is a UAE home-beauty concept focused on Traditional Sudanese Sweet, hair styling, and manicure and pedicure. It brings a thoughtful, personal approach to beauty in the comfort of your home.' },
  { question: 'How do I book a visit?', answer: 'Choose Book Now, then Arrange My Appointment to continue on our official WhatsApp. Your chosen service or emirate is included when known. A visit is only confirmed when the service, location, availability and terms have been agreed directly; opening WhatsApp does not reserve an appointment.' },
  { question: 'Which areas do you serve?', answer: 'Explore all seven emirates on our Areas page and enquire about your location on WhatsApp. Appointment availability and scheduling may vary by location. Our team will confirm your address, chosen ritual and availability before a visit is agreed.' },
  { question: 'How much do treatments cost?', answer: 'Prices have not yet been published. Request the full price and any location or additional-service charges before agreeing to a visit. No payment is collected on this website.' },
  { question: 'What do I need to prepare at home?', answer: 'A comfortable, private, well-lit space is a helpful starting point. Requirements vary by service, so confirm access, space, water or power needs and any treatment preparation before a visit.' },
  { question: 'Can I discuss sensitivities or preferences?', answer: 'Yes. Share relevant allergies, product sensitivities and comfort preferences before confirming a service. If you have a medical or active skin concern, ask a qualified healthcare professional about suitability.' },
];
