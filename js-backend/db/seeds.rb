# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   Character.create(name: 'Luke', movie: movies.first)
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])

Course.create(name: 'Kit Carson', city: 'Escondido', state: 'CA')
Course.create(name: 'Red Mountain', city: 'Mesa', state: 'AZ')
Course.create(name: 'Brengle Terrance', city: 'Vista', state: 'CA')

Comment.create(content: 'mixed use park', course_id: 1)
Comment.create(content: '2 separate courses', course_id: 2)
Comment.create(content: 'bring water!!', course_id: 2)
