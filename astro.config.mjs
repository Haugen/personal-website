import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://www.tobiashaugen.se/",
  integrations: [tailwind(), preact({
    compat: true
  })],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  })
});