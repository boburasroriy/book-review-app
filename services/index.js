const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '../../data');
const reviewsFile = path.join(dataDir, 'reviews.json');

// Create data directory and reviews file if they don’t exist
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}
if (!fs.existsSync(reviewsFile)) {
  fs.writeFileSync(reviewsFile, JSON.stringify([]));
}

const reviewService = {
  getAllReviews: () => {
    return JSON.parse(fs.readFileSync(reviewsFile));
  },

  getReviewById: (id) => {
    const reviews = JSON.parse(fs.readFileSync(reviewsFile));
    return reviews.find(r => r.id === id);
  },

  createReview: (data) => {
    const reviews = JSON.parse(fs.readFileSync(reviewsFile));
    const newReview = {
      id: Date.now().toString(), // Simple unique ID
      title: data.title,
      author: data.author,
      genre: data.genre
    };
    reviews.push(newReview);
    fs.writeFileSync(reviewsFile, JSON.stringify(reviews, null, 2));
  },

  updateReview: (id, data) => {
    const reviews = JSON.parse(fs.readFileSync(reviewsFile));
    const index = reviews.findIndex(r => r.id === id);
    if (index !== -1) {
      reviews[index] = { id, ...data };
      fs.writeFileSync(reviewsFile, JSON.stringify(reviews, null, 2));
    }
  },

  deleteReview: (id) => {
    const reviews = JSON.parse(fs.readFileSync(reviewsFile));
    const updatedReviews = reviews.filter(r => r.id !== id);
    fs.writeFileSync(reviewsFile, JSON.stringify(updatedReviews, null, 2));
  }
};

module.exports = reviewService;