const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  app.use('/categories', categoriesRouter);
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
}

module.exports = routerApi;
