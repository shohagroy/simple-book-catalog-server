import express from "express";

const router = express.Router();

router.route("/books", (req, res) => {
  res.send("all ok");
});

export const rootRouter = router;
