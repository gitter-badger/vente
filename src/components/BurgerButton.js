import React from 'react'

/**
* @class UpdateLead
* @author Mayas Haddad
*/
export default class BurgerButton extends React.Component {
	render() {
		let vBurgerElementStyle = {
			width: 20 + 'px', 
			backgroundColor: '#1A237E', 
			height: 2 + 'px', 
			marginLeft: 5 + 'px', 
			marginTop: 2 + 'px'
		}
		return (
		<div style={{cursor: 'pointer'}}>
			<div style={vBurgerElementStyle}></div>
	        <div style={vBurgerElementStyle}></div>
	        <div style={vBurgerElementStyle}></div>
        </div>
        )
    }
}