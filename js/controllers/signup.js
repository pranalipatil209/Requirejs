define(['./module'], function(controllers) {
    'use strict';

    controllers.controller('signCtrl', ['$scope','$state', function($scope,$state) {
      console.log("signup controller call");

      $scope.signup=function(){
        console.log("function call",firebase);
        firebase.auth().createUserWithEmailAndPassword($scope.email,$scope.password).catch(function(err){
          $scope.error=err.message;
          console.log(err.message);
          console.log("something went wrong");
          $state.go('signup')
        }).then(function(){
            alert("you have succefully sign up.Now you can login");
            $state.go('login');
        })
        }

    }]);
});
