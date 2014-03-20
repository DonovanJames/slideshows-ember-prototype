Slideshow.Router.map(function () {

    this.resource('index', {path:'/'}, function(){
        this.resource('slide', { path: '/:slide_id' }, function(){
            this.route('edit');
        });
        this.route('create');
    });
  
  this.resource('slides', function(){

  });
  
});
