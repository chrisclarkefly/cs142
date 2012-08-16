/***
 * CS142 Javascript Section
 * Anant Bhardwaj
 * anantb@cs.stanford.edu
 */

function cs142_section() {
  var str = "This is Javascript section.";
  print_topic = 
			function() 
			{ 				
				console.log(str); 
			}
  set_topic = 
			function(topic) 
			{ 
				str = "This is "+ topic +" section.";				
			} 

}

// two global function variables -- one modifies the value of str
// does it affect the other? 

cs142_section();
print_topic();
set_topic("Events");
print_topic();
