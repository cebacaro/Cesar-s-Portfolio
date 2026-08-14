export const home = {
  hero: {
    name: "Cesar Bacaro",
    roles: ["Founder", "Musician", "Builder", "Photographer"],
    statement:
      "I build technology and experiences around culture, people, and the real world.",
    backgrounds: [
      {
        src: "/opt/hero-music.webp",
        alt: "Cesar playing tambourine under red stage light",
      },
      {
        src: "/opt/live-congas.webp",
        alt: "Cesar behind the congas mid-set",
      },
      {
        src: "/opt/live-tipitinas-wide.webp",
        alt: "A packed New Orleans venue seen from the balcony, disco ball spinning",
      },
      {
        src: "/opt/festival-stage-view.webp",
        alt: "View from behind the drum kit over a festival crowd",
      },
    ],
  },
  entries: [
    {
      title: "Giigs",
      kicker: "The company",
      blurb: "Rebuilding how live music gets booked and paid.",
      href: "/giigs",
      accent: "giigs",
      image: {
        src: "/opt/giigs-musician-profile.webp",
        alt: "Giigs app showing a musician profile",
      },
    },
    {
      title: "Music",
      kicker: "The lived experience",
      blurb: "The lived experience behind the company.",
      href: "/music",
      accent: "music",
      image: {
        src: "/opt/live-percussion-pink.webp",
        alt: "Percussion rig under pink stage light, sticks in motion",
      },
    },
    {
      title: "Photography",
      kicker: "The eye",
      blurb: "People, movement, light, and culture.",
      href: "/photography",
      accent: "photo",
      image: {
        src: "/opt/portrait-fur.webp",
        alt: "Portrait of a woman in a fur coat and dark glasses against the sky",
      },
    },
    {
      title: "Builds",
      kicker: "The workshop",
      blurb: "Software, experiments, and unusual ideas.",
      href: "/builds",
      accent: "build",
      image: {
        src: "/opt/lawfirm-home.webp",
        alt: "Homepage of a law firm website built by Cesar",
      },
    },
  ],
  story: {
    eyebrow: "The short version",
    paragraphs: [
      "I was born in Cuba, where music isn't an industry — it's the way a neighborhood breathes. I grew up inside that rhythm, and when I landed in New Orleans it felt less like moving and more like changing rooms in the same house.",
      "Years behind the percussion rig taught me how the live music economy actually works: the handshakes, the group texts, the missing payments. I started building software because I kept watching talented people lose money and time to problems a good tool could solve.",
      "Giigs is where all of it converges — the musician, the builder, and the immigrant habit of making something from whatever is in front of you.",
    ],
  },
  cta: {
    line: "Building something interesting?",
    action: "Let's talk.",
  },
} as const;
