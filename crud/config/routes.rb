Rails.application.routes.draw do
  get "/users" => "users#index"
  post "/user" => "users#create"
  put "/user/:id" => "users#update"
  delete "/user/:id" => "users#destroy"
end