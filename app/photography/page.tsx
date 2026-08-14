import type { Metadata } from "next";
import AccentScope from "@/components/layout/AccentScope";
import Eyebrow from "@/components/ui/Eyebrow";
import PhotoFlow from "@/components/gallery/PhotoFlow";
import { photographyIntro } from "@/content/photos";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Selected photography by Cesar Bacaro — people, movement, light, and culture, shot mostly in New Orleans.",
  openGraph: { images: ["/opt/og/photography.jpg"] },
};

export default function PhotographyPage() {
  return (
    <AccentScope accent="photo">
      <section className="px-5 pb-14 pt-36 sm:px-8">
        <Eyebrow>{photographyIntro.eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl font-display text-display-xl font-black text-bone">
          {photographyIntro.title}
        </h1>
        <p className="mt-6 font-mono text-sm text-bone-faint">
          {photographyIntro.note}
        </p>
      </section>

      <section aria-label="Gallery" className="px-5 pb-28 sm:px-8">
        <PhotoFlow />
      </section>
    </AccentScope>
  );
}
