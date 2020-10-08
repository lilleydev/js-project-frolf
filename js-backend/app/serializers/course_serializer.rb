class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state
  has_many :comments
end
