angular.module('NoteWrangler').directive('nwCard', [function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/nw-card.html',
    controller: function($scope) {
      /*Inject the $scope service into the controller.*/
      /*Set the header property on the controller's $scope instead of this. Note: We do not want to modify the string.*/
      $scope.header = 'Note Title';
      /*Set description property on the controller's $scope instead of this. Note: We do not want to modify the string.*/
      $scope.description = 'A lovely note description.';
    },
    /*Delete the unnecessary alias for our controller.*/
  //  controllerAs: 'card'
  };
}]);
