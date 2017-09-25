angular.module('NoteWrangler', ['ngRoute'])
//Let's call config() on our NoteWrangler module and provide it an anonymous function.
//Inject TweetableProvider into the config() function.
  .config(function(TweetableProvider){
  /*Let's call config() on our NoteWrangler module and provide it an anonymous function.*/
  TweetableProvider.setLength(40);
})
;
