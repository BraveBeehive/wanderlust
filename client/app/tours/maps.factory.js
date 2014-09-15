'use strict';

angular.module('wanderlustApp')
  .factory('Maps', function($http) {
  	// function to create a map with a center and a zoom
  	// look to use bounds here instead?
    var createMap = function(locations) {
    	return {
    		center: calculateCenter(locations),
    		// remove hard coding
    		zoom: 10
    	}
    };

    // function to create latitudinal and longitudinal coordinates for a map
    var calculateCenter = function(locations) {
    	// set max/min latitude/longitude to first location's params by defaul
    	var maxLatitude = locations[0].latitude;
    	var minLatitude = locations[0].latitude;
    	var maxLongitude = locations[0].longitude;
    	var minLongitude = locations[0].longitude;

    	// for each location, test to see if latitude/longitude sets a new max/min
    	for (var i = 1; i < locations.length; i++) {
    		if (locations[i].latitude > maxLatitude) {
    			maxLatitude = locations[i].latitude;
    		}
    		if (locations[i].latitude < minLatitude) {
    			minLatitude = locations[i].latitude;
    		}
    		if (locations[i].longitude > maxLongitude) {
    			maxLongitude = locations[i].longitude;
    		}
    		if (locations[i].longitude < minLongitude) {
    			minLongitude = locations[i].longitude;
    		}
    	}

    	// take difference between max/min for each and set as center
    	var coordinates = {
    		latitude: ((minLatitude + maxLatitude) / 2),
    		longitude: ((minLongitude + maxLongitude) / 2)
    	};

    	return coordinates;
    };

    // function to calculate zoom level for a map
    // var calculateZoom = function(locations) {

    // 	return zoom;
    // };

    // create empty storage for location markers
    var markers = [];

    // function to individual marker on map
    var createMarker = function(location) {
    	var marker = {
    		// need to make sure database stores this in some way
    		idKey: location.idKey,
    		coords: {
    			latitude: location.latitude,
    			longitude: location.longitude
    		}
    	};
    	return marker;
    };

    // function to fill array of markers
    var createMarkers = function(locations) {
      for (var i = 0; i < locations.length; i++) {
        var marker = createMarker(locations[i]);
        markers.push(marker);
      }
    };

    // add empty storage for paths connection each location marker
    var paths = {
      path: [],
      stroke: {
        color: '#6060FB',
        weight: 3
      },
      geodesic: true
    };

    // function to create path points 
    var createPaths = function(locations) {
    	for (var i = 0; i < locations.length; i++) {
    		paths.path.push({
    			latitude: locations[i].latitude,
    			longitude: locations[i].longitude
    		});
    	}
    };

  	return {
    	createMap: createMap,
    	calculateCenter: calculateCenter,
    	// calculateZoom: calculateZoom,
    	markers: markers,
    	createMarker: createMarker,
    	createMarkers: createMarkers,
    	paths: paths,
    	createPaths: createPaths
  	};
  });