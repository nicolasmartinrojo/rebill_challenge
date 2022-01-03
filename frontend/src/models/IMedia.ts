import IContent from "./IContent";

interface IMedia extends IContent {
  url: string;
  is_video: boolean;
}

export type { IMedia };
