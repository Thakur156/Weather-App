import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000", // The backend server
        changeOrigin: true, // Ensures that the origin of the request is changed to the target
        rewrite: (path) => path.replace(/^\/api/, ""), // Rewrites the URL path from /api/ to / (e.g. /api/jobs -> /jobs)
        secure: false, // Set to false if you're using an HTTP server in dev (not HTTPS)
      },
    },
  },
});
