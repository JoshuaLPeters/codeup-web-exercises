"use strict";
// 1. Write a function named `isNegative` that accepts a number and returns `true` or `false` based on whether the input is negative.
//
// isNegative(-1) // true
// isNegative(-5) // true
// isNegative(0) // false
// isNegative(6) // false
//
function isNegative(x){
    if (typeof x === 'number' && x < 0){
        return true;
    } else{
        return false;
    }
}


// 2. Write a function named `isTen` that accepts a number and returns a boolean
// that indicates whether or not that number is equal to `10`.
//
//     ```js
//     isTen(1) // false
//     isTen(10) // true
//     isTen('10') // false
//     ```
//
function isTen(num){
    if(typeof num === 'number' && num === 10){
        return true;
    }else{
        return false;
    }
}

// 3. Write a function named `double` that accepts a number and returns the number
// doubled.
//
//     ```js
//     double(5) // 10
//     double(20) // 40
//     ```
//
function double(x){
    if(typeof x === 'number'){
        return x * 2;
    } else{
        return false;
    }
}

// 4. Write a function named `remove9s` that accepts an array of numbers and
// returns an array with all the same numbers except for `9`.
//
//                                                           ```js
//     remove9s([7, 8, 9, 10]) // [7, 8, 10]
//     remove9s([1, 2, 3])     // [1, 2, 3]
//     remove9s([9, 9, 9])     // []
//     ```
function remove9s(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 9) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

// function remove9s(arr){
//     var newArr = [];
//     arr.forEach(function(element, i){
//         if(element === 9){
//             newArr.push(element);
//         }
//     });
//     return arr;
// }


//     5. Write a function named `average` that accepts an array of numbers and returns
// the average of those numbers.
//
// average([1, 2, 3]) // 2
// average([4, 6, 8, 10, 12]) // 8
// average([1, 2]) // 1.5
//
function sumAll(arr){
    return arr.reduce(function(a,b){
        return a + b;
    }, 0);
}


function average(array){
    var sum = sumAll(array);
    return sum/array.length;
}

// 6. Write a function named `countOdds` that accepts an array of numbers and
// returns the number of odd numbers in the array.
//
// countOdds([1, 2, 3]) // 2
// countOdds([4, 6, 8, 10]) // 0
// countOdds([1, 2, 1, 1]) // 3
//
function countOdds(arr){
    var count = 0;
    arr.forEach(function(element, i){
        if(element % 2 !== 0){
            count += 1;
        }
    })
    return count;
}


// 7. Write a function named `convertNameToObject` that accepts a string that
// contains a first name and last name separated by a space character, and returns an
// object with properties `firstName` and `lastName`.
//
// convertNameToObject('Harry Potter') // {firstName: 'Harry', lastName: 'Potter'}
// convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}
//
//


// function convertNameToObject(str){
//     var obj = {};
//     var newArr = str.split(' ');
//     newArr.forEach(function(element, i){
//         element.firstName = element;
//         element.lastName = element;
//     })
//     return newArr;
// }

function convertNameToObject(str){
    var newArr = str.split(' ');
    var obj = {
        firstName: newArr[0],
        lastName: newArr[1]
    };
    return obj;
}

// great example on how to create an object and then push this object to an array

// function createBook(title, first, last){
//     var book = {};
//     book.title = title;
//     book.author = {
//         firstName: first,
//         lastName: last
//     };
//     return book;
// }
// books.push(createBook("Cat's Craddle", "Kirt", "V"));
// console.log(books);


// function addRole(arr){
//     // var newArray = [];
//     arr.forEach(function (element, i) {
//         // newArray.push(role.instructor);
//         element.role = "instructor";
//     });
//     return arr;
// }

