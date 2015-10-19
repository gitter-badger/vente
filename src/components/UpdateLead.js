import React from 'react'
import Messages from '../constants/messages.json'
import LeadForm from './LeadForm'

/**
* @class UpdateLead
* @author Mayas Haddad
*/
export default class UpdateLead extends React.Component {
    
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
    let vUpdateNewLeadMessages = Messages[this.state.locale]
         .updateLeadFormLabels

    return (
      <LeadForm 
        formName={vUpdateNewLeadMessages.formName}
        firstname="Mayas"
        lastname="HADDAD"
        email="mayas_91@goatmail.com"
        company="Cap"
        address="3 rue Molière, PARIS"
        complementaryNote="This is the best lead so far" />
    )
  }
}