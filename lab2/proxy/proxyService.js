const apiClient = require('./apiClient');
const fs = require('fs');

const getGreeting = async () => {
  return await apiClient.getHelloFromApi();
};

// Middleware для логування (пункт "Приклад middleware" з методички)
const requestLogger = (req, res, next) => {
  const now = new Date();
  const log = `${now.toLocaleTimeString()} ${req.method} ${req.url}\n`;
  fs.appendFile("server.log", log, () => {});
  console.log("Лог додано:", log.trim());
  next(); // Обов'язково викликаємо наступну функцію в конвеєрі
};

module.exports = { getGreeting, requestLogger };