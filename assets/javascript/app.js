var correctAnswers;
var wrongAnswers;
var questionFinish = false;





function gameStart() {
    $("p#game").text("Lets see How good your movie knowledge is");
    $("div#question1").fadeIn(4000);

}


$("li.q1").click(function(){
	$("div#question1").fadeOut(1000)
	$("div#question2").fadeIn(3000);
});

$("li.q2").click(function(){
	$("div#question2").fadeOut(1000)
	$("div#question3").fadeIn(3000);
});

