'use strict';


// MODELS

var ToDoItem = Backbone.Model.extend({
	defaults: {
		task: ''
	}
}); 


// COLLECTIONS

var ToDoList = Backbone.Collection.extend({
	model: ToDoItem,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/DFW'
});


// VIEWS

var BaseView = Backbone.View.extend({
  	render: function(){
    	$('.container').append(this.el);
  	}
});

var ToDoListView = BaseView.extend({		/*SOME TUTORIALS WRITE NEW HERE*/
	initialize: function() {
		this.toDoList = new ToDoList();
		this.toDoList.on('add', this.renderToDoItem, this);
    	this.render();
	},

	render: function() {
		_.each(this.toDoList.models, function(item){
			this.renderToDoItem(item);
		}, this);
	},

	renderToDoItem: function(toDoItem) {
		var toDoItemView = new ToDoItemView({ model: toDoItem });
		this.$el.find('#add-button').before(toDoItemView.render().el);
	},

	events: {
		'click button#add-button': 'addToDoItem'
	},

	addToDoItem: function() {
		var toDo = new ToDoItem();
		this.toDoList.add(toDo);
	},

});

var ToDoItemView = BaseView.extend({
	render: function() {
		var toDoObj = this.model.toJSON();
		var template = _.template($('#toDo-data-template').html(), toDoObj);
	
		this.$el.html(template);

		return this;
	},

	events: {
		'click button.del-button': 'delToDoItem'
	},

	delToDoItem: function(e) {
		e.preventDefault();
		this.model.destroy();
		this.remove();
	}

});


var toDoListView = new ToDoListView();
toDoListView.render();




