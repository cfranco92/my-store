const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/new-route', (req, res) => {
  res.send('Hello there, I am a new route!');
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 100,
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
