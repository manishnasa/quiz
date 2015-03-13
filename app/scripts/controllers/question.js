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
  		question: "Which Indian cricketer is married to the half Bengali - half British amateur boxer, Ayesha Mukherji  ?",
  		options: [ 
  			{
  				text: "Mohit Sharma",
  				category: "wrong"
  			},
  			{	
  				text :"Shikhar Dhawan",
  				category: "right"
  			},
  			{	
  				text :"Rohit Sharma",
  				category: "wrong"
  			},
  			{	
  				text :"Virat Kohli",
  				category: "wrong"
  			}
  		]  		
  	};

    var q2 = {
      question: "Who got run out for a duck in their One Day International debut ?",
      options: [ 
        {
          text: "MS Dhoni",
          category: "right"
        },
        { 
          text :"Virat Kohli",
          category: "wrong"
        },
        { 
          text :"Ravindra Jadeja",
          category: "wrong"
        },
        { 
          text :"Ajinkya Rahane",
          category: "wrong"
        }
      ]     
    };

    var q3 = {
      question: "Whose nick name is 'Cheeku' ?",
      options: [ 
        {
          text: "Suresh Raina",
          category: "wrong"
        },
        { 
          text :"Virat Kohli",
          category: "right"
        },
        { 
          text :"Shikhar Dhawan",
          category: "wrong"
        },
        { 
          text :"Ajinkya Rahane",
          category: "wrong"
        }
      ]     
    };

    var q4 = {
      question: "Which of the following cricketers is the son of a watchman from Jamnagar ?",
      options: [ 
        {
          text: "Umesh Yadav",
          category: "wrong"
        },
        { 
          text :"Mohammed Shami",
          category: "wrong"
        },
        { 
          text :"Ambati Rayudu",
          category: "wrong"
        },
        { 
          text :"Ravindra Jadeja",
          category: "right"
        }
      ]     
    };

    var q5 = {
      question: "Which cricketer got to opportunity to make his test debut because Shikhar Dhawan injured his knucles and Gautam Gambhir caught jaundice ?",
      options: [ 
        {
          text: "Ajinkya Rahane",
          category: "right"
        },
        { 
          text :"Stuart Binny",
          category: "wrong"
        },
        { 
          text :"Axar Patel",
          category: "wrong"
        },
        { 
          text :"Mohit Sharma",
          category: "wrong"
        }
      ]     
    };

    var q6 = {
      question: "Who is the son of a coal mine worker from Deoria district in Uttar Pradesh ?",
      options: [ 
        {
          text: "Ambati Rayudu",
          category: "wrong"
        },
        { 
          text :"Ravindra Jadeja",
          category: "wrong"
        },
        { 
          text :"Umesh Yadav",
          category: "right"
        },
        { 
          text :"Mohit Sharma",
          category: "wrong"
        }
      ]     
    };

    var q7 = {
      question: "Who is the only Indian batsman who has scored a century in World T20 Cricket ?",
      options: [ 
        {
          text: "Rohit Sharma",
          category: "wrong"
        },
        { 
          text :"Virat Kohli",
          category: "wrong"
        },
        { 
          text :"Yuvraj Singh",
          category: "wrong"
        },
        { 
          text :"Suresh Raina",
          category: "right"
        }
      ]     
    };

  	$scope.questions = [
      q1, q2, q3, q4, q5, q6, q7    
    ];

    $scope.current = parseInt($routeParams.id, 10);
    if( $scope.current == $scope.questions.length-1)
      $scope.next = 999;  
    else  
      $scope.next = $scope.current + 1;

  });