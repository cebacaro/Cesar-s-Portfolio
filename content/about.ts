export const about = {
  hero: {
    eyebrow: "About",
    title: "Cuba → music → New Orleans → technology → Giigs.",
    portrait: {
      src: "/opt/portrait-cesar-tetons.webp",
      alt: "Cesar standing in snow with the Teton range behind him",
    },
  },
  story: {
    heading: "The story",
    paragraphs: [
      "I was born in Cuba, where making things work with what you have isn't a mindset — it's the national curriculum. Music came first: rhythm as language, percussion as a seat at every table.",
      "New Orleans is the only American city that could have felt like home. I spent years working as a percussionist in its live music scene — Latin, funk, jazz, Afro-Caribbean — sharing stages with some of the city's most respected artists and learning the economics of culture from the inside.",
      "Somewhere between the gigs, I started building software. First for other people's problems, then for the one I knew best: the beautiful, broken machinery of live music. That became Giigs.",
      "Photography runs alongside all of it — the same instinct, pointed through a lens. People, movement, light.",
    ],
  },
  philosophy: {
    heading: "How I operate",
    items: [
      {
        title: "Build for operators, not demos",
        body: "The people I build for run venues, crews, and bands. Software either survives contact with their Tuesday night or it doesn't matter.",
      },
      {
        title: "Listen like a rhythm section",
        body: "Bands taught me that the best contribution is usually the one that makes everyone else sound better. Products work the same way.",
      },
      {
        title: "Ship from the stage",
        body: "I stay inside the worlds I build for. The feedback loop isn't a survey — it's Friday's gig.",
      },
      {
        title: "Make it from what's in front of you",
        body: "The Cuban inheritance: resourcefulness as a first principle. Constraints are the brief, not the excuse.",
      },
    ],
  },
  milestones: {
    heading: "Selected milestones",
    items: [
      "[PLACEHOLDER: year — founded Giigs / first venue partnership]",
      "[PLACEHOLDER: year — expansion to Chicago]",
      "[PLACEHOLDER: year — expansion to Atlanta]",
      "[PLACEHOLDER: notable performance, press mention, or talk]",
    ],
  },
  recognition: {
    heading: "Press & recognition",
    note: "[PLACEHOLDER: add press links, talks, awards — or remove this section for launch]",
  },
  resume: {
    label: "Download résumé",
    href: "[PLACEHOLDER: /resume.pdf — add the file to public/]",
  },
  human: {
    heading: "Off the clock",
    items: [
      "[PLACEHOLDER: 3–4 personal interests — e.g. mountains, cooking, road trips, dogs]",
    ],
  },
} as const;
