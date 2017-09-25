angular.module('NoteWrangler')
.factory('Note',['$resource', function NoteFactory($resource) {
  return $resource('/notes', {}, {
 /*Add a tweetIt method to the Note resource. Remember, this updates an existing note, so use the correct HTTP method.*/
    tweetIt:{
      method:"PUT"
    }
  });
}]);
