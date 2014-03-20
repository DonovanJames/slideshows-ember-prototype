Slideshow.SlideRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('slide', params.slide_id);
  }
});

