'use strict';

/**
 * @ngdoc overview
 * @name quizApp
 * @description
 * # quizApp
 *
 * Main module of the application.
 */
angular
  .module('quizApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/quiz/trivia/:quizname', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/quiz/trivia/:quizname/result', {
        templateUrl: 'views/result.html',
        controller: 'ResultController'
      })
      .when('/quiz/trivia/:quizname/question/:id', {
        templateUrl: 'views/question.html',
        controller: 'QuestionController'
      })     
      .otherwise({
        redirectTo: '/'
      });
  });
  