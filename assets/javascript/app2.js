var correctAnswers = 0;
var wrongAnswers =0 ;
var questionFinish = false;





function gameStart() {
    $("p#game").text("Lets see How good your movie knowledge is");
    $("div#question1").fadeIn(1000);
    $("button#buttonGone").hide();

}



$("li.q1").click(function(){
	$("#no").fadeIn();
	$("div#question1").fadeOut(1000)
	$("div#question2").fadeIn(1000);
	$("#no").fadeOut(2000);
	wrongAnswers ++;
	console.log(wrongAnswers);
	$("#loss").text(wrongAnswers);
});

$("li#q1r").click(function(){
	$("#yes").fadeIn();
	$("div#question1").fadeOut(1000);
	$("div#question2").fadeIn(1000);
	$("#yes").fadeOut(2000);
	correctAnswers ++;
	console.log(correctAnswers);
	$( "#wins" ).text(correctAnswers);
});


$("li.q2").click(function(){
	$("#no").fadeIn();
	$("div#question2").fadeOut(1000)
	$("div#question3").fadeIn(1000);
	$("#no").fadeOut(2000);
	wrongAnswers ++;
	console.log(wrongAnswers);
	$("#loss").text(wrongAnswers);
});
$("li.q2r").click(function(){
	$("#yes").fadeIn();
	$("div#question2").fadeOut(1000)
	$("div#question3").fadeIn(1000);
	$("#yes").fadeOut(2000);
	correctAnswers ++;
	console.log(correctAnswers);
	$( "#wins" ).text(correctAnswers);
});

$("li.q3").click(function(){
	$("#no").fadeIn();
	$("div#question3").fadeOut(1000)
	$("div#question4").fadeIn(1000);
	$("#no").fadeOut(2000);
	wrongAnswers ++;
	console.log(wrongAnswers);
	$("#loss").text(wrongAnswers);
});
$("li.q3r").click(function(){
	$("#yes").fadeIn();
	$("div#question3").fadeOut(1000)
	$("div#question4").fadeIn(1000);
	$("#yes").fadeOut(2000);
	correctAnswers ++;
	console.log(correctAnswers);
	$( "#wins" ).text(correctAnswers);
});

$("li.q4").click(function(){
	$("#no").fadeIn();
	$("div#question4").fadeOut(1000)
	$("div#question5").fadeIn(1000);
	$("#no").fadeOut(2000);
	wrongAnswers ++;
	console.log(wrongAnswers);
	$("#loss").text(wrongAnswers);
});

$("li.q4r").click(function(){
	$("#yes").fadeIn();
	$("div#question4").fadeOut(1000)
	$("div#question5").fadeIn(1000);
	$("#yes").fadeOut(2000);
	correctAnswers ++;
	console.log(correctAnswers);
	$( "#wins" ).text(correctAnswers);
});

$("li.q5").click(function(){
	$("#no").fadeIn();
	$("div#question5").fadeOut(1000)
	$("div#question6").fadeIn(1000);
	$("#no").fadeOut(2000);
	wrongAnswers ++;
	console.log(wrongAnswers);
	$("#loss").text(wrongAnswers);
});

$("li.q5r").click(function(){
	$("#yes").fadeIn();
	$("div#question5").fadeOut(1000)
	$("div#question6").fadeIn(1000);
	$("#yes").fadeOut(2000);
	correctAnswers ++;
	console.log(correctAnswers);
	$( "#wins" ).text(correctAnswers);
});

$("li.q6").click(function(){
	$("#no").fadeIn();
	$("div#question6").fadeOut(1000)
	$("div#question7").fadeIn(1000);
	$("#no").fadeOut(2000);
	wrongAnswers ++;
	console.log(wrongAnswers);
	$("#loss").text(wrongAnswers);
});
$("li.q6r").click(function(){
	$("#yes").fadeIn();
	$("div#question6").fadeOut(1000)
	$("div#question7").fadeIn(1000);
	$("#yes").fadeOut(2000);
	correctAnswers ++;
	console.log(correctAnswers);
	$( "#wins" ).text(correctAnswers);
});

$("li.q7").click(function(){
	$("#no").fadeIn();
	$("div#question7").fadeOut(1000)
	$("div#question8").fadeIn(1000);
	$("#no").fadeOut(2000);
	wrongAnswers ++;
	console.log(wrongAnswers);
	$("#loss").text(wrongAnswers);
});

$("li.q7r").click(function(){
	$("#yes").fadeIn();
	$("div#question7").fadeOut(1000)
	$("div#question8").fadeIn(1000);
	$("#yes").fadeOut(2000);
	correctAnswers ++;
	console.log(correctAnswers);
	$( "#wins" ).text(correctAnswers);
});

$("li.q8").click(function(){
	$("#no").fadeIn();
	$("div#question8").fadeOut(1000)
	$("div#question9").fadeIn(1000);
	$("#no").fadeOut(2000);
	wrongAnswers ++;
	console.log(wrongAnswers);
	$("#loss").text(wrongAnswers);
});

$("li.q8r").click(function(){
	$("#yes").fadeIn();
	$("div#question8").fadeOut(1000)
	$("div#question9").fadeIn(1000);
	$("#yes").fadeOut(2000);
	correctAnswers ++;
	console.log(correctAnswers);
	$( "#wins" ).text(correctAnswers);
});

$("li.q9").click(function(){
	$("#no").fadeIn();
	$("div#question9").fadeOut(1000)
	$("div#question10").fadeIn(1000);
	$("#no").fadeOut(2000);
	wrongAnswers ++;
	console.log(wrongAnswers);
	$("#loss").text(wrongAnswers);
});

$("li.q9r").click(function(){
	$("#yes").fadeIn();
	$("div#question9").fadeOut(1000)
	$("div#question10").fadeIn(1000);
	$("#yes").fadeOut(2000);
	correctAnswers ++;
	console.log(correctAnswers);
	$( "#wins" ).text(correctAnswers);
});

$("li.q10").click(function(){
	$("#no").fadeIn();
	wrongAnswers ++;
	console.log(wrongAnswers);
	$("#loss").text(wrongAnswers);
	$("div#question2").fadeOut(1000)
	$("div#analysis").fadeIn(1000);
	$("#no").fadeOut(2000);
	$("button#restart").fadeIn();
});

$("li.q10r").click(function(){
	$("#yes").fadeIn();
	correctAnswers ++;
	console.log(correctAnswers);
	$( "#wins" ).text(correctAnswers);
	$("div#question2").fadeOut(1000)
	$("#yes").fadeOut(2000);
	$("div#analysis").fadeIn(1000);
	

});
