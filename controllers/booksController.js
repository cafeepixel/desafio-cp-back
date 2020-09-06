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

  });

module.exports = booksRouter;
