import React from 'react'
import Messages from '../constants/messages.json'
import LeadForm from './LeadForm'
import OffScreenNavigationMenu from '../utilityComponents/OffScreenNavigationMenu'
import BurgerButton from '../utilityComponents/BurgerButton'

/**
* @class UpdateLead
* @author Mayas Haddad
*/
export default class UpdateLead extends React.Component {
    
  /*
  *  @name constructor
  */
  constructor() {
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
    let vUpdateNewLeadMessages = Messages[this.state.locale]
         .updateLeadFormLabels
    return (
      <div>
        <OffScreenNavigationMenu menuState={this.state.showMenu}/>
        <div className={this.state.contentClassName}>
          <BurgerButton clickCallback={this.updateMenuState}/>
          <LeadForm 
            formName={vUpdateNewLeadMessages.formName}
            firstname="Mayas"
            lastname="HADDAD"
            email="mayas_91@goatmail.com"
            company="Cap"
            address="3 rue Molière, PARIS"
            complementaryNote="This is the best lead so far"
            submitButtonLabel="METTRE A JOUR" />
        </div>
      </div>
    )
  }
}