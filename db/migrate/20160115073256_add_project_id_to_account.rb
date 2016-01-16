class AddProjectIdToAccount < ActiveRecord::Migration
  def change
    add_column :accounts, :project_id, :string
  end
end
