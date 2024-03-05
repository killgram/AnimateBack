import { NewsSource } from "@enums";

export interface IGetNewsSHData {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  imageScr?: string;
  descriptionLinks?: string[];
  createdTimestamp: number;
  source: string;
  uuid: string;
}

export interface IGetNewsALData {
  id: number;
  title: string;
  createdAt: number;
  imageScr?: string;
  createdTimestamp?: number;
  source: string;
  uuid: string;
  newsType: string;
  description?: string;
  genres?: string[];
  youTubeLink?: string;
}

export interface IGetNewsResponse {
  isError: boolean;
  data?: {
    [NewsSource.SH]?: IGetNewsSHData[];
    [NewsSource.AL]?: IGetNewsALData[];
  };
}

export interface IGetNews {
  source?: string;
}
