import express, { Application } from "express";

import "reflect-metadata";
import "express-async-errors";

import { loadApp } from "./app/providers/appServiceProvider";

const app: Application = express();

loadApp(app).then(() => {
  const PORT: number = parseInt(process.env.PORT as string);

  app.listen(PORT, (): void => {
    console.log(`Server Running http://localhost:${PORT} 🚀`);
  });
});
