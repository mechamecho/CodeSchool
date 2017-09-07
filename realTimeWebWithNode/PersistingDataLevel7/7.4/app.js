var redis = require('redis');
var client = redis.createClient();

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";
// Using the redis client's lpush command, insert question1 into
// the questions list. Then, console.log the result you receive.
//  Remember, the lpush function takes a callback as its last
//   argument, which expects an error and value to be passed as arguments.
client.lpush("questions", question1, function(error, reply){
  console.log(reply);
});
// Using the redis client's lpush command, insert question2 into the questions list.
// Then console.log the result you receive.
client.lpush("questions", question2, function(error, reply){
  console.log(reply);
});
