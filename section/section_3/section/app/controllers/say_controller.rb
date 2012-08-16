class SayController < ApplicationController
    def hello
        @times = params[:times] || 1
        @times = @times.to_i

        language = params[:language] || "english"

        @message = Translate.say_hello(language)
    end

    def goodbye

    end
end
