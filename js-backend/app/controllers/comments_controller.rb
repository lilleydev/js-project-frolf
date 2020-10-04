class CommentsController < ApplicationController
  def index
    @comments = Course.all
    render json: @comments
  end
end
