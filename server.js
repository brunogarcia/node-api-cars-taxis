const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const carsVehicles = JSON.parse(fs.readFileSync('cars/vehicles.json', 'utf8'));
const taxiVehicles = JSON.parse(fs.readFileSync('taxis/vehicles.json', 'utf8'));

app.get('/cars/vehicles', (req, res) => {
    res.send(JSON.stringify(carsVehicles));
});

app.get('/taxis/vehicles', (req, res) => {
    res.send(JSON.stringify(taxiVehicles));
});

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});
