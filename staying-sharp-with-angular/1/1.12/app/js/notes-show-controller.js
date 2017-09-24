angular.module('NoteWrangler')
.controller('NotesShowController', ['$routeParams', '$http', function($routeParams, $http){
  /*Inject the routeParams service into the NotesShowController so that we get access to the id in the URL.*/
  /*Inject the $http service into the NotesShowController so we can use it to fetch a note.*/
  /*Use the $http() function to fetch a note from the /notes/:id URL. Upon success, save the resulting data to a note variable on the controller.*/
  var controller=this;
  $http({method:"GET", url:'/notes/:id'+ $routeParams.id}).success(function(data){
    controller.note=data;
  });
}]);
