import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index"},
    { path: "/about", component: "about" },
    { path: "/docs", component: "docs" },
    { path: "/products", component: "products" },
  ],
  npmClient: 'yarn',
});
