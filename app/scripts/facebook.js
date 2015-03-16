angular.module('quizApp')
	.factory("Facebook", function()
	{
		var Fb = {};

		Fb.share = function() {
			FB.ui({
			  method: 'share',
			  href: 'http://www.quizzofy.com/worldcup-2015-india-team/',
			}, function(response){});
		}

		return Fb;
	});