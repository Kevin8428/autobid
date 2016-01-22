var app = app || {};
app.blueprints = app.blueprints || {};
app.active = app.active || {};
////////////
//////////// SINGLE MODEL CONSTRUCTOR
// class constructor for each individual project
// SHOULD NEVER CALL INSTANCE OF THIS
app.blueprints.model = Backbone.Model.extend({
  initialize: function(){
    console.log('a model is ready')//when object of class is instantiated it's initialized here. Should see one message for every model in collection
  }
});

////////////
//////////// COLLECTION CONSTRUCTOR
// executed in evens triggers as window onload
// this defines a collection class
app.blueprints.collection = Backbone.Collection.extend({
  url: '/comments/api', //endpoint exposing collection of models to DB
  model: app.blueprints.model, //points to single model class to instantiate all data in the DB
  initialize: function(){ //run when new collection of class is instantiated
    console.log('commentscollection running');
    this.fetch(); //first fetch on initialize
    this.on('change', function(){ //event listener
      this.fetch(); //refetch when collection changes
    });

  }
});

////////////
//////////// CREATE FUNCTION
app.create = function(comment, a){
  if (!comment) {
    console.log('missing something!');
    return false
  }
  app.active.commentscollection.create({ //all is well, call create method to build new row
    description: comment,
    project_id: a
    // console.log('creating now!')
  });
  return true;

};


//////////
////////// COLLECTION VIEW CONSTRUCTOR
app.blueprints.collectionView = Backbone.View.extend({
  initialize: function() {
    this.$el = $('#project-id');
    this.render();
    var that = this;
    this.collection.on('sync', function(){
      that.render();
    });
  },
  render: function() {
    this.$el.html('');
    var models = this.collection.models;
    for (var m in models){
      var data = models[m];
      new app.blueprints.modelView({
        model: data
      });
    }
  }
});

////////////
//////////// SINGLE MODEL VIEW CONSTRUCTOR
app.blueprints.modelView = Backbone.View.extend({
  initialize: function(){
    this.$el = $('#project-id');
    this.template = _.template($('#table-row-template').html());
    this.render();
  },
  render: function(){
    var data = this.model.attributes;
    this.$el.append(this.template(data));
  }
});

///////////
/////////// EVENTS AND TRIGGERS

$(document).ready(function(){
  // console.log('jquery is working');
  app.active.commentscollection = new app.blueprints.collection();
  app.active.commentscollectionView = new app.blueprints.collectionView({
    collection: app.active.commentscollection
  });
  $('#comment-button').on('click', function(event){
    window.location.reload(); //REMOVE ONCE RENDER VIEW WORKS
    event.preventDefault();
    var comment = $('#comment-text').val();
    var project_id = $('#title-text').val()
    app.create(comment, project_id);
    console.log('passing text: ' + comment);
  });

});
