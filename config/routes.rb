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

  get '/user/user_id/reviews', to:"reviews#get_user_reviews"
  get '/user/user_id/comments', to:"comments#get_user_comments"

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

# Prefix Verb   URI Pattern                                   Controller#Action
# user_reviews GET    /users/:user_id/reviews(.:format)             reviews#index
#              POST   /users/:user_id/reviews(.:format)             reviews#create
#  user_review GET    /users/:user_id/reviews/:id(.:format)         reviews#show
#              PATCH  /users/:user_id/reviews/:id(.:format)         reviews#update
#              PUT    /users/:user_id/reviews/:id(.:format)         reviews#update
#              DELETE /users/:user_id/reviews/:id(.:format)         reviews#destroy
# user_comments GET    /users/:user_id/comments(.:format)            comments#index
#              POST   /users/:user_id/comments(.:format)            comments#create
# user_comment GET    /users/:user_id/comments/:id(.:format)        comments#show
#              PATCH  /users/:user_id/comments/:id(.:format)        comments#update
#              PUT    /users/:user_id/comments/:id(.:format)        comments#update
#              DELETE /users/:user_id/comments/:id(.:format)        comments#destroy
#        users GET    /users(.:format)                              users#index
#              POST   /users(.:format)                              users#create
#         user GET    /users/:id(.:format)                          users#show
#              PATCH  /users/:id(.:format)                          users#update
#              PUT    /users/:id(.:format)                          users#update
#              DELETE /users/:id(.:format)                          users#destroy
# aircraft_reviews GET    /aircrafts/:aircraft_id/reviews(.:format)     reviews#index
#              POST   /aircrafts/:aircraft_id/reviews(.:format)     reviews#create
# aircraft_review GET    /aircrafts/:aircraft_id/reviews/:id(.:format) reviews#show
#              PATCH  /aircrafts/:aircraft_id/reviews/:id(.:format) reviews#update
#              PUT    /aircrafts/:aircraft_id/reviews/:id(.:format) reviews#update
#              DELETE /aircrafts/:aircraft_id/reviews/:id(.:format) reviews#destroy
#    aircrafts GET    /aircrafts(.:format)                          aircrafts#index
#              POST   /aircrafts(.:format)                          aircrafts#create
#     aircraft GET    /aircrafts/:id(.:format)                      aircrafts#show
#              PATCH  /aircrafts/:id(.:format)                      aircrafts#update
#              PUT    /aircrafts/:id(.:format)                      aircrafts#update
#              DELETE /aircrafts/:id(.:format)                      aircrafts#destroy
# review_comments GET    /reviews/:review_id/comments(.:format)        comments#index
#              POST   /reviews/:review_id/comments(.:format)        comments#create
# review_comment GET    /reviews/:review_id/comments/:id(.:format)    comments#show
#              PATCH  /reviews/:review_id/comments/:id(.:format)    comments#update
#              PUT    /reviews/:review_id/comments/:id(.:format)    comments#update
#              DELETE /reviews/:review_id/comments/:id(.:format)    comments#destroy
#      reviews GET    /reviews(.:format)                            reviews#index
#              POST   /reviews(.:format)                            reviews#create
#       review GET    /reviews/:id(.:format)                        reviews#show
#              PATCH  /reviews/:id(.:format)                        reviews#update
#              PUT    /reviews/:id(.:format)                        reviews#update
#              DELETE /reviews/:id(.:format)                        reviews#destroy
#   auth_login POST   /auth/login(.:format)                         authentication#login
#  auth_verify GET    /auth/verify(.:format)                        authentication#verify