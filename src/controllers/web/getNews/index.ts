import { Request, Response } from "express";
import { errorResponse } from "@utils";
import { ErrorsEnum } from "@enums";
import { MainService } from "@services";
import { NewsTypes } from "@types";

const getNews = async (
  req: Request<{}, {}, {}, NewsTypes.IGetNews>,
  res: Response,
): Promise<void> => {
  const { source } = req.query;
  const data = await MainService.getNewsService(source);

  if (data.isError) {
    res.status(400).json(errorResponse(ErrorsEnum.PROBLEMS_RECEIVING_DATA));
  } else {
    res.status(200).json({
      data: data.data,
      success: true,
    });
  }
};

export { getNews };
