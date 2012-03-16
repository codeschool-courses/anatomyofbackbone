source 'https://rubygems.org'

gem 'rails', '3.2.2'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'
gem 'backbone-rails', git: 'https://github.com/rubymaverick/backbone-rails.git'

group :development, :test do
  gem 'sqlite3'
end

# Heroku uses postgres 
group :production do
  gem 'pg'
end