// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/howitwork", key: "how_hilink_work", label: "How Hilink Work?" },
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "pricing ", label: "Pricing " },
  { href: "/", key: "contact_us", label: "Contact Us" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Real maps can be offline",
    icon: "/map.svg",
    variant: "green",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Set an adventure schedule",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: "/tech.svg",
    variant: "green",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: "/location.svg",
    variant: "orange",
    description:
      "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];

export const howitwork = [
  {
    title: "Real Maps, Offline Access",
    icon: "/map.svg",
    description: "Never get lost, even without Wi-Fi. Our app lets you download detailed maps for offline use. Explore new cities, hike remote trails, or navigate unfamiliar roads with confidence, knowing you have reliable maps right at your fingertips. No more worries about roaming charges or dead zones. Plan your adventures and stay on track, no matter where you go.",
  },
  {
    title: "Set Your Adventure Schedule",
    icon: "/calendar.svg",
    description: "Plan the perfect trip with our easy-to-use itinerary builder. Create a custom schedule, from must-see landmarks to hidden gems. Add activities, transportation, and accommodations with just a few taps. Easily share your plans with friends or save them for your next adventure. Your dream trip starts here.",
  },
  {
    title: "See Your Destination in a New Light",
    icon: "/tech.svg",
    description: "Experience the magic of augmented reality as you explore new places. Our app brings your destination to life with interactive maps, virtual tours, and real-time information overlays. Discover hidden gems, learn about local history, and immerse yourself in the culture like never before.",
  },
  {
    title: "Discover New Worlds Every Month",
    icon: "/location.svg",
    description: "Stay ahead of the travel curve with fresh destinations added monthly. From hidden gems to trending hotspots, we've got you covered. Never run out of inspiration as we continuously expand our global database. Your next adventure is just a tap away.",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Hilink",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@akinthil.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};

export const pricing = [
  {
    title: "Basic Plan",
    description: "Best option for personal travel.",
    price: 29,
    features : [
      "Access to basic travel destinations",
      "Standard customer support",
      "Limited travel guides",
      "Monthly newsletter",
      "Basic booking management"
    ]

  },
  {
    title: "Standard Plan",
    description: "Best option for 4 people and family",
    price: 59,
    features : [
      "Access to all travel destinations",
      "Priority customer support",
      "Detailed travel guides",
      "Monthly travel tips",
      "Enhanced booking management",
      "Travel insurance coverage"
    ]

  },
  {
    title: "Premium Plan",
    description: "Best option for 10-12 people and large family.",
    price: 99,
    features : [
      "Access to all travel destinations",
      "24/7 dedicated customer support",
      "Comprehensive travel guides",
      "Weekly travel tips",
      "Exclusive travel deals and discounts",
      "Advanced booking management",
      "Premium travel insurance coverage"
    ]

  }
];
