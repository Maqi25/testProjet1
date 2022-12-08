const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
    name:  String, // String is shorthand for {type: String}
    price: Number,
    dupeId: Number,
    adresse: { postalCode: String, cityName : String , countryCode : String, lines: [String]},
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    contact: {
      phone: String,
      fax:  String,
      email: String
    }
  });
  module.exports = mongoose.model("Hotel", hotelSchema);

