import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import httpStatus from "http-status";
import globalErrorHandler from "./middlewares/globalErrorHandelar";

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Simple Book Store Server is Running...");
});

app.use(globalErrorHandler);

app.all("*", (req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({ message: "no route found" });
});

export default app;
