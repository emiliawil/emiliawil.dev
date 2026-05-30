// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  markdown: {
    remarkRehype: {
      footnoteLabel: "Sources",
      footnoteLabelTagName: "h2",
      footnoteLabelProperties: {}, // drop default 'sr-only' class to make heading visible
      footnoteBackLabel: "Back to text",
    },
  },
});
