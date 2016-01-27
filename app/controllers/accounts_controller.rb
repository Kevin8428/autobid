class AccountsController < ApplicationController
  def index
    session[:user_id] = nil
    @user = Account.all
    render 'projects/home'
    # redirect_to '/register'
  end

  def api
    @user = Account.all
    render json: @user, status: :ok
  end

# get method for accounts - returns html form to create user
  def new
    @user = Account.new
  end

# this method sends data to views>accounts>show.html.erb
  def show
    @all = Account.all
    @user = Account.find(params[:id])
    @project = Project.all
  end

# post method for accounts
  def create
    @user = Account.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to @user
    else
      render 'new'
    end
  end

  private
  def user_params
    params.require(:account).permit(:email, :password, :password_confirmation, :username)
    # params.require(:account).permit(:email, :username, :password)
  end
end
