/***
 * CS142 Javascript Section
 * Anant Bhardwaj
 * anantb@cs.stanford.edu
 */
 
function cs142_section(topic1, topic2) {
  var str = "This is " +  topic1 + " section."; 
  var print = function() { console.log(str); }
  str = "This is " +  topic2 + " section."; 
  return print;
}

// which value of str will be taken?
p = cs142_section("Javascript", "Events")();
