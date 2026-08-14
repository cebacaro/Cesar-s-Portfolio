// One-time asset pipeline: reads selected originals from public/, writes
// optimized WebP derivatives to public/opt/ and 1200x630 OG crops to
// public/opt/og/. Originals are never modified. Run: node scripts/optimize-images.mjs
import sharp from "sharp";
import { mkdirSync, statSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUB = path.join(root, "public");
const OUT = path.join(PUB, "opt");
const OG = path.join(OUT, "og");
mkdirSync(OG, { recursive: true });

// type "photo" -> q80, type "ui" -> q90 (screenshots need crisp text)
const manifest = [
  // Live performance / photography
  { src: "PHOTOS/HeroMusic.jpg", out: "hero-music", type: "photo" },
  { src: "PHOTOS/BruceTips2-6.jpg", out: "live-blue-room", type: "photo" },
  { src: "PHOTOS/BruceTips2-27.jpg", out: "live-band-neon", type: "photo" },
  { src: "PHOTOS/BruceTips2-30.jpg", out: "live-congas", type: "photo" },
  { src: "PHOTOS/BruceTips2-32.jpg", out: "live-percussion-pink", type: "photo" },
  { src: "PHOTOS/BruceTips2-43.jpg", out: "live-tipitinas-wide", type: "photo" },
  { src: "PHOTOS/BruceTips2-45.jpg", out: "live-balcony-warm", type: "photo" },
  { src: "PHOTOS/MarcBroussard_JazzFest_EDITS-17.png", out: "festival-stage-view", type: "photo" },
  { src: "PHOTOS/wy.png", out: "portrait-cesar-tetons", type: "photo" },
  { src: "images/1.jpeg", out: "street-brass-band", type: "photo" },
  { src: "images/4.jpeg", out: "snow-triptych", type: "photo" },
  { src: "images/5.jpeg", out: "street-fans", type: "photo" },
  { src: "images/6.jpeg", out: "quarter-archway", type: "photo" },
  { src: "images/8.jpeg", out: "mardi-gras-kid", type: "photo" },
  { src: "images/9.jpeg", out: "portrait-cap", type: "photo" },
  { src: "images/11.jpeg", out: "portrait-fur", type: "photo" },

  // Giigs product assets
  { src: "GIIGS/Giigs-9-27-2023-2.png", out: "giigs-logo-purple", type: "ui" },
  { src: "GIIGS/mediamodifier_image-3.png", out: "giigs-musician-profile", type: "ui" },
  { src: "GIIGS/mediamodifier_image-2.png", out: "giigs-venue-profile", type: "ui" },
  { src: "GIIGS/mediamodifier_image-6.png", out: "giigs-posts-feed", type: "ui" },
  { src: "GIIGS/mediamodifier_image-9.png", out: "giigs-booking-confirmed", type: "ui" },
  { src: "GIIGS/mediamodifier_image-12.png", out: "giigs-qr-payment", type: "ui" },
  { src: "GIIGS/mediamodifier_image-14.png", out: "giigs-application-sent", type: "ui" },
  { src: "GIIGS/mediamodifier_image-16.png", out: "giigs-map-discovery", type: "ui" },

  // Other builds
  { src: "images/j1.png", out: "lawfirm-home", type: "ui" },
  { src: "images/j2.png", out: "lawfirm-tax", type: "ui" },
  { src: "images/j3.png", out: "lawfirm-injury", type: "ui" },
];

// OG crops: 1200x630 cover, from the strongest photo per route
const ogManifest = [
  { src: "PHOTOS/HeroMusic.jpg", out: "home" },
  { src: "GIIGS/mediamodifier_image-16.png", out: "giigs" },
  { src: "PHOTOS/BruceTips2-32.jpg", out: "music" },
  { src: "images/11.jpeg", out: "photography" },
  { src: "GIIGS/Giigs-9-27-2023-2.png", out: "builds" },
  { src: "PHOTOS/wy.png", out: "about" },
  { src: "PHOTOS/BruceTips2-43.jpg", out: "now" },
  { src: "PHOTOS/BruceTips2-45.jpg", out: "contact" },
];

const report = [];
for (const item of manifest) {
  const srcPath = path.join(PUB, item.src);
  const outPath = path.join(OUT, `${item.out}.webp`);
  const img = sharp(srcPath).rotate();
  const meta = await img.metadata();
  const cap = item.type === "photo" ? 1920 : 2560;
  const long = Math.max(meta.width, meta.height);
  await img
    .resize(long > cap ? { width: meta.width >= meta.height ? cap : undefined, height: meta.height > meta.width ? cap : undefined } : undefined)
    .webp({ quality: item.type === "ui" ? 90 : 80 })
    .toFile(outPath);
  const out = await sharp(outPath).metadata();
  report.push({
    file: `${item.out}.webp`,
    dims: `${out.width}x${out.height}`,
    kb: Math.round(statSync(outPath).size / 1024),
  });
}

for (const item of ogManifest) {
  const outPath = path.join(OG, `${item.out}.jpg`);
  await sharp(path.join(PUB, item.src))
    .rotate()
    .resize(1200, 630, { fit: "cover", position: "attention" })
    .jpeg({ quality: 82 })
    .toFile(outPath);
  report.push({
    file: `og/${item.out}.jpg`,
    dims: "1200x630",
    kb: Math.round(statSync(outPath).size / 1024),
  });
}

console.table(report);
const over = report.filter((r) => r.kb > 500);
if (over.length) {
  console.error(`OVER 500KB: ${over.map((r) => r.file).join(", ")}`);
  process.exit(1);
}
console.log(`OK — ${report.length} derivatives, all under 500KB`);
