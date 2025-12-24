// Імпортуємо логіку сервера з файлу server.js
const app = require('./server'); 
const supertest = require('supertest');
const request = supertest(app);

// Описуємо тест для перевірки головної сторінки
it('перевіряє чи сервіс повертає текст, вказаний у .env', async () => {
    // Робимо запит до сервера на шлях "/"
    const response = await request.get('/'); 
    
    // Перевіряємо, чи статус відповіді 200 (OK)
    expect(response.status).toBe(200); 
    
    // Перевіряємо, чи отриманий текст збігається з налаштуванням у .env
    expect(response.text).toBe(process.env.GREETING_MESSAGE); 
});