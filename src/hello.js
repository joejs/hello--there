hello = function() {
	return 'hello';
}

if(typeof module !== 'undefined' && 'exports' in module) {
	module.exports = hello;
}