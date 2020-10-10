class CommentsController < ApplicationController
  def index
    # binding.pry
    @comments = Comment.all
    render json: @comments
  end

  def create
    binding.pry
  end

  private

  def course_params
    params.require(:comment).permit(:content, :course_id)
  end
end
