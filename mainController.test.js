describe( 'DummyCtrl', function(){
    var scope = {},
        ctrl = new DummyCtrl(scope);
    it('should do something', function(){
        expect(scope.something).toMatch('blah');
    });
});
	