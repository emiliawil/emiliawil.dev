import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const tutorials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tutorials" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(),
    duration: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/reviews" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    medium: z.enum(["book", "film", "tv", "game", "podcast"]),
    creator: z.string().optional(), // author / director / showrunner / developer
    year: z.number().int().optional(), // release/publication year
    rating: z.number().min(1).max(5),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),

    // medium-specific (all optional)
    isbn: z.string().optional(),
    imdb: z.string().optional(),
    publisher: z.string().optional(),
  }),
});

export const collections = { blog, projects, tutorials, reviews };
