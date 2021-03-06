class AircraftsController < ApplicationController
  before_action :set_aircraft, only: %i[ show update destroy ]

  # GET /aircrafts
  def index
    @aircrafts = Aircraft.all

    render json: @aircrafts
  end

  # GET /aircrafts/1
  def show
    render json: @aircrafts, include: :reviews
  end

  def get_all_aircrafts
    @aircrafts = Aircraft.all
  end

  # POST /aircrafts
  def create
    @aircraft = Aircraft.new(aircraft_params)
    @aircraft.user = @current_user

    if @aircraft.save
      render json: @aircraft, status: :created, location: @aircraft
    else
      render json: @aircraft.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /aircrafts/1
  def update
    if @aircraft.update(aircraft_params)
      render json: @aircraft
    else
      render json: @aircraft.errors, status: :unprocessable_entity
    end
  end

  # DELETE /aircrafts/1
  def destroy
    @aircraft.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_aircraft
      @aircraft = Aircraft.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def aircraft_params
      params.require(:aircraft).permit(:name, :image_url, :slug)
    end
end
