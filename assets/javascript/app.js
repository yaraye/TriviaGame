
var funTriviaQuestions=[{
    question: 'What nation was bounced from the Organisation of American States in 1962?',
    answers:["Cuba", "Canada","Mixico","Gana"],
    correctAnswer:"Cuba",
    image:'assets/'
},{
    question:'What continent has the fewest flowering plants?',
    answers:["Afirca", "Antarctica","Asia","Australia"],
    correctAnswer:"Antarctica",
   image:"assets/images/trivia1.jpn.jpg"
},{
    question:'What was the first planet to be discovered using the telescope, in 1781?',
    answers:["Uranus","Venus","Mercury","Earth"],
    correctAnswer:"Uranus",
    image:"assets/images/trivia1.jpn.jpg"
},{
    question:'What country saw a world record 315 million voters turn out for elections on May 20, 1991?',
    answers:["India","Canada","Mixico","Ethiopia"],
    correctAnswer:"India",
    image:"assets/images/trivia1.jpn.jpg"   
},{
    question:'What national holiday in Mexico has picnickers munching chocolate coffins and sugar skulls?',
    answers:["The Day of the Dead","Walking Dead","Dead People","Day of the Dead"],
    correctAnswer:"The Day of the Dead",
    image:"assets/images/trivia1.jpn.jpg"  
}];


$('#start').on('click',function(){
    $('#start').hide();
    populate();

    $(document).on('click','.clickedAnswer', function(e)
    {
        clicked(e);  
    }
)
})

$(document).on('click','#reset', function()
{
    reset();
})

var funTriviaQuestions=funTriviaQuestions;
  var  currentQuestion=0;
 var   counter=5;
  var  correct=0;
 var   incorrect=0;
  var  unanswered=0;

    

     function populate(){
        timer = setInterval(countDown,1000);
        $("#sub").html('<h2 id="counter">Time Remaining: 5 Seconds </h2>');
        $("#sub").append("<h2>"+funTriviaQuestions[currentQuestion].question+"</h2>");
        for (var i=0; i<funTriviaQuestions[currentQuestion].answers.length;i++){
        $("#sub").append('<button class="clickedAnswer" id="button-'+i+'" data-name="'+
        funTriviaQuestions[currentQuestion].answers[i]+'">'+funTriviaQuestions[currentQuestion].
        answers[i]+'</button>');
        }
    };
    

    function countDown(){
        counter--;
        $("#counter").html(counter);
        if (counter<=0){
            console.log("times up");
            timesup();
        }
    };
 
   function  nextQuestion(){
        counter=5;
        $('#counter').html(counter);
        currentQuestion++;
        populate();
    };
   function  timesup(){
        clearInterval(timer);
        unanswered++;
        $('#sub').html('<h2> Time is Up!</h2>');
        $('#sub').append('<h3>The Correct Answer Is:'+funTriviaQuestions[currentQuestion].correctAnswer+'</h3>');
        if(currentQuestion==funTriviaQuestions.length-1){
            setTimeout(results,2*1000);
        }else {
            setTimeout(nextQuestion,2*1000);
        }
    };
   function  results(){ 
        clearInterval(timer);
        $('#sub').html('<h2>Results:</h2>');
        $('#sub').append("<h3>Correct:"+correct+"</h3>");
        $('#sub').append("<h3>Incorrect:"+incorrect+"<h3>");
        $('#sub').append("<h3>Unanswered:"+unanswered+"<h3>");
        $('#sub').append("<button id='reset'>Reset</button>");
    };
 function clicked(e){
        clearInterval(timer);
        if($(e.target).data("name")==funTriviaQuestions[currentQuestion].correctAnswer){
            console.log("yeaay");
        correctlyAnswered();
        } else {
        IncorrectlyAnswered();
        console.log("NAyeaay");
    }
   
    };
   function  correctlyAnswered(){
        clearInterval(timer);
        correct++;
        $('#sub').html('<h2> Correct! </h2>');
        if(currentQuestion==funTriviaQuestions.length-1){
            setTimeout(results,3*1000);
        }else {
            setTimeout(nextQuestion,3*1000);
        }

    };
   function IncorrectlyAnswered(){
        clearInterval(timer);
        incorrect++;
        $('#sub').html('<h2> Wrong</h2>');
        $('#sub').append('<h3>The Correct Answer Is:'+funTriviaQuestions[currentQuestion].correctAnswer+'</h3>');
        if(currentQuestion==funTriviaQuestions.length-1){
            setTimeout(results,2*1000);
        }else {
            setTimeout(gmae.nextQuestion,2*1000);
        }
    };
   function  reset(){
        currentQuestion=0;
        counter=0;
        counter=0;
        correct=0;
        incorrect=0;
        unanswered=0;
        populate();
   };
