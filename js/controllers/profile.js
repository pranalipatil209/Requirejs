define(['./module'], function(controllers) {
    'use strict';

    controllers.controller('profileCtrl', ['$scope', '$state', function($scope, $state) {
        console.log("profile controller call");
        $scope.logout = function() {
            $state.go('signup');
        }
    }]);
});
