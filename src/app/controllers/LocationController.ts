import { Request, Response } from "express";

import LocationRepository from "../repositories/LocationRepository";

import { Image } from "../entities/Image";

import ImageRepository from "../repositories/ImageRepository";
import { httpStatus } from "../utils/constants/httpStatus";
import uploadFile from "../utils/helpers/WorkingWithAssets";

class LocationController {
  uploadFile = async (req: Request, res: Response): Promise<void> => {
    let filePath = await uploadFile(req.file, "locations");

    const fileUrl = filePath;

    const data = {
      url: fileUrl,
    };

    let result = await ImageRepository.store(data);
    res.status(httpStatus.CREATED).send(result);
  };

  getAll = async (req: Request, res: Response) => {
    const result = await LocationRepository.getAll();
    res.status(httpStatus.OK).json(result);
  };

  store = async (req: Request, res: Response) => {
    const image = await Image.findOne({ order: { created_at: "DESC" } });

    if (!image) {
      throw new Error("Image not found");
    }
    const data = {
      title: req.body.title,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      image: image,
    };

    let result = await LocationRepository.store(data);

    res.status(httpStatus.CREATED).send(result);
  };
}

export default new LocationController();
