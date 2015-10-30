var DataCheckTest = (function() {
	
	var DataCheck = require('../src/common/DataCheck.js');
	var Assert = require('assert');
	
	var testCheckValidEmail = function() {
		
		console.log('test for a valid email string')
		Assert(DataCheck.checkValidEmail('email@example.com'));
		
		console.log('test for an ivalid email string: email@.com')
		Assert(!DataCheck.checkValidEmail('email@.com'));
		
		console.log('test for an ivalid email string: @example.com')
		Assert(!DataCheck.checkValidEmail('@example.com'));
		
		console.log('test for an ivalid email string: 34example')
		Assert(!DataCheck.checkValidEmail('34example'));
		
		console.log('test for an ivalid email string: \'\'')
		Assert(!DataCheck.checkValidEmail(''));
		
		console.log('testCheckValidEmail: TEST OK')
	}

	var run = function() {
		testCheckValidEmail();
	}

	return {
		run: run
	};
})();

module.exports = DataCheckTest;