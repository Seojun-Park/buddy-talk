import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: false,
    open: true,
  },
  // base: "/buddy-talk/",
  plugins: [react()],
});
