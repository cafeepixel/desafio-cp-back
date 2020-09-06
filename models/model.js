const connection = require('./connection');
const { connect } = require('../controllers/booksController');

const queryAllBooks = "SELECT * FROM books";

const getAllBooks = async () =>
  connection()
    .then((session) =>
      session.sql(queryAllBooks)
        .execute())
    .then((results) => results.fetchAll())
    .then((books) =>
      books.map(([id, name, title, description, imageUrl, price, priceDiscount, stars, review]) => (
        { id, name, title, description, imageUrl, price, priceDiscount, stars, review }
      )));

const insertBook = async (data) =>
  connection()
    .then((session) =>
      session
        .getSchema('coffeeAndPixelBooks')
        .getTable('books')
        .insert(['author', 'title', 'description', 'image_url', 'price', 'price_discount', 'stars', 'review'])
        .values(Object.values(data))
        .execute()
    );

const queryOneBook = "SELECT * FROM books WHERE title = ?";

const getBook = (title) =>
  connection()
    .then((session) =>
      session.sql(queryOneBook)
        .bind(title)
        .execute()
    )
    .then((result) => result.fetchAll())
    .then((book) => {
      const [id, name, title, description, imageUrl, price, priceDiscount, stars, review] = book[0];
      return { id, name, title, description, imageUrl, price, priceDiscount, stars, review };
    });

const deleteQuery = "DELETE FROM books WHERE title = ?";

const deleteBook = (title) =>
  connection()
    .then((session) =>
      session.sql(deleteQuery)
        .bind(title)
        .execute());

module.exports = {
  getAllBooks,
  insertBook,
  deleteBook,
  getBook,
}
