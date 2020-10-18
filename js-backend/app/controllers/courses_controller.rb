class CoursesController < ApplicationController
  def index
    courses = Course.all
    render json: courses
  end

  def create
    course = Course.new(course_params)
    render json: course if course.save
  end

  def show
    course = Course.find_by(id: params[:id])
    render json: course
  end

  def destroy
    @course = Course.find_by(id: params[:id])
    @course.destroy
  end

  private

  def course_params
    params.require(:course).permit(:name, :city, :state, :courseImage)
  end
end
