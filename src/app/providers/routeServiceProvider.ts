import express, { Application, Request, Response } from "express";

import path from "path";

import { LocationRoutes } from "../../routes/LocationRoutes";
import { Exception } from "../utils/error-handlers";
const loadAppRoutes = (app: Application) => {
  app.use("/api/locations", LocationRoutes);
  app.get("/", (req: Request, res: Response): void => {
    res.send("Hello Typescript with Node.js!");
  });

  app.use("/assets", express.static(path.join("assets/uploads")));
  app.use(Exception.defaultHandler);
};
export { loadAppRoutes };
