const express = require ('express');
const router = express.Router();
const Controller = require('../controllers/Controller');

router.get('/teste', Controller.test);

router.get(`/details`, Controller.details);

router.post(`/interest`, Controller.add);

router.put(`/interest/:id`, Controller.update);

router.delete(`/interest/:id`, Controller.delete);

module.exports = router;