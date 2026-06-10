import express, { type Express } from "express";
import { fileURLToPath } from "node:url";

/**
 * Creates the Express application.
 *
 * Exported separately from the `listen` call below so tests can import and
 * exercise the app via supertest without binding a port.
 *
 * Scaffold only: no routes or middleware are wired up yet (added in later
 * tasks). The single `/health` endpoint exists for Docker/CI liveness checks.
 */
export function createApp(): Express {
  const app = express();

  app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });

  return app;
}

// Start the HTTP server only when this file is run directly (e.g. `node
// dist/server.js` or `tsx src/server.ts`), not when imported by tests.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const app = createApp();
  const port = Number(process.env.PORT) || 3000;

  app.listen(port, () => {
    console.log(`OTI backend listening on port ${port}`);
  });
}
