import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Image } from "./Image";
import { Base } from "./utils/Base";

@Entity()
export class Location extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "double precision" })
  latitude: number;

  @Column({ type: "double precision" })
  longitude: number;


  @ManyToOne(() => Image, (image) => image.locations)
  image: Image;
}
