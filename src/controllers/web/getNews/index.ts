import { Request, Response } from "express";
import { getUserConstructor } from "@utils";

const getNews = (req: Request, res: Response): void => {
  const user = getUserConstructor(req.headers.authorization);

  res.status(200).json({
    user: user,
    success: true,
  });
};

export { getNews };
