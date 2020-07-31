class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :url
end
