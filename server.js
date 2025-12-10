const express = require('express');
const quotesRouter = require('./routes/quotes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

app.use(express.static('public'));

app.use('/api/quotes', quotesRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
