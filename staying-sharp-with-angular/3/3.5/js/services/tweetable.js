angular.module('NoteWrangler')
.factory('Tweetable', function TweetableFactory($http){
 /* Let's create a Tweetable service to use the Tweet Validator API across our application. To begin, let's name our service ''Tweetable'', inject $http and have our factory function return an anonymous function.*/
 /*Inside the factory, make a POST request with the $http() function to this endpoint:

http://gentle-spire-1153.herokuapp.com/tweet

The service function should accept a single argument, potentialTweet, that will be sent to the external API. Use the Tweet Validator API documentation to determine how to construct the data of our POST request.

Return your $http() call so we can use it later.*/
  return function(potentialTweet){
    return $http({method:"POST", url:'http://gentle-spire-1153.herokuapp.com/tweet', data:{description:potentialTweet}});
  };
});
