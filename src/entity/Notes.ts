import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { AbstractContent } from "./AbstractContent";
import { Media } from "./Media";

@Entity()
export class Note extends AbstractContent {
  @Column()
  message: string;

  @OneToOne(() => Media)
  @JoinColumn()
  image: Media;

  public getMessage = () => {
    return `su nota ${this.title} contiene el cuerpo ${this.message}`;
  };
}
