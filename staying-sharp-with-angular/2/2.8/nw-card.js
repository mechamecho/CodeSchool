angular.module('NoteWrangler')
.directive('nwCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/nw-card.html',
   /*Give the nw-card directive an isolate scope, and enable it to accept a header and description attribute with two-way bindings.*/
    scope:{
      header:"=",
      description:"="
    }
  };
});
