// Prompt the user for an odd number between 1 and 50. Use a loop and
// a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50,
// except for the number the user entered.
// Your output should look like this:

// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49

/*
* BREAK AND CONTINUE LECTURE EXAMPLES
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
// var x = parseInt(prompt("Please enter an odd number between 1 and 50."));
// for (var i = 1; i <= 49; i += 2){
//     if (x % 2 === 0){
//         var x = parseInt(prompt("Please enter an odd number between 1 and 50."));
//     }else if(i === x){
//         console.log("Yikes! Skipping number: " + x);
//         continue;
//     } else if(i <= 49){
//         console.log("Here is an odd number: " + i);
//     }
// }

//complete
