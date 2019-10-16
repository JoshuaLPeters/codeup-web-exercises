// #1 Log should look like
// Create a function named showMultiplicationTable that accepts a number and
// console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

// function showMultiplicationTable(x){
//     for(var i = 1; i <=10; i++){
//         if (i <=10){
//             console.log("7 x " + i + " = " + i * x);
//         }
//     }
// }
// console.log(showMultiplicationTable(7));

//complete

// Use a for loop and the code from the previous lessons to
// generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
//     ...
// This is how you get a random number between 20 and 200
// Math.floor(Math.random() * 20) + 200;

// for (var i = 0; i <=10; i++){
//     var r = Math.floor(Math.random() * 180) + 20;
//     if (r % 2 ===0){
//         console.log(r + " is even");
//     }  else{
//         console.log(r + " is odd");
//     }
// }
// complete

// Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// for (var i = 1; i <= 9; i++){
//     if (i === 1){
//         console.log(i);
//     }else if(i === 2){
//         console.log(i+""+i);
//     }else if(i === 3){
//         console.log(i + "" + i + ""+ i );
//     }else if(i === 4){
//         console.log(i + "" + i + ""+ i +"" +i);
//     }else if(i === 5){
//         console.log(i + "" + i + ""+ i + "" + i +"" + i);
//     }else if(i === 6){
//         console.log(i + "" + i + ""+ i + ""+ i + "" + i +"" + i);
//     }else if(i === 7){
//         console.log(i + "" + i + ""+ i + ""+ i + "" + i +"" + i + "" + i);
//     }else if(i === 8){
//         console.log(i + "" + i + ""+ i + ""+ i + "" + i +"" + i + "" + i + "" + i );
//     }else{
//         console.log(i + "" + i + ""+ i + ""+ i + "" + i +"" + i + "" + i + "" + i + "" + i);
//     }
// }
// complete

// Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

// for (var i = 100; i >=5; i-=5){
//         console.log(i);
// }

//complete