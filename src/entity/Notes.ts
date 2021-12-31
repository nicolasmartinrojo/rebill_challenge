import { Entity, Column } from "typeorm";
import { AbstractContent } from "./AbstractContent";

@Entity()
export class Note extends AbstractContent {
  @Column()
  message: string;

  public getMessage = () => {
    return `su nota ${this.title} contiene el cuerpo ${this.message}`;
  };
}
