export const giigs = {
  hero: {
    eyebrow: "Case study — Founder, 2022–present",
    title: "Giigs",
    subtitle: "Rebuilding how live music gets booked and paid.",
    image: {
      src: "/opt/giigs-map-discovery.webp",
      alt: "Giigs app showing venue discovery on a city map",
    },
  },
  problem: {
    heading: "The problem",
    paragraphs: [
      "Live music runs on scattered messages, spreadsheets, and trust. A venue books a band through a text thread. The set time changes in a different thread. The payment arrives late, short, or never — and nobody has a record of what was agreed.",
      "It's a real economy, moving real money every night, operating with tools that would embarrass a lemonade stand. Booking is fragmented, discovery is word-of-mouth, and the people doing the work — musicians and small venue operators — absorb all the friction.",
    ],
  },
  insight: {
    heading: "Why I understood it",
    paragraphs: [
      "I didn't find this problem in a market report. I found it at load-in, at 1 a.m. settle-ups, in group texts with seven musicians and one missing sub, in the gap between a handshake in March and a check in May.",
      "Years of working as a percussionist in New Orleans meant I was living inside the workflow I wanted to fix. Every feature in Giigs started as a night where something went wrong.",
    ],
    image: {
      src: "/opt/festival-stage-view.webp",
      alt: "The view from behind the drums over a festival crowd",
    },
  },
  product: {
    heading: "The product",
    intro:
      "Giigs puts the whole booking lifecycle in one place — for the musician and the venue.",
    features: [
      {
        title: "Booking",
        body: "Venues post gigs, musicians apply, both sides confirm — dates, times, and money in writing by default.",
        image: {
          src: "/opt/giigs-booking-confirmed.webp",
          alt: "Giigs booking flow showing a confirmed hire",
        },
      },
      {
        title: "Payments",
        body: "Agreed rates tracked from offer to payout, with QR-coded gig references so settle-up isn't a negotiation.",
        image: {
          src: "/opt/giigs-qr-payment.webp",
          alt: "Giigs payment screen with QR code and gig details",
        },
      },
      {
        title: "Discovery",
        body: "A map of venues and a feed of gigs — so finding the next room doesn't depend on knowing the right person.",
        image: {
          src: "/opt/giigs-map-discovery.webp",
          alt: "Giigs map view of venues across a city",
        },
      },
      {
        title: "Profiles & operations",
        body: "Musician and venue profiles with media, genres, and history — plus the operational record both sides need.",
        image: {
          src: "/opt/giigs-musician-profile.webp",
          alt: "A musician profile on Giigs",
        },
      },
    ],
  },
  journey: {
    heading: "The journey",
    steps: [
      {
        label: "The itch",
        body: "Years of gigging in New Orleans, watching the same breakdowns repeat: bookings by text, payments by memory.",
      },
      {
        label: "First build",
        body: "Designed and developed the first product — profiles, booking, and gig management — end to end.",
      },
      {
        label: "New Orleans",
        body: "Started in the hardest, most authentic live-music market in America. If it works here, it works.",
      },
      {
        label: "Chicago",
        body: "[PLACEHOLDER: one sentence on what the Chicago expansion involved — venues signed, lessons learned]",
      },
      {
        label: "Atlanta",
        body: "[PLACEHOLDER: one sentence on the Atlanta market activation and what changed in the product]",
      },
      {
        label: "Now",
        body: "Scaling the platform, deepening venue operations, and building toward the network the industry actually needs.",
      },
    ],
  },
  role: {
    heading: "My role",
    intro:
      "Giigs is founder-led in the fullest sense. I have carried, and still carry:",
    items: [
      "Strategy and vision",
      "Product and design",
      "Development",
      "Sales and partnerships",
      "Fundraising",
      "Market activation",
    ],
  },
  proof: {
    heading: "Proof",
    note: "Screenshots are the live product. Numbers below are being finalized.",
    stats: [
      { value: "[PLACEHOLDER: # bookings]", label: "gigs booked through Giigs" },
      { value: "[PLACEHOLDER: $ volume]", label: "in musician payments" },
      { value: "[PLACEHOLDER: # venues]", label: "venue partners across three cities" },
      { value: "[PLACEHOLDER: # musicians]", label: "musician profiles" },
    ],
    testimonials: [
      {
        quote:
          "[PLACEHOLDER: one-sentence quote from a venue owner or musician using Giigs]",
        attribution: "[PLACEHOLDER: name, role, city]",
      },
    ],
  },
  vision: {
    heading: "The vision",
    paragraphs: [
      "If Giigs wins, live music gets an operating system. Every room that hosts music and every musician who fills it works from the same source of truth — booked, confirmed, and paid without friction.",
      "The bar band, the wedding quartet, the festival act: all of them spend their attention on the music, because the logistics finally take care of themselves.",
    ],
  },
  ctas: {
    primary: { label: "Visit Giigs", href: "https://giigsapp.com/" },
    secondary: { label: "Talk to Cesar about Giigs", href: "/contact" },
  },
} as const;
