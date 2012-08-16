/***
 * CS142 Javascript Section
 * Anant Bhardwaj
 * anantb@cs.stanford.edu
 */
 
function cs142_section(topic) {  
  var print = function() { console.log(str); }
  var str = "This is " +  topic + " section."; 
  return print;
}

// str is declared after, can print still access it?
cs142_section("Javascript")();
