'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuestionCtrl', function ($scope, $routeParams) {

	$scope.current = 0;

  	$scope.nextQuestion() = function() {
  		$scope.current = $scope.current + 1;
  	}

  	var q1 = {
  		question: "What was Salman Khan aka Prem's pet dialogue ?",
  		options: [ 
  			{
  				text: "ui maa",
  				category: "right"
  			},
  			{	
  				text :"hai laa",
  				category: "wrong"
  			},
  			{	
  				text :"arre yaar",
  				category: "wrong"
  			},
  			{	
  				text :"chal be",
  				category: "wrong"
  			},
  		]  		
  	};

  	$scope.questions = [
      q1
    ];    
  });
