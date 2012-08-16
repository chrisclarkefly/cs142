
def filter(num_array, options=nil)
   min_number=-1/0.0 
   max_number=1/0.0
   odd_number=0
   even_number=0
   scale_number=1
   if not (options==nil) then
       if options.has_key?(:min) then min_number= options[:min] end 
       if options.has_key?(:max) then max_number=  options[:max] end 
       if options.has_key?(:odd) then odd_number=options[:odd] end 
       if options.has_key?(:even) then even_number=options[:even] end 
       if options.has_key?(:scale) then scale_number=options[:scale] end 
   end 

   for value in num_array do
       if value>min_number and value<max_number then
            if not((odd_number==1 and value.even?) or (even_number==1 and value.odd?)) then
                yield(scale_number*value) 
            end
       end
    end
end

nums= [6, -5, 319, 400, 18, 94, 11]
filter(nums, :min => 10, :max=>350, :odd=>1, :scale=>2) {|n| puts n}
puts "\n"
filter(nums, :max => 0) {|n| puts n}
puts "\n"
filter(nums) {|n| puts n}
