class Review < ApplicationRecord
  belongs_to :aircraft
  belongs_to :user
  has_many :comments
end
