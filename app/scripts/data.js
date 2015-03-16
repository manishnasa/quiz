angular.module('quizApp')
  .factory('Questions', function() {    
    var q1 = {
      question: "Which Indian cricketer is married to the half Bengali - half British amateur boxer, Ayesha Mukherji  ?",
      image: "images/shikhar-dhawan-wife.jpg",
      options: [ 
        {
          text: "Mohit Sharma",
        },
        { 
          text :"Shikhar Dhawan",
        },
        { 
          text :"Rohit Sharma",
        },
        { 
          text :"Virat Kohli",
        }
      ],
      answer: 1,
      input: -1 
    };

    var q2 = {
      question: "Who got run out for a duck in their One Day International debut ?",
      image: "",
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
      ],
      answer: 0,
      input: -1      
    };

    var q3 = {
      question: "Whose nick name is 'Cheeku' ?",
      image: "",
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
      ],
      answer: 1,
      input: -1     
    };

    var q4 = {
      question: "Which of the following cricketers is the son of a watchman from Jamnagar ?",
      image: "",
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
      ],
      answer: 3,
      input: -1     
    };

    var q5 = {
      question: "Which cricketer got the opportunity to make his test debut because Shikhar Dhawan injured his knuckles and Gautam Gambhir caught jaundice ?",
      image: "",
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
      ],
      answer: 0,
      input: -1
    };

    var q6 = {
      question: "Who is the son of a coal mine worker from Deoria district in Uttar Pradesh ?",
      image: "",
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
      ],
      answer: 2,
      input: -1     
    };

    var q7 = {
      question: "Who is the only Indian batsman to have scored a century in World T20 Cricket ?",
      image: "",
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
      ],
      answer: 3,
      input: -1     
    };

    var questions = [
      q1, q2, q3, q4, q5, q6, q7    
    ];

    questions.get = function() {
      return questions;
    }

    questions.recordUserInput = function(questionIndex,userAnswer) {
      questions[questionIndex].input = userAnswer;
    }

    questions.clearUserInput = function() {
      angular.forEach(questions, function(question, key){
        question.input = -1;        
      });
    }

    questions.getScore = function() {
      var score = 0;
      angular.forEach(questions, function(question, key){
        if(question.input == question.answer)
          score += 1;        
      });

      return score;
    }

    return questions;
  })
  .factory('Badges', function() {    
    
    var badges = [ {
        name: "The Ultimate Fan",
        message: "Take a bow. You are 'The Ultimate Fan'. You Bleed Blue!",
        image: "images/fan0.png"        
      },
      { name: "Avid Follower",
        message: "Wooho! You are 'An Avid Follower'. You make cricket exciting!",
        image: "images/fan1.png"        
      },
      { name: "Casual Enthusiast",
        message: "Not too bad! You are 'A Casual Enthusiast'. Enjoy the game!",
        image: "images/Mandira10.png"        
      },
      { name: "Just Curious",
        message: "Aiyo! You are probably 'Just Curious' about cricket. Never mind though!",
        image: "images/lady-with-binoculars.png"        
      }
    ]

    badges.get = function(){
      return badges;
    }

    return badges;
  });
