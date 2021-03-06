
		// Basic calculator logic
var myTestApp = angular.module('myTestApp', []);
 
	myTestApp.controller('testController', function testController($scope) {
		//private refference 
		$scope.phones = [
			{'name': 'Charlie Kelly',
				'Title': ' Custodian / Charlie work'},
			{'name': 'Dennis Reynolds',
				'Title': 'Bartender'},
			{'name': 'Frank Reynolds',
				'Title': 'Owner'},
			{'name': 'Dee Reynolds',
				'Title': 'Bird'},
			{'name': 'Ronald "mac" McDonald',
				'Title': 'Security'}
		];
		// public refference
		var doSomething = function() {
			return "The nightman commeth";
		};
		$scope.something=doSomething();
		
	});
	
		// The tests
	describe('Angular Jasmine Unit Testing', function() {

		describe('Its Always Sunny In Philadelphia', function(){

			beforeEach(function() {
			module('myTestApp'); // <= initialize module that should be tested
			});

			it('There should be 5 cast members on "Its Always Sunny In Philadelphia"-- (list-size)', inject(function($controller) {
				var scope = {},
				ctrl = $controller('testController', { $scope: scope });

				expect(scope.phones.length).toBe(5);
			}));
			
			it('The first should be Charlie-- (listindex)', inject(function($controller) {
				var scope = {},
				ctrl = $controller('testController', { $scope: scope });

				expect(scope.phones[0].name).toBe("Charlie Kelly");
			}));
			
			it('The Second should be Dennis-- (listindex)', inject(function($controller) {
				var scope = {},
				ctrl = $controller('testController', { $scope: scope });

				expect(scope.phones[1].name).toBe("Dennis Reynolds");
			}));
			
			it('The Third should be Frank-- (listindex)', inject(function($controller) {
				var scope = {},
				ctrl = $controller('testController', { $scope: scope });

				expect(scope.phones[2].name).toBe("Frank Reynolds");
			}));
			
			it('The Fourth should be Dee-- (listindex)', inject(function($controller) {
				var scope = {},
				ctrl = $controller('testController', { $scope: scope });

				expect(scope.phones[3].name).toBe("Dee Reynolds");
			}));
			
			it('The Fifth should be Dennis-- (listindex)', inject(function($controller) {
				var scope = {},
				ctrl = $controller('testController', { $scope: scope });

				expect(scope.phones[4].name).toBe('Ronald "mac" McDonald');
			}));
			
			it('Charlie wrote a musical-- (String)', inject(function($controller) {
				var scope = {},
				ctrl = $controller('testController', { $scope: scope });

				expect(scope.something).toBe('The nightman commeth');
			}));
	
		});
	});
