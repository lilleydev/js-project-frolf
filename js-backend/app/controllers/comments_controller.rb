class CommentsController < ApplicationController
  def index
    # binding.pry
    @comments = Comment.all
    render json: @comments
  end

  def create
    binding.pry
  end
end
