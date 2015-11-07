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
						backgroundColor: ColorsTheme[this.props.theme].menuBackground,
						animation: vAnimationName + ' ' + 1 + 's',
						width: 20 + 'em',
						color: 'white'
						}}>
					WELCOME TO YOUR VENTE ACCOUNT
					<div>
						<a href="#/create-new-lead" >Create Lead </a>
						<a href="#/update-lead" >Update Lead</a>
        			</div>
	        	</div>
	        )
		}
		
		return <div></div>
	}
}