import { shClient } from "@configurations";
import { NewsCommentsTypes } from "@types";
import {
  IGetNewsCommentsResponse,
  converterGetNewsCommentsResponse,
} from "./converter";
import { CommentsParams } from "node-shikimori";

const getNewsComments = async (
  newsId: number,
): Promise<NewsCommentsTypes.IGetNewsCommentsResponse> => {
  const sh = await shClient();
  const params = createParams(newsId);

  try {
    const result = (await sh.comments.list(
      params,
    )) as IGetNewsCommentsResponse[];
    const processingResult = result?.slice(0, result.length - 1);
    const data = converterGetNewsCommentsResponse(processingResult);

    return {
      isError: false,
      data: data,
    };
  } catch (_) {
    return {
      isError: true,
    };
  }
};

const createParams = (newsId: number): CommentsParams => {
  return {
    commentable_id: newsId,
    commentable_type: "Topic",
    desc: 1,
    limit: 50,
  };
};

export { getNewsComments };
