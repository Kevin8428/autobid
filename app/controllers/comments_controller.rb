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

  def create
    puts params.inspect
    # puts '---project'

    @comment = Comment.new({"reply"=>params[:reply], "project_id"=>params[:project_id], 'account_id' => session[:user_id], "username"=>params[:project_username]})

    if @comment.save
      redirect_to account_path(session[:user_id])
    else
      render :index
    end
  end

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
    params.require(:description).permit(:description, :comment, :username, :project_id, :user_id, :project_username)
    # params.require(:account).permit(:email, :username, :password)
  end

end
