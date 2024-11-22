import express from "express";
import { publicRputer } from "../route/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";

export const web = express();
web.use(express.json());

web.use(publicRputer);
web.use(errorMiddleware);
