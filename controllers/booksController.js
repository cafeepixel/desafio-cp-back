const express = require('express');
const model = require('../models');
const middlewares = require('../middlewares');

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

module.exports = booksRouter;
