// server.js

const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Ruta para manejar la solicitud y devolver los datos
app.get('/fetch-data', async (req, res) => {
    try {
        // URL de la página de la cual se va a extraer información
        const targetUrl = 'https://games.roblox.com/v2/users/123456789/games?accessFilter=2&limit=10&sortOrder=Asc';

        // Realizar una solicitud GET usando Axios
        const response = await axios.get(targetUrl);
        res.send(response.data);
    } catch (error) {
        console.error('Error al obtener información:', error.message);
        res.status(500).send('Error al obtener información');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor intermedio iniciado en http://localhost:${port}`);
});
