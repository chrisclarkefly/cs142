class Comment < ActiveRecord::Base
  attr_accessible :id, :user_id, :date_time, :photo_id, :comment
    belongs_to :user
    belongs_to :photo
end
