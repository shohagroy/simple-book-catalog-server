import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Simple Book Store Server is Running...");
});

export default app;
