export interface Package {
  id: string;
  name: string;
  duration: string;
  destinations: string[];
  startingPrice: number;
  description: string;
  highlights: string[];
  inclusions: string[];
  image: string;
  tag?: string;
}

export interface Hotel {
  id: string;
  name: string;
  category: 'Luxury' | 'Premium' | 'Deluxe';
  rating: number;
  location: string;
  amenities: string[];
  image: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  capacity: string;
  description: string;
  features: string[];
  image: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: 'operators',
    title: 'Experienced Tour Operators',
    description: 'Over 15 years of curating flawless pilgrimage journeys with deep local knowledge of sacred rituals.',
    iconName: 'Compass',
  },
  {
    id: 'packages',
    title: 'Affordable Luxury Packages',
    description: 'Transparent pricing with no hidden charges. Premium service tailored to suit your spiritual needs and budget.',
    iconName: 'IndianRupee',
  },
  {
    id: 'hotels',
    title: 'Handpicked Luxury Hotels',
    description: 'Stay in the finest properties close to the temples, offering top-tier comfort, hygiene, and satvik dining.',
    iconName: 'Hotel',
  },
  {
    id: 'cab',
    title: 'Private AC Cab & Travel',
    description: 'Chauffeur-driven executive vehicles at your service for smooth intercity transits and local temple visits.',
    iconName: 'Car',
  },
  {
    id: 'assistance',
    title: '24/7 Spiritual & Ground Support',
    description: 'Round-the-clock customer care and on-ground guides to assist you with temple timings, rituals, and VIP entries.',
    iconName: 'PhoneCall',
  },
  {
    id: 'drivers',
    title: 'Verified & Courteous Drivers',
    description: 'Highly professional, English/Hindi speaking local drivers familiar with all routes and pilgrimage protocols.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'trust',
    title: 'Trusted by Thousands',
    description: 'Proudly served over 12,000+ happy families. Rated 4.9/5 stars on Google and major travel networks.',
    iconName: 'Award',
  },
];

