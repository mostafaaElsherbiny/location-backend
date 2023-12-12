import dotenv from "dotenv";
import { Application } from "express";
import { loadAppMiddlewares } from "../../app/providers/middlewareServiceProvider";
import { loadAppRoutes } from "../../app/providers/routeServiceProvider";
import { connectToDB } from "../../database/connection";
const loadApp = async (app: Application) => {
  dotenv.config();
  if (!process.env.PORT) {
    process.exit(1);
  }
  loadAppMiddlewares(app);
  loadAppRoutes(app);
  await connectToDB();
};
export { loadApp };
