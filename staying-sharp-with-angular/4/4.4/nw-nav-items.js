angular.module('NoteWrangler')
.directive('nwNavItem', function() {
  return {
    restrict: 'E',
    templateUrl: './templates/directives/nw-nav-item.html',
    require: '^nwNav',
    link: function(scope, element, attrs, nwNavCtrl) {

      /*Within the isActive() function, call the getActiveNav() function from the required controller to get the current active nav value. Compare the return value from the controller with the scope.name value and return the result from the isActive function.*/
      scope.isActive = function() {
        return nwNavCtrl.getActiveNav()===scope.name;
      };

      scope.activate = function() {
        /*First, we need a name for the nav item to work. Create a new isolate scope on the nwNavItem directive and allow it to accept an attribute (@) value called name.*/
        nwNavCtrl.setActiveNav(scope.name);
      };

    },
    /*First, we need a name for the nav item to work. Create a new isolate scope on the nwNavItem directive and allow it to accept an attribute (@) value called name.*/
           scope:{
        name:"@"
      }

  };
});
