angular.module('app.controllers', [])

.controller('requirementsCtrl', function($scope) {
    $scope.customSpice = "wasabi";
    $scope.spice = 'very';

    $scope.spicy = function(spice) {
      $scope.spice = spice;
    };
})

.controller('modulesCtrl', function($scope) {

})

.controller('profileCtrl', function($scope) {

})

  .controller('modulestakenCtrl', function($scope){

  })
