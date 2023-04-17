import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://www.tobiashaugen.se/",
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    tailwind(),
    preact({ compat: true }),
  ],
});
