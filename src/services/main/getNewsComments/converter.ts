import { CommentableType, CommentId, UserBasic, UserId } from "node-shikimori";
import { NewsCommentsTypes } from "@types";
import { v4 as uuidv4 } from "uuid";

export interface IGetNewsCommentsResponse {
  id: CommentId;
  user_id: UserId;
  commentable_id: number;
  commentable_type: CommentableType;
  body: string;
  html_body: string;
  created_at: Date;
  updated_at: Date;
  is_offtopic: boolean;
  is_summary: boolean;
  can_be_edited: boolean;
  user: UserBasic;
}

export const converterGetNewsCommentsResponse = (
  data: IGetNewsCommentsResponse[],
): NewsCommentsTypes.IGetNewsCommentsResponse["data"] => {
  return data?.map((item) => {
    const createdTS = item?.created_at
      ? new Date(item?.created_at)?.getTime()
      : new Date().getTime();
    const updatedTS = item?.updated_at
      ? new Date(item?.updated_at)?.getTime()
      : new Date().getTime();

    const stripMessage = stripHtmlTags(item?.html_body);

    return {
      id: item?.id,
      message: stripMessage,
      createdAt: createdTS,
      updated_at: updatedTS,
      uuid: uuidv4(),
      user: {
        nickname: item?.user?.nickname,
        avatar: item?.user?.avatar,
      },
    };
  });
};

function stripHtmlTags(htmlString: string) {
  return htmlString
    .replace(/<(?!br\s*\/?)[^>]+>/gi, "")
    .replace(/<br[^>]*>/gi, "<br>")
    .replace(/\[.*?\]/g, "")
    .replace(/\d+x\d+(x\d+)*/gi, "")
    .replace(/(<br\s*\/?>)\s*(?=<br\s*\/?>)/gi, "")
    .replace(/<br[^>]*>/gi, "\n");
}
