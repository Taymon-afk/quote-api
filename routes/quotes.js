const express = require('express');
const router = express.Router();
const {
  getAllQuotes,
  getRandomQuote,
  addQuote
} = require('../controllers/quotesController');

router.get('/', (req, res) => {
  const author = req.query.author;
  const quotes = require('../controllers/quotesController').quotes;
  
  if (author) {
    const filtered = quotes.filter(q => q.author.toLowerCase().includes(author.toLowerCase()));
    return res.json(filtered);
  }
  
  getAllQuotes(req, res);
});

router.get('/random', getRandomQuote);

router.post('/', addQuote);

module.exports = router;