import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Location } from "./Location";
import { Base } from "./utils/Base";

@Entity()
export class Image extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  url: string;

  @OneToMany(() => Location, (location) => location.image)
  locations: Location[];

  get fullUrl(): string {
    // Replace this with your actual base URL or logic for constructing the full URL
    const baseUrl = process.env.BASE_URL as string;
    return `${baseUrl}/assets/${this.url}`;
  }
}
