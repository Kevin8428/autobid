class AccountsController < ApplicationController
  def index
    @user = Account.all
  end

  def new
    @user = Account.new
  end

# this method sends data to views>accounts>show.html.erb
  def show
    @all = Account.all
    @user = Account.find(params[:id])
    @project = Project.all
  end

  def create
    @user = Account.new(user_params)
    if @user.save
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
