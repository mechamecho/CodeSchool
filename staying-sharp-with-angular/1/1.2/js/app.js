//Inside the app.js file, declare an AngularJS module for our NoteWrangler app. For now it will have no dependencies.
/*What is the name of the module you need to include to use routes? Update the app.js module declaration to include it.*/
//Define the module’s config() function and inject $routeProvider.
angular.module('NoteWrangler', ['ngRoute']).
config(function($routeProvider){
  /*Create a simple route for when /notes is in the URL, link to the index.html template in the templates/pages/notes/ directory.*/
 $routeProvider.when('/notes',{
  templateUrl:'/templates/pages/notes/index.html'
});

});
