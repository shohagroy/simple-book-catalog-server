import express from "express";
import { bookController } from "../modules/controllers/Book.controllers";

const router = express.Router();

router
  .route("/books")
  .get((req, res) => {
    res.send("all ok");
  })
  .post(bookController.createNewBook);

export const rootRouter = router;
