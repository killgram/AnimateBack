import { Request, Response } from "express";
import * as process from "process";

const getWorkStatus = (req: Request, res: Response): void => {
  res.status(200).json({
    title: `${process.env.APP_NAME} is working correctly`,
    success: true,
  });
};

export { getWorkStatus };
