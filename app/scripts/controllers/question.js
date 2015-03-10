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

    $scope.current = parseInt($routeParams.id, 10);
    if( $scope.current == $scope.questions.length-1)
      $scope.next = 999;  
    else  
      $scope.next = $scope.current + 1;

  });
