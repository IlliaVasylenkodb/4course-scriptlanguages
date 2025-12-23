// Підключаємо бібліотеку dotenv для зчитування файлу .env
require('dotenv').config(); 

const express = require('express');
const app = express();

// Обробляємо запит на головну сторінку "/" (Крок 9)
app.get("/", (req, res) => {
    // Беремо текст із змінної GREETING_MESSAGE, яку ми створили в .env
    // Якщо змінної немає, виведеться стандартне "Hello World"
    res.send(process.env.GREETING_MESSAGE || "Hello World");
});

// Експортуємо об'єкт app, щоб його міг використати файл start.js або тести
module.exports = app;