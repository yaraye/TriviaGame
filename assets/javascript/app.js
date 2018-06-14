

function Question(text, choices, answer){
  this.text=text;
  this.choices=choices;
  this.answer=answer;

}

//answer corrector not
Question.prototype.correctAnswer=function(choice){
  return this.choice===this.answer;
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
      showProgress();
  }
};
function guess(id,guess) {
  var button= document.getElementById(id);
  button.onclick=function(){
      quiz.guess(guess);
      populate();

  }

};
function showProgress(){
  var currentQuestionNumber= quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML= "Question" + currentQuestionNumber + "of" + quiz.questions.length;

}
function showScores (){
  var gameOverhtml='<h1>Result</h1>'
  gameOverhtml+="<h2 id='score'> Your scores:"+ quiz.score+"</h2>";
  var element=document.getElementById("quiz");
  element.innerHTML=gameOverhtml;

};
var questions=[
  new Question("What nation was bounced from the Organisation of American States in 1962?", ["Cuba","Canada","Mixico","Gana"],"Cuba"),
  new Question("2What nation was bounced from the Organisation of American States in 1962?",["Cuba","Canada","Mixico","Gana"],"Canda"),
  new Question("3What nation was bounced from the Organisation of American States in 1962?",["Cuba","Canada","Mixico","Gana"],"Mixico")
];

//
var quiz= new Quiz(questions);

populate();

