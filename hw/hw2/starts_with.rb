def each_starts_with(array, str)
   for value in array do 
     if value.start_with?(str) then
         yield(value) 
     end
   end
end

each_starts_with(["abcd", "axyz", "able", "xyzab", "qrst"], "ab") {|s| puts s}
