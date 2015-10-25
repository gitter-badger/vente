import React from 'react'
import Messages from '../constants/messages.json'
import LeadForm from './LeadForm'
import OffScreenNavigationContent from '../utilityComponents/OffScreenNavigationContent'
import LeadActions from '../actions/LeadActions'

/**
* This is the component which renders the form for creating a new lead
* @class CreateNewLead
* @author Mayas Haddad
*/
export default class CreateNewLead extends React.Component {
    
  /**
  **  @name constructor
  **/
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
    let vCreateNewLeadMessages = Messages[this.state.locale]
    .createNewLeadFormLabels
    
    let vLeadActions = new LeadActions()
    
    let vCreatNewLeadForm = <LeadForm 
        formName= { vCreateNewLeadMessages.formName }
        submitButtonLabel = { vCreateNewLeadMessages.submitButtonLabel } 
        clickCallback = { vLeadActions.doAddLead } />
        
    return (
      <OffScreenNavigationContent content = { vCreatNewLeadForm } />
    )
  }
}