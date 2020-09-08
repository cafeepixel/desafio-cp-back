const express = require ('express');
const router = express.Router();
const Controller = require('../controllers/Controller');

router.get('/teste', Controller.test);

router.get('/list', Controller.list);

router.post('/add', Controller.add);

router.put('/update/:id', Controller.update);

router.delete('/delete/:id', Controller.delete);

module.exports = router;