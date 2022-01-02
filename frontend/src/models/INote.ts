import IContent from "./IContent";

interface INote extends IContent {
  message: string;
  image: IContent;
}

export type { INote };
