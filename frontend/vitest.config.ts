import { mergeConfig, defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

// Reuse the Vite config (plugins + path aliases) so tests resolve identically
// to the app build, then layer the test-specific settings on top.
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/test-setup.ts"],
      // Scaffold has no tests yet; don't fail the run/CI until tests are added.
      passWithNoTests: true,
      css: true,
      coverage: {
        provider: "v8",
        reportsDirectory: "coverage",
      },
    },
  }),
);
