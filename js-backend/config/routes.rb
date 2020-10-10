Rails.application.routes.draw do
  resources :comments, only: %i[index show create]
  resources :courses, only: %i[index create destroy] do
    resources :comments
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
