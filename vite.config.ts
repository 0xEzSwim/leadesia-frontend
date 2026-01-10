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
      // FIX: `__dirname` is not available in ES modules.
      // We resolve from the current directory, as Vite is typically run from the project root.
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));