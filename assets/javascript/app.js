//creat a team-Fun Trivia Questions
var funTriviaQuestions=["What nation was bounced from the Organisation of American States in 1962?",
"What continent has the fewest flowering plants?",
"What was the first planet to be discovered using the telescope, in 1781?"]
//-------------------------------------------------------------------------
// Variable showQuestion will hold the setInterval when we start the slideshow
var showQuestion;

function questionOne(){
    $("#chose-1").html(funTriviaQuestions[count]);
    console.log("5 seconds left");
}
function questiontwo(){
    $("#chose-2").html(funTriviaQuestions[count]);
    console.log("5 seconds left");
}
//count will keep track of the index of displayed questions
var count=0;
//jquery to start the slideshow
$("start").click(startSlideshow);

//--------------------------------------------------------------------------


function nextQuestion()
{
    count ++;
    questiontwo();
    setTimeout(questionOne,1000);
//stop when question ends
    if (count ===funTriviaQuestions.length)
    {
        count=0;
    }
}
//slideshow function
function startSlideshow()
{
   showImage=setInterval(questiontwo,1000);
}
//stop slideshow
function stopSlideshow()
{
    clearInterval(showQuestion);
}
//question start to show
questionOne();
//--------------------------------------------------------------------------------
// //setting the timer
 
    //  Set our number counter to 5.
    var number = 5;
    //  Variable that will hold our interval ID when we execute
    var intervalId;

//timer function
function timeCounter()
{
    document.getElementById("timer").innerHTML = "Time Remaining:" + number +  "Seconds";
}

    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
      startSlideshow();

    }
    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      number--;
      //  Show the number in the #show-number tag.
      timeCounter()

      //  Once number hits zero...
      if (number === 0) {
        //  ...run the stop function.
    
        stop();
        clearInterval(intervalId);
        

      }
    }
    //  The stop function
    function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
      startSlideshow();
        
    }
    //  Execute the run function.
    run();
//----------------------------------------------------------------
//setting the question based on time

setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
function questionOne(){
    $("#chose-1").html(funTriviaQuestions[count]);
    //append("<p>What nation was bounced from the Organisation of American States in 1962? </p>");
    console.log("5 seconds left");
}
function fiveSeconds() {

    // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
    // console log 10 seconds left
   
    questionOne()
  }
  function tenSeconds() {

    // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
    // console log 10 seconds left
    
    $("#chose-2").append("<p>What continent has the fewest flowering plants? </p>");
    console.log("10 seconds left");
  }




// You'll create a trivia game that shows only one question until the player answers it or
// their time runs out.



//  If the player selects the correct answer, show a screen congratulating them for choosing the right option. 
//After a few seconds, display the next question -- do this without user input.

// * The scenario is similar for wrong answers and time-outs.

// If the player runs out of time, tell the player that time's up and display the correct answer. 
//Wait a few seconds, then show the next question.

//If the player chooses the wrong answer, tell the player they selected the wrong option and 
//then display the correct answer. Wait a few seconds, then show the next question.

//On the final screen, show the number of correct answers, incorrect answers, 
//and an option to restart the game (without reloading the page).