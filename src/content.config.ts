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

export const collections = { apartments, services };
