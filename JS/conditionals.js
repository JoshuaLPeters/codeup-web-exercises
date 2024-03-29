"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

//sudo code
    // I need to confirm to ask the user if they want to enter a number
    // If they don't enter a number , game over - don't show the rest of the code
    // if they click confirm (we need a conditional) ask the user for a number (prompt)
    // Check if this is a number or not a number
    // If it is a number: even / odd, number +100, neg / pos
    // If it's not a number, tell them!


// var userDecision = confirm("Would you like to enter a number?");
// if (userDecision === true){
//     var userNumber = parseInt(prompt("Okay, awesome! Please enter a number for our exercise."));
//     if (!isNaN(userNumber)){
//         alert("This is a number");
//         var numberPlus100 = userNumber + 100;
//         alert("Did you know the number you've entered plus 100 equals " + numberPlus100 + "?");
//         if(userNumber % 2 === 0){
//             alert("The number you've entered is even!");
//         } else {
//             alert("The number you've entered is odd!");
//         } if (userNumber >=0){
//             alert("The number you've entered is positive!");
//         } else {
//             alert("The number you've entered is negative!");
//         }
//     } else {
//         alert("This is not a number.");
//     }
// } else {
//     alert("Thanks anyways!");
// }

// COMPLETED $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     if (color === "blue"){
//         return "Blue is the color of the sky";
//     } else if (color === "red"){
//         return "Red is the color of my cup most of the time (:";
//     } else if (color === "yellow"){
//         return "Yellow is the color of my duck; I love my duck";
//     } else if (color === "green"){
//         return "green is the color I wish my cup was.";
//     } else if (color === "indigo"){
//         return "This is the color indigo";
//     } else if (color === "violet") {
//         return "This is the color for Twitch!";
//     } else if (color === "orange"){
//         return "I love eating oranges";
//     } else {
//         return "This color is lame, just like my red cup.";
//     }
// }
// console.log(analyzeColor("green"))

//completed $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)


// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */





/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// function analyzeColor(color) {
//     switch (color) {
//         case "blue":
//             return "Blue is the color of the sky";
//         case "red":
//             return "Red is the color of my cup most of the time (:";
//         case "yellow":
//             return "Yellow is the color of my duck; I love my duck";
//         case "green":
//             return "green is the color I wish my cup was.";
//         case "indigo":
//             return "This is the color indigo";
//         case "violet":
//             return "This is the color for Twitch!";
//         case "orange":
//             return "I love eating oranges";
//         default:
//             return "This color is lame, just like my red cup.";
//     }
// }
// console.log(analyzeColor("green"));

// COMPLETED $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userColorInput = prompt("Please enter a color from the rainbow!");
//
// function analyzeColor(userColorInput) {
//     switch (userColorInput) {
//         case "blue":
//             return "Blue is the color of the sky";
//         case "red":
//             return "Red is the color of my cup most of the time (:";
//         case "yellow":
//             return "Yellow is the color of my duck; I love my duck";
//         case "green":
//             return "green is the color I wish my cup was.";
//         case "indigo":
//             return "This is the color indigo";
//         case "violet":
//             return "This is the color for Twitch!";
//         case "orange":
//             return "I love eating oranges";
//         default:
//             return "This color is lame, just like my red cup.";
//     }
// }
// console.log(analyzeColor(userColorInput));

//COMPLETED $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber, totalPrice){
//     var discountRate = 0;
//
//     switch(luckyNumber){
//         case 0:
//             discountRate = 0;
//             break;
//         case 1:
//             discountRate = .1;
//             break;
//         case 2:
//             discountRate = .25;
//             break;
//         case 3:
//             discountRate = .35;
//             break;
//         case 4:
//             discountRate = .5;
//             break;
//         case 5:
//             discountRate = 1;
//             break;
//     }
//
//     return totalPrice - (totalPrice * discountRate);
// }


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// // Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// var totalBillPrompt = parseFloat(prompt("What was your total bill?"));
// var finalAmount = calculateTotal(luckyNumber, totalBillPrompt);
// alert("Your lucky number is: " + luckyNumber + "Your total bill was: " + totalBillPrompt + "Your discount total is : " + finalAmount);

// COMPLETED $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$