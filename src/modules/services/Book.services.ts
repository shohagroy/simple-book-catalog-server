import Book, { IBook } from "../models/Book.models";

const createNewBook = async (payload: IBook) => {
  const result = await Book.create(payload);
  return result;
};

export const bookService = {
  createNewBook,
};
