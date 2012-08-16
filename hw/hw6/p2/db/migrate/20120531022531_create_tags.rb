class CreateTags < ActiveRecord::Migration
  def self.up
    create_table :tags do |t|
      t.integer  :id 
      t.integer  :photo_id
      t.integer :user_id
      t.integer :left_x
      t.integer  :top_y
      t.integer :width
      t.integer :height
      t.integer :timestamps
    end
  end

  def self.down
    drop_table :tags
  end
end
