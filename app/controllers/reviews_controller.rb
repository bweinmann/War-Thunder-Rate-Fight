class ReviewsController < ApplicationController
  before_action :set_review, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy, :get_user_reviews]

  # GET /reviews
  def index
    # @aircraft = Aircraft.find(params[:aircraft_id])
    # @reviews = @aircraft.reviews
    @reviews = Review.all

    render json: @reviews
  end

  def get_user_reviews
    @user = User.find(params[user_id])
    render json: @user.reviews
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    @review = Review.new(review_params)
    @review.user = @current_user
    @review.aircraft_id = params[:aircraft_id]

    if @review.save
      render json: @review, status: :created, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:title, :description, :score, :aircraft_id, :user_id)
    end
end
