class CreatePoems < ActiveRecord::Migration[6.0]
  def change
    create_table :poems do |t|
      t.string :name
      t.string :genre
      t.text :body
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :song, null: false, foreign_key: true

      t.timestamps
    end
  end
end
