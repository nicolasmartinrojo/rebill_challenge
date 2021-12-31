import { PrimaryGeneratedColumn, Column } from "typeorm";

interface IContent {
  id: number;
  title: string;
  description: string;
  getMessage: () => string;
}
export abstract class AbstractContent implements IContent {
  public abstract getMessage;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}

export { IContent };
