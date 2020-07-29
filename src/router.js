const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');

//daily news
router.get('/', controller.renderHomePage);
router.get('/dailynews/:id', controller.renderArticlePage);

//women's cycling
router.get('/Womenscycling', controller.renderWomensPage);
router.get('/Womenscycling/:id', controller.renderWomensArticlePage);

//photos
router.get('/photos', controller.renderPhotosPage);
router.get('/photos/:year_num', controller.renderEventPage);
router.get('/photos/:year_num/:event_id/:id', controller.renderGalleryPage);

//beers
router.get('/beers', controller.renderBeersPage);

//search
router.get('/search', controller.renderSearchPage);
router.post('/search/results', controller.renderSearchResultsPage);

//classifieds
router.get('/classifieds', controller.renderClassifiedsPage);
router.post('/classifieds/results', controller.renderClassifiedsResultsPage);

module.exports = router;
