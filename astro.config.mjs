// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [tailwind()],
    base: '/',
    server: ({ command }) => ({ port: command === 'dev' ? 4321 : 4000 }),
    vite: {
        build: {
            terserOptions: {
                compress: true
            }
        }
    }
});