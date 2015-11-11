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
		
		const vListElementStyle = {color: 'white', textDecoration: 'none'}
		
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
					<ul>
						<li><a style={vListElementStyle} href="#/" >Dashbord </a></li>
						<li><a style={vListElementStyle} href="#/create-new-lead" >Create Lead </a></li>
						<li><a style={vListElementStyle} href="#/update-lead" >Update Lead</a></li>
        			</ul>
	        	</div>
	        )
		}
		
		return <div></div>
	}
}