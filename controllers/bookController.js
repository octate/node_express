const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require('../database');
const Book = require('../models/Book');

function validateBook(book) {
  const validFields = ['title', 'author', 'published_year', 'isbn'];
  return Object.fromEntries(
    Object.entries(book).filter(([key]) => validFields.includes(key))
  );
}

exports.getAllBooks = async (req, res) => {
  const books = await getAllBooks();
  res.json(books.map(book => Book.fromObject(book).toObject()));
};

exports.getBookById = async (req, res) => {
  const { id } = req.params;
  const book = await getBookById(id);
  if (book) {
    res.json(Book.fromObject(book).toObject());
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
};

exports.createBook = async (req, res) => {
  const newBook = await createBook(validateBook(req.body));
  res.status(201).json(Book.fromObject(newBook).toObject());
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const updatedBook = await updateBook(id, validateBook(req.body));
  if (updatedBook) {
    res.json(Book.fromObject(updatedBook).toObject());
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  const deletedBook = await deleteBook(id);
  if (deletedBook) {
    res.json({ message: 'Book deleted successfully' });
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
};
