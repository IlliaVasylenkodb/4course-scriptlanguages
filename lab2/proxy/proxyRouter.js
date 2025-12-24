const express = require('express');
const router = express.Router();
const proxyService = require('./proxyService');

router.get('/', async (req, res) => {
  try {
    const data = await proxyService.getGreeting();
    res.send(data); // Повертаємо результат, отриманий від api
  } catch (error) {
    res.status(500).send("Помилка при зверненні до API: " + error.message);
  }
});

module.exports = router;