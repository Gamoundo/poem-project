class UsersController < ApplicationController
    def index
        users= User.all
        render json: users
    end
    
    # skip_before_action :authorized, only: [:login, :register]
    def create
        user = User.create(name: params[:name], password: params[:password])
        
        render json: user
    end

    def login
        user = User.find_by(name: params[:name])

    
        if user && user[:password] === params[:password]
        
        session[:user_id] = user.id
        
        render json: user
        else
        # otherwise, they're not authenticated
        render json: { errors: "Invalid username or password" } 
        end
  
    end

    # def register
    #     user = User.create(username: params[:username], password: params[:password])
    
    #     if user.valid?
    #       # if the user is created successfully, set the user_id in the session cookie
    #       session[:user_id] = user.id
    #       render json: user, status: :created
    #     else
    #       # otherwise, let them try signing up again
    #       render json: { errors: user.errors.full_messages }, status: :bad_request
    #     end
    #   end
     
      def autologin
        render json: @current_user
      end

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    
end
