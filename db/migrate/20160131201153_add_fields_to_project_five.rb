class AddFieldsToProjectFive < ActiveRecord::Migration
  def change
    add_column :projects, :basetwo, :text
    add_column :projects, :basethree, :text
  end
end
