const sqlite3 = require('sqlite3').verbose();

// Създаване на база данни (ако не съществува)
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error('Грешка при отваряне на базата:', err);
    } else {
        console.log('Свързан с SQLite база данни');

        // Създаване на таблица за потребители
        db.run(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            )
        `, (err) => {
            if (err) console.error('Грешка при създаване на таблица:', err);
        });
    }
});

module.exports = db;
