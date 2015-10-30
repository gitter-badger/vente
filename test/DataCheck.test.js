var DataCheck = require('../src/common/DataCheck.js');
var Assert = require('assert');

var DataCheckTest = (function() {

	var testEmailWellFormed = function() {
		Assert.equal(3, 4);
	}

	var run = function() {
		testEmailWellFormed();
	}

	return {
		run: run
	};
})();

module.exports = DataCheckTest;