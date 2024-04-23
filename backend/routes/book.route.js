const express = require("express");
const {
  AddBooks,
  GetAllBook,
  GetBookById,
  UpdateBook,
  DeleteBook,
} = require("../controllers/book.controller");
const router = express.Router();

router.post("/", AddBooks);
router.get("/", GetAllBook);
router.get("/:id", GetBookById);
router.put("/:id", UpdateBook);
router.delete("/:id", DeleteBook);

module.exports = router;
