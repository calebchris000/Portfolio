import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { sveltePreprocess } from "svelte-preprocess/dist/autoProcess";

import tailwindcss from "tailwindcss";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        // sourceMap: !production,
        typescript: {
          tsconfigFile: "./tsconfig.json",
        },
      }),
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
