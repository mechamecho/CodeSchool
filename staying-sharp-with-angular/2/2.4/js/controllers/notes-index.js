angular.module('NoteWrangler')
.controller('NotesIndexController', ['$http', '$scope',  function($http, $scope) {
//Attach notes to $scope instead of the controller ( this).

  $http({method: 'GET', url: '/notes'}).success(function(data) {
    $scope.notes = data;
  });
}]);
