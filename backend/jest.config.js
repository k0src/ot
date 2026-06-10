/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  // ESM preset: backend is "type": "module", so tests run as ES modules.
  // Run via `cross-env NODE_OPTIONS=--experimental-vm-modules jest` (see package.json).
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testMatch: ["**/*.test.ts", "**/*.spec.ts"],
  // Scaffold has no tests yet; don't fail the run/CI until tests are added.
  passWithNoTests: true,
  moduleNameMapper: {
    // Allow ESM-style ".js" import specifiers to resolve to ".ts" sources.
    "^(\\.{1,2}/.*)\\.js$": "$1",
    // Keep path aliases in sync with tsconfig.json "paths".
    "^@middleware$": "<rootDir>/src/middleware/index",
    "^@middleware/(.*)$": "<rootDir>/src/middleware/$1",
    "^@services$": "<rootDir>/src/services/index",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
    "^@routes$": "<rootDir>/src/routes/index",
    "^@routes/(.*)$": "<rootDir>/src/routes/$1",
    "^@db$": "<rootDir>/src/db/index",
    "^@db/(.*)$": "<rootDir>/src/db/$1",
    "^@integrations$": "<rootDir>/src/integrations/index",
    "^@integrations/(.*)$": "<rootDir>/src/integrations/$1",
    "^@ai$": "<rootDir>/src/ai/index",
    "^@ai/(.*)$": "<rootDir>/src/ai/$1",
    "^@config$": "<rootDir>/src/config/index",
    "^@config/(.*)$": "<rootDir>/src/config/$1",
    "^@telemetry$": "<rootDir>/src/telemetry/index",
    "^@telemetry/(.*)$": "<rootDir>/src/telemetry/$1",
    "^@types$": "<rootDir>/src/types/index",
    "^@types/(.*)$": "<rootDir>/src/types/$1",
    "^@utils$": "<rootDir>/src/utils/index",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.d.ts", "!src/**/index.ts"],
  coverageDirectory: "coverage",
};
