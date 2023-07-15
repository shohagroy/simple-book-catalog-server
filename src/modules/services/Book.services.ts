import Book, { IBook } from "../models/Book.models";

const createNewBook = async (payload: IBook) => {
  const result = await Book.create(payload);
  return result;
};

const getAllBooks = async () => {
  const result = await Book.find();
  return result;
};

const getSingleBook = async (id: string) => {
  const result = await Book.findById(id);
  return result;
};

const deleteSingleBook = async (id: string) => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};

const updateBookInfo = async (data: IBook) => {
  const result = await Book.findByIdAndUpdate(data._id, data, { new: true });
  return result;
};

export const bookService = {
  createNewBook,
  getAllBooks,
  getSingleBook,
  deleteSingleBook,
  updateBookInfo,
};
