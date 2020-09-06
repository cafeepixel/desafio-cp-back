import express from 'express';
import {BookController} from '../controller/BookController.js'

const routes = express.Router();

const bookController = new BookController;

routes.get('/', bookController.getBooks);
routes.post('/create', bookController.createBook);
routes.delete('/:id', bookController.deleteBook);

export {routes};