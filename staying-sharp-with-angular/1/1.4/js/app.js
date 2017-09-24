angular.module('NoteWrangler', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider

    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html'
    })
    .when('/users', {
      templateUrl: 'templates/pages/users/index.html'
    })
  /*Create a new route which maps /notes/new to the notes edit.html template.*/
  .when('/notes/new', {
    templateUrl:"templates/pages/notes/edit.html"
  })
  //Create a route for / that redirects to the /users index page.
  .when('/', {redirectTo: '/users'})
  /*Create a new route which maps /notes/new to the notes edit.html template.*/
  .otherwise({redirectTo:'/notes'})
    ;

}]);
