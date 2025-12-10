let quotes = [
  { id: 1, text: "Цитата 1", author: "Автор 1" },
  { id: 2, text: "Цитата 2", author: "Автор 2" },
  { id: 3, text: "Цитата 3", author: "Автор 3" }
];

const getAllQuotes = (req, res) => {
  res.json(quotes);
};

const getRandomQuote = (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
};

const addQuote = (req, res) => {
  const { text, author } = req.body;
  if (!text || !author) {
    return res.status(400).json({ error: "Текст и автор обязательны" });
  }
  const newQuote = {
    id: quotes.length + 1,
    text,
    author
  };
  quotes.push(newQuote);
  res.status(201).json(newQuote);
};

module.exports = {
  quotes,
  getAllQuotes,
  getRandomQuote,
  addQuote
};