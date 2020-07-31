class User < ApplicationRecord
    has_many :poems, dependent: :destroy
    has_many :songs, through: :poems

    validates :name, presence: true, uniqueness: { case_sensitive: false }
    validates :password, presence: true
end
