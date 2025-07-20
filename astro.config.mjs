// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";
import { never } from "astro:schema";

// https://astro.build/config
export default defineConfig({
  site: "https://www.madewithbill.com",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});