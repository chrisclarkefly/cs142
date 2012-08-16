class Comment < ActiveRecord::Base
  attr_accessible :author, :body, :post
    belongs_to :post
end
