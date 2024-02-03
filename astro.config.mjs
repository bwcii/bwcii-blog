import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://bwcii.com',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});