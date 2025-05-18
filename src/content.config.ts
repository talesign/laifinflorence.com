import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const apartments = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/apartments" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      address: z.string(),
      images: z.array(image()),
      bathrooms: z.number(),
      beds: z.number(),
      guests: z.number(),
      size: z.number(),
      featured: z.boolean(),
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

const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      surname: z.string(),
      image: image(),
      bgImage: image().optional(),
      leadership: z.boolean(),
      position: z.string(),
      email: z.string(),
      phone: z.string(),
    }),
});

const collaborators = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/collaborators" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image(),
      position: z.string(),
      link: z.string(),
    }),
});

export const collections = { apartments, services, team, collaborators };
