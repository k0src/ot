import express, { type Express } from "express";
import { fileURLToPath } from "node:url";

export function createApp(): Express {
  const app = express();

  app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });

  return app;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const app = createApp();
  const port = Number(process.env.PORT) || 3000;

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
