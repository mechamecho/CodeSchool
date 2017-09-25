angular.module('NoteWrangler')
.factory('Note', ['$resource', function NoteFactory($resource) {
  /*Include ngResource in the NoteWrangler module.*/
  /**/
  return $resource("/notes", {}, {});
}]);
