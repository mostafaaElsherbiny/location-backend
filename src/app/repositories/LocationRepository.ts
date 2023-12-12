import { createQueryBuilder } from "typeorm";
import { Location } from "../entities/Location";
import RepositoryBaseInterface from "../interfaces/RepositoryBaseInterface";
import BaseRepository from "./BaseRepository";

class LocationRepository
  extends BaseRepository
  implements RepositoryBaseInterface
{
  getAll = async () => {
    const locations = await createQueryBuilder(Location, "locations")
      .leftJoin("locations.image", "image")
      .select([
        "locations.id",
        "locations.title",
        "locations.latitude",
        "locations.longitude",
        "image.url",
      ])
      .orderBy("locations.id", "DESC")
      .getMany();
    locations.forEach((location) => {
      location.image.url = location.image.fullUrl;
    });
    return locations;
  };
}

export default new LocationRepository(Location, "locations");
