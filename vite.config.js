import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/excel file/*.xlsx",
          dest: "excel",
        },
      ],
    }),
  ],
  assetsInclude: ["**/*.xlsx"],
});
