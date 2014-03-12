var mayApp = angular.module('myApp',[]);
myApp.animation('gnat-in', function($rootScope) {
  return {
    setup: function(){
      //
    },
    start: function(element,done){
      element.removeClass('gnatIn-active');
      element.removeClass('gnatIn');
      element.addClass('gnatIn');
    }
  };
});