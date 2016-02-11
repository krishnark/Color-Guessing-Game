var guess_input;
var colors = ["blue", "cyan", "gold", "grey", "green", "magenta", "orange", "red", "white", "yellow"];
var color_target;
var guesses = 0;
var finished = false;
var temp = 99;

function do_game() {

	var random_number = Math.random() * 10;
	var random_number_integer = Math.floor(random_number);
	color_target = random_number_integer;

	while(!finished){
		guess_input = prompt("I am thinking of one of these colors:\n\n" + 
							"blue, cyan, gold, grey, green, magenta, orange, red, white, yellow\n\n" + 
							"What color am I thinking of?\n\n" + "Computers color is " + colors[color_target]);
		finished = check_guess();
	}
}

function check_guess() {
	//alert("2nd function");
	
	for (var i = 0; i < colors.length; i++) {
		if (guess_input.localeCompare(colors[i]) == 0) {
			temp = i;
			//alert("You guessed the color " + colors[i]);
			break;
		}
	}

	if(temp != 99){
		if(temp < color_target){
			alert("Sorry your guess is incorrect\n\n" + "Hint: Your guessed color is alphabetically greater than my color");
			guesses++;
			return false;
		}
		if(temp > color_target){
			alert("Sorry your guess is incorrect\n\n" + "Hint: Your guessed color is alphabetically lower than my color");	
			guesses++;
			return false;
		}
		if(temp == color_target){
			guesses++;
			alert("Congratulations, you have guesed the right color\n\n" + "You took total " + guesses + " number of guesses to guess the right color");

			return true;
		}
	}
	alert("Sorry I don't recognise your color\n\n" + " please try again");
	guesses++;
	return false;
}