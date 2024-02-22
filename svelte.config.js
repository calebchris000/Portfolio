import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import sass from "sass";
export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess({
    scss: {
      includePaths: ["src"],
      implementation: sass,
    },
  }),
};
