import React from 'react'
import Messages from '../constants/messages.json'
import ColorsTheme from '../constants/ColorsTheme.json'
import Menu from './Menu'
import MenuItem from './MenuItem'

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

		const Dashboard = <li><a style={vListElementStyle} href="#/" >Dashboard </a></li>
		const CreateNewLead = <li><a style={vListElementStyle} href="#/create-new-lead" >Create Lead </a></li>
		const UpdateLead = <li><a style={vListElementStyle} href="#/update-lead" >Update Lead</a></li>
		const UpdateClient = <li><a style={vListElementStyle} href="#/update-client" >Update Client</a></li>
		const ItemOne = <MenuItem menuItemTitle="DASHBOARD" imageUrl="./src/icons/dashboard.svg" />
		const ItemTwo = <MenuItem menuItemTitle="SETTINGS" imageUrl="./src/icons/settings.svg" />

		const Items = [Dashboard, CreateNewLead, UpdateLead, UpdateClient, ItemOne, ItemTwo]
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
        			<Menu menuItems={Items} />
					</ul>
    		</div>
	    )
		}

		return <div></div>
	}
}
