angular.module('quizApp')
	.factory("Facebook", function()
	{
		var Fb = {};

		Fb.share = function() {
			FB.ui({
			  method: 'share',
			  href: 'http://quizzofy.com/#/quiz/trivia/worldcup-2015-india-team/',
			}, function(response){});
		}

		return Fb;
	});