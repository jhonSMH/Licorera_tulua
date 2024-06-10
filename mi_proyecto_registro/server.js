const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors'); // Importar el módulo CORS
const app = express();
const port = 3000;

// Usar CORS y configurar para permitir solicitudes desde cualquier origen o un origen específico
app.use(cors());


// Configuración de body-parser para manejar solicitudes POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conectar a la base de datos SQLite
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado a la base de datos SQLite.');
});

// Crear tabla de usuarios si no existe
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    phone TEXT,
    email TEXT
)`);

// Ruta para registrar un usuario
app.post('/register', (req, res) => {
    const { name, age, phone, email } = req.body;

    if (!name || !age || !phone || !email) {
        res.status(400).send('Todos los campos son obligatorios');
        return;
    }

    const stmt = db.prepare('INSERT INTO users (name, age, phone, email) VALUES (?, ?, ?, ?)');
    stmt.run(name, age, phone, email, function(err) {
        if (err) {
            console.error('Error al insertar en la base de datos:', err.message);
            res.status(500).send('Error al registrar el usuario: ' + err.message);
            return;
        }
        res.status(200).send('Usuario registrado exitosamente');
    });
    stmt.finalize();
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
