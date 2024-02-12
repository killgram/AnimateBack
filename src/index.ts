import * as process from "process";
require("module-alias/register");
import * as dotenv from "dotenv";
dotenv.config();
import "module-alias/register";
import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import responseTime from "response-time";
const app: Application = express();
const PORT = process.env.PORT ?? process.env.APP_PORT;

import { ApiEnum } from "@enums";
import { CommonRouter, AuthRouter } from "@routes";
import { initRedis } from "@configurations";

// configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // logger
app.use(responseTime({ header: "work-time" })); // ms in header
app.use("/favicon.ico", express.static(`${process.cwd()}/public/favicon.jpeg`));

app.use(ApiEnum.COMMON, CommonRouter);
app.use(ApiEnum.AUTH, AuthRouter);

// listener
app.listen(PORT, (): void => {
  initRedis().then((_) => {
    console.log(`${process.env.APP_NAME} running on port here 👉 ${PORT}`);
  });
});
