const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');

router.get('/', controller.renderHomePage);
router.get('/createPost', controller.renderCreatePage);

router.get('/createTable', controller.createTable);
router.post('/add', controller.createPost);

module.exports = router;
