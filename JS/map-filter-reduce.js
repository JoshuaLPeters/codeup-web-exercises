const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// ----------------Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.--------------
const newUsers = [];
const userLanguages = users.filter(function(user){
    if(user.languages.length >= 3){
        newUsers.push(user);
    }
});
console.log(newUsers); //COMPLETE

//DAVID ANSWER WALKTHROUGH
let atLeastThree = users.filter((user)=>user.languages.length >=3);


// ----------------Use .map to create an array of strings where each element is a user's email address------------------
const newArrayOfStrings = [];
const arrayOfStrings = users.map(function(user){
    newArrayOfStrings.push(user.email);
    return newArrayOfStrings;
});
console.log(newArrayOfStrings); //COMPLETE
//DAVID ANSWER WALKTHROUGH
let emails = users.map(user => user.email);

// ------------Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYearsOfExperience = users.reduce(function(accumulation,currentValue){
    return accumulation + currentValue.yearsOfExperience;
},0);
console.log(totalYearsOfExperience); //WORKS! err mer gerd
function averageYearsOfExperience(){
    return totalYearsOfExperience / users.length;
}
console.log(averageYearsOfExperience()); //COMPLETE logs the average which is 7
//DAVID ANSWER WALKTHROUGH
let answerTotalYearsOfExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
let averageExp = totalYearsOfExperience / users.length;

// Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce(function (a, b) { return a.email.length > b.email.length ? a : b; });
console.log(longestEmail);
//DAVID ANSWERS WALKTHROUGH
// let longestEmail = emails.reduce((longest, email) => {
//     if(email.length > longest.length){
//         return email;
//     } else{
//         return longest;
//     }
// },"");



// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const usersSingleString = users.reduce(function(accumulation, currentValue){
    return `${accumulation}${currentValue.name}`
},"");
console.log(usersSingleString);//COMPLETE ryanluiszachfernandojustin
//DAVID ANSWER WALKTHROUGH

