'use strict';

var Tour = require('../tour/tour.model');

// Get all the tours in all the cities

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

exports.index = function(req, res) {
  console.log(req.body, "this is req.body");
  if (isEmpty(req.body)) {
    var queryParam = {"city": "San Francisco"};
  }
  else {
    var queryParam = {"city": req.body.city};
  }
  Tour.find(queryParam, function (err, tours) {
    console.log(queryParam, "this is queryParam");
    console.log("i'm here");
    if(err) { return handleError(res, err); }
    return res.json(200, tours);
  });  
};

// Get tour around a specific city
exports.byCity = function(req,res) {
  console.log("getting here");
  Tour.find({city: req.params.city_name.replace('-',' ')}, function(err,tours){
    if(err) {return handleError(res,err); }
    if(!tours) {return res.send(404);}
    return res.json(200,tours);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}

