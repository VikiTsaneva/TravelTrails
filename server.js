const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const db = require('./db'); // Връзка с SQLite

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Регистрация
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) return res.status(500).json({ message: 'Грешка при заявката' });

        if (row) {
            return res.status(400).json({ message: 'Потребител с това име вече съществува.' });
        }

        bcrypt.hash(password, 10, (err, hash) => {
            if (err) return res.status(500).json({ message: 'Грешка при хеширане на паролата' });

            db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], (err) => {
                if (err) return res.status(500).json({ message: 'Грешка при регистрация' });
                res.json({ message: 'Регистрацията е успешна!' });
            });
        });
    });
});

// Вход
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) return res.status(500).json({ message: 'Грешка при заявката' });

        if (!row) {
            return res.status(400).json({ message: 'Грешно потребителско име или парола' });
        }

        bcrypt.compare(password, row.password, (err, result) => {
            if (err || !result) {
                return res.status(400).json({ message: 'Грешно потребителско име или парола' });
            }
            res.json({ message: 'Входът е успешен!' }); 
        });
    });
});

// Маршрути за статични файлове
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

// Стартиране на сървъра
app.listen(port, () => {
    console.log(`Сървърът работи на http://localhost:${port}`);
});