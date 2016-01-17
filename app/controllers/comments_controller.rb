class CommentsController < ApplicationController
  before_action :authorize
  skip_before_action :verify_authenticity_token
  def index
    @comment = Comment.all
  end

  def api
    @comment = Comment.all
    render json: @comment, status: :ok
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def new
    @comment = Comment.new
  end

  # def create
  #   @comment = Comment.new(comment_params)
  #   render 'new'
  # end

  def update
  end

  def destroy
  end

  def show
  end

  def edit
  end

  private
  def comment_params
    params.require(:account).permit(:email, :password, :password_confirmation, :username)
    # params.require(:account).permit(:email, :username, :password)
  end

end
