// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://emiliawil.dev",
  markdown: {
    remarkRehype: {
      footnoteLabel: "Sources",
      footnoteLabelTagName: "h2",
      footnoteLabelProperties: {},
      footnoteBackLabel: "Back to text",
    },
  },
});
