var app = app || {};
var active = active || {};

//define 4 important parts
//app . model
app.Model = Backbone.Model.extend({

});
//app . Collection
app.Collection = Backbone.Collection.extend({
  model: app.Model, //type of models this collection holds
  url: '/api',
  initialize: function(){
    var self = this;
    this.on('change', function(){
      console.log('our collection has changed')
      var view = new app.CollectionView({
        collection: self
      });
    });
    this.on('sync', function(){
      console.log('Our collection synced with the API');
      var view = new app.CollectionView({
        collection: self
      });
    })
    //get data from API
    this.fetch();
  }
});

Backbone.model.idAttribute = '_id';

//collection view
app.CollectionView = Backbone.View.extend({
  el: $('#pancake-listing'),
  initialize: function(){
    console.log('Collection view is going');
    this.render();
  },
  render: function(){
    console.log('collection view rendering');
    //expecting collectionview to be bound to collection
    var models = this.collection.models;
    for( var m in models){
      new app.ModelView({
        model: models[m], 
        el: this.el
      });
    }
  }
});
//ModelView
app.ModelView = Backbone.View.extend({
  initialize: function(){
    console.log('ModelView instantiated and awaiting orders, sir');
    this.render();
  },
  render: function(){
    console.log('modelview rendering.');
    var data = this.model.attributes;
    console.log('grabbing template')
    var template = $('#recipe-template').html();
    console.log('transforming template')
    var compileTpl = _.template(template);
    console.log('creating HTML from template and model data..');
    var html = compileTpl(data)
    console.log('rend rend to page');
    this.$el.append(html);
  }
});


$(document).ready(function(){
  active.collection = new app.Collection
})
