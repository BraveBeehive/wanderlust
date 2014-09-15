'use strict';

angular.module('wanderlustApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'angularFileUpload',
  'google-maps'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .factory('currentUser', function(User, Points) {
      var getCurrentUser = function() {
        console.log('calling getCurrentUser');
        User.get()
          .$promise
          .then(function(user) {
            console.log('have this user:', user);
            users[4].name = user.name;
          });
      };
      var users = [{
        // test user 1
        name: 'Jonathan',
        points: 100
      },
      {
        // test user 2
        name: 'Collin',
        points: 10
      },
      {
        // test user 3
        name: 'Tommy',
        points: 75
      },
      {
        // test user 4
        name: 'Luby',
        points: -100
      },
      {
        // test user 5
        name: getCurrentUser(),
        points: Points.user.points
      }
      ];
      return {
        users: users,
        getCurrentUser: getCurrentUser
      };
  })

  .run(function ($rootScope, $location, $document, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });

    // Show background image only on splash page
    $rootScope.$on('$stateChangeSuccess', function () {
      if ($location.path() === '/') {
        angular.element($document[0].body).css({
          'overflow-y': 'hidden ! important',
          'overflow-x': 'hidden ! important',
          'background-image': 'url("/assets/images/background.jpg")',
          'background-size': 'cover',
          'background-repeat': 'no-repeat'
        });
      } else {
        angular.element($document[0].body).css({
          'background-image': 'none'
        });
      }
    });
  });
  
