const express = require('express');
const app = express();
const port = 3000;
const metricsController = require('./controllers/metrics');
const orderController = require('./controllers/orders');

app.use('/metrics', metricsController);
app.use('/orders', orderController);

app.listen(port, () => {
  console.log(`Aurora Broker API listening on port ${port}`);
});