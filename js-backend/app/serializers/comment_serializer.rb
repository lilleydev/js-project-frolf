class CommentSerializer < ActiveModel::Serializer
  attributes :course_id, :content
  # has_one :course
end
