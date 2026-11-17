import { EMIRATES } from '@/lib/booking';

// Intended enquiry coverage. Enable only after UAE-wide operations are verified.
export const coverageConfirmed = false;
const settings = [
  ['dubai', 'A city of beautiful possibilities.', 'Palm-lined Dubai waterfront with a distant skyline in warm evening light'],
  ['abu-dhabi', 'A little calm in the capital.', 'Abu Dhabi inspired waterfront with ivory architecture and sunlit palms'],
  ['sharjah', 'Tradition, with a personal touch.', 'A quiet Sharjah inspired heritage courtyard with warm stone and palm shadows'],
  ['ajman', 'A softer pace, a lovely pause.', 'A peaceful Ajman inspired beach with turquoise water and cream promenade'],
  ['ras-al-khaimah', 'Room to breathe. Time for you.', 'Warm Hajar mountain landscape inspired by Ras Al Khaimah'],
  ['fujairah', 'Where mountains meet a moment of calm.', 'Fujairah inspired coastline with mountains and a calm pale blue sea'],
  ['umm-al-quwain', 'A quiet corner. A beautiful ritual.', 'A tranquil Umm Al Quwain inspired mangrove lagoon and boardwalk'],
] as const;
export const emirates = EMIRATES.map((name, index) => ({ name, slug: settings[index][0], line: settings[index][1], alt: settings[index][2], image: `/images/emirates/${settings[index][0]}.webp` }));
