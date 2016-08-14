var app = angular.module('myApp',[]);
app.controller( 'DummyCtrl', function DummyCtrl($scope){
   var doSomething = function() {
      return "blah";
   };
   $scope.something=doSomething();
})

		// The tests
	describe( 'DummyCtrl', function(){
    var scope = {},
        ctrl = new DummyCtrl(scope);
    it('should do something', function(){
        expect(scope.something).toMatch('blah');
    });
});
