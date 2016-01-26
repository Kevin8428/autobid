class AddFieldsToProject < ActiveRecord::Migration
  def change
    add_column :projects, :make, :string
    add_column :projects, :model, :string
    add_column :projects, :year, :string
  end
end
