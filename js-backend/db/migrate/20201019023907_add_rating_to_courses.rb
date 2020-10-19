class AddRatingToCourses < ActiveRecord::Migration[6.0]
  def change
    add_column :courses, :rating, :integer
  end
end
