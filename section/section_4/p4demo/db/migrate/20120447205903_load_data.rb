class LoadData < ActiveRecord::Migration
  def up
      p1 = Post.create :title => "Post 1", :author => "Drew", :body => "This is a post."
      p2 = Post.create :title => "Post 2", :author => "John", :body => "This is another post."

      Comment.create :author => "Drew", :body => "John is too long-winded.", :post => p2
      Comment.create :author => "John", :body => "Drew's posts aren't long enough!", :post => p1
      Comment.create :author => "Drew", :body => "...", :post => p1
  end

  def down
  end
end
