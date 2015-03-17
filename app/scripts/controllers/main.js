'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('MainCtrl', function ($scope, $routeParams, $window, $location, Badges) {
    $scope.badges = Badges.get();
    $scope.path = "#/quiz/trivia/" + $routeParams.quizname + "/question/0"

    $scope.$on('$viewContentLoaded', function(event) {
    	$window.ga('send', 'pageview', { page: $location.url() });
  	});  
  });
