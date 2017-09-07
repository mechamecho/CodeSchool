//Require the redis module and assign it to a variable called redis.
var redis=require('redis') ;
// Create a redis client and assign it to a variable called client.
var client=redis.createClient();
//On the client, set the name property to your name.
client.set("name" ,"nafissa");
