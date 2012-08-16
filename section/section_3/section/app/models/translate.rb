class Translate < ActiveRecord::Base
    def self.say_hello(language)
        if language == "english"
            return "Hello"
        elsif language == "spanish"
            return "Hola"
        else 
            return "Unknown language"
        end
    end
  # attr_accessible :title, :body
end
