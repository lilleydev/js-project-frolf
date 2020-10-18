class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :avatar
  has_many :comments
end
