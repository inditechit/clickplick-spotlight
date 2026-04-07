import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },  
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // --- CRITICAL FIXES FOR SWIPER BUILD ---
  optimizeDeps: {
    include: ['swiper', 'swiper/react'],
  },
  ssr: {
    noExternal: ['swiper'], // Forces Vite to bundle Swiper instead of looking for it externally
  },
  build: {
    rollupOptions: {
      external: [], // Ensure swiper is not treated as an external module
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));















// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 8080,
//     hmr: {
//       overlay: false,
//     },
//   },  
//   plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   optimizeDeps: {
//     include: ["swiper", "swiper/react"],
//   },
// }));
