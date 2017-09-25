angular.module('NoteWrangler')
.controller('NotesIndexController', ['$scope', 'Note', 'Tweetable', function($scope, Note, Tweetable) {
  /*Now that our Note factory is using ngResource, we'll need to update how it's used in NotesIndexController.

Replace the existing call to Note.all() with the correct call to the Note AngularJS resource.*/
  $scope.notes = Note.query();

  $scope.tweetThatNote = function(noteToTweet) {
    Tweetable(noteToTweet).success(function(status) {
      console.log(status);
    });
  };
}]);
