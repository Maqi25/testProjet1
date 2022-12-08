const express = require('express');
const hotelCtrl = require('../controller/hotel');
const router = express.Router();
router.get('/find-by-name',  hotelCtrl.findHotelByName);
module.exports = router;
