'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('MainCtrl', function ($scope, $routeParams, Badges) {
    $scope.badges = Badges.get();
    $scope.path = "#/quiz/trivia/" + $routeParams.quizname + "/question/0"    
  });
