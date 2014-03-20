/*global Ember*/
Slideshow.Slide = DS.Model.extend({
    title: DS.attr('string'),

    url: DS.attr('string')
});

// probably should be mixed-in...
Slideshow.Slide.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Slideshow.Slide.FIXTURES = [
    {id: 0, title: 'Slide 1', url: '/images/comp/slide1.jpg'},
    {id: 1, title: 'Slide 2', url: '/images/comp/slide2.jpg'},
    {id: 2, title: 'Slide 3', url: '/images/comp/slide3.jpg'},
    {id: 3, title: 'Slide 4', url: '/images/comp/slide4.jpg'},
    {id: 4, title: 'Slide 5', url: '/images/comp/slide5.jpg'},
    {id: 5, title: 'Slide 6', url: '/images/comp/slide6.jpg'},
    {id: 6, title: 'Slide 7', url: '/images/comp/slide7.jpg'},
    {id: 7, title: 'Slide 8', url: '/images/comp/slide8.jpg'},
    {id: 8, title: 'Slide 9', url: '/images/comp/slide9.jpg'},
    {id: 9, title: 'Slide 10', url: '/images/comp/slide10.jpg'},
    {id: 10, title: 'Slide 11', url: '/images/comp/slide11.jpg'},
    {id: 11, title: 'Slide 12', url: '/images/comp/slide12.jpg'}
];
