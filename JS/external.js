

console.log("Hello from external JavaScript");

alert("Welcome to my website!");

var favoriteColor = prompt("What is your favorite color?");

alert("Wow, the color " + favoriteColor + " is my favorite color too!");

alert("We will now begin the video rental exercise!");

// Begin video rental exercise

// Code from Lesson 3
// var mermaid = 3;
// var brotherBear = 5;
// var hercules = 1;
// var days = mermaid + brotherBear + hercules;
// var price = days * 3;
// console.log(price);

var mermaidDays = parseInt(prompt("How many days would you like to rent The Little Mermaid?"));
var brotherBearDays = parseInt(prompt("How many days would you like to rent Brother Bear?"));
var herculesDays = parseInt(prompt("How many days would you like to rent Hercules?"));
var days = mermaidDays + brotherBearDays + herculesDays
var price = days * 3
alert("Your total price for the selected movies is: $" + price);

// Begin weekly work pay with Google Facebook and Amazon
// Weekly pay notes from Lesson 3
// var google = 400;
// var amazon = 380;
// var facebook = 350;
// var googlePay = google * 6;
// var facebookPay = facebook * 10;
// var amazonPay = amazon * 4;
// var weeklyPay = googlePay + facebookPay + amazonPay;
// console.log(weeklyPay);


alert("We will now begin the weekly pay exercise!");
var googleHours = parseInt(prompt("How many hours at Google did you work this week?"));
var amazonHours = parseInt(prompt("How many hours at Amazon did you work this week?"));
var facebookHours = parseInt(prompt("How many hours did you work at Facebook this week?"));
var googlePay = googleHours * 400;
var amazonPay = amazonHours * 380;
var facebookPay = facebookHours * 350;
var weeklyPay = googlePay + amazonPay + facebookPay;
var totalHours = googleHours + amazonHours + facebookHours;
alert("Great job! You've worked a total of " + totalHours + " hours resulting in a total paycheck of $" + weeklyPay);

// Begin class schedule exercise from Lesson 3
// A student can be enrolled in a class only if the class is not full and the class
// schedule does not conflict with her current schedule.
// var classTime = "9am";
// var classSize = 125;
// var currClassSize = 108;
// var studentClassTime = "9AM";
// var studentCanSignUp = currClassSize < classSize && classTime !== studentClassTime;

alert("We will now begin the class schedule exercise!");
var classSize = 125;
var currentClassSize = 108;
var remainingClassSpots = classSize - currentClassSize;
var enroll = parseInt(prompt("Would you like to enroll for Computer Science? " +
    "The current class size is " + currentClassSize + " students! There are " + remainingClassSpots + " seats left" +
    " in class. Press one if you'd like to enroll! Press 0 to cancel."));
var enrollTime = parseInt(prompt("The selected Computer Science Class is a 9AM class;" +
    " do you have any classes already scheduled at this time? Press 1 if you don't currently have " +
    "a 9AM class. Press 0 if you do to cancel out of enrollment for Computer Science."));

if (enroll && enrollTime == true){
    alert("Congrats! You are now enrolled in Computer Science.");
} else (enroll || enrollTime == false);{
    alert("You will not be enrolled into Computer Science at this time");
}


//Begin multiple item purchase

var offerValid = confirm("Is the offer still valid?");
var howManyPurchased = parseInt(prompt("How many items are in the guest's cart?"));
var premiumMember = confirm("Is this customer a Premium Member?");

alert("Customer discount applied: " + (offerValid === true && (howManyPurchased > 2 || premiumMember)) + ".");



// Begin password check exercise from lesson 3
// var username = 'codeup';
// var password = 'notastrongpassword';
// Create a variable that holds a boolean value for each of the following conditions:
// the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace

// var username = codeup;
// var password = notastrongpassword;
// password.length >= 5 && password.indexOf(username) === -1 && username.length
// <= 20 && username === username.trim() && password === password.trim();

// var enterUsername = prompt("Please enter your username; please note is must be more than 20 characters" +
// //     " and cannot start or end with a white space.");
// // if (enterUsername.length > 20 || enterUsername === enterUsername.trim()) {
// //     alert("Username is invalid; please refresh the page and try again. WRECKED NERD!");
// // } else
// //
// //     var enterPassword = prompt("Please enter a password. Please note it must be " +
// //     "5 or more characters, must not include username, and cannot start or end with an empty space.");

// Was attempting to do exercise with loops; couldn't figure out correct way to do it.
// NVM we didn't have to do this one XD Saving to do it anyways once I learn loops as practice.









