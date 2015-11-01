import chalk from 'chalk'

var DataCheckTest = (function() {
	
	var DataCheck = require('../src/common/DataCheck.js')
	var Assert = require('assert')
	
	var testCheckValidEmail = function() {
		
		console.log('test for a valid email string: ' + chalk.yellow('email@example.com'))
		Assert(DataCheck.checkValidEmail('email@example.com'))
		
		console.log('test for an ivalid email string: ' + chalk.yellow('email@.com'))
		Assert(!DataCheck.checkValidEmail('email@.com'))
		
		console.log('test for an ivalid email string: ' + chalk.yellow('@example.com'))
		Assert(!DataCheck.checkValidEmail('@example.com'))
		
		console.log('test for an ivalid email string: ' + chalk.yellow('34example'))
		Assert(!DataCheck.checkValidEmail('34example'))
		
		console.log('test for an ivalid email string: ' + chalk.yellow('\'\''))
		Assert(!DataCheck.checkValidEmail(''))
		
		console.log('testCheckValidEmail: ' + chalk.green('TEST OK'))
	}
	
	var testIsNumeric = function() {
		
		console.log('test for a invalid number: ' + chalk.yellow('alphabet'))
		Assert(!DataCheck.isNumeric('Not Numeric'))
		
		console.log('test for a invalid number: ' + chalk.yellow('number followed by alphabet'))
		Assert(!DataCheck.isNumeric('23Not Numeric'))
		
		console.log('test for a invalid number: ' + chalk.yellow('alphabet followed by number'))
		Assert(!DataCheck.isNumeric('v23'))
		
		console.log('test for a invalid number: ' + chalk.yellow('empty string'))
		Assert(!DataCheck.isNumeric(''))
		
		console.log('test for a valid number: ' + chalk.yellow('decimal point'))
		Assert(DataCheck.isNumeric('23.3'))
		
		console.log('test for a valid number: ' + chalk.yellow('plain integer'))
		Assert(DataCheck.isNumeric('233'))
		
		console.log('testIsNumeric: ' + chalk.green('TEST OK'))
	}
	
	var run = function() {
		testCheckValidEmail()
		testIsNumeric()
	}

	return {
		run: run
	}
})()

module.exports = DataCheckTest