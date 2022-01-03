import { Entity, Column } from "typeorm";
import { AbstractContent } from "./AbstractContent";

@Entity()
export class Media extends AbstractContent {
  @Column({ default: "" })
  url: string;

  @Column({ default: false })
  is_video: boolean;
  public getMessage = () => {
    return this.is_video
      ? `para acceder al video ${this.title} diríjase a ${this.url}`
      : `la foto se encuentra en ${this.url}`;
  };
}
