import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/giigs",
    "/music",
    "/photography",
    "/builds",
    "/about",
    "/now",
    "/contact",
  ];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/now" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/giigs" ? 0.9 : 0.7,
  }));
}
