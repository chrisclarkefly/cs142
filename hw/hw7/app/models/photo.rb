class Photo < ActiveRecord::Base
  attr_accessible :id, :user_id, :date_time, :file_name
  belongs_to :user
  has_many   :comments
  has_many   :tags
  validates  :user_id, :date_time, :file_name, :presence => true

  def validate
    if file_name.empty?   
      errors.add(:photo, "please upload a photo")
    end
  end

  def self.filter(word)
    word = word.to_str().downcase
    @@matchingPhotos = Array.new
    if (word==nil)
       return
    end
    
    for photo in Photo.find(:all) 
          broken=0
          for tag in photo.tags
              user= User.find(tag.user_id)
              if user.first_name.downcase.include?(word) || user.last_name.downcase.include?(word)
                  @@matchingPhotos << photo 
                  broken=1
                  break
              end
          end

          if broken==1
          	  for comment in photo.comments.find(:all)
		     if comment.comment.downcase.include?(word)
                          @@matchingPhotos << photo 
			  break
		     end
		  end
          end 

     end
     return @@matchingPhotos
   end
end
