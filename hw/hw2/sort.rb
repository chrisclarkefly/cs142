def funny_sort(input)
  input.sort do |a, b|
        #Regex to find first occurence of numbers in string
        a_number= a[/(?>\d+)/]
        b_number= b[/(?>\d+)/]

        if a_number==nil then a_number = -1 end
        if b_number==nil then b_number = -1 end

        Integer(a_number) <=> Integer(b_number) 
  end
end

puts funny_sort(["-100x500","abc99.6", "I don't have numbers", "no numbers", "efh88yes"])
puts "\n"
puts funny_sort(["0iehl","25abc99.6", "numbers", "ee-5bers", "efh88yes"])
