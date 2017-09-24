angular.module('NoteWrangler', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/users'
    })
    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html',

    //Create a controller function inside this /notes route.
    /*We'll need to make a call to the server to retrieve the list of notes data, so we'll need to use the $http service in the controller we just created. Inject the $http service into the controller.*/
      controller:('NotesIndexController', function($http){
        /*Use the $http() function to make an HTTP request to the /notes URL. Upon success, save the resulting data to a notes variable on the controller.*/
        var controller=this;
        $http({method:"GET", url:'/notes'}).success(function(data){
          controller.notes=data;
        });
      }),

    //Give the newly created controller an alias of notesCtrl so that we can access it from within the notes index template.
    controllerAs:'notesCtrl'
    })
    .when('/users', {
      templateUrl: 'templates/pages/users/index.html'
    })
    .when('/notes/new', {
      templateUrl: 'templates/pages/notes/edit.html'
    })
    .otherwise({
      redirectTo: '/notes'
    });
}]);
