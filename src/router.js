const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');

router.get('/', controller.renderHomePage);
router.get('/createPost', controller.renderCreatePage);
router.get('/Womenscycling', controller.renderWomensPage);
router.get('/photos', controller.renderPhotosPage);
router.get('/photos/:year_num', controller.renderEventPage);
router.get('/gallery', controller.renderGalleryPage);
router.get('/dailynews/:id', controller.renderArticlePage);

router.post('/add', controller.createPost);

module.exports = router;
