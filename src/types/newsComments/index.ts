export interface IGetNewsComments {
  newsId?: number;
}

export interface IGetNewsCommentsData {
  id: number;
  message: string;
  createdAt: number;
  updated_at: number;
  user: {
    nickname: string;
    avatar: string;
  };
  uuid: string;
}

export interface IGetNewsCommentsResponse {
  isError: boolean;
  data?: IGetNewsCommentsData[];
}
