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

// configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // logger
app.use(responseTime({ header: "work-time" })); // ms in header

// listener
app.listen(PORT, (): void => {
  console.log(`${process.env.APP_NAME} running on port here 👉 ${PORT}`);
});
