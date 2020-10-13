class CommentsController < ApplicationController
  def index
    # binding.pry
    if params['course_id']
      @course = Course.find(params['course_id'])
      @comments = Comment.all.where(course_id: params['course_id'])

      render json: @comments
    else
      @comments = Comment.all
      render json: @comments

      end
    end

  def create
    comment = Comment.create(comment_params)
    render json: comment
  end

  def show
    comment = Comment.find_by(id: params(:id))
    render json: comment
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :course_id)
  end
end
