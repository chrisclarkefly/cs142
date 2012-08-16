class PostController < ApplicationController
    def index
        @posts = Post.find(:all)
    end

    def view
        id = params[:id]

        if ! id.nil?
            @post = Post.find(id)
        end
    end
end
