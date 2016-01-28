class AddFieldsToProjectThree < ActiveRecord::Migration
  def change
    add_column :projects, :base, :text
  end
end
