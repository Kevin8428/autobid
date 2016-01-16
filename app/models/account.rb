class Account < ActiveRecord::Base
  # has_many :projects
  has_secure_password
  # validates :email, presence: true, uniqueness: true
  has_many :projects
end
