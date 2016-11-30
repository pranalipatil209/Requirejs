define(['./app','./fireConfig'], function(app,fireConfig) {
  console.log(firebase);
    'use strict';
    return app.config(function($stateProvider,$urlRouterProvider) {
      console.log("running");
      $urlRouterProvider.otherwise('/signup');
        $stateProvider.state('signup', {
                url: '/signup',
                templateUrl: 'partials/signup.html',
                controller: 'signCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'partials/login.html',
                controller: 'loginCtrl'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'partials/profile.html'
            });
    })
});
