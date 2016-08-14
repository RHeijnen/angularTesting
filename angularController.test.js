var app = angular.module('myApp',[]);
app.controller( 'DummyCtrl', function DummyCtrl($scope){
   var doSomething = function() {
      return "blah";
   };
   $scope.something=doSomething();
})