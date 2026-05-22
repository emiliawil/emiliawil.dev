---
title: "Astro Content Collections in 5 Minutes"
date: 2026-03-04
description: "Type-safe markdown with Zod schemas."
difficulty: "beginner"
duration: "5 min"
tags: ["astro", "typescript"]
---

Content collections give typed frontmatter for markdown files.

## Setup

Create `src/content/config.ts`:

​```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
type: 'content',
schema: z.object({
title: z.string(),
date: z.date(),
}),
});

export const collections = { blog };
​```

## Query

​`ts
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
​`

Done. Typed `posts[i].data.title` everywhere.
