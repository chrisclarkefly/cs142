/***
 * CS142 Javascript Section
 * Anant Bhardwaj
 * anantb@cs.stanford.edu
 */
 
function cs142_section(new_topics) {  
  var print_funcs = [];
  for( var i = 0; i< new_topics.length; i++){
	  print_funcs.push(function () { console.log("This is " + new_topics[i] + "(" + i + ") section.") })
  }
  return print_funcs;
}

// look at one variable (used inside cs142_section) carefully.
f = cs142_section(["HTML", "CSS", "Ruby", "Javascript", "Events"]);
for( var j = 0; j< f.length; j++){
	  f[j]();
}
