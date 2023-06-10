const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/new-route', (req, res) => {
  res.send('Hello there, I am a new route!');
});

routerApi(app);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
