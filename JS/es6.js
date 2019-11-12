/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    },
    {
        name: 'joshua',
        email: 'peters.l.joshua@gmail.com',
        languages: ['html','css','javascript']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'joshua';
const email = 'peters.l.joshua@gmail.com';
const languages = ['html','css','javascript'];

// TODO: rewrite the object literal using object property shorthand
users.push({
    name,
    email,
    languages
});

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
// users.forEach(function(a) => {
//     return emails.push(a.email);
// });
users.forEach(function(user) {
    return emails.push(user.email);
});
users.forEach(a => emails.push(a.email));


for (const user of users) {
    names.push(user.name);
}
users.forEach(a => names.push(a.name));

// LECTURE EXAMPLES
// // TO DO TOGETHER: refactor this into an arrow function. Be as concise as
// // possible.
//
// function add(a,b){
//     return a + b;
// };
//
// const add = (a,b) => {
//     return a + b;
// };  // these two are essentially the same
// const add = (a,b) => a + b;

// function square(x){
//     return x * x;
// }
//
// const square = (x) => {
//     return x * x;
// }; // same thing; one variable can remove parens; one line can remove brackets
// const square = x => x*x;
// for(let element of instructors){
//     if(element === 'Sophie' || element === 'David'){
//         console.log(element);
//     }
// }
//
//
// for(let element of instructors){
//     console.log(instructors);
// }

// const myArray = [1,2,3,4,5,6,7,8];
//
// function evenNumbers(arr){
//     let newArray = [];
//     for(let number of numbers){
//         if(number % 2 === 0){
//             newArray.push(number);
//         }
//     }
// }


// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;
    const {name, email, languages} = user;
    

    // TODO: rewrite the assignment below to use template strings
//     developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
// });
    developers.push(`${name}'s email is ${email}${name} knows ${languages}`);

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
for(let developer of developers){
    // TODO: rewrite the assignment below to use template strings
    // list += '<li>' + developer + '</li>';
    list += `<li>${developer}</li>`;
}
list += '</ul>';