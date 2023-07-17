"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRouter = void 0;
const express_1 = __importDefault(require("express"));
const Book_controllers_1 = require("../modules/controllers/Book.controllers");
const Review_controllers_1 = require("../modules/controllers/Review.controllers");
const Year_controllers_1 = require("../modules/controllers/Year.controllers");
const router = express_1.default.Router();
router
    .route("/books")
    .get(Book_controllers_1.bookController.getAllBooks)
    .post(Book_controllers_1.bookController.createNewBook);
router
    .route("/books/:id")
    .get(Book_controllers_1.bookController.getSingleBook)
    .delete(Book_controllers_1.bookController.deleteSingleBook)
    .patch(Book_controllers_1.bookController.updateBookInfo);
router
    .route("/wishlists/:email")
    .post(Book_controllers_1.bookController.addWishList)
    .get(Book_controllers_1.bookController.getUserWishLists)
    .delete(Book_controllers_1.bookController.deleteUserWishlist);
router
    .route("/collections/:id")
    .post(Book_controllers_1.bookController.addCollections)
    .get(Book_controllers_1.bookController.getUserCollections)
    .delete(Book_controllers_1.bookController.deleteUserBookCollection)
    .patch(Book_controllers_1.bookController.updateUserBookCollection);
router.route("/reviews").post(Review_controllers_1.reviewControllers.createBooksReview);
router.route("/reviews/:id").get(Review_controllers_1.reviewControllers.getBookReviews);
router.route("/years").get(Year_controllers_1.yearController.getAllYears);
exports.rootRouter = router;
