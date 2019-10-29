
// window.onload = function() {
//     alert( 'The page has finished loading!' );
// };


$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});

$('.nav-wrapper').css('background-color', '#6EA4B3');

$('.codeup').css('border','2px solid black');
$('.codeup').css('box-shadow','1px 2px 4px 1px');

$('li').css('font-size','20px');
$('li').css('text-align','center');
$('ul').css('list-style', 'none');

$('h1').css('font-size', '50px');
$('h3').css('font-size', '30px');
$('h5').css('font-size', '20px');
$('h1').css('text-align', 'center');
$('h3').css('text-align', 'center');
$('h5').css('text-align', 'center');



$('#about-game').css('font-style','italic');
$('p').css('font-size', '20px');
$('p').css('text-align', 'center');

$('h1, p, li').css('background-color', '');

// var headers = $('h1').html();
// alert(headers);
// $('*').css('background-color','lightblue');


// Exercises
// Continue working in jquery_exercises.html for these exercises. Make sure you are committing your changes to GitHub.
//
//     Id Selectors
//
// Create content in your HTML file using at least the following elements: h1, p, ul, li, div.
//
//     Add several attributes to your elements; you will need both id and class attributes.
//
// Use jQuery to select an element by the id. Alert the contents of the element.
//
//     Update the jQuery code to select and alert a different id.
//
//     Use the same id on 2 elements. How does this change the jQuery selection?
//
//     Remove the duplicate id. Each id should be unique on that page.
//
//     Class Selectors
//
// Remove your custom jQuery code from previous exercises.
//
//     Update your code so that at least 3 different elements have the same class named codeup.
//
//     Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
//
//     Remove the class from one of the elements. Refresh and test that the border has been removed.
//
//     Give another element an id of codeup. Does this element get a border now?
//
//     Element Selectors
//
// Remove your custom jQuery code from previous exercises.
//
//     Using jQuery, set the font-size of all li elements to 20px.
//
//     Craft selectors that highlight all the h1, p, and li elements.
//
//     Create a jQuery statement to alert the contents of your h1 element(s).
//
//     Multiple Selectors
//
// Combine your selectors that highlight all the h1, p, and li elements.