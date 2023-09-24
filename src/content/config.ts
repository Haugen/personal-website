import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    draft: z.boolean().default(false),
    title: z.string(),
    publishedDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const htmlCssCollection = defineCollection({
  type: "content",
  schema: z.object({
    draft: z.boolean().default(false),
    title: z.string(),
    metaDescription: z.string(),
    publishedDate: z.date(),
    updatedDate: z.date().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  htmlCss: htmlCssCollection,
};
