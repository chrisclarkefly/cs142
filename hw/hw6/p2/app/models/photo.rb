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
end
