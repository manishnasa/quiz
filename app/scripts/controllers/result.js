'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:ResultController
 * @description
 */
angular.module('quizApp')
  .controller('ResultController', function ($anchorScroll, $location, $scope, Questions, Badges, Facebook) {

    $scope.badges = Badges.get();
    $scope.questions = Questions.get();
    $scope.score = Questions.getScore();

    if($scope.score == 7)
    {    
      $scope.userbadge =  $scope.badges[0];
    }
    else if($scope.score > 4)
    {
      $scope.userbadge =  $scope.badges[1];
    }
    else if($scope.score > 2)
    {
      $scope.userbadge =  $scope.badges[2];
    }
    else
    {
      $scope.userbadge =  $scope.badges[3];
    }

    $scope.socialmessage = "I got - '" + $scope.userbadge.name + "'! How well do you know the Worldcup 2015 India Team ?";

    $scope.share = function() {
      Facebook.share();
    }

    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }

  });