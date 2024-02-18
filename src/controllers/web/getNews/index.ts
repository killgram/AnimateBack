import { Request, Response } from "express";
import { NewsTypes } from "@types";
import { TopicsListParams } from "node-shikimori";
import { errorResponse } from "@utils";
import { ErrorsEnum } from "@enums";
import { MainService } from "@services";

const getNews = async (
  req: Request<{}, {}, {}, NewsTypes.IGetNews>,
  res: Response,
): Promise<void> => {
  const { page, limit } = req.query;
  const params = createParams(page, limit);

  const data = await MainService.getNewsService(params);

  if (data.isError) {
    res.status(400).json(errorResponse(ErrorsEnum.PROBLEMS_RECEIVING_DATA));
  } else {
    res.status(200).json({
      page: params.page,
      limit: params.limit,
      data: data.data,
      success: true,
    });
  }
};

const createParams = (page = 1, limit = 15): TopicsListParams => {
  return {
    forum: "news",
    limit: Number(limit),
    page: Number(page),
  };
};

export { getNews };
