import React from 'react'
import Messages from '../constants/messages.json'
import LeadForm from './LeadForm'

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
     
    return (
      <LeadForm formName={vCreateNewLeadMessages.formName} />
    )
  }
}