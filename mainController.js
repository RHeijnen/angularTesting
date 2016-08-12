var app = angular.module('myApp',[]);
app.controller('mainController',function($scope){

	$scope.date = new Date();
	
	$scope.updateHours = function(Hours) {
		if(Hours == 'test') {
			$scope.hourstest = 'foo is testing me';
		} else if (Hours == 'blah') {
			$scope.hourstest = 'foo seems indifferent';
		} else {
				$scope.hourstest = 'Not a valid input ';
		}
	};

	$scope.updateUID = function(UID) {
		if(UID == 'test') {
			$scope.uidtest = 'foo is testing me';
		} else if (UID == 'blah') {
			$scope.uidtest = 'foo seems indifferent';
		} else {
				$scope.uidtest = 'Not a valid input ';
		}
	};
	

});

