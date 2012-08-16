class Post < ActiveRecord::Base
  attr_accessible :title, :body, :author
  has_many :comments
end
