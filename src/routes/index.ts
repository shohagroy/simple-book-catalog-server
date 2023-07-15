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

export const rootRouter = router;
