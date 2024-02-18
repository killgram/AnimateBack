import { Request, Response, NextFunction } from "express";
import { ErrorsEnum } from "@enums";
import { errorResponse, verifyAccessToken } from "@utils";
import { Constants } from "@configurations";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(400).json(errorResponse(ErrorsEnum.FORBIDDEN));
  const token = authHeader.split(" ")[1];
  if (!verifyAccessToken(token, Constants.ACCESS_TOKEN_SECRET)) {
    return res.status(400).json(errorResponse(ErrorsEnum.FORBIDDEN));
  } else {
    next();
  }
};

export { authenticate };
