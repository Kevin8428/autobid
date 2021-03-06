# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile += %w( application.css )
Rails.application.config.assets.precompile += %w( account.css )
Rails.application.config.assets.precompile += %w( accounts.css )
Rails.application.config.assets.precompile += %w( project.css )
Rails.application.config.assets.precompile += %w( jquery.bdt.js )
Rails.application.config.assets.precompile += %w( jquery.sortelements.js )
Rails.application.config.assets.precompile += %w( bootstrap-table.js )
Rails.application.config.assets.precompile += %w( bootstrap-table-filter.js )
Rails.application.config.assets.precompile += %w( bootstrap-table-filter-two.js )
Rails.application.config.assets.precompile += %w( bs-table.js )
# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
