angular.module('NoteWrangler')
.directive('popover', function( $timeout) {
  return function(scope, element, attrs) {
    /*Inside a $timeout(), make a Bootstrap popover, to replace the default tooltip on hover, by passing the popover() method { trigger: 'hover' }. Refer to the Bootstrap API docs for the popover() method and parameters. Don't forget to rename our directive to 'popover'.*/
    $timeout(function(){
      element.popover({
        trigger:"hover",
        /*Using the attributes argument of the function returned by our new popover directive, make note attributes available to our popover by providing them as content in the options object passed to popover(). Note: the attributes argument is the third argument for the function returned by the popover directive, after scope and element.*/
        content:attrs.popover
                      });
    });
    /*Clean up after our popover directive when $destroy is fired on scope.*/
    scope.$on('$destroy', function(){
      element.popover('destroy');
    });

  };
});
/*Now, use our brand spankin' new popover directive to display the note's title on hover. in templates/pages/notes/tweeted.html*/
