// ###Arrays and Objects
//
// Welcome to your JS 2nd Assessment Review. This will include some things from
// the previous assessments, as well as Array and Object manipulation. Below are
// some practice questions for you to get started.
//
// - Write a function named 'typeOfValue' that takes in a value and returns its
// type.
//
    function typeOfValue(x) {
        return typeof x;
    }

//     ```$xslt
//  typeOfValue("hello") // "string"
//  typeOfValue(123) // "number"
//  typeOfValue([]) // "object"
//  typeOfValue([4,5,6]) // "object"
// ```
//
// - Write a function 'isPositive' that takes in a number and returns `true` or
//     `false` based on whether the input is positive.
    function isPositive(x){
     if(!isNaN(parseFloat(x))===true && x > 0){
        return true;
     } else{
         return false;
     }
    }

//
//     ```$xslt
// isPositive(2) // true
// isPositive(-4) // false
// isPositive(0) // false
// ```
//
// - Write a function 'removeElement' that takes in an array and a value, and
// returns an Array with the first instance of the indicated value removed.
//
// function removeElement(arr, x){
//     var newArr = [];
//     arr.forEach(function (element) {
//         if(element === x){
//             arr.pop(element);
//         }
//     })
// }
// CANNOT USE FOREACH LOOP SINCE YOU ONLY WANT THE FIRST INSTANCE OF THE ELEMENT REMOVED; BREAK TO BREAK LOOP

function removeElement(arr, x){
    var newArray = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === x){
            arr.splice(i,1);
            newArray = arr;
            break;
        }
    }
    return newArray;
}




//     ```$xslt
// removeElement([1,2,3,4,5], 4) // returns [1,2,3,5]
// removeElement([2,2,4,4,5], 2) // returns [2,4,4,5]
// removeElement([10], 10) // returns []
// ```
//
// - Write a function 'sumOfNumbers' that takes in an array of numbers and
// returns the sum of all values.
//
// function sumOfNumbers(arr){
//     var sum = x;
//     arr.forEach(function (element, i) {
//
//     })
// }

function sumOfNumbers(arr){
    return arr.reduce(function(a,b){
        return a + b
    }, 0);
}

//     ```$xslt
// sumOfNumbers([1,2,3,4,5]) // 15
// sumOfNumbers([-1, 15]) // 14
// ```
//
// - Write a function 'evensIndex' that takes in an array of numbers and returns
// an array containing the index values of all even numbers.
//
function evensIndex(arr){
    var newArr = [];
    arr.forEach(function(element, index){
        if(element % 2 === 0){
            newArr.push(index);
        }
    })
    return newArr;
}



//     ```$xslt
// evensIndex([1,2,3,4,5,6]) // returns [1,3,5]
// evensIndex([3,7,11,12]) // returns [3]
// evensIndex([5,5,7,13]) // returns []
// ```
//
// - Write a function 'stringToArray' that takes in a comma separated list and
// returns it as an array.

function stringToArray(str){
    var arr = str.split(',');
    return arr;
}


//
//     ```$xslt
// stringToArray("red,orange,yellow,green,blue") // returns ['red','orange',
// 'yellow','green','blue']
//
// stringToArray("1,2,3") // returns ['1','2','3']
// stringToArray("dog") // returns ['dog']
// ```
//
// - Given the following array of objects, write a function 'findUsers' that
// returns
// an
// Array of usernames.
//
//     ```$xslt
// var myMac = {};
// myMac.users = [
//     {
//        username: "sophie",
//        id: 1
//     },
//     {
//         username: "vivian",
//         id: 2
//     },
//     {
//         username: "david",
//         id: 3
//     }
// ];
//
// findUsers(myMac.users) // returns ['sophie','vivian','david']
// ```
//
function findUsers(arr){
    var usernames = [];
    arr.forEach(function(element){
        usernames.push(element.username);
    });
    return usernames;
}




// - Write a function 'addRole' that accepts the array of objects, then adds the
// property 'role' to each object with a value of 'instructor.' The
// results should look like this:
//
// ```$xslt
// addRole("instructor");
//
// [
//     {
//        username: "sophie",
//        id: 1,
//        role: "instructor"
//     },
//     {
//         username: "vivian",
//         id: 2,
//         role: "instructor"
//     },
//     {
//         username: "david",
//         id: 3,
//         role: "instructor"
//     }
// ];
//
// ```
//
function addRole(arr){
    // var newArray = [];
    arr.forEach(function (element, i) {
        // newArray.push(role.instructor);
        element.role = "instructor";
    });
    return arr;
}


// - Write a function 'countLetters' that takes in a string and a character, and
// counts the number of instances of that character in the string.
//
function countLetters(str, x){
    var count = 0;
    var arr = str.split('');
    arr.forEach(function(element, i){
        if (element === x) {
            // console.log(count);
            count += 1;
        }
    })
    return count;
}


//     ```$xslt
// countLetters("banana", "a") // returns 3
// countLetters("Bob", "b") // returns 2
// countLetters("javascript", "x") // returns 0
// ```
//
// ####BONUS:
//
//     - Write a function 'countAll' that takes in an array of strings and returns an
// array with the count of a character for each string. You may be able to use
// your countLetters function here.
//
function countAll(arr, x){
    var newArray = [];
    // var count = 0;
    // test
    // var joinedArray = arr.join(',');
    // console.log(joinedArray);
    // var splitArray = joinedArray.split(',');
    // console.log(splitArray);
    arr.forEach(function (element) {
            newArray.push(countLetters(element,x));
        }

    );
    return newArray;
};


// ```$xslt
// countAll(["banana", "html", "java"], "a") // returns [3,0,2]
// countAll(["push", "your", "commits"], "u") // returns [1,1,0]
// ```
