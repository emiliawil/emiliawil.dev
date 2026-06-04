import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE } from "../data/constants.ts";

const COLLECTIONS = ["blog", "projects", "tutorials", "reviews"];

export async function GET(context) {
  const entries = (
    await Promise.all(
      COLLECTIONS.map(async (collection) => {
        const items = await getCollection(
          collection,
          ({ data }) => !data.draft,
        );
        return items.map((entry) => ({ collection, entry }));
      }),
    )
  ).flat();

  // newest first
  entries.sort((a, b) => b.entry.data.date - a.entry.data.date);

  return rss({
    title: SITE_TITLE,
    description:
      "UK-based Software Engineer writing about tech, books and media, with a dash of philosophy.",
    site: context.site,
    items: entries.map(({ collection, entry }) => ({
      title: entry.data.title,
      description: entry.data.description ?? "",
      pubDate: entry.data.date,
      link: `/${collection}/${entry.id}/`,
    })),
    customData: `<language>en-gb</language>`,
  });
}
