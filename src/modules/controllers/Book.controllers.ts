import sendResponse from "../../shared/SendResponse";
import catchAsync from "../../shared/catchAsync";
import { bookService } from "../services/Book.services";
import httpStatus from "http-status";

const createNewBook = catchAsync(async (req, res) => {
  const response = await bookService.createNewBook(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Book created successfully",
    data: response,
  });
});

export const bookController = {
  createNewBook,
};
