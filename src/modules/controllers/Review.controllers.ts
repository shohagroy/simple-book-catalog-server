import catchAsync from "../../shared/CatchAsync";
import sendResponse from "../../shared/SendResponse";
import httpStatus from "http-status";
import { reviewServices } from "../services/Review.service";
import { IReview } from "../models/Review.model";

const createBooksReview = catchAsync(async (req, res) => {
  const response = await reviewServices.createBooksReview(req.body);

  sendResponse<IReview>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Book Review created successfully",
    data: response,
  });
});

const getBookReviews = catchAsync(async (req, res) => {
  const { id } = req.params;

  const response = await reviewServices.getBookReviews(id);

  sendResponse<IReview[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book reviews recvied successfully",
    data: response,
  });
});

export const reviewControllers = {
  createBooksReview,
  getBookReviews,
};
