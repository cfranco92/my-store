const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No allowed by CORS'));
    }
  },
};

app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/new-route', (req, res) => {
  res.send('Hello there, I am a new route!');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

module.exports = app;
