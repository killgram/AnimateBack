import { Request, Response } from "express";
import { AuthTypes } from "@types";
import { AuthService } from "@services";
import { errorResponse } from "@utils";
import { ErrorsEnum } from "@enums";

const singIn = async (
  req: Request<{}, {}, AuthTypes.ISignUp>,
  res: Response,
): Promise<void> => {
  const { login, password } = req.body;
  const user = await AuthService.getUser(login, password);
  if (user.isError) {
    res.status(400).json(errorResponse(ErrorsEnum.MISSING_USER));
  } else {
    res.status(200).json({
      success: true,
      accessToken: user?.accessToken,
    });
  }
};

export { singIn };
