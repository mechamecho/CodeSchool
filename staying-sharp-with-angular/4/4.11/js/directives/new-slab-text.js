angular.module('NoteWrangler')
.directive('nwSlabText', function($timeout) {
 //Create a link function for the nwSlabText directive.
  /*Create a link function for the nwSlabText directive.*/
  return function(scope, element){
    /*Call the slabText() method on directive's element. Refer to the SlabText docs for the method name.*/
    $timeout(function(){
      return element.slabText({container:'body'});
    });

  };
});
