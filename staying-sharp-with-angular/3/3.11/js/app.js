angular.module('NoteWrangler', ['ngRoute', 'ngResource'])
.config(function(TweetableProvider) {
  TweetableProvider.setLength(144);
});
//Include ngResource in the NoteWrangler module.
