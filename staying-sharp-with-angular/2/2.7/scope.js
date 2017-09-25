//When setting $scope.title inside a directive using the default scope, we are actually setting a variable named title on the parent $scope.

angular.module('NoteWrangler', [])
.directive("nwCard", function() {
  return {
    restrict: "E",
    templateUrl: "templates/directives/nw-card.html",
    controller: function($scope) {
      $scope.title = 'Space Llamas';
    }
  }
});
