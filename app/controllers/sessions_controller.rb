class SessionsController < ApplicationController
  def new
  end

  def create
    @user = Account.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to '/accounts'#this line redirects from log in to the home route; ie accounts>index.html.erb

    else
      render 'new'
    end

  end

  def destroy
    session[:user_id] = nil
    redirect_to '/login'
  end

end
