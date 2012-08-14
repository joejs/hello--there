describe('hello()', function() {
	var hello = require('../src/hello');
	it('returns hello', function() {
		expect(hello()).toEqual('hello');
	});
});