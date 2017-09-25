angular.module('NoteWrangler')
.provider('Tweetable', function TweetableProvider() {
  var characterLength = 144;
  /*Change the factory definition into a provider definition.*/
  /*Wrap the existing function returned by our TweetableProvider() function in a call to the $get() function required by providers. Don't forget to move the $http service injection!*/
  /*Change the factory definition into a provider definition.*/
  this.setLength=function(length){
    characterLength=length;
  };
  this.$get=function($http){
  return function(potentialTweet) {
    return $http({
      method: 'POST',
      url: 'http://gentle-spire-1153.herokuapp.com/tweet',
      data: {
        description: potentialTweet,
        maxLength: characterLength
      }
    });
  };
    };

});
