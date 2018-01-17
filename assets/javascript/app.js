//establish a timer for the game
var timeOut=10;
var counter;
var quizLength = 4;
var answerLength = 4;



// create all of the questions and answers as objects

var question1 = {
question: "What number comes between 3 and 5?",
answer1: "2",
answer2: "12",
answer3: "4",
answer4: "8",
correctAnswer: "answer3"
};

var question2 = {
	question: "Which is a color?",
	answer1: "dog",
	answer2: "red",
	answer3: "badger",
	answer4: "cat",
	correctAnswer: "answer2"
};

var question3 = {
	question: "Which is a boy's name?",
	answer1: "Mary",
	answer2: "Susan",
	answer3: "Grace",
	answer4: "Rodger",
	correctAnswer: "answer4"
};

var question4 = {
	question: "Which is not a state?",
	answer1: "Detriot",
	answer2: "New Hampshire",
	answer3: "California",
	answer4: "Texas",
	correctAnswer: "answer1"
};


var correctCount=0;
var incorrectCount=0;
var unguessed=0;


function checkResults() {
	clearInterval(counter);

	var guess1 = $("input[name=answer1]:checked").val();
	var guess2 = $("input[name=answer2]:checked").val();
	var guess3 = $("input[name=answer3]:checked").val();
	var guess4 = $("input[name=answer4]:checked").val();

	for (i=1; i<quizLength+1; i++) {
		// var guessIndex = eval ($("input[name=answer" + i + "]:checked").val());
		var questionIndex = eval ("question" + i);
		if (eval("guess" + i) === questionIndex["correctAnswer"]) {
			correctCount++;
		}
		else if (eval("guess" + i) === undefined) {
			$(".gameblock" + i).removeClass("alert-success").addClass("bg-danger");
			unguessed++;
		}
		else {
			$(".gameblock" + i).removeClass("alert-success").addClass("bg-danger");
			incorrectCount++;	
		}
	}
		return;
}

function pushResults(){
	$(".result_block").show();
	$(".btn").hide();
	$("#results-correct").text("Correct Answers: " + correctCount);
	$("#results-incorrect").text("Incorrect Answers: " + incorrectCount);
	$("#results-unanswered").text("Unanswered questions: " + unguessed);
	$("#score").text("Score: " + (correctCount / 4)*100 + "%");
}

//count down
function timer() {
	if (timeOut<0) {
		$(".btn").removeClass("btn-success").addClass("btn-danger").text("Out of time, click for your score");
		$('input[type=radio]').attr("disabled",true);
		clearInterval(counter);
		return;
	}
	$("#time_remaining").html("<h4> Time Remaining: " + timeOut);
	timeOut--
}

//hide all of the questions until you press begin
$("#gameblock").hide();
//hide the results
$(".result_block").hide();
//hide done button
$(".btn-done").hide();
$("#time_remaining").hide();


//build page when you click "begin"
$(".btn-begin").on("click", function() {
	$(".btn-begin").hide();
	$(".btn-done").show();
	$("#gameblock").show();
	$("#time_remaining").show();
	counter=setInterval(timer, 1000);

	var q;
	var a;
	
//push questions onto page
	for (q=1; q<quizLength+1; q++) {
		var questionIndex = eval("question" + q);

		$("#question"+ q).text(questionIndex.question);
		for (a=1; a<answerLength+1; a++)
			$("#" + q + "-" + a).text(questionIndex["answer" + a]);
	}

//when the user clicks "done", check results and push results
$(".btn-done").on("click", function() {
	checkResults();
	pushResults();
});

});
