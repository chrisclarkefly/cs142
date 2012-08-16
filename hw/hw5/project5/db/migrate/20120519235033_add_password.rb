class AddPassword < ActiveRecord::Migration
  def self.up
     add_column :users, :password_digest, :string
     add_column :users, :salt, :integer
  end

  def self.down
    remove_column :users, :password_digest
    remove_column :users, :salt
  end
end
