import { Request, Response, NextFunction } from "express";
import { AuthTypes } from "@types";
import { ErrorsEnum } from "@enums";
import { errorResponse } from "@utils";

const authVerification = (
  req: Request<{}, {}, AuthTypes.ISignUp>,
  res: Response,
  next: NextFunction,
) => {
  const { login, password } = req.body;

  if (!login?.trim() || !password?.trim()) {
    return res.status(400).json(errorResponse(ErrorsEnum.MISSING_PARAMS));
  } else {
    next();
  }
};

export { authVerification };
