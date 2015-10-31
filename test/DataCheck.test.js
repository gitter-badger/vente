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
	
	var testIsNumeric = function() {
		
		console.log('test for a invalid number: alphabet')
		Assert(!DataCheck.isNumeric('Not Numeric'))
		
		console.log('test for a invalid number: number followed by alphabet')
		Assert(!DataCheck.isNumeric('23Not Numeric'))
		
		console.log('test for a invalid number: alphabet followed by number')
		Assert(!DataCheck.isNumeric('v23'))
		
		console.log('test for a invalid number: empty string')
		Assert(!DataCheck.isNumeric(''))
		
		console.log('test for a valid number: decimal point')
		Assert(DataCheck.isNumeric('23.3'))
		
		console.log('test for a valid number: plain integer')
		Assert(DataCheck.isNumeric('233'))
	}
	
	var run = function() {
		testCheckValidEmail();
		testIsNumeric()
	}

	return {
		run: run
	};
})();

module.exports = DataCheckTest;