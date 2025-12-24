const express = require('express');
const proxyRouter = require('./proxyRouter');
const { requestLogger } = require('./proxyService');
const helmet = require('helmet');

const app = express();

// Вбудовуємо логування в конвеєр обробки запиту
app.use(requestLogger); 
app.use(helmet());
// Підключаємо роутинг
app.use('/', proxyRouter);

module.exports = app;