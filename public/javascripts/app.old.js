//acid safety blanket :)
var app = app || {};
var active = active || {};  //instantiated objects go here



app.Collection = Backbone.Collection.extend({
  initialize: function(){
    console.log('ze pancakes are taking over!!!!');
  },
  model: app.Model,
  url: '/api'
});

app.Collection = Backbone.View.extend({
  model: app.Model,
  initialize: function(){
    console.log
  }
});

app.Model = Backbone.Model.extend({
  idAttribute: '_id',
  initialize: function(){
    console.log('a model was dynamically generated!');
  },
  url: '/api'
});

app.ModelView = Backbone.View.extend({
  initialize: function(){
    console.log('A modelView was dynamically generated!!');
  },
  render: function(){
    // use our model's attrs
    var data = this.attributes;
    //get html from template
    var template = $('#recipe-template').html();
    //underscore transforms my template into a method
    //this method accepts data as an argument to render it
    var compileTpl = _.template(template);
    var html = compileTpl(data);
    console.log(html);
  }
});

$(document).ready(function(){
  console.log('BOOM GOES THE DYNAMITE.');

})
