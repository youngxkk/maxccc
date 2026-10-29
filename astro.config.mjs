import { defineConfig } from "astro/config";
import searchDiscovery from "./scripts/search-discovery.mjs";

export default defineConfig({
  site: "https://maxc.cc",
  integrations: [searchDiscovery()],
  output: "static",
  trailingSlash: "always"
});
