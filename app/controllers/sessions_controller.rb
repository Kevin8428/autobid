class SessionsController < ApplicationController
  def home

  end
  def new
  end

  def create
    @user = Account.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      # redirect_to '/accounts'#this line redirects from log in to the home route; ie accounts>index.html.erb

      redirect_to account_path(@user.id)
      # <%= link_to 'show', account_path(x.id)%>

    else
      render 'new'
    end

  end

  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end

end
