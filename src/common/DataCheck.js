import React from 'react'

export default class DataCheck {
	
	static checkValidEmail(pEmail) {	
		let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        return re.test(pEmail)
	}
	
	static isNumeric(pField) {
		return  (!pField ? false : !isNaN(pField))
	}
}