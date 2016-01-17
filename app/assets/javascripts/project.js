var app = app || {};
app.blueprints = app.blueprints || {};
app.active = app.active || {};
////////////
//////////// SINGLE MODEL CONSTRUCTOR
// class constructor for each individual project
// SHOULD NEVER CALL INSTANCE OF THIS
app.blueprints.model = Backbone.Model.extend({
  urlRoot: '/comments/api',
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

// this the wrapper or container
// var CollectionView = Backbone.View.extend();
//SHOULD NEVER CALL INSTANCE OF SINGEL MODEL CONSTRUCTOR
// var newProject = new app.blueprints.model({ title: 'AAA-api-test-title', description: 'api-test-description', account_id: '100'});
// newProject.save()
// console.log(newProject.toJSON())


////////////
//////////// CREATE FUNCTION
app.create = function(comment){
  if (!comment) {
    console.log('missing something!');
    return false
  }
  app.active.commentscollection.create({ //all is well, call create method to build new row
    description: comment,
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

$(document).ready(function(){
  // console.log('jquery is working');
  app.active.commentscollection = new app.blueprints.collection();
  app.active.commentscollectionView = new app.blueprints.collectionView({
    collection: app.active.commentscollection
  });
  $('#comment-button').on('click', function(event){
    event.preventDefault();
    var comment = $('#comment-text').val();
    app.create(comment);
    console.log('passing text: ' + comment);
  });

});



///////////
/////////// EVENTS AND TRIGGERS



// ////////

// namespace
// var app = app || {};
// var active = active || {};
//
// app.Model = Backbone.Model.extend({
// });
//
// // define my 4 important parts!
// app.Collection = Backbone.Collection.extend({
//   model: app.Model, // what type of models will this collection hold?
//   url: '/projects/api',
//   initialize: function() {
//     var self = this;
//     this.on('change', function() {
//       console.log('Our Collection changed.');
//       var view = new app.CollectionView({
//         collection: self
//       });
//     });
//     this.on('sync', function() {
//       console.log('Our Collection synced with the API.');
//       var view = new app.CollectionView({
//         collection: self
//       });
//     });
//     // get data from the API
//     this.fetch();
//   }
// });
//
// // mongoDB support!
// Backbone.Model.idAttribute = "_id";
//
// // the document is ready
// $(document).ready(function(){
//   active.collection = new app.Collection();
//   active.createRecipeView = new app.addRecipeView({
//     collection: active.collection
//   });
// });
//
//
// ///////////////////////////////////////////////
// //              VIEWS BELOW HERE             //
// ///////////////////////////////////////////////
//
// app.addCommentView = Backbone.View.extend({
//   el: $('#add-comment'),
//   initialize: function() {
//     console.log('AddCommentView instantiated');
//     // this.$el.children('button').hide();
//   },
//   events: {
//     'click button': 'addComment',
//     'blur input': 'validateInput'
//   },
//   addComment: function() {
//     var confirmation = confirm('Are you sure you want to save this?');
//     if (confirmation) {
//       var data = {
//         comment: $('#comment-text').val()
//       }
//       console.log(data);
//       this.collection.create(data);
//     }
//   }
// });
//
// app.CollectionView = Backbone.View.extend({
//   el: $('#pancake-listing'),
//   initialize: function() {
//     console.log('CollectionView is a go.');
//     // when loaded, let us render immediately
//     this.$el.html('');
//     this.render();
//   },
//   render: function() {
//     console.log('CollectionView is rendering.');
//     this.$el.html('');
//     // we expect our CollectionView to be bound to a Collection
//     var models = this.collection.models;
//     for (var m in models) {
//       new app.ModelView({
//         model: models[m],
//         el: this.el
//       });
//     }
//   }
// });
// // this is done for each item in the collection
// app.ModelView = Backbone.View.extend({
//   initialize: function() {
//     console.log('ModelView instantiated and awaiting orders, sir');
//     this.render();
//   },
//   render: function() {
//     console.log('ModelView rendering.');
//     var data = this.model.attributes;
//     console.log('Grabbing template...');
//     var template = $('#recipe-template').html();
//     console.log('Transforming template...');
//     var compileTpl = _.template(template);
//     console.log('Creating HTML from template and model data...');
//     var html = compileTpl(data);
//     console.log('Rendering to page...');
//     this.$el.append(html);
//     // vanilla - this.el.innerHTML = this.el.innerHTML + html;
//   }
// });
