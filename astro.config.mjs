import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://giruclawbot.github.io',
	base: '/blog-recetas-fit',
	integrations: [mdx(), sitemap()],
});