// 8. Write a function named `capitalizeName` that accepts a string that is a first
// and last name separated by a space, and returns a string that that has the
// first and last names capitalized.
//
// *For this problem, you may assume that the function will only ever be called
// with a string that has two words separated by a single space.*
//
// ```js
//     capitalizeName('ron weasley') // "Ron Weasley"
//     ```
//
function capitalizeName(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// function capitalizeName(str){
//     var newArr = str.split(' ');
//     var upperCase = newArr
// }

// 9. Write a function named `capitalizeAllNames` that accepts an array of strings
// where each string is in the format described in the previous problem, and
// returns an array of strings where each string contains a capitalized named.
//
//     ```js
//     capitalizeAllNames(['ron weasley', 'harry potter', 'hermione granger'])
//     // ['Ron Weasley', 'Harry Potter', 'Hermione Granger']
//     ```
//
function capitalizeAllNames(str){
    var arr = [];
    str.forEach(function(element, i){
        arr.push(capitalizeName(element));
    });
    return arr;
}


// 10. Write a function named `countVowels` that accepts a string and returns the
// number of vowels in that string. (Don't worry about or count "y" as a vowel)
//
//     ```js
//     countVowels('Hello, Codeup!') // 5
//     ```
//
function countVowels(str){
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
}

// 11. Write a function named `averageSales` that accepts an array of objects where
// each object represents a person, and has a `sales` property. The function
// should return the average of every object's `sales` property.
//
//     ```js
//     averageSales([
//         {name: 'Jim Halpert', sales: 100},
//         {name: 'Dwight Schrute', sales: 50},
//         {name: 'Andy Bernard', sales: 150},
//     ])
//     // 100
//     ```
//
function averageSales(array){
    var a = 0
    for (var i = 0; i < array.length; ++i){
        a = a + array[i].sales;
    }
    return a / array.length;
}

// 12. Write a function named `analyzeWord`. It should take in a string and return
// an object with information about the input word. The object returned should
// have the following properties:
//
//     - `word`: the original word that was passed into the function
// - `numberOfLetters`: the number of letters in the word
// - `numberOfVowels`: the number of vowels in the word
//
//     ```js
//     analyzeWord('codeup')
//     // { word: 'codeup', numberOfLetters: 6, numberOfVowels: 3 }
//     ```
//
function analyzeWord(str){
    var obj = {
        word: str,
        numberOfLetters: str.length,
        numberOfVowels: countVowels(str)
    }
    return obj;
}

// function analyzeWord(str){
//     var arr = str.split('');
//     var obj = {};
//         obj.numberOfLetters = countAll(arr);
//         obj.numberOfVowels = countVowels(str);
//         obj.word = str;
//     return obj;
// }

// var element = {}, cart = [];
// element.id = id;
// element.quantity = quantity;
// cart.push(element);
// If you want cart to be an array of objects in the form { element: { id: 10, quantity: 1} } then perform:
//
//     var element = {}, cart = [];
// element.id = id;
// element.quantity = quantity;
// cart.push({element: element});

// 13. Write a function named `analyzeAllWords`. It should take in an array of
// strings, and return an array where each element contains an object with the
//     same analysis of the word as described in the previous problem.

// ```js
// analyzeAllWords(['html', 'css', 'javascript'])
// /**
// * [
// *   {word: 'html', numberOfLetters: 4, numberOfVowels: 0},
// *   {word: 'css', numberOfLetters: 3, numberOfVowels: 0},
// *   {word: 'javascript', numberOfLetters: 10, numberOfVowels: 3}
// * ]
// */
function analyzeAllWords(arr){
    var newArr = [];
    arr.forEach(function(element, i){
        newArr.push(analyzeWord(element));
    })
    return newArr;
}

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// function sumOfNumbers(arr){
//     return arr.reduce(function(a,b){
//         return a + b
//     }, 0);
// }
//
// //     ```$xslt
// // sumOfNumbers([1,2,3,4,5]) // 15
// // sumOfNumbers([-1, 15]) // 14
// // ```
// //
// // - Write a function 'evensIndex' that takes in an array of numbers and returns
// // an array containing the index values of all even numbers.
// //
// function evensIndex(arr){
//     var newArr = [];
//     arr.forEach(function(element, index){
//         if(element % 2 === 0){
//             newArr.push(index);
//         }
//     })
//     return newArr;
// }
//
//
//
// //     ```$xslt
// // evensIndex([1,2,3,4,5,6]) // returns [1,3,5]
// // evensIndex([3,7,11,12]) // returns [3]
// // evensIndex([5,5,7,13]) // returns []
// // ```
// //
// // - Write a function 'stringToArray' that takes in a comma separated list and
// // returns it as an array.
//
// function stringToArray(str){
//     var arr = str.split(',');
//     return arr;
// }
//
//
// //
// //     ```$xslt
// // stringToArray("red,orange,yellow,green,blue") // returns ['red','orange',
// // 'yellow','green','blue']
// //
// // stringToArray("1,2,3") // returns ['1','2','3']
// // stringToArray("dog") // returns ['dog']
// // ```
// //
// // - Given the following array of objects, write a function 'findUsers' that
// // returns
// // an
// // Array of usernames.
// //
// //     ```$xslt
// // var myMac = {};
// // myMac.users = [
// //     {
// //        username: "sophie",
// //        id: 1
// //     },
// //     {
// //         username: "vivian",
// //         id: 2
// //     },
// //     {
// //         username: "david",
// //         id: 3
// //     }
// // ];
// //
// // findUsers(myMac.users) // returns ['sophie','vivian','david']
// // ```
// //
// function findUsers(arr){
//     var usernames = [];
//     arr.forEach(function(element){
//         usernames.push(element.username);
//     });
//     return usernames;
// }
//
//
//
//
// // - Write a function 'addRole' that accepts the array of objects, then adds the
// // property 'role' to each object with a value of 'instructor.' The
// // results should look like this:
// //
// // ```$xslt
// // addRole("instructor");
// //
// // [
// //     {
// //        username: "sophie",
// //        id: 1,
// //        role: "instructor"
// //     },
// //     {
// //         username: "vivian",
// //         id: 2,
// //         role: "instructor"
// //     },
// //     {
// //         username: "david",
// //         id: 3,
// //         role: "instructor"
// //     }
// // ];
// //
// // ```
// //
// function addRole(arr){
//     // var newArray = [];
//     arr.forEach(function (element, i) {
//         // newArray.push(role.instructor);
//         element.role = "instructor";
//     });
//     return arr;
// }
//
//
// // - Write a function 'countLetters' that takes in a string and a character, and
// // counts the number of instances of that character in the string.
// //
// function countLetters(str, x){
//     var count = 0;
//     var arr = str.split('');
//     arr.forEach(function(element, i){
//         if (element === x) {
//             // console.log(count);
//             count += 1;
//         }
//     })
//     return count;
// }
//
//
// //     ```$xslt
// // countLetters("banana", "a") // returns 3
// // countLetters("Bob", "b") // returns 2
// // countLetters("javascript", "x") // returns 0
// // ```
// //
// // ####BONUS:
// //
// //     - Write a function 'countAll' that takes in an array of strings and returns an
// // array with the count of a character for each string. You may be able to use
// // your countLetters function here.
// //
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
//
//
// // ```$xslt
// // countAll(["banana", "html", "java"], "a") // returns [3,0,2]
// // countAll(["push", "your", "commits"], "u") // returns [1,1,0]
// // ```