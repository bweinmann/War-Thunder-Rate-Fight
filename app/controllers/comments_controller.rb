class CommentsController < ApplicationController
  before_action :set_comment, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy]
  # if getting user comments is required: :get_user_comments

  # GET /comments
  def index
    @review = Review.find(params[:review_id])
    @comments = @review.comments

    render json: @comments, include: :user
  end

  def get_all_comments
    @comments = Comment.all
    render json: @comments
  end

  # def get_user_comments
  #   @user = User.find(params[user_id])
  #   render json: @user.comments
  # end

  # GET /comments/1
  def show
    render json: @comment, include: :user
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    @comment.review_id = params[:review_id]

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:description, :user_id, :review_id)
    end
end
