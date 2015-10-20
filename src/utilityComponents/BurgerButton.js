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
			height: 2 + 'px', 
			marginLeft: 5 + 'px', 
			marginTop: 2 + 'px'
		}
		return (
		<div 
			onClick={this.props.clickCallback}
			style={{width: 20 + 'px', cursor: 'pointer'}}>
			<div style={vBurgerElementStyle}></div>
	        <div style={vBurgerElementStyle}></div>
	        <div style={vBurgerElementStyle}></div>
        </div>
        )
    }
}