(function() {
  var app = angular.module('gemStore', ['store-directives']);

  //Inject the $http service into our StoreController.
  app.controller('StoreController',['$http', function($http){
    var store = this;
    store.products = [];
    //get the store-products.json using the $http Service.
    //Attach a success to our get call.
    //Name the first parameter of the success function data.
    $http.get('/store-products.json').success(function(data){
      /*Give our StoreController access to the products by setting products equal to the data given to us with the http service's success promise.*/
      store.products=data;
    });

  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();
