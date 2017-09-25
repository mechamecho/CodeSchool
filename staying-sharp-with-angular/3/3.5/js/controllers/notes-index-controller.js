angular.module('NoteWrangler')
.controller('NotesIndexController', ['$scope', 'Note', 'Tweetable',function($scope, Note, Tweetable) {
  Note.all().success(function(data) {
    $scope.notes = data;
  });
  /*Inject our brand spankin' new Tweetable service into NotesIndexController and then define a new tweetThatNote() function on $scope that we can use to query the remote API from our app.*/
  $scope.tweetThatNote=function(description){
    /*Within our tweetThatNote() function, invoke the Tweetable service and console.log() the returned status. To use our new Tweetable service, our tweetThatNote() function should accept an argument, the description from a note, that we then pass into Tweetable().*/
    Tweetable(description).success(function(data){
      console.log(data);
    });
  };
}]);
