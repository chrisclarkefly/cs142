/***
 * CS142 Javascript Section
 * Anant Bhardwaj
 * anantb@cs.stanford.edu
 */
 
function cs142_section(topic) {
  var str = "This is " +  topic + " section."; 
  var print = function() { console.log(str); }
  return print;
}


p = cs142_section("Javascript");
console.log(p.toString());
// does p still have access to str?
p();
