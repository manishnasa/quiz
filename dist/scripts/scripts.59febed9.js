"use strict";angular.module("quizApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"MainCtrl"}).when("/quiz/trivia/:quizname",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/quiz/trivia/:quizname/result",{templateUrl:"views/result.html",controller:"ResultController"}).when("/quiz/trivia/:quizname/question/:id",{templateUrl:"views/question.html",controller:"QuestionController"}).otherwise({redirectTo:"/"})}]),angular.module("quizApp").factory("Questions",function(){var a={question:"Which Indian cricketer is married to the half Bengali - half British amateur boxer, Ayesha Mukherji  ?",hint:"This Delhi lad sports big turned up mustache with a baldish look!",image:"images/shikhar-dhawan-wife.jpg",options:[{text:"Mohit Sharma"},{text:"Shikhar Dhawan"},{text:"Rohit Sharma"},{text:"Virat Kohli"}],answer:1,input:-1},b={question:"Who got run out for a duck in their One Day International debut ?",hint:"He is the Jharkhand guy who went on to captain India!",image:"",options:[{text:"MS Dhoni",category:"right"},{text:"Virat Kohli",category:"wrong"},{text:"Ravindra Jadeja",category:"wrong"},{text:"Ajinkya Rahane",category:"wrong"}],answer:0,input:-1},c={question:"Whose nick name is 'Cheeku' ?",hint:"Lets just say Anushka Sharma loves Cheeku!",image:"",options:[{text:"Suresh Raina",category:"wrong"},{text:"Virat Kohli",category:"right"},{text:"Shikhar Dhawan",category:"wrong"},{text:"Ajinkya Rahane",category:"wrong"}],answer:1,input:-1},d={question:"Which of the following cricketers is the son of a watchman from Jamnagar ?",hint:"He is an all rounder of sorts, popularly known as Sir!",image:"",options:[{text:"Umesh Yadav",category:"wrong"},{text:"Mohammed Shami",category:"wrong"},{text:"Ambati Rayudu",category:"wrong"},{text:"Ravindra Jadeja",category:"right"}],answer:3,input:-1},e={question:"Which cricketer got the opportunity to make his test debut because Shikhar Dhawan injured his knuckles and Gautam Gambhir caught jaundice ?",hint:"This Maharashtrian mulga is peaceful guy, also called the Silent Warrior!",image:"",options:[{text:"Ajinkya Rahane",category:"right"},{text:"Stuart Binny",category:"wrong"},{text:"Axar Patel",category:"wrong"},{text:"Mohit Sharma",category:"wrong"}],answer:0,input:-1},f={question:"Who is the son of a coal mine worker from Deoria district in Uttar Pradesh ?",hint:"He is one of our two opening fast bowlers!",image:"",options:[{text:"Ambati Rayudu",category:"wrong"},{text:"Ravindra Jadeja",category:"wrong"},{text:"Umesh Yadav",category:"right"},{text:"Mohit Sharma",category:"wrong"}],answer:2,input:-1},g={question:"Who is the only Indian batsman to have scored a century in World T20 Cricket ?",hint:"He is a small guy from Ghaziabad who bats down the order and hits BIG!",image:"",options:[{text:"Rohit Sharma",category:"wrong"},{text:"Virat Kohli",category:"wrong"},{text:"Yuvraj Singh",category:"wrong"},{text:"Suresh Raina",category:"right"}],answer:3,input:-1},h=[a,b,c,d,e,f,g];return h.get=function(){return h},h.recordUserInput=function(a,b){h[a].input=b},h.clearUserInput=function(){angular.forEach(h,function(a){a.input=-1})},h.getScore=function(){var a=0;return angular.forEach(h,function(b){b.input==b.answer&&(a+=1)}),a},h}).factory("Badges",function(){var a=[{name:"The Ultimate Fan",message:"Take a bow. You are 'The Ultimate Fan'. You Bleed Blue!",image:"images/fan0.png"},{name:"Avid Follower",message:"Wooho! You are 'An Avid Follower'. You make cricket exciting!",image:"images/fan1.png"},{name:"Casual Enthusiast",message:"Not too bad! You are 'A Casual Enthusiast'. Enjoy the game!",image:"images/Mandira10.png"},{name:"Just Curious",message:"Aiyo! You are probably 'Just Curious' about cricket. Never mind though!",image:"images/lady-with-binoculars.png"}];return a.get=function(){return a},a}),angular.module("quizApp").factory("Facebook",function(){var a={};return a.share=function(a){FB.ui({app_id:727612547356813,method:"feed",link:"http://quizzofy.com/#/quiz/trivia/worldcup-2015-india-team/",name:'I got a - "'+a+'"! How well do you know the Worldcup 2015 India Team ?',caption:"Take a 7 question test to find out!",picture:"http://quizzofy.com/images/fb-worldcup-2015-Team-India.jpg",actions:[{name:"Quizzofy.com",link:"http://quizzofy.com/#"}]},function(a){console.log(a)})},a}),angular.module("quizApp").directive("myAdSense",function(){return{restrict:"A",transclude:!0,replace:!0,template:"<div ng-transclude></div>",link:function(){}}}).directive("result1Ad",function(){function a(){return'<ins class="adsbygoogle"style="display:block"data-ad-client="ca-pub-7864311627791283"data-ad-slot="2601543705"data-ad-format="auto"></ins>'}return{restrict:"A",template:a(),controller:function(){(adsbygoogle=window.adsbygoogle||[]).push({})}}}).directive("dynFbCommentBox",function(){function a(a,b,c){return'<div class="fb-comments" data-href="'+a+'" data-numposts="'+b+'" data-colorsheme="'+c+'"></div>'}return{restrict:"A",scope:{},link:function(b,c,d){d.$observe("pageHref",function(b){var e=b,f=d.numposts||5,g=d.colorscheme||"light";c.html(a(e,f,g)),FB.XFBML.parse(c[0])})}}}).directive("facebookLike",["$timeout",function(a){return{template:'<div class="fb-like" data-href="https://www.facebook.com/quizzofy" data-share="false" data-layout="standard" data-show-faces="false"></div>',link:function(b,c){a(function(){return"undefined"!=typeof FB&&null!==FB?FB.XFBML.parse(c.parent()[0]):void 0})}}}]),angular.module("quizApp").controller("MainCtrl",["$scope","$routeParams","$window","$location","Badges",function(a,b,c,d,e){a.badges=e.get(),a.path="#/quiz/trivia/"+b.quizname+"/question/0",a.$on("$viewContentLoaded",function(){c.ga("send","pageview",{page:d.url()})})}]),angular.module("quizApp").controller("QuestionController",["$scope","$routeParams","$window","$location","Questions",function(a,b,c,d,e){if(a.questions=e.get(),a.current=parseInt(b.id,10),a.current==e.length-1)a.path="#/quiz/trivia/"+b.quizname+"/result";else{var f=a.current+1;a.path="#/quiz/trivia/"+b.quizname+"/question/"+f}a.recordUserInput=function(b){e.recordUserInput(a.current,b)},a.$on("$viewContentLoaded",function(){c.ga("send","pageview",{page:d.url()})})}]),angular.module("quizApp").controller("ResultController",["$anchorScroll","$location","$scope","$window","Questions","Badges","Facebook",function(a,b,c,d,e,f,g){c.badges=f.get(),c.questions=e.get(),c.score=e.getScore(),c.userbadge=7==c.score?c.badges[0]:c.score>4?c.badges[1]:c.score>2?c.badges[2]:c.badges[3],c.socialmessage="I got: '"+c.userbadge.name+"'! How well do u know Team India? Take the 7 question test: http://goo.gl/DPOlKB",c.share=function(){g.share(c.userbadge.name)},c.scrollTo=function(c){b.hash(c),a()},c.$on("$viewContentLoaded",function(){d.ga("send","pageview",{page:b.url()})})}]);