class UserController < ApplicationController
  def login
  end

  def post_login 
    @user = User.find_by_login(params[:user][:login])
    if !@user.nil? then 
        if @user.password_valid?(params[:user][:password]) 
	  session["name"] = @user.first_name 
	  session["id"]   = @user.id
	  redirect_to :controller => 'pics', :action =>'user', :id=> @user.id.to_s()  
        else
	   render :action => :edit
        end
         
    else 
       flash[:message]="Please enter valid user name and password"
       render :action => :edit
     end
  end

  def logout
    redirect_to :action => :login, :message => "You have been logged out"
    reset_session
  end

  def register
  end 
  
  def post_register
     @user = User.create(:first_name=>params[:user][:first_name], :last_name=>params[:user][:last_name], :login=>params[:user][:login], :password=>params[:user][:password], :password_confirmation=>params[:user][:password_confirmation])
     if @user.valid?
         @user.save
         session["name"]= @user.first_name
         session["id"]=    @user.id 
	  redirect_to :controller => 'pics', :action =>'user', :id=> @user.id.to_s()  
     else 
         render :action=>:edit_registration
     end
  end

end
