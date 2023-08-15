import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        test: resolve(__dirname, "pages/test.html"),
        about: resolve(__dirname, "pages/about.html"),
      },
    },
  },
});
