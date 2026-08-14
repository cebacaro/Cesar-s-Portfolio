export const music = {
  hero: {
    eyebrow: "Music",
    title: "Years behind the rig.",
    opening:
      "I didn't enter live music through a market report. I entered through load-ins, late sets, group texts, missing payments, and years behind the percussion rig.",
    image: {
      src: "/opt/live-percussion-pink.webp",
      alt: "Cymbals and sticks in motion under pink stage light",
    },
  },
  bio: {
    heading: "The player",
    paragraphs: [
      "I'm a percussionist shaped by two cities that treat rhythm as a public utility: Havana and New Orleans. My background runs through Latin, funk, jazz, and Afro-Caribbean music — congas, timbales, and whatever the song asks for.",
      "Years in the New Orleans scene meant sharing stages with some of the city's most respected artists, playing rooms from neighborhood bars to festival stages, and learning the difference between performing at an audience and moving with one.",
    ],
  },
  credits: {
    heading: "Stages & collaborators",
    note: "[PLACEHOLDER: replace with a real list of artists, venues, tours, and notable performances — e.g. artist names, Tipitina's, Jazz Fest, tour runs]",
    items: [
      "[PLACEHOLDER: Artist / band name]",
      "[PLACEHOLDER: Venue or festival]",
      "[PLACEHOLDER: Tour or residency]",
    ],
  },
  media: {
    heading: "Selected video & audio",
    note: "[PLACEHOLDER: add YouTube/Vimeo/Spotify links for 2–4 strongest performances]",
  },
  current: {
    heading: "Current projects",
    body: "[PLACEHOLDER: one or two sentences on what you're playing now — bands, sessions, sit-ins]",
  },
  bridge: {
    heading: "From the stage to the software",
    paragraphs: [
      "Everything I know about products I learned on bandstands. A good band and a good product team run on the same physics: listen more than you play, keep time for everyone else, and know when to stay out of the way.",
      "Giigs exists because I stood in the middle of live music's broken logistics for years. The music isn't a hobby that preceded the company — it's the research.",
    ],
    cta: { label: "Read the Giigs story", href: "/giigs" },
  },
  gallery: [
    {
      src: "/opt/hero-music.webp",
      alt: "Cesar playing tambourine under red stage light",
    },
    {
      src: "/opt/live-congas.webp",
      alt: "Cesar behind the congas mid-set",
    },
    {
      src: "/opt/live-band-neon.webp",
      alt: "Full band on stage under blue and red neon",
    },
    {
      src: "/opt/live-tipitinas-wide.webp",
      alt: "A packed venue from the balcony, disco ball overhead",
    },
    {
      src: "/opt/live-balcony-warm.webp",
      alt: "Warm-lit balcony crowd watching the stage",
    },
    {
      src: "/opt/live-blue-room.webp",
      alt: "Band bathed in deep blue light in a full room",
    },
  ],
} as const;
