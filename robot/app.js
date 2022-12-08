// On importe express
const express = require('express');

// Importation de mongoose
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/travel").then(() => console.log('database connected')).catch(err => { console.log(err)});

const hotelRoutes = require('./routes/hotel');

const app = express();

app.use(express.json());

app.use('/api/hotel', hotelRoutes);

module.exports = app;
