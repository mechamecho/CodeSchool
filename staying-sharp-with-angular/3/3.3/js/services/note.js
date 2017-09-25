angular.module('NoteWrangler')
.factory('Note', ['$http', function NoteFactory($http) {
  /*Return an object from the NoteFactory() function that has a method named all.*/
  return {
    /*Move the $http() call from the controller into the all() function in our Note factory and return the resulting promise. Don't forget to inject the $http service!*/
    all:function(){
      return $http({method: 'GET', url: '/notes'});
    }
  };
}]);
