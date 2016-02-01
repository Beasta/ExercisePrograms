angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('program', {
        url: '/program',
        templateUrl: 'views/program.html',
        controller: 'KineticControllerProgram'
      })
      .state('exercise', {
        url: '/exercise',
        templateUrl: 'views/exercise.html',
        controller: 'KineticControllerExercise'
      })   
      ;

    $urlRouterProvider.otherwise('program');
  }]);
