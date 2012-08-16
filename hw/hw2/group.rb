require 'set'
module Enumerable
      def each_group_by_first_letter
	  s1=Set.new 
	  sorted_words=self.sort  
	  index = 0  
	  size=self.size
	  for value in sorted_words do 
	      i=0
	      returned_words=[]
	      if s1.add?(value[0])
		 i+=1
		 for other_value in sorted_words[index+1..size-1] do
		    if value[0].eql?(other_value[0]) then 
		       returned_words[i]= other_value 
		       i+=1
		     end
		  end
	          yield(value[0], returned_words)
	       end
	   end
       end
end
