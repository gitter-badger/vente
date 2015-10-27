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
		
		this.state = {
			colorTheme: 'darkBlue'
		}
	}
	
	render() {
		let vBurgerElementStyle = {
			backgroundColor: ColorsTheme[this.state.colorTheme].burgerColor, 
			height: 4 + 'px', 
			marginLeft: 10 + 'px', 
			marginTop: 4 + 'px'
		}

		return (
			<div 
				onClick = { this.props.clickCallback }
				style = { {width: 45 + 'px', cursor: 'pointer', margin: 1 + 'em'} } >
				<div style = { vBurgerElementStyle } ></div>
		        <div style = { vBurgerElementStyle } ></div>
		        <div style = { vBurgerElementStyle } ></div>
	        </div>
        )
    }
}