const Book = require("../models/book.model");

//Add a book
module.exports.AddBooks = async (req, res) => {
  try {
    // validation
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "please send all required fields: title, author, publishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
// Get all Books
module.exports.GetAllBook = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
// get a book by id
module.exports.GetBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const books = await Book.findById(id);
    res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
// Update Book
module.exports.UpdateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) {
      return res.status(400).json({ message: "Book not found" });
    }
    res.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
//Delete Book
module.exports.DeleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(400).json({ message: "Book not found" });
    }
    res.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
