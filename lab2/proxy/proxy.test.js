const request = require('supertest');
const app = require('./app');
const apiClient = require('./apiClient');

// Мокаємо (підміняємо) модуль apiClient, щоб не робити реальних запитів до порту 3000
jest.mock('./apiClient');

describe('Proxy Server Tests', () => {
  it('має повертати дані, отримані від API клієнта', async () => {
    // Вказуємо, що саме має повернути наш "фейковий" клієнт
    const mockData = "Hello from Mocked API";
    apiClient.getHelloFromApi.mockResolvedValue(mockData);

    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
    expect(response.text).toContain(mockData);
  });

  it('має повертати помилку 500, якщо API недоступне', async () => {
    // Імітуємо помилку мережі
    apiClient.getHelloFromApi.mockRejectedValue(new Error("Network Error"));

    const response = await request(app).get('/');
    
    expect(response.status).toBe(500);
    expect(response.text).toBe("Помилка при зверненні до API: Network Error");
  });
});