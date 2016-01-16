class ProjectsController < ApplicationController
  before_action :authorize
  def index
    @test = Project.all
    # Ruby immediately looks for 'project' folder in views and if there's a view named 'index' it will automatically send @test to that view
  end

  def api
    @test = Project.all
    render json: @test, status: :ok

  end

  def home

  end

  def show
    @test = Project.find(params[:id])
  end


####### make new uses new and create
# this looks for 'new' view in project view folder
  def new
    @test = Project.new
  end

# this is the POST route
  def create
    @test = Project.new(project_params)
    if @test.save
      redirect_to account_path(session[:user_id])

    else
      render :create
    end
  end


####### edit uses edit and update
  def edit
    @test = Project.find(params[:id])
  end

  def update
    @test = Project.find(params[:id])
    if @test.update(project_params)
      redirect_to @test
    else
      render :edit
    end
  end

  def destroy
    @test = Project.find(params[:id])
    @test.destroy
    redirect_to account_path(session[:user_id])
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :account_id)
  end
  # 'require'(:project) is the @project from the _form
end
