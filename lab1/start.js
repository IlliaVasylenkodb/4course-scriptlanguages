// Імпортуємо налаштований додаток із server.js
const app = require('./server.js');

// Беремо порт із .env або використовуємо 3000 за замовчуванням
const PORT = process.env.PORT || 3000;

// Починаємо прослуховувати порт (Крок 8)
app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});