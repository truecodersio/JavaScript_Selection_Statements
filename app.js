console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let rand = Math.floor(Math.random() * 100) + 1;
let userInput = window.prompt("Pick a number between 1 and 100!");

if (userInput < rand) {
	console.log("Too low!");
} else if (userInput > rand) {
	console.log("Too high!");
} else {
	console.log("Congrats! You guessed the correct number!");
}

// Exercise 2
let cheese = window.prompt("What's your favorite cheese?");

switch (cheese) {
	case "brie":
		console.log("Brie is also nicknamed `The Queen of Cheeses`, great choice!");
		break;
	case "blue":
		console.log("Fun fact, this cheese gets it's color from penicillum mold 0_0");
		break;
	case "asiago":
		console.log("You, my friend, have good taste");
		break;
	case "gouda":
		console.log("That's some GOUDA cheese ;)");
		break;
	case "mozzarella":
		console.log(
			"Mozzarella is a traditionally southern Italian cheese made from Italian buffalo's milk."
		);
		break;
	default:
		console.log("Have you no knowledge of good cheese?");
}
