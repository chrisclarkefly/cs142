class AddLoginToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :login, :string
    User.all.each do |u|
       u.update_attribute :login, u.last_name.downcase
    end
  end

  def self.down
    remove_column :users, :login
  end
end
