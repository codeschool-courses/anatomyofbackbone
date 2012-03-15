window.TodoItem = Backbone.Model.extend({
  toggleStatus: function(){
    if(this.get('status') == 'incomplete'){
      this.set({'status': 'complete'});
    }else{
      this.set({'status': 'incomplete'});
    }

    this.save();
  }
});
