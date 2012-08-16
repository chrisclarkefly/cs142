class User < ActiveRecord::Base
  attr_accessible :id, :first_name, :last_name, :login, :password, :password_confirmation
   has_many :comments
   has_many :photos
   has_many :tags
   validates :login, :first_name, :last_name,  :presence => true
   validates :login, :uniqueness=>true
   validates :password, :confirmation=>true
   validates :password_confirmation, :presence=>true

   def password
     @password
   end
  
   def password=(password)
      self.salt = rand 
      self.password_digest=Digest::SHA1.hexdigest(password)
      @password=password
   end

   def password_valid?(password)
     if password.nil?
        errors.add(:user, "password cannot be blank")
     elsif Digest::SHA1.hexdigest(password + self.salt.to_s())==self.password_digest
	   return true
     else
        errors.add(:user, "your password is not accurate") 
        return false
     end
   end
end
