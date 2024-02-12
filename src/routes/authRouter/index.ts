import express, { Router } from "express";
import { AuthRoutesEnum } from "@enums";
import { AuthControllers } from "@controllers";
import { AuthMiddleware } from "@middleware";
const router: Router = express.Router();

router.post(
  AuthRoutesEnum.SIGN_UP,
  AuthMiddleware.authVerification,
  AuthControllers.signUp,
);
router.post(
  AuthRoutesEnum.SIGN_IN,
  AuthMiddleware.authVerification,
  AuthControllers.singIn,
);

export { router as AuthRouter };
