class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :reply
      t.string :account_id
      t.string :project_id

      t.timestamps null: false
    end
  end
end
