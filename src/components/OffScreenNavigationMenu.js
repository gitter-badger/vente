import React from 'react'
import Messages from '../constants/messages.json'
import LeadForm from './LeadForm'

/**
* @class OffScreenNavigationMenu
* @author Mayas Haddad
*/
export default class OffScreenNavigationMenu extends React.Component {
	
	constructor(props) {

		super(props)
		this.props = props
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
						animationFillMode: 'forwards !important',
						float: 'left', 
						position: 'fixed', 
						height: 100 + '%', 
						backgroundColor: '#1A237E',
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