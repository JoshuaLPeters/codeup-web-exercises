// Create a while loop that uses console.log() to create the output shown below.
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// while loop example from lecture

// var  i = 10;
// while(i > 0){
//     console.log(i);
//     i--;
// }
// This Logs 10 - 1

// var i = 2;
// while(i<65536){
//     console.log(i *= 2);
// }
// Exercise complete

// An ice cream seller can't go home until she sells all of her cones.
// Write a JS program that generates a random number between 50 and 100
// representing the amount of cones to sell. Your code should generate numbers
// between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.

// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
//     Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones
//
// do{
//
//     var allCones = Math.floor(Math.random() * 50) + 50;
//
//     //initializes the starting amount of cones we have to sell; next we have to figure out how many each costumer will buy
//
//     var randomCones = Math.floor(Math.random() * 5) + 1;
//
//     //stores a variable to generate a random number for each customer between 1 and 5
//
//     console.log("We have " + allCones + " ice cream cones ready for sale!");
//
//    //logs how many cones we randomly start with from random number generator
//
//     allCones = allCones - randomCones;
//
//     //Hopefully the right equation XD
//
// }while (allCones > 0);
// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do{
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//     if (allCones > conesBought){
//         allCones -= conesBought;
//         console.log("Customer bought " + conesBought + " cones. There are " + allCones + " cones left in the inventory!");
//     } else if (allCones < conesBought){
//         console.log("Sorry. I cannot sell you " + conesBought + " cones. I only have " + allCones + " cones left in inventory!");
//     } else {
//         allCones -= conesBought;
//         console.log("Yay! I can clock out! I sold all of the cones!");
//     }
//
// }while(allCones > 0);







