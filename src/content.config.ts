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
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/reviews" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    author: z.string().optional(),
    rating: z.number().min(1).max(5),
    isbn: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, tutorials, reviews };
