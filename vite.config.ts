import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        VueDevTools(),
        vue(),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "@sections": resolve(__dirname, "src/components/sections"),
            "@config": resolve(__dirname, "config.json"),
        }
    },
    build: {
        rollupOptions: {
            external: [
                "config.json"
            ]
        },
        minify: "terser",
        terserOptions: {
            output: {
                comments: false
            }
        }
    }
});
