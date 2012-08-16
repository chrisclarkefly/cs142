class State < ActiveRecord::Base
  # attr_accessible :title, :body
  @@states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
	
    def self.filter(word) 
	  @@matchingstates = Array.new
	  if(word == nil)
		return @@states
	  end
	  @@states.each do |item|
        if(item.to_str().downcase.include?(word.to_str().downcase))
            @@matchingstates << item
        end
      end
      return @@matchingstates
    end
end
