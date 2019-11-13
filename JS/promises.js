"use strict";

$(document).ready(function(){

    // #1 Write a function named wait that accepts a number as a parameter, and returns a promise
    // that resolves after the passed number of milliseconds.

    function wait(num) {
        return new Promise((resolve, reject) => {
            if(!isNaN(num)) {
                setTimeout(() => {
                    resolve();
                }, num);
            }
        });
    }

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
    //COMPLETE WILL CONSOLE LOG MESSAGES

    // #2 Create a function that accepts a GitHub username, and returns a promise that resolves with
    //the date of the last commit that user made. Reference the github api documentation to achieve this.

    const lastCommit = (username) => {
        fetch('https://api.github.com/users/${username}/events/public', {headers: {'Authorization': 'token 75055838095003a7c1cb35ecf2078ebd6efac4d3'}})
            .then(response => response.json())
            .then(data => {
                let latestCommit = data.find(event => event.type === "PushEvent")
                    .then(event => event.created_at)
                    .then(date => console.log(date));
            });
    };
    console.log(lastCommit("JoshuaLPeters"));
});