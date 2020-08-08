const express = require('express');
const router = express.Router();
const controller = require('./controllers/Controller');

//daily news
router.get('/', controller.renderHomePage);
router.get('/dailynews/:id', controller.renderArticlePage);

//women's Cycling News
router.get('/Womenscycling', controller.renderWomensPage);
router.get('/Womenscycling/:id', controller.renderWomensArticlePage);

//women's Features
router.get('/Womensfeatures', controller.renderWomensFeaturePage);
router.get('/Womensfeatures/:id', controller.renderWomensFeatureArticle);

//women's Reviews
router.get('/Womensreviews', controller.renderWomensReviewsPage);
router.get('/Womensreviews/:id', controller.renderWomensReviewsArticle);

//women's Resources
router.get('/Womensresources', controller.renderWomensResourcesPage);
router.get('/Womensresources/:id', controller.renderWomensResourcesArticle);

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
router.get('/classifieds/create', controller.renderCreateClassifiedsPage);
router.post('/classifieds/create', controller.postClassified);

module.exports = router;
