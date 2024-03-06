import express, { Router } from "express";
import { WebRoutesEnum } from "@enums";
import { WebControllers } from "@controllers";
import { WebMiddleware } from "@middleware";
const router: Router = express.Router();

router.get(
  WebRoutesEnum.GET_NEWS,
  WebMiddleware.authenticate,
  WebControllers.getNews,
);

router.get(
  WebRoutesEnum.GET_NEWS_COMMENTS,
  WebMiddleware.authenticate,
  WebControllers.getNewsComments,
);

export { router as WebRouter };
