/***
 * CS142 Javascript Section
 * Anant Bhardwaj
 * anantb@cs.stanford.edu
 */
 
// searching google with Javascript and DOM  

//first open google.com
window.location="http://www.google.com";


//I don't like white background, let's make it yellow;
document.body.style.backgroundColor="yellow";

//set the textbox value as 'CS 142'
document.getElementById("gbqfq").value="cs142"; 

//submit the form
document.getElementById("gbqf").submit();
