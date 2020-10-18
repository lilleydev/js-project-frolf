class Course < ApplicationRecord
  has_many :comments, dependent: :delete_all
  has_one_attached :avatar
end
