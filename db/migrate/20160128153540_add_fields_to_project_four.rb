class AddFieldsToProjectFour < ActiveRecord::Migration
  def change
    add_column :projects, :username, :text
  end
end
