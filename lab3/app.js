const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const jsonParser = express.json();

// Використовуємо IP, який працює у вашому Compass
const url = "mongodb://127.0.1.24:27017/"; 
const client = new MongoClient(url);

app.use(express.static(__dirname + "/public"));

async function start() {
    try {
        console.log("Спроба підключення до MongoDB...");
        await client.connect();
        console.log("Підключено до бази успішно!");

        const db = client.db("footballDB");
        app.locals.collection = db.collection("players");

        app.listen(3000, () => {
            console.log("Сервер футбольної бази: http://localhost:3000");
        });
    } catch (err) {
        console.error("Помилка при запуску:", err);
    }
}

// GET: Отримання гравців
app.get("/api/players", async (req, res) => {
    const collection = req.app.locals.collection;
    try {
        const players = await collection.find({}).toArray();
        res.send(players);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

// POST: Додавання гравця
app.post("/api/players", jsonParser, async (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const player = { name: req.body.name, position: req.body.position, goals: req.body.goals };
    const collection = req.app.locals.collection;
    try {
        await collection.insertOne(player);
        res.send(player);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

start();

process.on("SIGINT", async () => {
    await client.close();
    console.log("З'єднання з базою закрито.");
    process.exit();
});