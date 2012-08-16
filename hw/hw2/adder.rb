class Adder
  def initialize (int)
    @i=int
  end

  def method_missing(m, *args)
      if (m.to_s.rindex(/plus\d+/)!=nil) then
         name = "plus" + m.to_s[/(?>\d+)/]
         Adder.class_eval %Q{   
           def #{name}; 
              num= #{name}[/(?>\d+)/]
              return eval("@i + num") 
            end
         }
         plusnum
      else
        super
      end
  end
end
