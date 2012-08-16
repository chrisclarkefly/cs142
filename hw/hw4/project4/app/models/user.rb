class User < ActiveRecord::Base
  attr_accessible :id, :first_name, :last_name
   has_many :comments
   has_many :photos
end
