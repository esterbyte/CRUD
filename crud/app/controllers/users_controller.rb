class UsersController < ApplicationController
  #  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def index
    @users = User.all
    render json: @users
  end

  def create
    user = User.new(user_params)
    user.save()
    render json: user
  end

  def update
    user = User.find(params[:id])
    user[:name] = params[:name]
    user[:email] = params[:email]
    user.save()

  end

  def destroy
    @user.destroy
    redirect_to users_path, notice: 'Usuário excluído com sucesso.'
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
