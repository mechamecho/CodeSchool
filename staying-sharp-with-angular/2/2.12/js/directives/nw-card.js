angular.module('NoteWrangler')
.directive('nwCard', function() {
  return {
    restrict: 'E',
    templateUrl: './templates/directives/nw-card.html',
    scope: {
      header: '=',
      description: '=',
      tweeted: '='
    },
    //Create a link function in the directive and include the parameters we will need to grab element.
    link: function(scope, element, attrs){
      /*Add a class of tweeted to the nw-card element for any card that has a tweeted property on its scope.*/
       if(scope.tweeted){
         element.addClass("tweeted");
       }
    }

  };
});
