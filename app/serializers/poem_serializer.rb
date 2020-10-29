class PoemSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :body
  has_one :user
  has_one :song
end
