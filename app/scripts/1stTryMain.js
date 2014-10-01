'use strict';



var toDoItems = [{task: 'eat'}, {task:'shit'}];
// var toDoItems = [new Backbone.Model({task: "eat"}), new Backbone.Model({task: "shit"})];
// var toDoCollection = new Backbone.Collection(toDoItems);





var BaseView = Backbone.View.extend({
  	render: function(){
    	$('.jumbotron').append(this.el);
  	}
});

var ListView = BaseView.extend({
	tagName: 'ul'
});

var ItemView = BaseView.extend({
	tagName: 'li',

	initialize: function(options) {
		this.task = options.task;
	},

	render: function() {
		// console.log(this.model);
		this.$el.text(this.model.get('task')); 
		$('ul').append(this.el);
	}
});



var listView = new ListView();
listView.render();

_.each(toDoItems, function(tDItem) {
	var taskModel = new Backbone.Model({task: tDItem.task});
	var itemView = new ItemView({model: taskModel});
	itemView.render(tDItem);
});





// var modelArray = _.map(toDoItems, function(tDItem) { return new Backbone.Model({task: tDItem.task}) });
// console.log(modelArray);
// var toDoCollection = new Backbone.Collection(modelArray);
// console.log(toDoCollection);

// _.each(toDoCollection, function(fakeModel) {
// var itemView = new ItemView;
// itemView.render(fakeModel);
// });

// {model: fakeModel.task}








// _.each(toDoItems, function(tDItem) {
// 	var itemView = new ItemView({model: tDItem({task: tDItem.task})});
// 	itemView.render(tDItem);
// });




/*
// To remove a single model, find it first.
var jake = collection.findWhere({name: "Jake"});
// Call .remove with the model.
// This will trigger a `remove` event on the collection
collection.remove(jake);
// Call .add with a model
// This will trigger an `add` event on the collection
collection.add(jake);
*/

