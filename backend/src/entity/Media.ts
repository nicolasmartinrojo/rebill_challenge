import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { AbstractContent } from "./AbstractContent";
import { Note } from "./Notes";

@Entity()
export class Media extends AbstractContent {
  @Column()
  url: string;

  @Column({ default: false })
  is_video: boolean;

  // @OneToMany((note) => Note, (note) => note.image)
  // notes: Note[];

  public getMessage = () => {
    return this.is_video
      ? `para acceder al video ${this.title}} diríjase a ${this.url}`
      : `la foto se encuentra en ${this.url}`;
  };
}
