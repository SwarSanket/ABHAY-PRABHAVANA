import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "development" ? "/" : "/FIPCH/", // Use '/' in development and '/FIPCH/' in production
  build: {
    outDir: "dist",
  },
  server: {
    proxy: {
      "/api": "http://localhost:4000", // Proxies API requests to the backend server running on port 3000
    },
  },
}));