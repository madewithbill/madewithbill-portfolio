// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/projects" }),
  schema: ({image}) => z.object({
    title: z.string(),
    metaDescription: z.string(),
    description: z.string(),
    skills: z.array(z.string()),
    siteURL: z.string(),
    thumbnail:z.object({
        src: image(),
        alt: z.string()
      }),
    heroImage:z.object({
        src: image(),
        alt: z.string()
      }),
    images: z.array( z.object({
        src: image(),
        alt: z.string()
      })),
    })
  });

// 4. Export a single `collections` object to register your collection(s)
export const collections = {projects};