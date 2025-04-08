const { validationResult } = require('express-validator');
const reviewService = require('../services/index');

const indexController = {
  getHome: (_req, res) => {
    res.render('index');
  },

  getReviews: (_req, res) => {
    const reviews = reviewService.getAllReviews();
    res.render('reviews', { reviews });
  },

  getNewReview: (_req, res) => {
    res.render('new_review', { errors: null, oldData: {} });
  },

  createReview: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('new_review', { errors: errors.array(), oldData: req.body });
    }
    reviewService.createReview(req.body);
    res.redirect('/reviews');
  },

  getEditReview: (req, res) => {
    const review = reviewService.getReviewById(req.params.id);
    if (!review) return res.status(404).send('Review not found');
    res.render('edit_review', { review, errors: null });
  },

  updateReview: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('edit_review', { review: req.body, errors: errors.array() });
    }
    reviewService.updateReview(req.params.id, req.body);
    res.redirect('/reviews');
  },

  deleteReview: (req, res) => {
    reviewService.deleteReview(req.params.id);
    res.redirect('/reviews');
  }
};

module.exports = indexController;