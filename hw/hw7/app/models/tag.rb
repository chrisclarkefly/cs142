class Tag < ActiveRecord::Base
  attr_accessible :id, :photo_id, :user_id, :left_x, :top_y, :width, :height
  belongs_to :photo
  belongs_to :user
  validates :photo_id, :user_id, :left_x, :top_y, :width, :height, :presence => true
end
