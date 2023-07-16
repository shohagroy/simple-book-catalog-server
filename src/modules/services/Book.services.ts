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

const deleteUserBookCollection = async (data: {
  id: string;
  email: string;
}) => {
  const { id, email } = data;
  const result = await Book.findByIdAndUpdate(
    id,
    { $pull: { collections: { user: email } } },
    { new: true }
  );

  return result;
};

const updateUserBookCollection = async (data: {
  id: string;
  email: string;
  value: string;
}) => {
  const { id, email, value } = data;

  const updatedData = { user: email, status: value };

  const deleteData = await Book.findByIdAndUpdate(
    id,
    { $pull: { collections: { user: email } } },
    { new: true }
  );

  if (deleteData) {
    const updateData = await Book.findByIdAndUpdate(
      id,
      { $push: { collections: updatedData } },
      { new: true }
    );

    return updateData;
  }
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
  deleteUserBookCollection,
  updateUserBookCollection,
};
