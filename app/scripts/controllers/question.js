'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuestionController', function ($scope, $routeParams, $window, $location, Questions) {

    $scope.questions = Questions.get();

    $scope.current = parseInt($routeParams.id, 10);
    if( $scope.current == Questions.length-1)
      $scope.path = "#/quiz/trivia/" + $routeParams.quizname + "/result";  
    else  
    { 
      var next = $scope.current + 1;    
      $scope.path = "#/quiz/trivia/" + $routeParams.quizname + "/question/" + next;  
    }
      
    $scope.recordUserInput = function(option) {
      Questions.recordUserInput($scope.current, option);
    }

    $scope.$on('$viewContentLoaded', function(event) {
      $window.ga('send', 'pageview', { page: $location.url() });
    });        
  });