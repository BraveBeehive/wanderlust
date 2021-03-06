/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Tour = require('../api/tour/tour.model');


User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  });
});

Tour.find({}).remove(function() {
  User.find({name:'Test User'}, function(err,user){
    Tour.create([{
      tour_id: 0,
      title: 'The Mission Mission',
      author: user._id,
      description: 'dig out the places to eat around Hack Reactor',
      city: 'san francisco',
      reviews: [{body: 'This is awesome!',rating:4},{body: 'good', rating: 3}],
      duration: 'All day',
      neighborhood: ['Mission'],
      spots: [{free:true, outdoors: true, task: 'Obtain a wooden sword from a pirate shop', address: '1 Market Street', points: '10'},
              {free:true, indoors: true, points: '5', task: 'Find the following graffiti'},
              {indoors: true, points: '20', task: 'Catch Pikachu'}]
    },{
      tour_id: 1,
      title: 'Wonderful Sunset',
      author: user._id,
      description: 'find out the good hiking place hidden here',
      city: 'san francisco',
      review: [{body: 'Cool!', rating: 4}],
      duration: 'All day',
      neighborhood: ['Inner-Sunset'],
      spots: [{free: true, indoors: true, task: 'play basketball', address: '6th Street'}]
    },{
      tour_id: 2,
      title: 'Hill Conqueror',
      author: user._id,
      description: 'Climb all the hills for some stunning views',
      city: 'san francisco',
      review: [{body: 'Cool!', rating: 4}],
      duration: 'Half day',
      neighborhood: ['Downtown'],
      spots: [{free: true, indoors: true, task: 'climb the big hill', address: '6th Street'}]
    },{
      tour_id: 3,
      title: 'Street Art Explorer',
      author: user._id,
      description: 'Find the best street art',
      city: 'berkeley',
      review: [{body: 'Cool!', rating: 4}],
      duration: 'Half day',
      neighborhood: ['Lakeshore'],
      spots: [{free: true, indoors: true, task: 'climb the big hill', address: '6th Street'}]
    },{
      tour_id: 4,
      title: 'Grateful Dead Music Tour',
      author: user._id,
      description: 'A blast back to the 60s',
      city: 'oakland',
      review: [{body: 'Cool!', rating: 4}],
      duration: 'Many days',
      neighborhood: ['Golden-Gate-Park'],
      spots: [{free: true, indoors: true, task: 'climb the big hill', address: '6th Street'}]
    },{
      tour_id: 5,
      title: 'Farmers\' Market Extravaganza',
      author: user._id,
      description: 'All the fresh fruit and veggies',
      city: 'oakland',
      review: [{body: 'Cool!', rating: 4}],
      duration: 'Around an hour',
      neighborhood: ['Dogpatch'],
      spots: [{free: true, indoors: true, task: 'climb the big hill', address: '6th Street'}]
    }]);
  })
});

console.log('Seeded DB with sample data.');
