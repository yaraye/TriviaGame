
//creat a team-Fun Trivia Questions
var funTriviaQuestions=[
    {
    question: "What nation was bounced from the Organisation of American States in 1962?",
    answers:{
        a:"Cuba",
        b:"Canada",
        c:"Mixico",
    },
    correctAnswer: "a"
    },
    {
    question:"What continent has the fewest flowering plants?",
    answers:{
        a:"Afirca",
        b:"Antarctica",
        c:"Asia",
    },
    correctAnswer: "b"
    },
    {
    question:"What was the first planet to be discovered using the telescope, in 1781?",
    answers:{
        a:"Uranus",
        b:"Venus",
        c:"Mercury",
    },
    correctAnswer: "b"
    },
    ];
    var triviachoice=["Cuba","Canda","Mixico"];
    
    //finding selected answers
    var userAnswer = (answersContainer);
    
//referance for html tags
var traviaContainer= document.getElementById("triviaQuestions");
var timerContainer= document.getElementById("timer");
var answersContainer= document.getElementById("results");


//show the result and put it all togeher

function buildTriva(){
    var output=[];
    funTriviaQuestions.forEach (function
        (currentQuestion, questionNumber)
{
    var answers=[];
    for (i=0; i<funTriviaQuestions.answers; i++){
        answers.push(
            "<label>  <input type='radio' name='question${questionNumber}' value = '${letter}'> ${letter}: ${funTriviaQuestions.answers[letter]}</label>"
      );
    }
    //question ans answer in the output
    output.push (
    '<div class="question"> ${funTriviaQuestions.question} </div> <div class="answers"> ${answers.join(" ")} </div>'
    );
}
    );
}
//displaying the answer
function showAnswer(){
    var answersContainer=funTriviaQuestions.querySelectorAll('.answer');

  // for each question...
  funTriviaQuestions.forEach( function(currentQuestion, questionNumber){

    // find selected answer
   var answersContainer = answerContainers[questionNumber];
   var selector = 'input[name=question'+questionNumber+']:checked';
   var userAnswer = (answersContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer===funTriviaQuestions.correctAnswer){
      // add to the number of correct answers
      numCorrect++;
    }
else{
    alert("make a choice");
}
  
});
}

//display question 
buildTriva();


//evaluating answer with results
//if answer is correct

if(userAnswers===currentQuestion.correctAnswer){
    // add to the number of correct answers
    numCorrect++;
    alert('yea');
}else
{
    alert("next question");
}


//on submit show result
submitButton.addEventListener("click", showAnswer)
