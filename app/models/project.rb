class Project < ActiveRecord::Base
  # validates :title, presence: true

  belongs_to :account
end
# this file name must be singular and lower case!!
