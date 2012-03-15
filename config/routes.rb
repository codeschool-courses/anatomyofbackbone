AnatomyOfBackbone::Application.routes.draw do
  resources :todos
  root to: 'home#index'
end
