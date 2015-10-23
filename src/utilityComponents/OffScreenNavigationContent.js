import React from 'react'
import Messages from '../constants/messages.json'
import OffScreenNavigationMenu from '../utilityComponents/OffScreenNavigationMenu'
import BurgerButton from '../utilityComponents/BurgerButton'

/**
* @class OffScreenNavigationContent
* @author Mayas Haddad
*/
export default class OffScreenNavigationContent extends React.Component {
    
  /*
  *  @name constructor
  */
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      locale: 'fr-FR',
      showMenu: 'none'
    }
    this.updateMenuState = this.updateMenuState.bind(this)
  }
   
  updateMenuState() {
    let vNextState = ((this.state.showMenu === 'none' || this.state.showMenu === 'out') ? 'in' : 
    (this.state.showMenu === 'in' ? 'out' : 'none'))

    this.setState({
      locale: 'fr-FR',
      contentClassName: (vNextState === 'none' ? '' : 
      (vNextState === 'in' ? 'content-to-be-pushed-by-menu' : 'content-to-push-menu')),
      showMenu: vNextState
    })
  }

  /**
  * renders the JSX representing the add new lead form.
  * @returns {jsx}
  */
  render() {
   return (
      <div>
        <OffScreenNavigationMenu menuState={this.state.showMenu}/>
        <div className={this.state.contentClassName}>
          <BurgerButton clickCallback={this.updateMenuState}/>
          { this.props.content }
        </div>
      </div>
    )
  }
}