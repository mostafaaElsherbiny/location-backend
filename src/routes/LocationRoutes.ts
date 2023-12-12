import express from "express";
import LocationController from "../app/controllers/LocationController";
import errorHandler from "../app/middlewares/errorHandler";
import validations from "../app/validations/Location/create";
import fileValidationSchemas from "../app/validations/Location/UploadFile";

const router = express.Router();

router.get("/", LocationController.getAll);

router.post(
  "/upload",
  fileValidationSchemas,
  errorHandler,
  LocationController.uploadFile
);

router.post(
  "/",
  validations.createLocationValidationSchemas,
  errorHandler,
  LocationController.store
);

export { router as LocationRoutes };
