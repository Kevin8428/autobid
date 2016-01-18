#= require_self
#= require_tree ./templates
#= require_tree ./models
#= require_tree ./views
#= require_tree ./routers

window.Autobid =
  Models: {}
  Collections: {}
  Routers: {}
  Views: {}
  init: -> alert 'backbone runs'


$(document).ready ->
  # Autobid.init()
