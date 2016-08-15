var phonecatApp = angular.module('phonecatApp', []);
 
phonecatApp.controller('PhoneListCtrl', function PhoneListCtrl($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});
		// The tests
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){

    beforeEach(function() {
      module('phonecatApp'); // <= initialize module that should be tested
    });

    it('should create "phones" model with 3 phones', inject(function($controller) {
      var scope = {},
          ctrl = $controller('PhoneListCtrl', { $scope: scope });

      expect(scope.phones.length).toBe(3);
    }));
  });
});
