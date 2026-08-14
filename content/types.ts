import type { SectionKey } from "./site";

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  collection:
    | "live-performance"
    | "musicians"
    | "portraits"
    | "street"
    | "new-orleans";
  size: "full" | "half";
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  problem: string;
  built: string;
  role: string;
  constraints?: string;
  status: string;
  accent: SectionKey;
  image?: { src: string; alt: string; width: number; height: number };
  href?: string;
  external?: boolean;
};

export type Intent = {
  title: string;
  blurb: string;
  subject: string;
  body: string;
  accent: SectionKey;
};

export type NowItem = {
  label: string;
  body: string;
};
