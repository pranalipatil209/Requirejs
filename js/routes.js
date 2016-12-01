/*inject all the dependency of app.js in define function*/
define(['./app'], function(app) {
  console.log(firebase);
    'use strict';
    /*configure different controllers and html files*/
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
                templateUrl: 'partials/profile.html',
                controller: 'profileCtrl'
            });
    })
});
