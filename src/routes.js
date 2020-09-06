import { Router } from 'express';

import BookController from './app/controllers/BookController';

const routes = new Router();

routes.get('/books', BookController.index);
routes.post('/books', BookController.store);
routes.delete('/books/:id', BookController.delete);

export default routes;