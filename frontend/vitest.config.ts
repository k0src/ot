import { mergeConfig, defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/test-setup.ts"],
      passWithNoTests: true,
      css: true,
      coverage: {
        provider: "v8",
        reportsDirectory: "coverage",
      },
    },
  }),
);
