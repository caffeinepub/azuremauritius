export interface Activity {
  id: number;
  title: string;
  category: string;
  price: number;
  duration: string;
  location: string;
  description: string;
  rating: number;
  reviewCount: number;
  isSpecialOffer: boolean;
  isTrending: boolean;
  isBestSeller: boolean;
  imageKey: string;
}

export const IMAGE_MAP: Record<string, string> = {
  catamaran: "/assets/generated/cat-catamaran.dim_600x400.jpg",
  safari: "/assets/generated/cat-safari.dim_600x400.jpg",
  sightseeing: "/assets/generated/cat-sightseeing.dim_600x400.jpg",
  ilecerfs: "/assets/generated/cat-ilecerfs.dim_600x400.jpg",
  dolphins: "/assets/generated/cat-dolphins.dim_600x400.jpg",
  helicopter: "/assets/generated/cat-helicopter.dim_600x400.jpg",
  hiking: "/assets/generated/cat-hiking.dim_600x400.jpg",
  quad: "/assets/generated/cat-quad.dim_600x400.jpg",
  horseriding: "/assets/generated/cat-horseriding.dim_600x400.jpg",
};

export const ACTIVITIES: Activity[] = [
  {
    id: 1,
    title: "Full Day Catamaran Cruise to Ile aux Cerfs",
    category: "Catamaran Cruises",
    price: 105,
    duration: "Full Day (8 hours)",
    location: "East Coast, Mauritius",
    description:
      "Sail on a luxury catamaran to the stunning Ile aux Cerfs lagoon. Includes snorkeling, BBQ lunch on the beach, open bar, and water sports. An unforgettable day on the crystal-clear waters of Mauritius.",
    rating: 4.8,
    reviewCount: 312,
    isSpecialOffer: true,
    isTrending: true,
    isBestSeller: true,
    imageKey: "catamaran",
  },
  {
    id: 2,
    title: "Dolphin Watching & Swimming Tour",
    category: "Dolphins & Whales",
    price: 61,
    duration: "Half Day (4 hours)",
    location: "West Coast, Tamarin",
    description:
      "Join a sunrise boat trip to swim with wild spinner dolphins off the coast of Tamarin Bay. Watch these playful creatures in their natural habitat and snorkel in the turquoise lagoon.",
    rating: 4.7,
    reviewCount: 215,
    isSpecialOffer: false,
    isTrending: true,
    isBestSeller: true,
    imageKey: "dolphins",
  },
  {
    id: 3,
    title: "Casela Safari Park – Full Experience",
    category: "Safari Wildlife",
    price: 83,
    duration: "Full Day (6 hours)",
    location: "Casela, West Mauritius",
    description:
      "Experience Africa in Mauritius at Casela Nature Parks. Walk with lions, interact with giraffes, see cheetahs and zebras, and enjoy thrilling zip-lines through the savanna landscape.",
    rating: 4.6,
    reviewCount: 178,
    isSpecialOffer: true,
    isTrending: true,
    isBestSeller: false,
    imageKey: "safari",
  },
  {
    id: 4,
    title: "Helicopter Tour of Mauritius",
    category: "Helicopter & Skydiving",
    price: 198,
    duration: "30 minutes",
    location: "Sir Seewoosagur Ramgoolam Airport",
    description:
      "See Mauritius from the sky on an exhilarating helicopter flight. Soar over turquoise lagoons, volcanic peaks, waterfalls, sugarcane fields and the stunning coastline of the island.",
    rating: 4.9,
    reviewCount: 94,
    isSpecialOffer: true,
    isTrending: false,
    isBestSeller: false,
    imageKey: "helicopter",
  },
  {
    id: 5,
    title: "Island North Tour – Grand Baie & Cap Malheureux",
    category: "Sightseeing Tours",
    price: 50,
    duration: "Full Day (7 hours)",
    location: "North Mauritius",
    description:
      "Explore the best of northern Mauritius on this guided tour. Visit the colourful Hindu temples, the famous red-roofed church at Cap Malheureux, the lively market of Grand Baie, and Pamplemousses Botanical Garden.",
    rating: 4.5,
    reviewCount: 142,
    isSpecialOffer: false,
    isTrending: true,
    isBestSeller: false,
    imageKey: "sightseeing",
  },
  {
    id: 6,
    title: "Quad Biking Adventure – Black River Gorges",
    category: "Quad & 4x4",
    price: 72,
    duration: "3 hours",
    location: "Black River, Mauritius",
    description:
      "Ride powerful quad bikes through the rugged terrain of the Black River Gorges National Park. Traverse sugarcane plantations, scenic trails and enjoy panoramic views of the southern coastline.",
    rating: 4.6,
    reviewCount: 189,
    isSpecialOffer: false,
    isTrending: true,
    isBestSeller: true,
    imageKey: "quad",
  },
  {
    id: 7,
    title: "Horse Riding on the Beach at Sunrise",
    category: "Horse Riding",
    price: 77,
    duration: "2 hours",
    location: "Le Morne, South-West Mauritius",
    description:
      "Gallop along the stunning beach of Le Morne at sunrise on horseback. Ride with the gentle waves and enjoy the silhouette of Le Morne mountain. Suitable for all skill levels, beginner-friendly.",
    rating: 4.8,
    reviewCount: 97,
    isSpecialOffer: true,
    isTrending: false,
    isBestSeller: true,
    imageKey: "horseriding",
  },
  {
    id: 8,
    title: "Hiking Le Pouce Mountain – Port Louis Views",
    category: "Hiking & Trekking",
    price: 39,
    duration: "Half Day (4 hours)",
    location: "Central Plateau, Mauritius",
    description:
      "Hike to the summit of Le Pouce, one of Mauritius' most iconic peaks. Enjoy breathtaking views over Port Louis, the northern coastline, and the surrounding mountains on this guided trek.",
    rating: 4.7,
    reviewCount: 126,
    isSpecialOffer: false,
    isTrending: false,
    isBestSeller: false,
    imageKey: "hiking",
  },
  {
    id: 9,
    title: "Ile aux Cerfs Day Trip with Watersports",
    category: "Ile aux Cerfs",
    price: 88,
    duration: "Full Day (7 hours)",
    location: "Ile aux Cerfs, East Mauritius",
    description:
      "Spend a full day on the paradise island of Ile aux Cerfs. Enjoy kayaking, pedalo rides, parasailing, and snorkeling in the crystal-clear lagoon, with a beach BBQ lunch included.",
    rating: 4.7,
    reviewCount: 204,
    isSpecialOffer: true,
    isTrending: true,
    isBestSeller: true,
    imageKey: "ilecerfs",
  },
  {
    id: 10,
    title: "Sunset Catamaran Cruise with Dinner",
    category: "Catamaran Cruises",
    price: 94,
    duration: "Evening (3 hours)",
    location: "Grand Baie, North Mauritius",
    description:
      "Watch the Mauritius sunset from the deck of a luxury catamaran. Enjoy a romantic evening with cocktails, a gourmet dinner, and live music as the sun dips below the horizon over the lagoon.",
    rating: 4.9,
    reviewCount: 158,
    isSpecialOffer: false,
    isTrending: false,
    isBestSeller: true,
    imageKey: "catamaran",
  },
  {
    id: 11,
    title: "South Island Discovery Tour",
    category: "Sightseeing Tours",
    price: 55,
    duration: "Full Day (8 hours)",
    location: "South Mauritius",
    description:
      "Explore the untouched beauty of southern Mauritius. Visit the dramatic Gris Gris cliffs, the colourful Earth at Chamarel, Rochester Falls, and the serene coastal village of Mahebourg.",
    rating: 4.6,
    reviewCount: 163,
    isSpecialOffer: false,
    isTrending: false,
    isBestSeller: false,
    imageKey: "sightseeing",
  },
  {
    id: 12,
    title: "Deep Sea Fishing Charter",
    category: "Dolphins & Whales",
    price: 132,
    duration: "Half Day (5 hours)",
    location: "Black River Bay",
    description:
      "Try your luck fishing in some of the world's best deep-sea waters off the coast of Black River. Target marlin, tuna, wahoo, and dorado on a fully equipped sport fishing boat.",
    rating: 4.5,
    reviewCount: 71,
    isSpecialOffer: true,
    isTrending: false,
    isBestSeller: false,
    imageKey: "dolphins",
  },
];

export const CATEGORIES = [
  { name: "Catamaran Cruises", imageKey: "catamaran", count: 12 },
  { name: "Safari Wildlife", imageKey: "safari", count: 8 },
  { name: "Sightseeing Tours", imageKey: "sightseeing", count: 15 },
  { name: "Ile aux Cerfs", imageKey: "ilecerfs", count: 6 },
  { name: "Dolphins & Whales", imageKey: "dolphins", count: 9 },
  { name: "Helicopter & Skydiving", imageKey: "helicopter", count: 5 },
  { name: "Hiking & Trekking", imageKey: "hiking", count: 11 },
  { name: "Quad & 4x4", imageKey: "quad", count: 7 },
  { name: "Horse Riding", imageKey: "horseriding", count: 4 },
];
