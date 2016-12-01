define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('loginCtrl', ['$scope', '$state', function($scope, $state) {
        $scope.login = function() {
            //initialize error with null value
            console.log("login function called");
            $scope.error = null;
            //use firebase auth service to sign in with email and password
            firebase.auth().signInWithEmailAndPassword($scope.email, $scope.password).catch(function(err) {
                $scope.error = err.message; //store the error message in $scope.error
                console.log(err.message);
            }).then(function() {
                // console.log("error console:" + $scope.error);
                //check the condition using if-else
                if ($scope.error == null) {
                    $state.go('profile');
                } else {
                    alert("First register yourself"); // print the message in alert box
                }
            });
        }
    }]);
});
