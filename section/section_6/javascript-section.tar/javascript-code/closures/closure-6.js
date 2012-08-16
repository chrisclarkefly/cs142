/***
 * CS142 Javascript Section
 * Anant Bhardwaj
 * anantb@cs.stanford.edu
 */
function new_section(section, section_ref) {  
  var latest_section = section;
  var sections = ["HTML", "CSS", "Ruby", "Rails"];
  var ref = section_ref;
  console.log("Sections covered so far: " + sections.toString() + ".New Section to be covered: " + latest_section + ". New Section Name: " + ref.sect_name);
  return function(new_section_name) {
      latest_section = new_section_name;
      sections.push(latest_section);
      console.log("Sections covered so far: " + sections.toString() + ". Latest Section: " + latest_section + ". Latest Section Name: " + ref.sect_name);
   }
}

//what is happening here!????

javascript_section = new_section("Section 6.1", {sect_name: 'Javascript Section'});
events_section = new_section("Section 6.2", {sect_name: 'Events Section'});

javascript_section("Javascript");
events_section("Events");
