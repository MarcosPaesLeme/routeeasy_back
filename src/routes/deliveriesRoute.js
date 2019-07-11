const express = require('express');
const router = express.Router();
const controller = require('../controllers/deliveriesController');

router.get('/', controller.getAll);

router.post('/', controller.registerClient);

router.delete('/', controller.deleteAll);

module.exports = router;