import express from 'express';
import {BookController} from '../controller/BookController.js'

const routes = express.Router();

const bookController = new BookController;

routes.post('/create', bookController.createBook);
routes.get('/all', bookController.getAllBooks);
routes.delete('/:id', bookController.deleteBook);
routes.get('/search', bookController.searchByTitle)

export {routes};