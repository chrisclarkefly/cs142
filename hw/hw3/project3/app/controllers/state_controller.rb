class StateController < ApplicationController
  def filter
    substring = params[:substring]
    if substring != nil 
	@states = State.filter(substring) 
    else 
        @states = []
    end
  end

end
