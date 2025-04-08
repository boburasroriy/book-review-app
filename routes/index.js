const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const { reviewValidationRules } = require('../validators');

router.get('/', indexController.getHome);
router.get('/reviews', indexController.getReviews);
router.get('/reviews/new', indexController.getNewReview);
router.post('/reviews', reviewValidationRules, indexController.createReview);
router.get('/reviews/edit/:id', indexController.getEditReview);
router.post('/reviews/edit/:id', reviewValidationRules, indexController.updateReview);
router.post('/reviews/delete/:id', indexController.deleteReview);

module.exports = router;