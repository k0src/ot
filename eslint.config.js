// @ts-check
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default defineConfig([
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

  {
    files: ["frontend/**/*.{ts,tsx}"],
    ...reactHooks.configs.flat.recommended,
  },

  prettier,
]);
