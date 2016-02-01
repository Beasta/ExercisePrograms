angular
  .module('app')
  .controller('KineticControllerExercise', ['$scope', '$state', 'Exercise', function($scope,
        $state, Exercise) {
      $scope.exercises= [];
      function getExercises() {
        Exercise 
          .find()
          .$promise
          .then(function(results) {
            $scope.exercises= results;
            console.log('$scope.exercises:',$scope.exercises);
          });
      }
      getExercises();

      $scope.addExercise= function() {
        Exercise 
          .create($scope.newExercise)
          .$promise
          .then(function(exercise) {
            console.log('creating new exercise');
            $scope.newExercise= '';
            $scope.exerciseForm.name.$setPristine();
            $('.focus').focus();
            getExercises();
          });
      };

      $scope.removeExercise= function(item) {
        Exercise 
          .deleteById(item)
          .$promise
          .then(function() {
            getExercises();
          });
      };
    }]);
