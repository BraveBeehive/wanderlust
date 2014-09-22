'use strict';

var Tour = require('../tour/tour.model');

// Get all the tours in all the cities
exports.index = function(req, res) {
  console.log('.index beginning');
  Tour.find()
      .populate('author')
      .exec(function (err, tours) {
    if(err) { return handleError(res, err); }
    return res.json(200, {city:'all cities', tours: tours});
  });
};

// Get tour around a specific city
exports.byCity = function(req,res) {
  console.log('req.params.city_name', req.params.city_name);

  Tour.find({city: req.params.city_name.replace('-',' ')})
      .populate('author')
      .exec(function(err,tours) {
    if(err) {return handleError(res,err); }
    if(!tours) {return res.send(404);}
    return res.json(200,{city:req.params.city_name, tours: tours});
  });
};

function handleError(res, err) {
  return res.send(500, err);
}

