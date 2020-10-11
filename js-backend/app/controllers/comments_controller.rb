class CommentsController < ApplicationController
  def index
    # binding.pry
    @comments = Comment.all
    render json: @comments
  end

  def create
    # binding.pry
    comment = Comment.create(comment_params)
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :course_id)
  end
end
