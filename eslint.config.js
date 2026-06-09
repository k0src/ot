// @ts-check
// Root ESLint flat config applied across both workspaces (frontend + backend).
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/*.tsbuildinfo",
      "backend/prisma/generated/**",
      "**/.prisma/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  // CommonJS config files (e.g. backend/jest.config.js) — Node/CommonJS globals.
  {
    files: ["**/*.cjs", "backend/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        module: "writable",
        require: "readonly",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        exports: "writable",
        console: "readonly",
      },
    },
  },
  // Frontend-specific: React hooks rules
  {
    files: ["frontend/**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  // Keep Prettier last so it disables conflicting stylistic rules.
  prettier,
);