export const tourPackages: Package[] = [
  {
    id: 'weekend-ayodhya',
    name: 'Weekend Ayodhya Tour Package',
    duration: '2 Nights / 3 Days',
    destinations: ['Ayodhya'],
    startingPrice: 5999,
    description: 'A dedicated spiritual retreat to Ayodhya Dham. Experience the divine glory of Ram Janmabhoomi and seek blessings at the newly built majestic temple complex.',
    highlights: [
      'Ram Janmabhoomi Temple VIP Darshan & Puja',
      'Mesmerizing evening Saryu River Aarti',
      'Seek blessings at Hanuman Garhi & Kanak Bhawan',
      'Tour of historical Dashrath Mahal and local ghats',
    ],
    inclusions: ['Boutique Hotel Stay', 'Daily Veg Breakfast', 'Private AC Cab for transit', 'Local Tour Coordinator', 'Assisted temple entries'],
    image: '/images/Ayodhya-tour1.png',
    tag: 'Weekend Special',
  },
  {
    id: 'ayodhya-varanasi-prayagraj',
    name: 'Ayodhya Varanasi Prayagraj Tour',
    duration: '4 Nights / 5 Days',
    destinations: ['Varanasi', 'Prayagraj', 'Ayodhya'],
    startingPrice: 9500,
    description: 'Seek blessings across Uttar Pradesh\'s holy trinity. Experience the Ganga Aarti of Kashi, take a holy dip in the Sangam, and offer prayers at Ayodhya Ram Mandir.',
    highlights: [
      'Kashi Vishwanath Corridor tour & Ganga Aarti in Varanasi',
      'Holy bath at Triveni Sangam and Hanuman Temple in Prayagraj',
      'Exclusive Ram Mandir VIP Darshan in Ayodhya Dham',
      'Morning boat ride along the historic ghats of Benares',
    ],
    inclusions: ['Premium Hotels (4 Nights)', 'Breakfast & Dinner', 'Private Chauffeur AC Cab', 'VIP Darshan Assistance', 'Boat Ride Tickets'],
    image: '/images/Ayodhya-tour2.png',
    tag: 'Best Seller',
  },
  {
    id: 'varanasi-chitrakoot-ayodhya',
    name: 'Varanasi Chitrakoot Ayodhya Tour',
    duration: '5 Nights / 6 Days',
    destinations: ['Varanasi', 'Prayagraj', 'Chitrakoot', 'Ayodhya'],
    startingPrice: 12499,
    description: 'Follow the sacred footprints of Lord Rama during his exile in Chitrakoot, unified with the spiritual essence of Varanasi, Ayodhya, and Prayagraj.',
    highlights: [
      'Spiritual exploration of Chitrakoot exile sites (Ram Ghat, Kamadgiri)',
      'Triveni Sangam holy bath and Hanuman temple in Prayagraj',
      'Divine morning Subah-e-Benares boat ride in Varanasi',
      'Ram Janmabhoomi and Kanak Bhawan darshan in Ayodhya Dham',
    ],
    inclusions: ['Deluxe Stays (5 Nights)', 'Satvik Breakfast & Dinner', 'Private AC Executive Vehicle', 'Special Puja Facilitator', 'All local entries'],
    image: '/images/Ayodhya-tour3.png',
    tag: 'Spiritual Trail',
  },
  {
    id: 'ayodhya-naimisharanya',
    name: 'Ayodhya Varanasi Tour Package',
    duration: '2 Nights / 3 Days',
    destinations: ['Ayodhya', 'Naimisharanya'],
    startingPrice: 6499,
    description: 'Seek blessings at Ram Janmabhoomi in Ayodhya Dham and take a day excursion to Naimisharanya forest, the home of Puranic wisdom and the Chakra Kund.',
    highlights: [
      'VIP Darshan at Ram Janmabhoomi Mandir',
      'Day trip to Naimisharanya sacred Chakra Tirth',
      'Offer prayers at Hanuman Garhi and Kanak Bhawan',
      'Evening walk and sound show along the Saryu River',
    ],
    inclusions: ['Comfort Deluxe Hotel (2 Nights)', 'Daily Veg Breakfast', 'Private AC Sedan/SUV', 'Puja Priest Coordination', 'Taxes & Tolls'],
    image: '/images/Ayodhya-tour4.png',
  },
  {
    id: 'up-pilgrimage-grand',
    name: 'Uttar Pradesh Pilgrimage Tour',
    duration: '6 Nights / 7 Days',
    destinations: ['Ayodhya', 'Prayagraj', 'Chitrakoot', 'Varanasi', 'Bodh Gaya'],
    startingPrice: 14799,
    description: 'A comprehensive pilgrimage tour connecting the historical hubs of Hinduism and Buddhism, covering Kashi, Ayodhya, Chitrakoot, and Bodh Gaya.',
    highlights: [
      'Mahabodhi temple and sacred Bodhi Tree tour in Bodh Gaya',
      'Kashi Vishwanath Corridor and morning ghat ride in Varanasi',
      'Triveni Sangam snan in Prayagraj & Chitrakoot darshan',
      'Ram Mandir Darshan and local sightseeing in Ayodhya Dham',
    ],
    inclusions: ['Selected 3/4-Star Hotels (6 Nights)', 'Breakfast & Dinner', 'Chauffeur-Driven AC Vehicle', 'Local Guides in all cities', 'Border Permits & Tolls'],
    image: '/images/Ayodhya-tour5.png',
    tag: 'Grand Yatra',
  },
  {
    id: 'divine-trails-up',
    name: 'Divine Trails Uttar Pradesh Tour',
    duration: '7 Nights / 8 Days',
    destinations: ['Lucknow', 'Ayodhya', 'Prayagraj', 'Chitrakoot', 'Varanasi', 'Bodh Gaya'],
    startingPrice: 16499,
    description: 'The ultimate spiritual circuit. Cover historic Lucknow, the epic Ram Mandir, holy Sangam, Chitrakoot hills, old Kashi Vishwanath, and serene Bodh Gaya.',
    highlights: [
      'Lucknow Bara Imambara heritage walk & sightseeing',
      'Exclusive Ram Mandir VIP Darshan in Ayodhya Dham',
      'Sangam Snan in Prayagraj and pilgrimage trail of Chitrakoot',
      'Varanasi Ganga Aarti & Mahabodhi Buddhist Temple in Bodh Gaya',
    ],
    inclusions: ['Premium Hotels (7 Nights)', 'Daily Satvik Meals', 'Toyota Innova Crysta / Luxury Traveller', 'Vedic Scholar Guide', 'Private Rituals Priest'],
    image: '/images/Ayodhya-tour6.png',
    tag: 'Premium Luxury',
  },
];

