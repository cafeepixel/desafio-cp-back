const express = require('express');
const booksController = express.Router();
const model = require('../models');

booksController
  .get('/', async (_req, res) => {
    const allBooks = await model.getAllBooks();
    res.status(200).json({
      message: 'success',
      books: allBooks,
    })
  });

module.exports = booksController;
