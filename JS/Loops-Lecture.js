"use strict";
/*
* WHILE LOOPS
*/

// var  i = 10;
// while(i > 0){
//     console.log(i);
//     i--;
// }
// This Logs 10 - 1

// 1. Create a while loop that counts to 100 in increments of ten:
// (10...20...30...)

// var i = 0;
// while(i <= 100){
//     console.log(i);
//     i=i+10;
// }

// 2. Create a while loop that counts backwards from 50 - 1

// var i =50;
// while(i >=1){
//     console.log(i);
//     i--;
// }

// var myQuestion;

// 3. Create a while loop that asks the user for a confirmation when asked: "Would you like to exit?"
// Store the confirm in the myQuestion variable.
// Try running this. What happens?

// while(myQuestion){
//     var myQuestion = confirm("Would you like to exit?");
// }
// It's never going to run since its checking for true; since the empty variable assignment is defaulted to true


/*
* DO-WHILE LOOPS
*/


// 4. Refactor question 3 using a do-while loop.
// What is the behavior this time?

// do{
//     var myQuestion = confirm("Would you like to exit?");
// }while(!myQuestion);  // Must click confirm to exit the do-while loop

// 5. Create a do-while loop that prompts the user for a color and continues
// to prompt until the string passed is "blue"

// do{
//     var userColor = prompt("Please enter a color!");
// }while(userColor !== 'blue');



// 6. Refactor question 1 using a do-while loop.
// 1. Create a while loop that counts to 100 in increments of ten:
// (10...20...30...)

// var i = 0;
// while(i <= 100){
//     console.log(i);
//     i=i+10;
// }

// do{
//     var i = 0;
//     console.log(i);
//     i = i +10;
// }while(i<=100);

/*
* FOR LOOPS
*/

// for(initialization;condition/increment)

// for (var j = 1; j <=100; j++){
//     console.log(j);
// }    // Counts 1-100

// function countFrom(x){
//     for (var j = x; j <= 100; j++){
//         console.log(j);
//     }
//     return "done counting!";
// }
// // Counts from x to 100

// var randomColors = ["red","orange","yellow","blue","green"];
//   for(var y = 0; y < randomColors.length; y++){
//       console.log(randomColors[y]);
//   }

// var myArray = ["apples", "oranges", "bananas", "grapes", "pineapples"];
//
// // 7. Create a for loop that iterates over this array and logs out each
// // element to the console
//
// for(var y = 0; y < myArray.length; y++){
//     console.log(myArray[y]);
// }


// 8. You are going to use a for loop to complete the FizzBuzz exercise.
// Your program should count up to 100.
// For numbers divisible by 3, log "Fizz"
// For numbers divisible by 5, log "Buzz"
// If divisible by 3 and 5, log "FizzBuzz"
// All other cases, just log the number.
//
// for (var i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else {
//         console.log(i);
//     }
//     }

// for(var s = 1; s < 101; s++){
//     if(s%15===0){
//         console.log("FizzBuzz");
//     } else if (s%5===0){
//         console.log("Buzz");
//     } else if (s%3===0){
//         console.log("Fizz");
//     } else {
//         console.log(s);
//     }
// }

// for(var s = 0; s <101;)console.log((++s%3 ? '' : 'Fizz') +(s%5 ? '':'Buzz') || s);

//FizzBuzz in one line


// 9. Refactor question 1 using a for-loop
// 1. Create a while loop that counts to 100 in increments of ten:
// for(var b = 10; b < 101; b+=10){
//     console.log(b);
// }
// Logs 10 to 100

/*
* BREAK AND CONTINUE
*/
//
// for(var b =0; b <=100; b++){
//     if(b%2===0){
//         console.log(b);
//         if(b===60){
//             console.log("skip:" +b);
//             continue;
//         }
//     }
// }

// for(var b=100; b>1; b--){
//     if (b > 10){
//         Console.log("Skip" + b);
//         continue;
//     }
//     console.log(b);
// }
//SKIPS EVERYTHING UNTIL YOU HIT 10 AND THEN IT LOGS OUT CONSOLE.LOG

// 11. Refactor question 1: using a 'break', stop the counting once it hits 70.



// 12. Refactor question 2: using a 'continue', skip numbers 50-26 and only
// log 25 - 1.
