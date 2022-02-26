Rails.application.routes.draw do

  resources :users do
    resources :reviews
    resources :comments
  end

  resources :aircrafts do
    resources :reviews
  end

  resources :reviews do
    resources :comments 
  end

  # get '/user/user_id/reviews', to:"reviews#get_user_reviews"
  # get '/user/user_id/comments', to:"comments#get_user_comments"

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
