(function(){
  var gem = { name: 'Azurite', price: 2.95 };
  var app = angular.module('gemStore', []);
  /*Add a controller named StoreController to our gemStore application.*/
  app.controller('StoreController', function(){
    /*In app.js, we've added a gem object to represent one of the products in our gemStore. Assign it to the product property of StoreController so we can use them in the page.*/
    this.product=gem;
  });
})();
