import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development"].filter(Boolean),
  resolve: {
    alias: {
      // Fix: `__dirname` is not available in ES modules. Use `process.cwd()` to get the project root directory.
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
}));