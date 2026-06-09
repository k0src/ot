import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// Path aliases here MUST stay in sync with tsconfig.app.json "paths".
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@auth": path.resolve(__dirname, "./src/auth"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
  server: {
    host: true,
    port: 5173,
  },
});
