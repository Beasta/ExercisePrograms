angular
  .module('app')
  .controller('KineticControllerProgram', ['$scope', '$state', 'Program', function($scope,
      $state, Program) {
    $scope.programs= [];
    function getPrograms() {
     Program 
        .find()
        .$promise
        .then(function(results) {
          $scope.programs = results;
        });
    }
    getPrograms();

    $scope.addProgram = function() {
     Program 
        .create($scope.newProgram)
        .$promise
        .then(function(program) {
          $scope.newProgram= '';
          $scope.programForm.name.$setPristine();
          $('.focus').focus();
          getPrograms();
        });
    };

    $scope.removeProgram= function(item) {
     Program 
        .deleteById(item)
        .$promise
        .then(function() {
          getPrograms();
        });
    };
  }]);
