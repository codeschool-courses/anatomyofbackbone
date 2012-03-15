window.TodoApp = new (Backbone.Router.extend({
  routes: {
    "": "index",
    "todos/:id": "show"
  },

  initialize: function(){
    this.todoItems = new TodoItems();
    this.todosView = new TodosView({collection: this.todoItems});
    this.todosView.render();
    $('#app').append(this.todosView.el);
  },

  index: function(){
    console.log("fetching")
    this.todoItems.fetch();
  },

  start: function(){
    Backbone.history.start();
  },

  show: function(id){
    this.todoItems.focusOnTodoItem(id);
  }

}));