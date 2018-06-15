

$(function() {
  $('.buttons').hide();
});
// Count will keep track of the index of the currently displaying picture.
var count = 0;

//start button 
    $('#start').on('click', function(){
    $(this).hide();
    countdown ();
$(function() {
  $('.buttons').show();
});
    populate();
    startOverTimer();

    });
    
    $('#reset').on('click', function(){
    $(this).hide();
    });
    
  

    //set timer
function countdown(){
	seconds = 5;
	$('#timer').html('<h4>Time Remaining: ' + seconds +' '+ 'Seconds </h4>');
	answer = true;
	//sets timer to go down
    time = setInterval(showCountdown, 1000);

}
function showCountdown(){
	seconds--;
	$('#timer').html('<h4>Time Remaining: ' + seconds +' '+ 'Seconds </h4>');
	if(seconds < 1){
        clearInterval(time);
	}
}


function funTriviaGameQuestion(text, choices, answer){
  this.text=text;
  this.choices=choices;
  this.answer=answer;
}

//answer corrector not
funTriviaGameQuestion.prototype.correctAnswer=function(choice){
  return this.choice===this.answer;
  //on submit show result
onclick.addEventListener("click", showAnswer)
}

function Quiz(questions){
  this.score=0;
  this.questions=questions;
  this.questionIndex=0;
}

Quiz.prototype.getQuestionIndex= function (){
  return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded= function() {
  return this.questions.length===this.questionIndex;

}
Quiz.prototype.guess =function(answer){

  //check if answer is correct
  if(this .getQuestionIndex().correctAnswer(answer)){
      this.score++; 
  }
  this.questionIndex++;
  console.log(this);  
  clearInterval(time);
  countdown();  
 
}

function populate (){
  if(quiz.isEnded()){
       showScores();
      

  }
  else {
      //show question();
      var element= document.getElementById("question");
      element.innerHTML=quiz.getQuestionIndex().text;
      

      //show choice
      var choices=quiz.getQuestionIndex().choices;
      for(var i=0; i<choices.length; i++){
          var element= document. getElementById("choice" + i);
          element.innerHTML=choices[i];
          guess("btn" + i, choices[i]);
  
          
      }
  }
};

function guess(id,guess) {
  var button= document.getElementById(id);
  button.onclick=function(){
      quiz.guess(guess);
      populate();
      

  }

};

function showScores (){
  var gameOverhtml='<h1>Result</h1>'
  gameOverhtml+="<h2 id='score'> Correct Answers:"+ quiz.score+"</h2>";
  gameOverhtml+="<h2 id='score'> Incorrect Answer:"+ quiz.score+"</h2>";
 
  var element=document.getElementById("quiz");
  element.innerHTML=gameOverhtml;

};


var questions=[
  new funTriviaGameQuestion("What nation was bounced from the Organisation of American States in 1962?", ["Cuba","Canada","Mixico","Gana"],"Cuba"),
  new funTriviaGameQuestion("What continent has the fewest flowering plants?",["Asia","Antarctica","Africa","Australia"],"Antarctica"),
  new funTriviaGameQuestion("What country saw a world record 315 million voters turn out for elections on May 20, 1991? ",["India","Canada","Mixico","Ethiopia"],"India"),
  new funTriviaGameQuestion("What national holiday in Mexico has picnickers munching chocolate coffins and sugar skulls? ",["The Day of the Dead","Walking Dead","Dead People","Day of the Dead"],"The Day of the Dead"),


new funTriviaGameQuestion("What was the first planet to be discovered using the telescope, in 1781?",["Mars","Earth","Venus","Uranus"],"Uranus")
];

//
var quiz= new Quiz(questions);



// //find selected answer
// var answerContainer = answerContainers[questionIndex];
// var selector = `input[name=question${questionIndex}]:clicked`;
// var userAnswer = (answerContainer.querySelector(selector) || {}).value;

// function showResults(){

//   // gather answer containers from our quiz
//  var answerContainers = funTriviaGameQuestion.querySelectorAll('.buttons');

//   // keep track of user's answers
//   let correctAnswer = 0;

//   // for each question...
// funTriviaGameQuestion.forEach( (currentQuestion, questionIndex) => {

//     // find selected answer
//    var answerContainer = answerContainers[questionIndex];
//    var selector = 'input[name=question'+questionIndex+']:checked';
//    var userAnswer = (answerContainer.querySelector(selector) || {}).value;

//     // if answer is correct
//     if(userAnswer===currentQuestion.correctAnswer){
//       // add to the number of correct answers
//       correctAnswer++;

//       // color the answers green
//       answerContainers[questionIndex].style.color = 'lightgreen';
//     }
//     // if answer is wrong or blank
//     else{
//       // color the answers red
//       answerContainers[questionIndex].style.color = 'red';
//     }
//   });

//   // show number of correct answers out of total
//   gameOverhtml+=innerHTML = correctAnswer
// }

// // //reset questions
// // function resetQuiz() {
// //   funTriviaGameQuestion = 0;
// //   correctAnswers = 0;
// //   hideScore();
// // };

