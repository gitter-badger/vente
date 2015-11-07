import React from 'react'
import Messages from '../constants/messages.json'
import LeadForm from './LeadForm'
import OffScreenNavigationContent from '../utilityComponents/OffScreenNavigationContent'
import LeadActions from '../actions/LeadActions'

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
      locale: 'fr-FR'
    }
  }

  /**
  * renders the JSX representing the add new lead form.
  * @returns {jsx}
  */
  render() {
    let vUpdateNewLeadMessages = Messages[this.state.locale]
         .updateLeadFormLabels
         
    let vLeadActions = new LeadActions()
    
    let vUpdateLeadForm = <LeadForm 
            title = "mr"
            formName = { vUpdateNewLeadMessages.formName }
            firstname = "Mayas"
            lastname = "HADDAD"
            email = "mayas_91@goatmail.com"
            birthday = "1988-10-01"
            company = "Cap"
            complementaryNote = "This is the best lead so far"
            budget = "50000"
            celPhone = "0687485928"
            officePhone = "0187485928"
            address = { 
              { 
                street: '3 rue toto',
                zipCode: '75000',
                city: 'Paris',
                country: 'FR'
              } 
            }
            submitButtonLabel = { vUpdateNewLeadMessages.submitButtonLabel }
            clickCallback = { vLeadActions.doUpdateLead }
     />

    return (
      <OffScreenNavigationContent content = { vUpdateLeadForm } />
    )
  }
}