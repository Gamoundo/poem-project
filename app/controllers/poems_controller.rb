class PoemsController < ApplicationController
    def index
        poems= Poem.all
        render json: poems
    end

    def create
        song= Song.find_by(name: params[:song] )
        user= User.find_by(name: params[:user] )
        poem = Poem.new(name: params[:name], genre: params[:genre], body: params[:body], user: user, song: song )
        poem.save
        render json: poem
    end

    def show
        poem = Poem.find_by(id: params[:id])
        render json: poem
    end

    private

    # def poem_params
        
    #     params.permit(:name, :genre, :body, :user, :song)
    # end
end
