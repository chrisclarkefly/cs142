class PicsController < ApplicationController
   def users
     @users=User.find(:all)
   end
  
  def user
    $id = params[:id]
    @user = User.find($id)
    @photos=@user.photos
  end
 
  def comment
       @id = params[:id]
       @photo = Photo.find(@id)
       session["photo_id"] = @id 
  end

  def post_comment
     @id    = session["photo_id"]
     @photo = Photo.find(@id)
     @comment = Comment.create(:comment=>params[:comment][:comment],:photo_id =>@id, :user_id=> session[:id], :date_time=>DateTime.now)
     if @comment.valid?
        @comment.save
        flash[:message]="Your comment has been saved" 
        redirect_to :action=> :user, :id=>session["id"].to_s
     else 
	render :action => :edit 
     end
  end

  def photo 
  end

  def post_photo
     if !params[:photo].nil?
       if Photo.create(:file_name=>params[:photo][:photo].original_filename, :user_id=> session[:id], :date_time=>DateTime.now).valid?
     #Save photo 
   name = params[:photo][:photo].original_filename
   directory= "public/images" 
   path = File.join(directory, name)
   File.open(path, "wb") { |f| f.write(params[:photo][:photo].read)}
     
	 flash[:message]="Your photo has been uploaded"
	 redirect_to :action=> :user, :id=>session["id"].to_s
     end
     else 
	 flash[:message]="Please select a file to upload"
	render :action => :edit_photo 
     end
 end
end