export const hotelDetails: Hotel[] = [
  {
    id: 'kashi-palace',
    name: 'BrijRama Palace - Heritage Boutique Hotel',
    category: 'Luxury',
    rating: 5,
    location: 'Darbhanga Ghat, Varanasi',
    amenities: ['Riverfront View', 'Vedic Chanting Sessions', 'Pure Vegetarian Fine Dining', 'Spa & Yoga Desk', 'Free Wi-Fi'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'ayodhya-grand',
    name: 'The Ramayana Hotel',
    category: 'Premium',
    rating: 4.5,
    location: 'Near Ram Ki Paidi, Ayodhya',
    amenities: ['Spacious Rooms', 'Swimming Pool', 'Multi-Cuisine Satvik Restaurant', 'Temple Shuttle Service', 'Beautiful Gardens'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'prayag-regency',
    name: 'Hotel Kanha Shyam',
    category: 'Deluxe',
    rating: 4.2,
    location: 'Civil Lines, Prayagraj',
    amenities: ['Central Location', 'Premium Bedding', 'Veg Restaurant & Cafe', 'Travel Desk', '24x7 Room Service'],
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
  },
];

export const vehicles: Vehicle[] = [
  {
    id: 'sedan',
    name: 'Premium Sedan',
    type: 'Maruti Dzire / Toyota Etios',
    capacity: '3-4 Passengers',
    description: 'Perfect for couples and small families looking for a budget-friendly, fully air-conditioned, comfortable transit.',
    features: ['Ample luggage space', 'Aux / Bluetooth audio', 'Experienced driver', 'Mineral water bottles'],
    image: '/images/vehicle_sedan.jpg',
  },
  {
    id: 'suv',
    name: 'Executive SUV',
    type: 'Toyota Innova Crysta',
    capacity: '6-7 Passengers',
    description: 'The absolute gold standard in Indian highway travel. Exceptionally spacious, comfortable suspension, and luxury seating.',
    features: ['Leather captain seats', 'Tri-zone climate control', 'Premium safety features', 'Professional highway driver'],
    image: '/images/vehicle_suv.jpg',
  },
  {
    id: 'tempo',
    name: 'Luxury Tempo Traveller',
    type: 'Force Urbania / Luxury Tempo',
    capacity: '12-16 Passengers',
    description: 'Ideal for extended families and corporate groups traveling together. Equipped with high-roof headroom and plush reclining seats.',
    features: ['Push-back reclining seats', 'Individual AC vents', 'LED Screen & Audio System', 'Dedicated luggage carrier'],
    image: '/images/vehicle_tempo.jpg',
  },
];

export const reviews: Review[] = [
  {
    id: 'rev-1',
    name: 'Rajesh K. Sharma',
    location: 'New Delhi, India',
    rating: 5,
    text: 'We booked the Divine Trio 6 Days package for my elderly parents. The agency went above and beyond. The VIP Darshan assistance in Kashi and Ayodhya was seamless, saving us hours of waiting. Highly recommended!',
    date: 'June 15, 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 'rev-2',
    name: 'Meenakshi Iyer',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    text: 'Excellent service! The hotels selected were clean and very close to the temples. Our driver, Ramesh, was extremely respectful, drove safely, and knew all the local secrets. The boat ride in Varanasi was unforgettable.',
    date: 'May 28, 2026',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 'rev-3',
    name: 'Anirudh & Neha Goel',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'A truly luxury pilgrimage! The Ramayana Hotel in Ayodhya and BrijRama in Varanasi were exceptional. Everything was planned with precision. The 24/7 ground coordinator called us daily to check on comfort.',
    date: 'April 10, 2026',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100',
  },
];

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book a tour package with your agency?',
    answer: 'You can book by submitting the inquiry form on our landing page, calling our 24x7 customer support directly at +91 98765 43210, or clicking the WhatsApp button. Our travel specialist will call you back within 15 minutes to share a customized itinerary and handle payments securely.',
  },
  {
    id: 'faq-2',
    question: 'Are temple VIP Darshan tickets included in the pricing?',
    answer: 'Yes, VIP Darshan coordination and entry assistance for Kashi Vishwanath Dham (Varanasi), Ram Janmabhoomi (Ayodhya), and Prayagraj temples are standard in all our packages to ensure senior citizens and families can seek blessings with minimal hassle.',
  },
  {
    id: 'faq-3',
    question: 'Can I customize the itinerary and change hotels?',
    answer: 'Absolutely. All our spiritual packages are 100% customizable. You can adjust the number of days, choose specific hotel categories (Deluxe, Premium, or 5-Star Heritage), and include excursions to nearby holy spots like Vindhyachal, Naimisharanya, or Gaya.',
  },
  {
    id: 'faq-4',
    question: 'What type of food is served during the tour?',
    answer: 'We provide delicious, freshly prepared, hygienic 100% pure vegetarian (and optionally Satvik/Jain) meals in our hotel packages. Special dietary needs for senior citizens can be arranged with prior notice.',
  },
  {
    id: 'faq-5',
    question: 'Is your travel agency GST registered?',
    answer: 'Yes, we are a fully government-approved and GST-registered travel agency. We provide official tax invoices for all tour bookings, which is highly beneficial for corporate LTC claims and tax compliance.',
  },
];

export const galleryImages = [
  {
    id: 'g-1',
    url: 'https://images.unsplash.com/photo-1561361513-2d000a50f0db?auto=format&fit=crop&q=80&w=800',
    title: 'Mesmerizing Varanasi Ganga Aarti',
    category: 'Varanasi',
  },
  {
    id: 'g-2',
    url: 'https://images.unsplash.com/photo-1711202868205-d1447fb90fb5?auto=format&fit=crop&q=80&w=800',
    title: 'Shri Ram Janmabhoomi Mandir, Ayodhya',
    category: 'Ayodhya',
  },
  {
    id: 'g-3',
    url: 'https://images.unsplash.com/photo-1598977123418-45f04b6159c3?auto=format&fit=crop&q=80&w=800',
    title: 'Triveni Sangam Holy Snan, Prayagraj',
    category: 'Prayagraj',
  },
  {
    id: 'g-4',
    url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800',
    title: 'Varanasi Ghats Morning Boat Ride',
    category: 'Varanasi',
  },
  {
    id: 'g-5',
    url: 'https://images.unsplash.com/photo-1503177119275-0aa32b31d468?auto=format&fit=crop&q=80&w=800',
    title: 'Historic Sarnath Stupa Ruins',
    category: 'Varanasi',
  },
  {
    id: 'g-6',
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
    title: 'Heritage Temple Architecture',
    category: 'Ayodhya',
  },
];
