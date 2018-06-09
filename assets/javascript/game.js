//Variables
let compPick = '';
let gemOne = '';
let gemTwo = '';
let gemThree = '';
let gemFour = '';
let wins = 0;
let losses = 0;
let score = 0;



$(document).ready(function () {


	/*Calculating random number for compPick between 19-120 and the random number generated from compPick will 
	appear on the Random Number section of the HTML page.*/

	let compPick = Math.floor(Math.random() * 101) + 19;
	console.log("compPick: " + compPick);
	$(".randomNumber").html(compPick);

	//Calculating random number from 1-12 for all gems and displaying on HTML page. The random number displayed per gem is given by "value"
	let gemOne = Math.floor(Math.random() * 11) + 1;
	console.log("Gem 1: " + gemOne);
	$("#img1").html("<img src=" + "./assets/images/redcrystal2.png" + " value=" + gemOne + ">");

	let gemTwo = Math.floor(Math.random() * 11) + 1;
	console.log("Gem 2: " + gemTwo);
	$("#img2").html("<img src=" + "./assets/images/emerald2.png" + " value=" + gemTwo + ">");

	let gemThree = Math.floor(Math.random() * 11) + 1;
	console.log("Gem 3: " + gemThree);
	$("#img3").html("<img src=" + "./assets/images/bluecrystal2.png" + " value=" + gemThree + ">");

	let gemFour = Math.floor(Math.random() * 11) + 1;
	console.log("Gem 4: " + gemFour);
	$("#img4").html("<img src=" + "./assets/images/yellowcrystal2.png" + " value=" + gemFour + ">");



	//How to create a new score when the gem image is clicked
	$("img").on("click", function () {
		let newScore = score += parseInt($(this).attr("value"));
		console.log("New Score: " + newScore);
		$(".scoreDisplay").html(newScore);

		if (newScore === compPick) {
			wins++;
			$(".wins").html("Wins: " + wins);
			console.log("Wins: " + wins);
			reset();
		}

		else if (newScore > compPick) {
			losses++;
			$(".losses").html("Losses: " + losses);
			console.log("Losses: " + losses);
			reset();
		}

	});






	//How to Reset Game
	let wins = 0;
	console.log("wins: " + wins);

	let losses = 0;
	console.log("losses: " + losses);

	let score = 0;
	console.log("score: " + score);


	function reset() {
		compPick = Math.floor(Math.random() * 101) + 19;
		console.log("compPick: " + compPick);
		$(".randomNumber").html(compPick);

		score = 0;
		$(".scoreDisplay").html(score);

		gemOne = Math.floor(Math.random() * 11) + 1;  
		console.log("Gem 1: " + gemOne);
		$("#img1").html("<img src=" + "./assets/images/redcrystal.jpg" + " value=" + gemOne + ">"); 

		gemTwo = Math.floor(Math.random() * 11) + 1; 
		console.log("Gem 2: " + gemTwo);
		$("#img2").html("<img src=" + "./assets/images/emerald.jpg" + " value=" + gemTwo + ">"); 

		gemThree = Math.floor(Math.random() * 11) + 1; 
		console.log("Gem 3: " + gemThree);
		$("#img3").html("<img src=" + "./assets/images/bluecrystal.jpg" + " value=" + gemThree + ">");

		gemFour = Math.floor(Math.random() * 11) + 1; 
		console.log("Gem 4: " + gemFour);
		$("#img4").html("<img src=" + "./assets/images/yellowcrystal.jpg" + " value=" + gemFour + ">");


		$("img").on("click", function () {
			let newScore = score += parseInt($(this).attr("value"));
			console.log("New Score: " + newScore);
			$(".scoreDisplay").html(newScore);

			if (newScore === compPick) {
				wins++;
				$(".wins").html("Wins: " + wins);
				console.log("Wins: " + wins);
				reset();

			}

			else if (newScore > compPick) {
				losses++;
				$(".losses").html("Losses: " + losses);
				console.log("Losses: " + losses);
				reset();
				
			}

		});


	}
	//Finished with reset game code above.



}); 
