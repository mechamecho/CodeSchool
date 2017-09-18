(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    /*In the app.js file we changed things up a little with a new gems array. Assign gems to a products property inside StoreController.*/
    this.products=gems;
  });

  var gems = [
    { name: 'Azurite', price: 2.95 },
    { name: 'Bloodstone', price: 5.95 },
    { name: 'Zircon', price: 3.95 }
  ];
})();
