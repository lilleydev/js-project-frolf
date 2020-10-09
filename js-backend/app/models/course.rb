class Course < ApplicationRecord
  has_many :comments, dependent: :destroy
end
