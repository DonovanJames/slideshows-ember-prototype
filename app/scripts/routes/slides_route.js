Slideshow.SlidesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('slide');
  }
});

