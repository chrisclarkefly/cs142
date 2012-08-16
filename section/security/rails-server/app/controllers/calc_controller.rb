# Author: Anant Bhardwaj
# A simple calculator
# 
# Created for CS142 Section
#

class CalcController < ApplicationController
	def add
	  begin
		@ans = (params[:num1].to_i + params[:num2].to_i).to_s 
      rescue
		@ans="something went wrong"
      end          
    end
    
    def sub
	  begin
		@ans = (params[:num1].to_i - params[:num2].to_i).to_s 
      rescue
		@ans="something went wrong"
      end          
    end
    
    def mul
	  begin
		@ans = (params[:num1].to_i * params[:num2].to_i).to_s 
      rescue
		@ans="something went wrong"
      end          
    end
    
    
end
