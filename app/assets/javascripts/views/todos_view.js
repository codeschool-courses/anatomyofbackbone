window.TodosView = Backbone.View.extend({
  initialize: function(){
    this.addOne = _.bind(this.addOne, this);

    this.collection.on('add', this.addOne);
    this.collection.on('reset', this.addAll, this);
  },

  render: function(){
    this.addAll()
    return this;
  },

  addAll: function(){
    this.$el.empty();
    this.collection.forEach(this.addOne);
  },

  addOne: function(todoItem){
    var todoView = new TodoView({model: todoItem});
    this.$el.append(todoView.render().el); 
  }
});
