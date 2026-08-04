export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface HotelCategory {
  category: string;
  options: string[];
}

export interface ExtendedPackage {
  id: string;
  name: string;
  subtitle: string;
  tag?: 'Best Seller' | 'Most Popular' | 'Premium' | 'Family Favourite' | 'New';
  duration: string;
  destinations: string[];
  startingPrice?: number;
  originalPrice?: number;
  lockPrice?: number;
  isComingSoon?: boolean;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  hotels: HotelCategory[];
  vehicle: string[];
  bestTimeToVisit?: string;
  perfectFor?: string[];
  whyBookWithUs?: string[];
  faq: { question: string; answer: string; }[];
  rating: number;
  reviewsCount: number;
  image: string;
  itinerary: ItineraryDay[];
}

export const extendedPackages: ExtendedPackage[] = [
  {
    id: 'kashi-darshan-tour-package',
    name: 'Kashi Darshan',
    subtitle: 'Experience the spiritual soul of Varanasi with temple darshan, Ganga Aarti, Sarnath excursion and comfortable accommodation.',
    tag: 'Best Seller',
    duration: '2 Nights / 3 Days',
    destinations: ['Varanasi', 'Sarnath'],
    startingPrice: 7999,
    originalPrice: 11999,
    lockPrice: 1999,
    description: 'Experience the timeless spirituality of Kashi with a carefully planned pilgrimage covering Shri Kashi Vishwanath Temple, Ganga Aarti at Dashashwamedh Ghat, Kaal Bhairav Temple, Annapurna Temple, Sankat Mochan Temple, Assi Ghat, Sarnath and other sacred places with comfortable accommodation, private transportation and local assistance.',
    highlights: [
      'Private AC Cab',
      'Hotel',
      'Sightseeing',
      'Temple Darshan'
    ],
    inclusions: [
      '2 Nights Hotel Accommodation',
      'Daily Breakfast',
      'Private AC Cab',
      'Airport Pickup',
      'Airport Drop',
      'Sightseeing',
      'Driver Allowance',
      'Parking',
      'Toll Tax',
      'Local Assistance'
    ],
    exclusions: [
      'Airfare',
      'Train Tickets',
      'Lunch',
      'Dinner',
      'Personal Expenses',
      'VIP Darshan Tickets',
      'Boat Ride Charges',
      'Camera Fees',
      'Anything not mentioned in inclusions'
    ],
    hotels: [
      { category: 'Standard', options: ['Comfortable 2-Star / Budget Stays'] },
      { category: 'Deluxe', options: ['Highly Rated 3-Star Hotels'] },
      { category: 'Premium', options: ['Luxury 4-Star / Boutique Stays'] }
    ],
    vehicle: ['Sedan', 'Ertiga', 'Innova', 'Tempo Traveller'],
    bestTimeToVisit: 'October to March',
    perfectFor: ['Families', 'Senior Citizens', 'Couples', 'Solo Pilgrims', 'Groups'],
    whyBookWithUs: [
      'Experienced Local Team',
      'Verified Hotels',
      'Private Transport',
      'Transparent Pricing',
      '24×7 Assistance',
      'Custom Itineraries',
      'Secure Booking',
      'Trusted Pilgrimage Experts'
    ],
    faq: [
      {
        question: 'How many days are enough for Kashi Darshan?',
        answer: 'A 2 Nights / 3 Days itinerary is ideal to comfortably experience the main temples, Ganga Aarti, ghats sunrise boat ride, and take an excursion to Sarnath.'
      },
      {
        question: 'Is Sarnath included?',
        answer: 'Yes, a complete half-day excursion to Sarnath Buddhist structures (Dhamek Stupa, Mulagandha Kuti Vihar, Museum) is included in this package.'
      },
      {
        question: 'Can the itinerary be customized?',
        answer: 'Absolutely. We specialize in custom itineraries. You can adjust the days, add cities (like Prayagraj or Ayodhya), or upgrade stays by talking to our coordinator.'
      },
      {
        question: 'Do you arrange airport pickup?',
        answer: 'Yes, both airport/station pickup on Day 1 and drop-off on Day 3 are included in private AC vehicles.'
      },
      {
        question: 'Can senior citizens travel comfortably?',
        answer: 'Yes, the package is designed to be senior-friendly. We coordinate local e-rickshaws where regular cabs are restricted and minimize long walking spans.'
      },
      {
        question: 'Can we upgrade the hotel?',
        answer: 'Yes, during booking confirmation you can select between Standard, Deluxe, and Premium hotel tiers.'
      },
      {
        question: 'Is boat ride included?',
        answer: 'The standard package excludes boat ride tickets, but we can arrange pre-booked private boat slots at sunrise or sunset upon request.'
      }
    ],
    rating: 4.9,
    reviewsCount: 184,
    image: '/images/gallery/varanasi_kashi_vishwanath.webp',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Varanasi Temple Tour',
        description: 'Arrival at Varanasi Airport or Railway Station. Meet our representative. Transfer to hotel and check in. Freshen up. Visit Kaal Bhairav Temple, Shri Kashi Vishwanath Temple, Annapurna Temple, and Vishalakshi Temple. In the evening, visit Dashashwamedh Ghat and attend the grand Ganga Aarti. Return to hotel, dinner, and overnight stay in Varanasi.'
      },
      {
        day: 2,
        title: 'Ghats Tour, Local Temples & Sarnath Excursion',
        description: 'Enjoy breakfast at the hotel. Participate in an early morning optional boat ride at Assi Ghat. Visit Assi Ghat, Tulsi Manas Mandir, Sankat Mochan Temple, Durga Kund Temple, Bharat Mata Temple, and Banaras Hindu University. In the afternoon, proceed for an excursion to Sarnath Buddhist complex. Visit Dhamek Stupa, Mulagandha Kuti Vihar, and the Sarnath Museum (subject to timings). Return to hotel for overnight stay.'
      },
      {
        day: 3,
        title: 'Shopping & Departure Transit',
        description: 'Enjoy breakfast at the hotel. Spend free time for shopping or visit the local Banarasi silk saree market if time permits. Complete hotel check-out and transfer to Airport or Railway Station for departure. Tour ends with sacred memories.'
      }
    ]
  },
  {
    id: 'kashi-ayodhya-tour-package',
    name: 'Kashi • Ayodhya',
    subtitle: 'Visit Kashi Vishwanath, Ganga Aarti and Shri Ram Janmabhoomi in one seamless spiritual journey.',
    tag: 'Most Popular',
    duration: '3 Nights / 4 Days',
    destinations: ['Varanasi', 'Ayodhya'],
    startingPrice: 12999,
    originalPrice: 17999,
    lockPrice: 1999,
    description: "Experience two of India's most sacred pilgrimage destinations in one unforgettable journey. Seek blessings at Shri Kashi Vishwanath Temple, witness the divine Ganga Aarti, and continue to Ayodhya for Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan and other revered temples with comfortable hotels, private AC transport and complete travel assistance.",
    highlights: [
      'Private AC Cab',
      'Premium Hotel',
      'Temple Darshan',
      'Sightseeing'
    ],
    inclusions: [
      '3 Nights Hotel Accommodation',
      'Daily Breakfast',
      'Private AC Cab',
      'Airport / Railway Pickup',
      'Airport / Railway Drop',
      'Complete Sightseeing',
      'Parking',
      'Toll Tax',
      'Driver Allowance',
      'Local Assistance'
    ],
    exclusions: [
      'Airfare',
      'Train Tickets',
      'Lunch',
      'Dinner',
      'VIP Darshan Charges',
      'Boat Ride Charges',
      'Personal Expenses',
      'Travel Insurance',
      'Anything not mentioned under inclusions'
    ],
    hotels: [
      { category: 'Standard', options: ['Highly Rated Budget/Standard Properties'] },
      { category: 'Deluxe', options: ['Deluxe 3-Star Hotels with Modern Stays'] },
      { category: 'Premium', options: ['Luxury 4-Star / Boutique Heritage Stays'] }
    ],
    vehicle: ['Sedan', 'Ertiga', 'Innova', 'Tempo Traveller'],
    bestTimeToVisit: 'October to March',
    perfectFor: ['Families', 'Senior Citizens', 'Couples', 'Friends', 'Groups'],
    whyBookWithUs: [
      'Verified Hotels',
      'Private AC Vehicle',
      'Transparent Pricing',
      'Experienced Local Team',
      '24×7 Support',
      'Custom Itineraries',
      'No Hidden Charges',
      'Trusted Pilgrimage Experts'
    ],
    faq: [
      {
        question: 'How many days are enough for Kashi & Ayodhya?',
        answer: 'A 3 Nights / 4 Days tour is ideal. It allows for 2 days in Varanasi (covering the ghats, Ganga Aarti, Sarnath, and major corridors) and 1 full day in Ayodhya Dham.'
      },
      {
        question: 'Is Sarnath included?',
        answer: 'Yes, a complete excursion to Sarnath is included on Day 2 before departing for Ayodhya.'
      },
      {
        question: 'Is Ram Janmabhoomi included?',
        answer: 'Yes, visiting Shri Ram Janmabhoomi for VIP darshan, along with Hanuman Garhi, Kanak Bhawan, and Dashrath Mahal is the primary focus of Day 3 in Ayodhya.'
      },
      {
        question: 'Can the itinerary be customized?',
        answer: 'Yes, we can customize the timeline, extend stays, add additional temple trips (like Prayagraj/Triveni Sangam), or upgrade hotel options.'
      },
      {
        question: 'Do you arrange airport pickup?',
        answer: 'Yes, pickup from Varanasi Airport or Station and drop-off to Lucknow/Ayodhya Airport or Station are fully covered.'
      },
      {
        question: 'Can hotels be upgraded?',
        answer: 'Yes, you can choose Standard, Deluxe, or Premium hotel classes when booking.'
      },
      {
        question: 'Is this package suitable for senior citizens?',
        answer: 'Yes, we arrange comfortable AC transits, local e-rickshaw permits, and dedicated darshan priests to keep walking to a minimum.'
      }
    ],
    rating: 4.9,
    reviewsCount: 218,
    image: '/images/hero_slide_ayodhya_varanasi.webp',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Varanasi & Ganga Aarti',
        description: 'Arrival in Varanasi. Pickup from Airport or Railway Station. Check in to your hotel. Visit Shri Kashi Vishwanath Temple, Annapurna Temple, Vishalakshi Temple, and Dashashwamedh Ghat. Attend the grand evening Ganga Aarti. Return to hotel and overnight stay.'
      },
      {
        day: 2,
        title: 'Varanasi Local Shrines, Sarnath & Transit to Ayodhya',
        description: 'Enjoy breakfast at the hotel. Visit Assi Ghat, Tulsi Manas Mandir, Sankat Mochan Temple, Durga Kund Temple, Bharat Mata Temple, and Banaras Hindu University. Tour the Buddhist site of Sarnath. After sightseeing, depart for Ayodhya. Check in to your Ayodhya hotel for an overnight stay.'
      },
      {
        day: 3,
        title: 'Ayodhya Darshan & Saryu Aarti',
        description: 'Enjoy breakfast at the hotel. Visit Shri Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan, Dashrath Mahal, Ram Ki Paidi, and Saryu River. Attend the peaceful evening Saryu Aarti. Return to hotel and overnight stay in Ayodhya.'
      },
      {
        day: 4,
        title: 'Shopping & Departure Transit',
        description: 'Enjoy breakfast. Visit local temples or shop for regional handicrafts (subject to departure timings). Complete hotel check-out and transfer to Airport or Railway Station for departure. Tour ends.'
      }
    ]
  },
  {
    id: 'kashi-prayagraj-ayodhya-tour-package',
    name: 'Kashi • Prayagraj • Ayodhya',
    subtitle: 'Discover the divine trinity of Kashi, Triveni Sangam and Shri Ram Janmabhoomi in one unforgettable spiritual journey.',
    tag: 'Best Seller',
    duration: '4 Nights / 5 Days',
    destinations: ['Varanasi', 'Prayagraj', 'Ayodhya'],
    startingPrice: 15999,
    originalPrice: 21999,
    lockPrice: 1999,
    description: 'Embark on a divine pilgrimage covering the spiritual heart of North India. Experience the sacred Kashi Vishwanath Temple, witness the mesmerizing Ganga Aarti, take a holy dip at Triveni Sangam, and seek blessings at Shri Ram Janmabhoomi in Ayodhya. Enjoy comfortable hotels, private AC transport, guided sightseeing, and a seamless travel experience.',
    highlights: [
      'Private AC Cab',
      'Premium Hotel',
      'Temple Darshan',
      'Sightseeing'
    ],
    inclusions: [
      '4 Nights Hotel Accommodation',
      'Daily Breakfast',
      'Private AC Vehicle',
      'Airport / Railway Pickup',
      'Airport / Railway Drop',
      'Complete Sightseeing',
      'Parking Charges',
      'Toll Tax',
      'Driver Allowance',
      'Local Assistance'
    ],
    exclusions: [
      'Airfare',
      'Train Tickets',
      'Lunch',
      'Dinner',
      'Boat Ride Charges',
      'VIP Darshan Tickets',
      'Personal Expenses',
      'Travel Insurance',
      'Anything not mentioned under inclusions'
    ],
    hotels: [
      { category: 'Standard', options: ['Highly Rated Budget/Standard Properties'] },
      { category: 'Deluxe', options: ['Deluxe 3-Star Hotels with Modern Stays'] },
      { category: 'Premium', options: ['Premium Luxury 4-Star / Heritage Stays'] }
    ],
    vehicle: ['Sedan', 'Ertiga', 'Innova', 'Tempo Traveller'],
    bestTimeToVisit: 'October to March',
    perfectFor: ['Families', 'Senior Citizens', 'Couples', 'Friends', 'Pilgrimage Groups'],
    whyBookWithUs: [
      'Trusted Pilgrimage Experts',
      'Verified Hotels',
      'Private AC Transport',
      'Transparent Pricing',
      '24×7 Travel Support',
      'Experienced Local Team',
      'Custom Itineraries',
      'No Hidden Charges'
    ],
    faq: [
      {
        question: 'Is Triveni Sangam included?',
        answer: 'Yes, a complete trip to Triveni Sangam with private boat coordination, Bade Hanuman Temple, and Akshayavat is included on Day 3.'
      },
      {
        question: 'Can we take a holy dip at Sangam?',
        answer: 'Yes, motorboats stop at the wooden platforms constructed at the confluence where changing enclosures are available.'
      },
      {
        question: 'Is Sarnath included?',
        answer: 'Yes, a full Sarnath exploration visit is covered on Day 2.'
      },
      {
        question: 'Is Ram Janmabhoomi included?',
        answer: 'Yes, visiting Shri Ram Janmabhoomi and other historical shrines in Ayodhya is the main activity of Day 4.'
      },
      {
        question: 'Can hotels be upgraded?',
        answer: 'Yes, travelers can choose between Standard, Deluxe, and Premium hotel classes during booking verification.'
      },
      {
        question: 'Is the itinerary suitable for senior citizens?',
        answer: 'Yes, it is senior-friendly. We coordinate e-rickshaw permits where normal cabs are blocked and keep walking to a minimum.'
      },
      {
        question: 'Do you arrange airport pickup and drop?',
        answer: 'Yes, pickup from Varanasi Airport/Station on Day 1 and drop-off to Lucknow/Ayodhya Airport/Station on Day 5 are fully included.'
      }
    ],
    rating: 5.0,
    reviewsCount: 342,
    image: '/images/hero_slide_spiritual_collage.webp',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Varanasi & Ganga Aarti',
        description: 'Arrival in Varanasi. Pickup from Airport or Railway Station. Check in to your hotel. Visit Shri Kashi Vishwanath Temple, Annapurna Temple, Vishalakshi Temple, and Dashashwamedh Ghat. Attend the grand evening Ganga Aarti. Return to hotel and overnight stay.'
      },
      {
        day: 2,
        title: 'Varanasi Local Sightseeing & Sarnath Excursion',
        description: 'Enjoy breakfast at the hotel. Visit Assi Ghat, Tulsi Manas Mandir, Sankat Mochan Temple, Durga Kund Temple, Banaras Hindu University, and Sarnath. Free time for local shopping in the evening. Overnight stay in Varanasi.'
      },
      {
        day: 3,
        title: 'Transit to Prayagraj Sangam & Drive to Ayodhya',
        description: 'Enjoy breakfast. Drive to Prayagraj. Visit Triveni Sangam, Bade Hanuman Temple, Akshayavat, and Anand Bhavan (time permitting). After sightseeing, depart for Ayodhya. Check in to your hotel for overnight stay.'
      },
      {
        day: 4,
        title: 'Ayodhya Darshan & Saryu Aarti',
        description: 'Enjoy breakfast. Visit Shri Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan, Dashrath Mahal, and Ram Ki Paidi. Attend the evening Saryu Aarti. Return to hotel for overnight stay in Ayodhya.'
      },
      {
        day: 5,
        title: 'Local Shopping & Departure Drop-off',
        description: 'Enjoy breakfast at the hotel. Spend free time for local shopping (subject to departure schedules). Complete hotel checkout and transfer to Airport or Railway Station for departure. Tour ends.'
      }
    ]
  },
  {
    id: 'prayagraj-darshan-tour-package',
    name: 'Prayagraj Darshan',
    subtitle: 'Seek blessings at the sacred Triveni Sangam and explore Prayagraj\'s most revered spiritual landmarks.',
    tag: 'New',
    duration: '2 Nights / 3 Days',
    destinations: ['Prayagraj'],
    startingPrice: 6999,
    originalPrice: 10999,
    lockPrice: 1999,
    description: 'Experience the spiritual essence of Prayagraj with a peaceful pilgrimage covering the sacred Triveni Sangam, Bade Hanuman Temple, Akshayavat, Alopi Devi Temple and other revered sites. Enjoy comfortable accommodation, private AC transportation and a well-planned sightseeing experience.',
    highlights: [
      'Private AC Cab',
      'Premium Hotel',
      'Temple Darshan',
      'Sightseeing'
    ],
    inclusions: [
      '2 Nights Hotel Accommodation',
      'Daily Breakfast',
      'Private AC Vehicle',
      'Airport / Railway Pickup',
      'Airport / Railway Drop',
      'Complete Sightseeing',
      'Parking Charges',
      'Toll Tax',
      'Driver Allowance',
      'Local Assistance'
    ],
    exclusions: [
      'Airfare',
      'Train Tickets',
      'Lunch',
      'Dinner',
      'Boat Ride Charges',
      'VIP Darshan Charges',
      'Personal Expenses',
      'Travel Insurance',
      'Anything not mentioned under inclusions'
    ],
    hotels: [
      { category: 'Standard', options: ['Comfortable 2-Star / Budget Stays'] },
      { category: 'Deluxe', options: ['Deluxe 3-Star Properties with Modern Amenities'] },
      { category: 'Premium', options: ['Luxury 4-Star Stays / Business Class Suites'] }
    ],
    vehicle: ['Sedan', 'Ertiga', 'Innova', 'Tempo Traveller'],
    bestTimeToVisit: 'October to March',
    perfectFor: ['Families', 'Senior Citizens', 'Couples', 'Solo Pilgrims', 'Groups'],
    whyBookWithUs: [
      'Trusted Pilgrimage Experts',
      'Private AC Transport',
      'Verified Hotels',
      'Transparent Pricing',
      '24×7 Support',
      'Experienced Local Team',
      'No Hidden Charges'
    ],
    faq: [
      {
        question: 'How many days are enough for Prayagraj Darshan?',
        answer: 'A 2 Nights / 3 Days tour is the perfect duration to perform the holy bath at Triveni Sangam and cover Alopi Devi Temple, Bade Hanuman Temple, and Anand Bhavan comfortably.'
      },
      {
        question: 'Is Triveni Sangam included?',
        answer: 'Yes, a private boat ride to the confluence (Triveni Sangam) is covered in this package.'
      },
      {
        question: 'Can we take a holy dip at Sangam?',
        answer: 'Yes, standard boat transits halt at the wooden platforms constructed at the point of convergence where changing enclosures are available.'
      },
      {
        question: 'Is boat ride included?',
        answer: 'Private boat tickets for transit to the Sangam confluence point are fully covered.'
      },
      {
        question: 'Can the itinerary be customized?',
        answer: 'Yes, we can extend the package, integrate nearby destinations (Varanasi or Ayodhya), or upgrade hotel classes.'
      },
      {
        question: 'Do you arrange airport pickup?',
        answer: 'Yes, pick-up and drop-off are managed in private AC cabs from Prayagraj airport or railway station.'
      },
      {
        question: 'Can hotels be upgraded?',
        answer: 'Yes, standard packages can be upgraded to Deluxe or Premium classes upon confirmation.'
      }
    ],
    rating: 4.7,
    reviewsCount: 56,
    image: '/images/gallery/prayagraj_triveni_sangam_view.webp',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Prayagraj & Shrines Tour',
        description: 'Arrival in Prayagraj. Pickup from Airport or Railway Station. Transfer to hotel and check in. Visit Bade Hanuman Temple, Akshayavat, and Allahabad Fort (outside view). In the evening, visit Triveni Sangam to witness the beautiful sunset over the river. Return to hotel and overnight stay.'
      },
      {
        day: 2,
        title: 'Triveni Sangam Holy Dip & Local Sightseeing',
        description: 'Enjoy breakfast at the hotel. Head out for a holy dip at Triveni Sangam (boat ride included). Visit Alopi Devi Temple, Saraswati Koop, and Anand Bhavan (historic Nehru family home). Explore the local market in the evening. Return to hotel and overnight stay.'
      },
      {
        day: 3,
        title: 'Local Shrines & Departure Drop-off',
        description: 'Enjoy breakfast at the hotel. Spend free time for shopping or a local temple visit (subject to departure timings). Complete hotel checkout and drop-off to Airport or Railway Station. Tour ends.'
      }
    ]
  },
  {
    id: 'chitrakoot-darshan-tour-package',
    name: 'Chitrakoot Darshan',
    subtitle: 'Walk the sacred path of Lord Rama through Chitrakoot\'s temples, ghats and holy caves.',
    tag: 'New',
    duration: '2 Nights / 3 Days',
    destinations: ['Chitrakoot'],
    startingPrice: 7499,
    originalPrice: 11499,
    lockPrice: 1999,
    description: 'Experience the sacred land where Lord Shri Ram, Mata Sita and Lakshman spent a significant part of their exile. Visit the most revered temples, ghats and caves of Chitrakoot with comfortable accommodation, private AC transportation and complete pilgrimage assistance.',
    highlights: [
      'Private AC Cab',
      'Premium Hotel',
      'Temple Darshan',
      'Sightseeing'
    ],
    inclusions: [
      '2 Nights Hotel Accommodation',
      'Daily Breakfast',
      'Private AC Vehicle',
      'Pickup & Drop',
      'Complete Sightseeing',
      'Parking Charges',
      'Toll Tax',
      'Driver Allowance',
      'Local Assistance'
    ],
    exclusions: [
      'Airfare',
      'Train Tickets',
      'Lunch',
      'Dinner',
      'Personal Expenses',
      'VIP Darshan Charges',
      'Travel Insurance',
      'Anything not mentioned under inclusions'
    ],
    hotels: [
      { category: 'Standard', options: ['Highly Rated Budget Accommodations'] },
      { category: 'Deluxe', options: ['Comfortable Deluxe Hotels with AC Rooms'] },
      { category: 'Premium', options: ['Top Heritage Stays / Premium Resorts'] }
    ],
    vehicle: ['Sedan', 'Ertiga', 'Innova', 'Tempo Traveller'],
    bestTimeToVisit: 'October to March',
    perfectFor: ['Families', 'Senior Citizens', 'Couples', 'Pilgrimage Groups', 'Solo Travellers'],
    whyBookWithUs: [
      'Experienced Pilgrimage Experts',
      'Verified Hotels',
      'Private AC Transport',
      'Transparent Pricing',
      '24×7 Travel Support',
      'Custom Itineraries',
      'No Hidden Charges'
    ],
    faq: [
      {
        question: 'How many days are enough for Chitrakoot Darshan?',
        answer: 'A 2 Nights / 3 Days tour is highly recommended to cover all the dispersed holy sites of Chitrakoot (Ram Ghat, Kamadgiri, Gupt Godavari, and Hanuman Dhara) without rush.'
      },
      {
        question: 'Is Kamadgiri Parikrama included?',
        answer: 'Yes, a guided visit to Kamadgiri hill to perform the sacred 5km parikrama is a core inclusion on Day 2.'
      },
      {
        question: 'Can senior citizens complete the tour comfortably?',
        answer: 'Yes. E-rickshaw options are widely available for Kamadgiri parikrama path, and Hanuman Dhara features a ropeway system to bypass climbing stairs.'
      },
      {
        question: 'Do you provide hotel upgrades?',
        answer: 'Yes, travelers can choose between Standard, Deluxe, and Premium hotel options during booking coordination.'
      },
      {
        question: 'Can this package be customized?',
        answer: 'Absolutely. We customize paths, stays, duration, or extend travel lines to include Prayagraj and Ayodhya.'
      },
      {
        question: 'Do you arrange pickup and drop?',
        answer: 'Yes, pickup and drop-off from Chitrakoot Railway Station, Satna, or nearest airports are covered.'
      }
    ],
    rating: 4.8,
    reviewsCount: 78,
    image: '/images/gallery/chitrakoot_ram_ghat.png',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Chitrakoot & Evening River Aarti',
        description: 'Arrival at Chitrakoot. Pickup from Railway Station or nearest Airport. Check in to your hotel. Visit Ram Ghat and participate in the evening aarti ceremony along the banks of the Mandakini River. Explore local markets, return to hotel, and overnight stay.'
      },
      {
        day: 2,
        title: 'Kamadgiri Parikrama & Sacred Caves Exploration',
        description: 'Enjoy breakfast at the hotel. Visit Kamadgiri hill for the sacred parikrama and Bharat Milap Temple. Continue to the historic Gupt Godavari caves, Hanuman Dhara (ropeway access), Sphatik Shila, Janaki Kund, and Sati Anusuya Ashram. Return to hotel and overnight stay.'
      },
      {
        day: 3,
        title: 'Departure Transit',
        description: 'Enjoy breakfast at the hotel. Visit nearby temples if time permits. Complete hotel checkout and transfer to Satna / Chitrakoot Railway Station or nearest airport for departure. Tour ends.'
      }
    ]
  },
  {
    id: 'kashi-chitrakoot-ayodhya-tour-package',
    name: 'Kashi • Chitrakoot • Ayodhya',
    subtitle: 'Follow the sacred journey from Kashi to Chitrakoot and Ayodhya with temples, aartis and comfortable stays.',
    tag: 'Best Seller',
    duration: '5 Nights / 6 Days',
    destinations: ['Varanasi', 'Chitrakoot', 'Ayodhya'],
    startingPrice: 18999,
    originalPrice: 24999,
    lockPrice: 1999,
    description: 'Embark on a spiritually enriching pilgrimage covering the sacred city of Kashi, the divine forests of Chitrakoot where Lord Rama spent part of his exile, and the holy birthplace of Lord Shri Ram in Ayodhya. Experience temple darshan, evening aartis, comfortable stays and private transportation throughout the journey.',
    highlights: [
      'Private AC Cab',
      'Premium Hotel',
      'Temple Darshan',
      'Sightseeing'
    ],
    inclusions: [
      '5 Nights Hotel Accommodation',
      'Daily Breakfast',
      'Private AC Vehicle',
      'Airport / Railway Pickup',
      'Airport / Railway Drop',
      'Complete Sightseeing',
      'Parking Charges',
      'Toll Tax',
      'Driver Allowance',
      'Local Assistance'
    ],
    exclusions: [
      'Airfare',
      'Train Tickets',
      'Lunch',
      'Dinner',
      'Boat Ride Charges',
      'VIP Darshan Charges',
      'Personal Expenses',
      'Travel Insurance',
      'Anything not mentioned under inclusions'
    ],
    hotels: [
      { category: 'Standard', options: ['Highly Rated Budget Accommodations'] },
      { category: 'Deluxe', options: ['Comfortable Deluxe Hotels with AC Rooms'] },
      { category: 'Premium', options: ['Luxury 4-Star / Heritage Boutique Stays'] }
    ],
    vehicle: ['Sedan', 'Ertiga', 'Innova', 'Crysta', 'Tempo Traveller'],
    bestTimeToVisit: 'October to March',
    perfectFor: ['Families', 'Senior Citizens', 'Pilgrimage Groups', 'Couples', 'Friends'],
    whyBookWithUs: [
      'Experienced Pilgrimage Experts',
      'Verified Hotels',
      'Private AC Transport',
      'Transparent Pricing',
      '24×7 Travel Support',
      'Custom Itineraries',
      'No Hidden Charges'
    ],
    faq: [
      {
        question: 'How many days are required for Kashi, Chitrakoot & Ayodhya?',
        answer: 'A 5 Nights / 6 Days tour is the optimal timeline to seamlessly cover Varanasi (2 Nights), transit/visit Chitrakoot (1 Night), and cover Ayodhya Dham (2 Nights).'
      },
      {
        question: 'Is Kamadgiri Parikrama included?',
        answer: 'Yes, a guided visit to Kamadgiri for the holy parikrama is included during the Chitrakoot stay.'
      },
      {
        question: 'Is Sarnath included?',
        answer: 'Yes, Sarnath Buddhist complex sightseeing is covered on Day 2 in Varanasi.'
      },
      {
        question: 'Is Ram Janmabhoomi included?',
        answer: 'Yes, temple visits to Shri Ram Janmabhoomi, Kanak Bhawan, and Hanuman Garhi are fully covered on Day 5.'
      },
      {
        question: 'Can the itinerary be customized?',
        answer: 'Yes, we can add destinations like Prayagraj Sangam or extend standard nights to customize your plan.'
      },
      {
        question: 'Do you provide airport pickup and drop?',
        answer: 'Yes, pickup from Varanasi Airport/Station and departure drop-off to Lucknow/Ayodhya/Varanasi Transit points are fully managed.'
      },
      {
        question: 'Can hotels be upgraded?',
        answer: 'Yes, standard packages are easily upgradable to deluxe or premium tiers upon confirmation.'
      }
    ],
    rating: 4.9,
    reviewsCount: 164,
    image: '/images/gallery/kashi_chitrakoot_ayodhya.png',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Varanasi & Ganga Aarti',
        description: 'Arrival in Varanasi. Pickup from Airport or Railway Station. Check in to your hotel. Visit Shri Kashi Vishwanath Temple, Annapurna Temple, Vishalakshi Temple, and Dashashwamedh Ghat. Attend the grand evening Ganga Aarti. Return to hotel and overnight stay.'
      },
      {
        day: 2,
        title: 'Varanasi Local Sightseeing & Sarnath Excursion',
        description: 'Enjoy breakfast at the hotel. Visit Assi Ghat, Tulsi Manas Mandir, Sankat Mochan Temple, Durga Kund Temple, Banaras Hindu University, and Sarnath. Return to hotel and overnight stay.'
      },
      {
        day: 3,
        title: 'Drive to Chitrakoot & Evening Aarti',
        description: 'Enjoy breakfast at the hotel. Drive to Chitrakoot, check in to your hotel. Visit Ram Ghat and participate in the beautiful evening aarti ceremony along the Mandakini River. Explore local markets, return to hotel, and overnight stay.'
      },
      {
        day: 4,
        title: 'Kamadgiri Parikrama, Caves & Drive to Ayodhya',
        description: 'Enjoy breakfast. Visit Kamadgiri hill for the parikrama, Bharat Milap Temple, Gupt Godavari caves, Hanuman Dhara, Sphatik Shila, Janaki Kund, and Sati Anusuya Ashram. Later, depart for Ayodhya and check in to your hotel for an overnight stay.'
      },
      {
        day: 5,
        title: 'Ayodhya Darshan & Saryu Aarti',
        description: 'Enjoy breakfast. Visit Shri Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan, Dashrath Mahal, and Ram Ki Paidi. Attend the evening Saryu Aarti. Return to hotel for overnight stay in Ayodhya.'
      },
      {
        day: 6,
        title: 'Departure Drop-off',
        description: 'Enjoy breakfast at the hotel. Complete checkout. Spend free time for local shopping (subject to departure schedule). Transfer to Airport or Railway Station for departure. Tour ends.'
      }
    ]
  },
  {
    id: 'uttar-pradesh-pilgrimage-tour-package',
    name: 'Uttar Pradesh Pilgrimage',
    subtitle: 'Discover the most sacred temples, ghats and pilgrimage destinations across Uttar Pradesh in one unforgettable spiritual journey.',
    tag: 'Premium',
    duration: '6 Nights / 7 Days',
    destinations: ['Varanasi', 'Prayagraj', 'Chitrakoot', 'Ayodhya'],
    startingPrice: 24999,
    originalPrice: 32999,
    lockPrice: 1999,
    description: 'Embark on the ultimate spiritual journey across Uttar Pradesh, visiting the state\'s most sacred pilgrimage destinations. Experience Kashi Vishwanath Temple, Ganga Aarti, Triveni Sangam, the holy land of Chitrakoot where Lord Rama spent years of exile, and Shri Ram Janmabhoomi in Ayodhya with premium hotels, private AC transportation and expert local assistance.',
    highlights: [
      'Private AC Cab',
      'Premium Hotels',
      'Temple Darshan',
      'Complete Sightseeing'
    ],
    inclusions: [
      '6 Nights Hotel Accommodation',
      'Daily Breakfast',
      'Private AC Vehicle',
      'Airport / Railway Pickup',
      'Airport / Railway Drop',
      'Complete Sightseeing',
      'Parking Charges',
      'Toll Tax',
      'Driver Allowance',
      'State Taxes',
      'Dedicated Tour Coordinator'
    ],
    exclusions: [
      'Airfare',
      'Train Tickets',
      'Lunch',
      'Dinner',
      'Boat Ride Charges',
      'VIP Darshan Charges',
      'Personal Expenses',
      'Travel Insurance',
      'Anything not mentioned under inclusions'
    ],
    hotels: [
      { category: 'Standard', options: ['Highly Rated Budget Properties'] },
      { category: 'Deluxe', options: ['Premium Deluxe 3-Star Properties'] },
      { category: 'Premium', options: ['Premium Boutique Stays & 4-Star Hotels'] },
      { category: 'Luxury', options: ['Luxury 5-Star Heritage / Business Class stays'] }
    ],
    vehicle: ['Sedan', 'Ertiga', 'Innova', 'Crysta', 'Tempo Traveller', 'Luxury Coach'],
    bestTimeToVisit: 'October to March',
    perfectFor: ['Families', 'Senior Citizens', 'Pilgrimage Groups', 'Couples', 'NRI Devotees', 'Corporate Spiritual Tours'],
    whyBookWithUs: [
      'Complete Uttar Pradesh Pilgrimage',
      'Verified Hotels',
      'Private AC Transport',
      'Experienced Pilgrimage Experts',
      '24×7 Assistance',
      'Transparent Pricing',
      'Flexible Itineraries',
      'No Hidden Charges'
    ],
    faq: [
      {
        question: 'How many days are enough for the Uttar Pradesh Pilgrimage?',
        answer: 'A 6 Nights / 7 Days tour is the ideal duration to comfortably cover the four holy cities: Varanasi (2 Nights), Prayagraj (1 Night), Chitrakoot (1 Night), and Ayodhya Dham (2 Nights).'
      },
      {
        question: 'Are all major temples included?',
        answer: 'Yes, seek blessings at Kashi Vishwanath in Varanasi, Triveni Sangam in Prayagraj, Kamadgiri in Chitrakoot, and Shri Ram Janmabhoomi & Hanuman Garhi in Ayodhya.'
      },
      {
        question: 'Can the itinerary be customized?',
        answer: 'Yes, we can customize the route, extend stays in Varanasi/Ayodhya, add excursions, or upgrade stays based on your preferences.'
      },
      {
        question: 'Is Triveni Sangam included?',
        answer: 'Yes, boat transit to the confluence point (Triveni Sangam), Bade Hanuman Temple, and Akshayavat are included during the Prayagraj stay.'
      },
      {
        question: 'Is Sarnath included?',
        answer: 'Yes, a complete excursion to Sarnath is covered on Day 2 in Varanasi.'
      },
      {
        question: 'Can senior citizens comfortably complete this tour?',
        answer: 'Yes. We coordinate local e-rickshaw permits, reserve ropeways at Hanuman Dhara, and ensure minimal walking distances for elder family members.'
      },
      {
        question: 'Do you provide pickup and drop?',
        answer: 'Yes, airport/railway pickup in Varanasi and airport/railway drop-off in Varanasi, Lucknow, or Ayodhya are fully covered.'
      }
    ],
    rating: 5.0,
    reviewsCount: 428,
    image: '/images/gallery/uttar_pradesh_pilgrimage.png',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Varanasi & Ganga Aarti',
        description: 'Arrival in Varanasi. Airport or Railway pickup and transfer to hotel. Check in. Visit Shri Kashi Vishwanath Temple, Annapurna Temple, Vishalakshi Temple, and Dashashwamedh Ghat. Witness the grand evening Ganga Aarti. Overnight stay in Varanasi.'
      },
      {
        day: 2,
        title: 'Varanasi Local Sightseeing & Sarnath Excursion',
        description: 'Enjoy breakfast at the hotel. Visit Assi Ghat, Tulsi Manas Mandir, Durga Kund Temple, Sankat Mochan Temple, Banaras Hindu University, and Sarnath. Free time for shopping at Vishwanath Gali in the evening. Overnight stay.'
      },
      {
        day: 3,
        title: 'Transit to Prayagraj & Shrines Visit',
        description: 'Enjoy breakfast. Drive to Prayagraj. Visit Triveni Sangam (optional holy dip and boat ride), Bade Hanuman Temple, Akshayavat, and Anand Bhavan. Check in to Prayagraj hotel for an overnight stay.'
      },
      {
        day: 4,
        title: 'Transit to Chitrakoot & Shrines Exploration',
        description: 'Enjoy breakfast. Drive to Chitrakoot. Visit Ram Ghat, Kamadgiri Parikrama, Gupt Godavari caves, Hanuman Dhara (ropeway access), Janaki Kund, and Sphatik Shila. Hotel check-in and overnight stay in Chitrakoot.'
      },
      {
        day: 5,
        title: 'Transit to Ayodhya & Saryu Aarti',
        description: 'Enjoy breakfast. Drive to Ayodhya. Check in to your hotel. In the evening, visit Ram Ki Paidi and witness the peaceful evening Saryu Aarti. Overnight stay in Ayodhya.'
      },
      {
        day: 6,
        title: 'Ayodhya Temples Tour & Local Shrines',
        description: 'Enjoy breakfast. Visit Shri Ram Janmabhoomi Corridor, Hanuman Garhi, Kanak Bhawan, Dashrath Mahal, and Nageshwarnath Temple. Spend free time for local shopping in the afternoon. Overnight stay in Ayodhya.'
      },
      {
        day: 7,
        title: 'Departure Drop-off',
        description: 'Enjoy breakfast at the hotel. Complete checkout. Transfer to Airport or Railway Station for departure. Tour ends.'
      }
    ]
  },
  {
    id: 'divine-trails-uttar-pradesh-tour-package',
    name: 'Divine Trails Uttar Pradesh',
    subtitle: 'Explore Uttar Pradesh\'s most iconic spiritual destinations and cultural landmarks in one unforgettable journey.',
    tag: 'Premium',
    duration: '7 Nights / 8 Days',
    destinations: ['Lucknow', 'Ayodhya', 'Prayagraj', 'Chitrakoot', 'Varanasi'],
    startingPrice: 29999,
    originalPrice: 38999,
    lockPrice: 1999,
    description: 'Discover the spiritual and cultural soul of Uttar Pradesh on an immersive pilgrimage covering Lucknow, Ayodhya, Prayagraj, Chitrakoot and Varanasi. Experience sacred temples, holy rivers, historic monuments, evening aartis and comfortable stays with private transportation throughout the journey.',
    highlights: [
      'Private AC Cab',
      'Premium Hotels',
      'Temple Darshan',
      'Sightseeing'
    ],
    inclusions: [
      '7 Nights Hotel Accommodation',
      'Daily Breakfast',
      'Private AC Vehicle',
      'Airport / Railway Pickup',
      'Airport / Railway Drop',
      'Complete Sightseeing',
      'Parking Charges',
      'Toll Tax',
      'Driver Allowance',
      'Tour Coordinator'
    ],
    exclusions: [
      'Airfare',
      'Train Tickets',
      'Lunch',
      'Dinner',
      'Boat Ride Charges',
      'VIP Darshan Charges',
      'Personal Expenses',
      'Travel Insurance',
      'Anything not mentioned under inclusions'
    ],
    hotels: [
      { category: 'Standard', options: ['Highly Rated Budget/Standard Properties'] },
      { category: 'Deluxe', options: ['Deluxe Properties with Quality Stays'] },
      { category: 'Premium', options: ['Premium Stays & Boutique Heritage Hotels'] },
      { category: 'Luxury', options: ['Premium Luxury 5-Star Class Lodging'] }
    ],
    vehicle: ['Sedan', 'Ertiga', 'Innova', 'Crysta', 'Tempo Traveller', 'Luxury Coach'],
    bestTimeToVisit: 'October to March',
    perfectFor: ['Families', 'Senior Citizens', 'Pilgrimage Groups', 'NRI Devotees', 'Corporate Spiritual Tours'],
    whyBookWithUs: [
      'Complete Uttar Pradesh Experience',
      'Verified Hotels',
      'Private AC Transport',
      'Experienced Tour Experts',
      '24×7 Assistance',
      'Transparent Pricing',
      'Flexible Itinerary',
      'No Hidden Charges'
    ],
    faq: [
      {
        question: 'Why is this package different from the Uttar Pradesh Pilgrimage Tour?',
        answer: 'Unlike the standard UP Pilgrimage, the Divine Trails package begins in Lucknow (adding Bara Imambara & Rumi Darwaza heritage tours) and extends Varanasi stays to cover the Kaal Bhairav, Annapurna, and local corridors with complete ease.'
      },
      {
        question: 'Is Lucknow sightseeing included?',
        answer: 'Yes, a full Day 1 tour of historic Lucknow monuments (Bara Imambara, Rumi Darwaza, Clock Tower, Hazratganj) is fully covered.'
      },
      {
        question: 'Are all major temples covered?',
        answer: 'Yes, major temple shrines across Ayodhya Dham, Prayagraj Sangam, Chitrakoot, and Varanasi (Kashi Vishwanath Corridor) are covered.'
      },
      {
        question: 'Can the itinerary be customized?',
        answer: 'Yes, you can customize hotel levels, route transits, or adjust details directly by communicating with our representative.'
      },
      {
        question: 'Can senior citizens comfortably join this tour?',
        answer: 'Yes, we make it highly accessible with e-rickshaw coordination, Hanuman Dhara ropeways, and verified hotel stays with elevator facilities.'
      }
    ],
    rating: 5.0,
    reviewsCount: 512,
    image: '/images/gallery/divine_trails_up.png',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Lucknow & Heritage Sightseeing',
        description: 'Arrival in Lucknow. Pickup from Airport or Railway Station. Hotel Check-in. Visit the grand Bara Imambara, Rumi Darwaza, Clock Tower, and explore the Hazratganj market in the evening. Overnight stay.'
      },
      {
        day: 2,
        title: 'Transit to Ayodhya Dham & Saryu Aarti',
        description: 'Enjoy breakfast at the hotel. Drive to Ayodhya. Check in. Visit Shri Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan, Dashrath Mahal, and Ram Ki Paidi. Attend the evening Saryu Aarti. Overnight stay in Ayodhya.'
      },
      {
        day: 3,
        title: 'Transit to Prayagraj & Shrines Tour',
        description: 'Enjoy breakfast. Drive to Prayagraj. Visit Triveni Sangam (boat transit included), Bade Hanuman Temple, and Akshayavat. Overnight stay in Prayagraj.'
      },
      {
        day: 4,
        title: 'Transit to Chitrakoot Shrines',
        description: 'Enjoy breakfast. Drive to Chitrakoot. Visit Ram Ghat, Kamadgiri Parikrama, Gupt Godavari caves, Hanuman Dhara, and Janaki Kund. Overnight stay in Chitrakoot.'
      },
      {
        day: 5,
        title: 'Transit to Varanasi & Evening Ganga Aarti',
        description: 'Enjoy breakfast. Drive to Varanasi, check in to your hotel. In the evening, witness the grand Ganga Aarti at Dashashwamedh Ghat. Overnight stay in Varanasi.'
      },
      {
        day: 6,
        title: 'Sacred Kashi Corridors & Temples Visit',
        description: 'Enjoy breakfast. Visit Kashi Vishwanath Temple, Annapurna Temple, Kaal Bhairav Temple, Vishalakshi Temple, Assi Ghat, and Tulsi Manas Mandir. Overnight stay in Varanasi.'
      },
      {
        day: 7,
        title: 'Sarnath Excursion & Shopping',
        description: 'Enjoy breakfast. Visit Sarnath Buddhist site, Banaras Hindu University, and spend free time shopping at Vishwanath Gali. Enjoy a free evening and overnight stay.'
      },
      {
        day: 8,
        title: 'Hotel Checkout & Departure Transit',
        description: 'Enjoy breakfast. Complete checkout. Transfer to Airport or Railway Station for departure. Tour ends with divine blessings.'
      }
    ]
  },
  {
    id: 'mahakal-darshan-tour-package',
    name: 'Mahakal Darshan',
    subtitle: 'Experience the divine aura of Shri Mahakaleshwar Jyotirlinga and explore Ujjain\'s sacred corridor.',
    tag: 'New',
    duration: '1 Night / 2 Days',
    destinations: ['Ujjain'],
    startingPrice: 4999,
    originalPrice: 7999,
    lockPrice: 1999,
    description: 'Experience the divine blessings of Shri Mahakaleshwar Jyotirlinga in Ujjain with a thoughtfully planned pilgrimage. Visit Mahakal Temple, Mahakal Lok, Kal Bhairav Temple, Harsiddhi Mata Temple, Ram Ghat and other sacred attractions with comfortable accommodation, private transportation and complete travel assistance.',
    highlights: [
      'Private AC Cab',
      'Premium Hotel',
      'Temple Darshan',
      'Sightseeing'
    ],
    inclusions: [
      '1 Night Hotel Accommodation',
      'Daily Breakfast',
      'Private AC Vehicle',
      'Pickup & Drop',
      'Complete Sightseeing',
      'Parking Charges',
      'Toll Tax',
      'Driver Allowance',
      'Local Tour Assistance'
    ],
    exclusions: [
      'Airfare',
      'Train Tickets',
      'Lunch',
      'Dinner',
      'Bhasma Aarti Pass',
      'VIP Darshan Charges',
      'Personal Expenses',
      'Travel Insurance',
      'Anything not mentioned under inclusions'
    ],
    hotels: [
      { category: 'Standard', options: ['Highly Rated Budget Properties'] },
      { category: 'Deluxe', options: ['Comfortable 3-Star Hotels near Mandir'] },
      { category: 'Premium', options: ['Luxury 4-Star Stays / Premium Heritage Hotels'] }
    ],
    vehicle: ['Sedan', 'Ertiga', 'Innova', 'Tempo Traveller'],
    bestTimeToVisit: 'October to March',
    perfectFor: ['Families', 'Senior Citizens', 'Couples', 'Solo Pilgrims', 'Groups'],
    whyBookWithUs: [
      'Trusted Pilgrimage Experts',
      'Private AC Transport',
      'Verified Hotels',
      'Transparent Pricing',
      '24×7 Support',
      'Experienced Local Team',
      'No Hidden Charges'
    ],
    faq: [
      {
        question: 'Is Bhasma Aarti pass included?',
        answer: 'No, Bhasma Aarti passes are not included in the standard price. It must be booked directly on the official temple portal in advance, though our team can guide you on the booking process.'
      },
      {
        question: 'How many days are enough for Ujjain?',
        answer: 'A 1 Night / 2 Days tour is sufficient to cover Mahakaleshwar Temple, the grand Mahakal Lok Corridor, Kal Bhairav Temple, Harsiddhi Temple, and other local shrines.'
      },
      {
        question: 'Can hotels be upgraded?',
        answer: 'Yes, standard packages can be upgraded to Deluxe or Premium classes near the Mahakaleshwar temple area.'
      },
      {
        question: 'Do you arrange pickup and drop?',
        answer: 'Yes, pick-up and drop-off are managed in private AC cabs from Ujjain Railway Station or Indore Airport.'
      },
      {
        question: 'Can the itinerary be customized?',
        answer: 'Yes, we can extend the package, integrate nearby destinations (such as Omkareshwar Jyotirlinga), or adjust stays.'
      }
    ],
    rating: 4.8,
    reviewsCount: 124,
    image: '/images/gallery/ujjain_mahakaleshwar_temple.webp',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Ujjain & Temple Tour',
        description: 'Arrival in Ujjain. Pickup from Railway Station or Airport. Check in to your hotel. Visit Shri Mahakaleshwar Temple, the beautiful Mahakal Lok Corridor, Harsiddhi Mata Temple, and Ram Ghat. Witness the evening temple aarti (subject to timing). Return to hotel and overnight stay.'
      },
      {
        day: 2,
        title: 'Optional Bhasma Aarti & Shrines Tour',
        description: 'Early morning optional participation in the holy Bhasma Aarti (requires prior booking). Enjoy breakfast at the hotel. Visit Kal Bhairav Temple, Mangalnath Temple, Sandipani Ashram, and Gadkalika Temple. Spend free time for local shopping. Complete hotel checkout and drop-off to Railway Station or Airport. Tour ends.'
      }
    ]
  },
  {
    id: 'mahakal-omkareshwar-tour-package',
    name: 'Mahakal • Omkareshwar',
    subtitle: 'Seek the blessings of two sacred Jyotirlingas in one spiritually enriching pilgrimage through Ujjain and Omkareshwar.',
    tag: 'New',
    duration: '2 Nights / 3 Days',
    destinations: ['Ujjain', 'Omkareshwar'],
    startingPrice: 10999,
    originalPrice: 15999,
    lockPrice: 1999,
    description: 'Experience the divine blessings of two sacred Jyotirlingas in one unforgettable pilgrimage. Visit Shri Mahakaleshwar Jyotirlinga in Ujjain and Shri Omkareshwar Jyotirlinga on the holy banks of the Narmada River with premium accommodation, private AC transportation and complete travel assistance.',
    highlights: [
      'Private AC Cab',
      'Premium Hotel',
      'Temple Darshan',
      'Sightseeing'
    ],
    inclusions: [
      '2 Nights Hotel Accommodation',
      'Daily Breakfast',
      'Private AC Vehicle',
      'Airport / Railway Pickup',
      'Airport / Railway Drop',
      'Complete Sightseeing',
      'Parking Charges',
      'Toll Tax',
      'Driver Allowance',
      'Local Tour Assistance'
    ],
    exclusions: [
      'Airfare',
      'Train Tickets',
      'Lunch',
      'Dinner',
      'Bhasma Aarti Pass',
      'VIP Darshan Charges',
      'Boat Ride Charges (if applicable)',
      'Personal Expenses',
      'Travel Insurance',
      'Anything not mentioned under inclusions'
    ],
    hotels: [
      { category: 'Standard', options: ['Highly Rated Budget/Standard Hotels'] },
      { category: 'Deluxe', options: ['Comfortable 3-Star AC Stays'] },
      { category: 'Premium', options: ['Premium Heritage / 4-Star Accommodations'] }
    ],
    vehicle: ['Sedan', 'Ertiga', 'Innova', 'Crysta', 'Tempo Traveller'],
    bestTimeToVisit: 'October to March. Monsoon is also a beautiful time to visit Omkareshwar due to the scenic Narmada River.',
    perfectFor: ['Families', 'Senior Citizens', 'Couples', 'Pilgrimage Groups', 'Solo Devotees'],
    whyBookWithUs: [
      'Visit Two Sacred Jyotirlingas in One Tour',
      'Experienced Pilgrimage Experts',
      'Verified Hotels',
      'Private AC Transport',
      'Transparent Pricing',
      '24×7 Travel Support',
      'Dedicated Local Assistance',
      'No Hidden Charges'
    ],
    faq: [
      {
        question: 'Is Bhasma Aarti included?',
        answer: 'Bhasma Aarti participation depends entirely on temple regulations and advance booking slots available on the official portal. It is not included in our standard package cost.'
      },
      {
        question: 'Can you arrange Bhasma Aarti booking?',
        answer: 'Due to strict temple regulations requiring photo IDs and verification of individual devotees, travelers must book slots directly online. However, our tour coordinator will provide complete guidance on the timing and process.'
      },
      {
        question: 'Are both Jyotirlingas covered in this package?',
        answer: 'Yes, both Shri Mahakaleshwar in Ujjain and Shri Omkareshwar are fully covered with dedicated transits and sightseeing.'
      },
      {
        question: 'Is Omkareshwar Parikrama included?',
        answer: 'Omkareshwar Parikrama is optional and can be coordinated locally depending on your energy levels and available time.'
      },
      {
        question: 'Can hotels be upgraded?',
        answer: 'Yes, standard packages are easily upgradable to Deluxe or Premium classes upon confirmation.'
      },
      {
        question: 'Do you provide pickup and drop from Indore Airport?',
        answer: 'Yes, pickup from Indore Airport or Railway Station and drop-off are fully covered in private AC vehicles.'
      },
      {
        question: 'Can this itinerary be customized?',
        answer: 'Yes, you can extend your stay, add more sites, or adjust the routes by consulting with our coordinator.'
      }
    ],
    rating: 4.9,
    reviewsCount: 167,
    image: '/images/hero_slide_mahakal_omkareshwar.webp',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Ujjain & Temple Tour',
        description: 'Arrival in Ujjain. Pickup from Railway Station or Airport. Transfer to your hotel and check in. Visit Shri Mahakaleshwar Jyotirlinga, the Mahakal Lok Corridor, Harsiddhi Mata Temple, and Ram Ghat. Witness the evening aarti ceremony (subject to timing). Return to hotel and overnight stay in Ujjain.'
      },
      {
        day: 2,
        title: 'Ujjain to Omkareshwar Jyotirlinga',
        description: 'Early morning optional participation in the Ujjain Bhasma Aarti (with prior online booking and temple rules). Enjoy breakfast at the hotel, then drive to Omkareshwar. Check in to your hotel. Visit the sacred Shri Omkareshwar Jyotirlinga, Mamleshwar Temple, and Narmada River Ghat. Witness the serene evening Narmada Aarti. Overnight stay in Omkareshwar.'
      },
      {
        day: 3,
        title: 'Optional Parikrama & Departure Drop-off',
        description: 'Enjoy breakfast. You can optionally complete the Omkareshwar Parikrama. Visit local temples and nearby spiritual attractions if time permits. Complete hotel checkout and transfer to Indore Airport / Railway Station or Ujjain Railway Station to board your departure transit. Tour ends.'
      }
    ]
  }
];
