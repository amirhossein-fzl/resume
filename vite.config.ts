import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import routify from '@roxi/routify/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        routify({
            routesDir: resolve(__dirname, 'src/pages'),
        }),
        svelte()
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@sections': resolve(__dirname, 'src/components/sections'),
        }
    },
});
