import RepositoryBaseInterface from "../interfaces/RepositoryBaseInterface";
import BaseRepository from "./BaseRepository";
import { Image } from "../entities/Image";

class ImageRepository
  extends BaseRepository
  implements RepositoryBaseInterface {}

export default new ImageRepository(Image, "images");
