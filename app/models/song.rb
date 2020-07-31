class Song < ApplicationRecord
    has_many :poems, dependent: :destroy
    has_many :users, through: :poems
end
