describe('form', function() {
	$scope.updateBar('test');
	expect($scope.bar).toBe('foo is testing me');
});