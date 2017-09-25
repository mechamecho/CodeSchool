angular.module('NoteWrangler')
.factory('Tweetable', ['$http', function TweetableFactory($http) {
  //Create a characterLength variable outside of the return statement and set it to an integer representing an alternate number of max characters.
  var characterLength=144;
  return function(potentialTweet) {
    return $http({
      method: 'POST',
      url: 'http://gentle-spire-1153.herokuapp.com/tweet',
      data: {
        description: potentialTweet,
        //Pass characterLength in for maxLength along with the description in our Tweetable() POST request.
        maxLength:characterLength,

      }
    });
  };
}]);
