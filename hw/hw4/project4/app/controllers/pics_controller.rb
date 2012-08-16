class PicsController < ApplicationController
   def users
     @users=User.find(:all)
   end
  
  def user
    $id = params[:id]
    @user = User.find($id)
    @photos=@user.photos
  end
end
