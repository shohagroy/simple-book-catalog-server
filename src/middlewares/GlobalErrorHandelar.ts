import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { Error } from "mongoose";

import ApiError from "../errorHandelars/ApiError";
import handleValidationError from "../errorHandelars/HandleValidationError";
import { IGenericErrorMessage } from "../inferfaces/Error";
import envConfig from "../configs/envConfig";

const globalErrorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  envConfig.node_environment === "development" &&
    console.log(`🐱‍🏍 globalErrorHandler ~~`, error);

  let statusCode = 500;
  let message = "Something went wrong!";
  let errorMessages: IGenericErrorMessage[] = [];

  if (error?.name === "ValidationError") {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack:
      envConfig.node_environment === "development" ? error?.stack : undefined,
  });
};

export default globalErrorHandler;
