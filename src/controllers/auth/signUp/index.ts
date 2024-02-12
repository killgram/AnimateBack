import { Request, Response } from "express";
import { AuthTypes } from "@types";
import { AuthService } from "@services";
import { errorResponse } from "@utils";
import { ErrorsEnum } from "@enums";

const signUp = async (
  req: Request<{}, {}, AuthTypes.ISignUp>,
  res: Response,
): Promise<void> => {
  const { login, password } = req.body;
  const isExist: boolean = await AuthService.isExist(login);
  if (isExist) {
    res.status(400).json(errorResponse(ErrorsEnum.USER_ALREADY_EXIST));
  } else {
    const isNewUser = await AuthService.createUser(login, password);
    res.status(200).json({
      success: isNewUser,
    });
  }
};

export { signUp };
