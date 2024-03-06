import { Request, Response } from "express";
import { errorResponse } from "@utils";
import { ErrorsEnum } from "@enums";
import { MainService } from "@services";
import { NewsCommentsTypes } from "@types";

const getNewsComments = async (
  req: Request<{}, {}, {}, NewsCommentsTypes.IGetNewsComments>,
  res: Response,
) => {
  const { newsId } = req.query;
  if (!newsId || isNaN(newsId))
    return res.status(400).json(errorResponse(ErrorsEnum.MISSING_PARAMS));

  const data = await MainService.getNewsComments(Number(newsId));

  if (data.isError) {
    res.status(400).json(errorResponse(ErrorsEnum.PROBLEMS_RECEIVING_DATA));
  } else {
    res.status(200).json({
      data: data.data,
      success: true,
    });
  }
};

export { getNewsComments };
