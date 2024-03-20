import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://louie888a.github.io/React-Portfolio/",

  plugins: [react()],
});
