# Author: Anant Bhardwaj
# AJAX Based Filter
# 
# Created for CS142 Section
#
class StateController < ApplicationController
	def filter	
      @substr = params[:substring]
      @matchingstates = State.filter(@substr) 
      render :partial =>"filter"        
    end
    
    def index	
	end
end
