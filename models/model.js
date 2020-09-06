const connection = require('./connection');
const { connect } = require('../controllers/booksController');

const queryAllBooks = `SELECT * FROM books`;

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
        .getTable('books')
        .insert([...data])
        .execute());


module.exports = {
  getAllBooks,
  insertBook,
}
