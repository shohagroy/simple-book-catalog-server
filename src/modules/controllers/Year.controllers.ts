import catchAsync from "../../shared/CatchAsync";
import sendResponse from "../../shared/SendResponse";
import httpStatus from "http-status";
import { yearServices } from "../services/Year.services";
import { IYear } from "../models/YearModal";

const getAllYears = catchAsync(async (req, res) => {
  const response = await yearServices.getAllYears();

  sendResponse<IYear[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "year recvied successfully",
    data: response,
  });
});

export const yearController = { getAllYears };
