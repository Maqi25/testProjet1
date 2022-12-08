const Hotel = require('../models/hotel');
const amadeus = require('../service/amadeus');

exports.findHotelByName = (req, res, next) => {
  console.log(req.query.name);
  Hotel.findOne({
      name: req.query.name
    }).then(
      (hotel) => {
        if(hotel == null){
          amadeus.shopping.hotelOffers.get({
            cityCode: req.query.name,

          })
          .then(function (data) { 
                console.log(JSON.stringify(data));
                res.status(200).json(data); 
              }).catch(function (responseError) { 
                console.log(JSON.stringify(responseError)); 
              });
         
        }else{
          res.status(200).json(hotel);
        }
        
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
