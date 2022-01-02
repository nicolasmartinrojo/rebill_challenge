import IContent from "./IContent";

interface INote extends IContent {
  url: string;
  is_video: boolean;
}

export type { INote };
