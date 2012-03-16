# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Todo.find_or_initialize_by_description('Pick up milk').tap do |todo|
  todo.status = 'incomplete'
  todo.save!
end

Todo.find_or_initialize_by_description('Walk the dog').tap do |todo|
  todo.status = 'complete'
  todo.save!
end