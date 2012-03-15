window.TodoItems = Backbone.Collection.extend({
  model: TodoItem,
  url: '/todos',

  initialize: function(){
    this.on('remove', this.hideModel, this);
  },

  hideModel: function(model){
    model.trigger('hide');
  },

  focusOnTodoItem: function(id) {
    var modelsToRemove = this.filter(function(todoItem){
      return todoItem.id != id;
    });

    this.remove(modelsToRemove);
  }
})
