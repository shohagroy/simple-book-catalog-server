import express from "express";
import { bookController } from "../modules/controllers/Book.controllers";

const router = express.Router();

router
  .route("/books")
  .get(bookController.getAllBooks)
  .post(bookController.createNewBook);

router
  .route("/books/:id")
  .get(bookController.getSingleBook)
  .delete(bookController.deleteSingleBook)
  .patch(bookController.updateBookInfo);

router
  .route("/wishlists/:email")
  .post(bookController.addWishList)
  .get(bookController.getUserWishLists)
  .delete(bookController.deleteUserWishlist);

router
  .route("/collections/:id")
  .post(bookController.addCollections)
  .get(bookController.getUserCollections)
  .delete(bookController.deleteUserWishlist);

export const rootRouter = router;
