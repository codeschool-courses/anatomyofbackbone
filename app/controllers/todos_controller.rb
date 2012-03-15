class TodosController < ApplicationController
  
  before_filter :load_todo, only: %w(show update destroy)
  respond_to :json

  def index
    @todos = Todo.all

    respond_with @todos
  end

  def show
    respond_with @todo
  end

  def update
    @todo.update_attributes params[:todo]

    respond_with @todo
  end

  def create
    @todo = Todo.create params[:todo]

    respond_with @todo
  end

  def destroy
    @todo.destroy

    respond_with @todo
  end

  private

  def load_todo
    @todo = Todo.find params[:id]
  end
end
