angular.module('quizApp')
.factory("Facebook", function()
{
	var Fb = {};

	Fb.share = function(badgename) {
		FB.ui({
	        app_id: 727612547356813,        
	        method: 'feed',
	        link: 'http://quizzofy.com/#/quiz/trivia/worldcup-2015-india-team/',
	        name: 'I got a - "' + badgename + '"! How well do you know the Worldcup 2015 India Team ?',
	        caption: 'Take a 7 question test to find out!', 
	        picture: 'http://quizzofy.com/images/fb-worldcup-2015-Team-India.jpg',
	        actions: [{ name: 'Quizzofy.com', link: 'http://quizzofy.com/#' }]		        
	      }, function(response){
	      	console.log(response);					
		});		
	};

	return Fb;
});