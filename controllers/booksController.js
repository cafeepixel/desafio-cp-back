const express = require('express');
const booksController = express.Router();
const model = require('../models');

booksController
  .get('/', async (_req, res) => {
    const allBooks = await model.getAllBooks();
    return res.status(200).json({
      message: 'success',
      books: allBooks,
    });
  });

module.exports = booksController;
