const express = require('express');
const booksRouter = express.Router();
const model = require('../models');

booksRouter
  .get('/', async (_req, res) => {
    const allBooks = await model.getAllBooks();
    return res.status(200).json({
      message: 'success',
      books: allBooks,
    });
  });

booksRouter
  .post('/', async (req, res) => {
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



    const lastBook = model.getBook()

  });

module.exports = booksRouter;
