import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const apartments = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/apartments/" }),
  schema: z.object({
    name: z.string(),
    address: z.string(),
    image: z.string(),
    bathrooms: z.number(),
    beds: z.number(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      featured: z.boolean(),
    }),
});

const home = defineCollection({
  loader: glob({ pattern: "home.md", base: "./src/content" }),
  schema: ({ image }) =>
    z.object({
      seo_title: z.string(),
      seo_description: z.string(),
    }),
});

export const collections = { apartments, services, home };
