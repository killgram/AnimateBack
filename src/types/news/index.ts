export interface IGetNews {
  page?: number;
  limit?: number;
}

export interface IGetNewsData {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  imageScr?: string;
  descriptionLinks?: string[];
}

export interface IGetNewsResponse {
  isError: boolean;
  data?: IGetNewsData[];
}
