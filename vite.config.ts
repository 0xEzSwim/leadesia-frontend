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
      // FIX: Use `__dirname` to resolve the path to the `src` directory. This is a standard
      // practice in Node.js environments and avoids potential typing issues with `process.cwd()`.
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));