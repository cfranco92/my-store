const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/new-route', (req, res) => {
  res.send('Hello there, I am a new route!');
});

app.get('/products/filter', (req, res) => {
  res.send('I am a filter');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;

  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    name: 'Product 1',
    price: 100,
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No limit or offset provided');
  }
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId: categoryId,
    productId: productId,
    name: 'Product 1',
    price: 100,
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
