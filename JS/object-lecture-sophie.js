"use strict";
console.log("Welcome to Intro to Objects!");

// var rubberDuck = {};    creates an object rubberDuck
//
// rubberDuck.color = "yellow";    // .color = key, yellow = value
// rubberDuck.name = "cody";        // .name = key , Cody = value
// rubberDuck.role = "Emotional Support";

// var rubberDuck = {
//     color: "yellow",
//     role: "Emotional Support",
//     name: "cody"
// };


// var redCup = new Object();
// redCup.color = "red";
// redCup.role = "Need Help";
// redCup.amount = 1;

/*********************************************
 *              INTRO TO OBJECTS
 ******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */


/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */

/**
 * TO DO TOGETHER: Create a new variable (of type Object) and call it
 * 'myPhone'. Use either the constructor or Object literal notation.
 */

var myPhone = {};


/**
 * TO DO: Create a new Object and call it 'myMac'. use either the
 * constructor or Object literal notation.
 */

var myMac = {};

/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */

myPhone.model = "iPhone 8";
myPhone.color = "Grey";
myPhone.storage = "64GB";


/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */

myMac.model = "Home desktop";  // mymac = object item     model = key   property = model + "Home desktop"
myMac.size = "17 inches";
myMac.year = 2019;

/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */

myPhone.name = {
    firstName: "Joshua",
    lastName: "Peters"
};
console.log(myPhone.name.lastName);

/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */

myMac.folders = ["applications", "documents", "pictures", "ideaProjects"];
console.log(myMac);
function myApps(){
    console.log("These are my apps: ");
    myMac.folders.forEach(function (folders) {
        console.log(folders);

    })
    return "Did you find what you were looking for?";
}

/**
 * TO DO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */
myMac.login = {};
myMac.login.username = "Joshua Peters";
myMac.login.fakePassword = "apples123";
myMac.login.email = "peters.l.joshua@gmail.com";
console.log(myMac.login);
// add users to your mac

myMac.users = [
    {
        username: "Sophie",
        id: 1
    },
    {
        username: "vivian",
        id: 2
    },
    {
        username: "david",
        id: 3
    }
];
console.log(myMac.users[1].username);
myMac.users.forEach(function (user, index) {
    console.log(user.username);
    console.log(index);
});

/*********************************************
 *                  METHODS
 ******************************************** */
console.log(myPhone);
console.log(myMac);

/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */

// method = function in an object

myPhone.call = function(){
    console.log("dialing");
};

console.log(myPhone.call());

/**
 * TO DO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */

myMac.poweringOn = function(){
    console.log("Powering On...");
};



/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */

myPhone.currentUser = function(){
    console.log("Current user: " + this.name.firstName + " " + this.name.lastName);
};

/**
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */

myMac.currentUser = function(){
    console.log("Current username and email is : " + this.login.username + " |" + this.login.email)
};

/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */


/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */

var chooseYourFighter = [
    {
        name: {
            firstName:"Spongebob",
            lastName:"Squarepants"
        },
        weapon: "Spatula",
        attacks: ["Karate", "Bubble Blowing", "Jelly Fishing"],
        catchPhrase: function(){
            return "I'm ready!";
        }
    },
    {
        name: {
            firstName:"Patrick",
            lastName:"Star"
        },
        weapon: "Mayonnaise",
        attacks: ["Rock Hiding", "Secret Photo", "Wumbo"],
        catchPhrase: function(){
            return "No, this is Patrick";
        }
    },
    {
        name: {
            firstName:"Eugene",
            lastName:"Krabs"
        },
        weapon: "Secret Formula",
        attacks: ["Take money", "Hide money", "Tiny violin"],
        catchPhrase: function(){
            return "Moneyyyyy!";
        }
    },
    {
        name: {
            firstName:"Squidward",
            lastName:"Tentacles"
        },
        weapon: "Clarinet",
        attacks: ["Bad Music", "Nag", "Squirm"],
        catchPhrase: function(){
            return "Anal noises";
        }
    }];
chooseYourFighter.forEach(function (fighter) {
    console.log(fighter.name.firstName + ": " + fighter.catchPhrase());
    console.log(fighter.name.firstName + "'s attcks are: ");
    fighter.attacks.forEach(function (attack) {
        console.log(attack);
    })
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
});