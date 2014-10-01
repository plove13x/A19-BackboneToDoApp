var ItemView = BaseView.extend({	/*""*/
	
	// var that = this; HOW TO PUT THIS IN HERE?

	tagName: 'li',

	initialize: function(model) {			/*NECESSARY?*/
		this.task = model.get('task');
	},

	render: function() {
		this.$el.text(this.task); 
		$('ul').append(this.el);
	}
});


// ROUTERS


// SHIT THAT'S HAPPENING

var coolToDoItems = [new toDoItemConstructor({task: 'eat'}), new toDoItemConstructor({task: 'shit'})];
var coolToDoList = new toDoListConstructor();

coolToDoList.add(coolToDoItems);
// coolToDoItems[0].set({status: 'done'});
// coolToDoItems[1].save();
// coolToDoList.fetch().done(function(){
// 	console.log(coolToDoList.last());
// });

var listView = new ListView();
listView.render();

_.each(coolToDoList.models, function(tDItem) {
	console.log(tDItem);
	var itemView = new ItemView(model: tDItem);
	itemView.render();
});