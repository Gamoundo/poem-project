Rails.application.routes.draw do
  resources :poems
  resources :songs
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/temp", to: "application#temp"
  # namespace :api do
  #   namespace :v1 do
  #     post "/register", to: "users#register"
  #     post "/login", to: "users#login"
  #     post "/logout", to: "users#logout"
  #     get "/autologin", to: "users#autologin"
  #   end
  # end
end
