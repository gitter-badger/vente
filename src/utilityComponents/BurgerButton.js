import React from 'react'
import ColorsTheme from '../constants/ColorsTheme.json'

/**
* @class BurgerButton
* @author Mayas Haddad
*/
export default class BurgerButton extends React.Component {
	
	constructor(props) {
		super(props)
		this.props = props
	}
	
	render() {
		let vBurgerElementStyle = {
			backgroundColor: ColorsTheme[this.props.theme].burgerColor, 
			height: 4 + 'px', 
			marginLeft: 10 + 'px', 
			marginTop: 4 + 'px'
		}

		return (
			<div 
				onClick = { this.props.clickCallback }
				style = { {width: 45 + 'px', cursor: 'pointer', padding: 1 + 'em'} } >
				<div style = { vBurgerElementStyle } ></div>
		        <div style = { vBurgerElementStyle } ></div>
		        <div style = { vBurgerElementStyle } ></div>
	        </div>
        )
    }
}