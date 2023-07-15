import catchAsync from "../../shared/CatchAsync";
import sendResponse from "../../shared/SendResponse";
import { IBook } from "../models/Book.models";
import { bookService } from "../services/Book.services";
import httpStatus from "http-status";

const createNewBook = catchAsync(async (req, res) => {
  const response = await bookService.createNewBook(req.body);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Book created successfully",
    data: response,
  });
});

const getAllBooks = catchAsync(async (req, res) => {
  const response = await bookService.getAllBooks();

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books recvied successfully",
    data: response,
  });
});

const getSingleBook = catchAsync(async (req, res) => {
  const { id } = req.params;
  const response = await bookService.getSingleBook(id);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book recvied successfully",
    data: response,
  });
});

const deleteSingleBook = catchAsync(async (req, res) => {
  const { id } = req.params;
  const response = await bookService.deleteSingleBook(id);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book delete successfully",
    data: response,
  });
});

export const bookController = {
  createNewBook,
  getAllBooks,
  getSingleBook,
  deleteSingleBook,
};
