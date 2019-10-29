Rails.application.routes.draw do
  root 'app#landing_page'
  
  get 'hello_world', to: 'hello_world#index'
  post '/app_create', to: 'app#app_create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
