import React from 'react'
import Messages from '../constants/messages.json'
import ColorsTheme from '../constants/ColorsTheme.json'

/**
* @class OffScreenNavigationMenu
* @author Mayas Haddad
*/
export default class OffScreenNavigationMenu extends React.Component {
	
	constructor(props) {

		super(props)
		this.props = props
		
		this.state = {
			colorTheme: 'darkBlue'
		}
	}

	componentDidMount() {
	}

	render() {
		let vAnimationName = this.props.menuState === 'out' ? 'menuout' : 'menuin'

		if(this.props.menuState !== 'none') {
			return (
				<div 
					className="menu"
					style={{ 
						float: 'left', 
						position: 'fixed', 
						height: 100 + '%', 
						backgroundColor: ColorsTheme[this.state.colorTheme].menuBackground,
						animation: vAnimationName + ' ' + 1 + 's',
						width: 20 + 'em',
						color: 'white'
						}}>
					TEST
	        	</div>
	        )
		}
		return <div></div>
	}
}