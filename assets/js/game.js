//added so page loads before function runs
$(document).ready(function() {

	//random number to match
	var randomNumber = Math.floor(Math.random()*70+30);
	$("#randomNumber").text(randomNumber);

	//random number for badges
	var stoneNumber = Math.floor(Math.random()*9+1);
	var waterNumber = Math.floor(Math.random()*9+1);
	var fireNumber 	= Math.floor(Math.random()*9+1);
	var grassNumber = Math.floor(Math.random()*9+1);

	//win loss and score
	var win = 0;
	var loss = 0;
	var score = 0;

	$("#win").text(win);
	$("#loss").text(loss);
	$("#score").text(score);

	//badge functions
	$("#stone").on("click", function(){
		score = score + stoneNumber;
		$("#score").text(score);
			if (score == randomNumber) {
				youWin();
			}
			else if (score > randomNumber){
				youLose();
			}
	})

	$("#water").on("click", function(){
		score = score + waterNumber;
		$("#score").text(score);
			if (score == randomNumber) {
				youWin();
			}
			else if (score > randomNumber){
				youLose();
			}
	})

	$("#fire").on("click", function(){
		score = score + fireNumber;
		$("#score").text(score);
			if (score == randomNumber) {
				youWin();
			}
			else if (score > randomNumber){
				youLose();
			}
	})

	$("#grass").on("click", function(){
		score = score + grassNumber;
		$("#score").text(score);
			if (score == randomNumber) {
				youWin();
			}
			else if (score > randomNumber){
				youLose();
			}
	})

	//add wins and losses function
	function youWin(){
		win++;
		$("#win").text(win);
		reset();
	}

		function youLose(){
		loss++;
		$("#loss").text(loss);
		reset();
	}

	//reset game
	function reset(){
		randomNumber = Math.floor(Math.random()*70+30);
		$("#randomNumber").text(randomNumber);
		stoneNumber = Math.floor(Math.random()*9+1);
		waterNumber = Math.floor(Math.random()*9+1);
		fireNumber 	= Math.floor(Math.random()*9+1);
		grassNumber = Math.floor(Math.random()*9+1);
		score = 0;
		$("#score").text(score);
	}
});