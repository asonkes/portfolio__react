import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
//import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // pour production
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: "prod.json", // ton fichier à la racine du projet(db pour production)
    //       dest: ".", // copie à la racine du build
    //     },
    //   ],
    // }),
  ],
});
