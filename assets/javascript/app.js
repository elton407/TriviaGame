var correctAnswers;
var wrongAnswers;
var questionFinish = false;





function gameStart() {
    $("p#game").text("Lets see How good your movie knowledge is");
    $("div#question1").fadeIn(1000);
    $("button#buttonGone").hide();

}


$("li.q1").click(function(){
	$("div#question1").fadeOut(1000)
	$("div#question2").fadeIn(1000);
});

$("li.q2").click(function(){
	$("div#question2").fadeOut(1000)
	$("div#question3").fadeIn(1000);
});

$("li.q3").click(function(){
	$("div#question3").fadeOut(1000)
	$("div#question4").fadeIn(1000);
});

$("li.q4").click(function(){
	$("div#question4").fadeOut(1000)
	$("div#question5").fadeIn(1000);
});

$("li.q5").click(function(){
	$("div#question5").fadeOut(1000)
	$("div#question6").fadeIn(1000);
});

$("li.q6").click(function(){
	$("div#question6").fadeOut(1000)
	$("div#question7").fadeIn(1000);
});

$("li.q7").click(function(){
	$("div#question7").fadeOut(1000)
	$("div#question8").fadeIn(1000);
});

$("li.q8").click(function(){
	$("div#question8").fadeOut(1000)
	$("div#question9").fadeIn(1000);
});

$("li.q9").click(function(){
	$("div#question9").fadeOut(1000)
	$("div#question10").fadeIn(1000);
});

$("li.q10").click(function(){
	$("div#question2").fadeOut(1000)
	$("div#question3").fadeIn(1000);
});

