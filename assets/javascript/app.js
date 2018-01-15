//establish a timer for the game
var timeOut=10;
var counter;


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

var results = {
	question1: false,
	question2: false,
	question3: false,
	question4: false,
};

//hide all of the questions until you press begin
$("#gameblock").hide();
//hide the results
$(".result_block").hide();

//push the content onto the page when you ckick "begin"

$(".btn-begin").on("click", function() {
	$(".btn-begin").hide();
	$("#gameblock").show();
	counter=setInterval(timer, 1000);

	$("#question1").text(question1.question);
	$("#1-1").text(question1.answer1);
	$("#1-2").text(question1.answer2);
	$("#1-3").text(question1.answer3);
	$("#1-4").text(question1.answer4);

	$("#question2").text(question2.question);
	$("#2-1").text(question2.answer1);
	$("#2-2").text(question2.answer2);
	$("#2-3").text(question2.answer3);
	$("#2-4").text(question2.answer4);

	$("#question3").text(question3.question);
	$("#3-1").text(question3.answer1);
	$("#3-2").text(question3.answer2);
	$("#3-3").text(question3.answer3);
	$("#3-4").text(question3.answer4);

	$("#question4").text(question4.question);
	$("#4-1").text(question4.answer1);
	$("#4-2").text(question4.answer2);
	$("#4-3").text(question4.answer3);
	$("#4-4").text(question4.answer4);
});



var guessArray=["answers"];
var correctCount=0;
var incorrectCount=0;
var unguessed=0;
var guess1;
var quess2;
var guess3;
var quess4;


function checkResults() {
	clearInterval(counter);
	guess1 = $("input[name=answer1]:checked").val();
	guess2 = $("input[name=answer2]:checked").val();
	guess3 = $("input[name=answer3]:checked").val();
	guess4 = $("input[name=answer4]:checked").val();

	console.log(guess1 + "  " + guess2 + "  " + guess3 + "  " + guess4);
	console.log(question1.correctAnswer + "  " + question2.correctAnswer + "  " + question3.correctAnswer + "  " + question4.correctAnswer);


	if (guess1 === question1.correctAnswer) {
		correctCount++;
		}
		else if (guess1 === undefined) {
			$(".gameblock1").removeClass("alert-success").addClass("bg-danger");
			unguessed++;
		}
		else {
			$(".gameblock1").removeClass("alert-success").addClass("bg-danger");
			incorrectCount++;	
		}
	if (guess2 === question2.correctAnswer) {
		correctCount++;
		}
		else if (guess2 === undefined) {
			$(".gameblock2").removeClass("alert-success").addClass("bg-danger");
			unguessed++;
		}
		else {
		$(".gameblock2").removeClass("alert-success").addClass("bg-danger");
		incorrectCount++;
		}
	if (guess3 === question3.correctAnswer) {
		correctCount++;
		}
		else if (guess3 === undefined) {
			$(".gameblock3").removeClass("alert-success").addClass("bg-danger");
			unguessed++;
		}
		else {
		$(".gameblock3").removeClass("alert-success").addClass("bg-danger");
		incorrectCount++;
		}
	if (guess4 === question4.correctAnswer) {
		correctCount++;
		}
		else if (guess4 === undefined) {
			$(".gameblock4").removeClass("alert-success").addClass("bg-danger");
			unguessed++;
		}
		else {
		$(".gameblock4").removeClass("alert-success").addClass("bg-danger");
		incorrectCount++;
		}		

	console.log("correct answers: " + correctCount);
	console.log("incorrect answers: " + incorrectCount);
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

$(".btn-done").on("click", function() {
	checkResults();
	pushResults();
});
