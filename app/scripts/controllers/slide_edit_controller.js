Slideshow.SlideEditController = Ember.ObjectController.extend({
  needs: 'slide',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.slide.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('slide',this.get('model'));
    }
  }
});

