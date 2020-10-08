class CoursesController < ApplicationController
  def index
    @courses = Course.all
    render json: @courses
  end

  def create
    # binding.pry
    @course = Course.new(course_params)
    render json: :course if @course.save
  end

  def destroy
    @course = Course.find_by(id: params[:id])
    # binding.pry
    @course.destroy
  end

  private

  def course_params
    params.require(:course).permit(:name, :city, :state)
  end
end
