const { body } = require('express-validator');

const reviewValidationRules = [
  body('title').notEmpty().withMessage('Title is required'),
  body('author').notEmpty().withMessage('Author is required'),
  body('genre').notEmpty().withMessage('Genre is required')
];

module.exports = { reviewValidationRules };