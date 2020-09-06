const express = require('express');
const model = require('../models');
const middlewares = require('../middlewares');
const models = require('../models');

const booksRouter = express.Router();

booksRouter
  .get('/', async (_req, res) => {
    const allBooks = await model.getAllBooks();
    return res.status(200).json({
      message: 'success',
      books: allBooks,
    });
  });

booksRouter
  .post('/', middlewares.isValidBook, async (req, res) => {
    const {
      name,
      title,
      description,
      imageUrl,
      price,
      priceDiscount,
      stars,
      review,
    } = req.body;

    await model.insertBook({
      name,
      title,
      description,
      imageUrl,
      price,
      priceDiscount,
      stars,
      review,
    });

    const lastBook = await model.getBook(title);
    console.log(lastBook);

    return res.status(200).json({
      status: 'success',
      insertedBook: lastBook,
    });
  });

booksRouter
  .delete('/', middlewares.isValidTitle, async (req, res) => {
    const { title } = req.body;
    const existsTitle = await model.getBook(title);
    console.log(existsTitle);

    if (!existsTitle) {
      return res.status(404).json({
        error: 'Book not found',
        code: 'not_found'
      });
    }

    await model.deleteBook(title);

    return res.status(200).json({
      message: 'successfully deleted',
      bookTitle: title,
    });

  });

module.exports = booksRouter;
