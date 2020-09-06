import { Router } from 'express';

import BookController from './app/controllers/BookController';

const routes = new Router();

routes.post('/book', BookController.store);

export default routes;