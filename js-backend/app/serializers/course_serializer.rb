class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :avatar, :rating
  has_many :comments
end
