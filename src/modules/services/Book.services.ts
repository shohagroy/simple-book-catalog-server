import Book, { IBook, ICollection } from "../models/Book.models";

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

const addWishList = async (id: string, email: string) => {
  const result = await Book.findByIdAndUpdate(
    id,
    { $push: { wishlist: email } },
    { new: true }
  );
  return result;
};

const getUserWishList = async (email: string) => {
  const wishlistBooks = await Book.find({ wishlist: email });
  return wishlistBooks;
};

const deleteUserWishlistBook = async (id: string, email: string) => {
  const result = await Book.findByIdAndUpdate(
    id,
    { $pull: { wishlist: email } },
    { new: true }
  );
  return result;
};

const addCollections = async (id: string, data: ICollection) => {
  const result = await Book.findByIdAndUpdate(
    id,
    { $push: { collections: data } },
    { new: true }
  );

  return result;
};

const getUserCollections = async (email: string) => {
  const result = await Book.find({
    collections: { $elemMatch: { user: email } },
  });

  return result;
};

export const bookService = {
  createNewBook,
  getAllBooks,
  getSingleBook,
  deleteSingleBook,
  updateBookInfo,
  addWishList,
  getUserWishList,
  deleteUserWishlistBook,
  addCollections,
  getUserCollections,
};
