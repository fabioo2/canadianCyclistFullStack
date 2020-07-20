const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');

router.get('/', controller.renderHomePage);
router.get('/dailynews/:id', controller.renderArticlePage);
// router.get('/createPost', controller.renderCreatePage);

router.get('/Womenscycling', controller.renderWomensPage);
router.get('/Womenscycling/:id', controller.renderWomensArticlePage);

router.get('/photos', controller.renderPhotosPage);
router.get('/beers', controller.renderBeersPage);
// router.post('/add', controller.createPost);

module.exports = router;
