import React from 'react'

export default class DataCheck {
	
	static checkValidEmail(pEmail) {	
		let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        return re.test(pEmail)
	}
	
	static isNumeric(pField) {
		return  (!pField ? false : !isNaN(pField))
	}

	static isPhoneNumber(pField, pLocale) {
		let vPhoneUtil = require('node-phonenumber').PhoneNumberUtil.getInstance() 
		let vPhoneNumber
		try {
			vPhoneNumber = vPhoneUtil.parse(pField, pLocale)
		} catch(e) {
			return false
		}
		return  vPhoneUtil.isValidNumber(vPhoneNumber, pLocale)
	}
}