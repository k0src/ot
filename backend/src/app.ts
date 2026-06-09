import express, { type Express } from "express";

/**
 * Creates the Express application.
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
