import type { Intent } from "./types";

export const contactIntro = {
  eyebrow: "Contact",
  title: "What are we making?",
  note: "Pick the door that fits. Each one opens a real email to me — I read them.",
};

export const intents: Intent[] = [
  {
    title: "Giigs partnership",
    blurb: "Venues, promoters, and platforms that touch live music.",
    subject: "Giigs partnership",
    body: "Hi Cesar — I'm reaching out about a Giigs partnership.\n\nWho I am:\nWhat I'm thinking:",
    accent: "giigs",
  },
  {
    title: "Investment",
    blurb: "If you back founders who live inside their market.",
    subject: "Investment conversation",
    body: "Hi Cesar — I'd like to talk about investing.\n\nFund / angel:\nWhy this space:",
    accent: "giigs",
  },
  {
    title: "Music collaboration",
    blurb: "Gigs, sessions, projects. The percussion rig travels.",
    subject: "Music collaboration",
    body: "Hi Cesar — I've got a musical idea for you.\n\nProject:\nDates / place:",
    accent: "music",
  },
  {
    title: "Photography",
    blurb: "Portraits, live shows, editorial work.",
    subject: "Photography inquiry",
    body: "Hi Cesar — I'm interested in your photography.\n\nWhat I need:\nWhen:",
    accent: "photo",
  },
  {
    title: "Product & software",
    blurb: "You run a real-world operation that needs real tools.",
    subject: "Software project",
    body: "Hi Cesar — I have a software problem worth solving.\n\nThe operation:\nThe problem:",
    accent: "build",
  },
  {
    title: "Speaking & press",
    blurb: "Founder stories, music-tech, immigrant entrepreneurship.",
    subject: "Speaking / press inquiry",
    body: "Hi Cesar — I'd like to feature or book you.\n\nOutlet / event:\nTopic:",
    accent: "neutral",
  },
  {
    title: "Something unexpected",
    blurb: "The best door. Surprise me.",
    subject: "Something unexpected",
    body: "Hi Cesar — this doesn't fit your categories, and that's the point.\n\n",
    accent: "neutral",
  },
];
