class CoursesController < ApplicationController
  def index
    @courses = Course.all
    render json: @courses, include: :comments
  end

  def create
    binding.pry
  end

  private

  def course_params
    params.require(:course).permit(:name, :city, :state)
  end
end
