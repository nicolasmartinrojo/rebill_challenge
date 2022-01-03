import { Entity, Column, OneToMany, ManyToOne } from "typeorm";
import { AbstractContent } from "./AbstractContent";
import { Media } from "./Media";

@Entity()
export class Note extends AbstractContent {
  @Column()
  message: string;

  @ManyToOne(() => Media, (media) => media.id)
  image: Media;

  public getMessage = () => {
    return `su nota ${this.title} contiene el cuerpo ${this.message}`;
  };
}
