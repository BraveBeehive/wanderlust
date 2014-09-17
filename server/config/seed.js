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
    password: 'test',
    points: 100
  }, {
    provider: 'local',
    name: 'Test User 2',
    email: 'test2@test.com',
    password: 'test',
    points: 87
  }, {
    provider: 'local',
    name: 'Test User 3',
    email: 'test3@test.com',
    password: 'test',
    points: 4000
  }, {
    provider: 'local',
    name: 'Test User 4',
    email: 'test4@test.com',
    password: 'test',
    points: 12
  }, {
    provider: 'local',
    name: 'Test User 5',
    email: 'test5@test.com',
    password: 'test',
    points: 150
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin',
    points: 200
  }, function() {
      console.log('finished populating users');
    }
  ).then(function() {
      Tour.find({}).remove(function() {
        User.findOne({name:'Test User'}, function(err, user){
          console.log(user);
          console.log(user._id);
          Tour.create([{
            title: 'The Mission Mission',
            author: user._id,
            description: 'dig out the places to eat around Hack Reactor',
            city: 'San Francisco',
            reviews: [{body: 'This is awesome!',rating:4},{body: 'good', rating: 3}],
            duration: 'All day',
            neighborhood: ['Mission'],
            spots: [
              {
                free:true, outdoors: true, task: 'Obtain a wooden sword from a pirate shop', points: 10, address: '333 Jefferson St, San Francisco, CA 94133', latitude: 37.807735, longitude: -122.418553
              },
              {
                free:true, indoors: true, task: 'Find the following graffiti', points: 5, address: '336 O\'Farrell St, San Francisco, CA 94102', latitude: 37.7850504, longitude: -122.4146064
              },
              {
                indoors: true, task: 'Catch Pikachu', points: 20, address: '560 Larkin St, San Francisco, CA 94102', latitude: 37.7836377, longitude: -122.4132168
              }]
          },{
            title: 'Wonderful Sunset',
            author: user._id,
            description: 'find out the good hiking place hidden here',
            city: 'San Francisco',
            review: [{body: 'Cool!', rating: 4}],
            duration: 'All day',
            neighborhood: ['Inner-Sunset'],
            spots: [{free: true, indoors: true, task: 'play basketball', address: '6th Street'}]
          },{
            title: 'Hill Conqueror',
            author: user._id,
            description: 'Climb all the hills for some stunning views',
            city: 'San Francisco',
            review: [{body: 'Cool!', rating: 4}],
            duration: 'Half day',
            neighborhood: ['Downtown'],
            spots: [{free: true, indoors: true, task: 'climb the big hill', address: '6th Street'}]
          },{
            title: 'Street Art Explorer',
            author: user._id,
            description: 'Find the best street art',
            city: 'Berkeley',
            review: [{body: 'Cool!', rating: 4}],
            duration: 'Half day',
            neighborhood: ['Lakeshore'],
            spots: [{free: true, indoors: true, task: 'climb the big hill', address: '6th Street'}]
          },{
            title: 'Grateful Dead Music Tour',
            author: user._id,
            description: 'A blast back to the 60s',
            city: 'Oakland',
            review: [{body: 'Cool!', rating: 4}],
            duration: 'Many days',
            neighborhood: ['Golden-Gate-Park'],
            spots: [{free: true, indoors: true, task: 'climb the big hill', address: '6th Street'}]
          },{
            title: 'Farmers\' Market Extravaganza',
            author: user._id,
            description: 'All the fresh fruit and veggies',
            city: 'Oakland',
            review: [{body: 'Cool!', rating: 4}],
            duration: 'Around an hour',
            neighborhood: ['Dogpatch'],
            spots: [{free: true, indoors: true, task: 'climb the big hill', address: '6th Street'}]
          }]);
        })
      })
    })
});

