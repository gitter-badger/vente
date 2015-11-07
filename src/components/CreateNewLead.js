import React from 'react'
import Messages from '../constants/messages.json'
import LeadForm from './LeadForm'
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
  constructor(props) {
    this.props = super(props)
  }
  
  /**
  * renders the JSX representing the add new lead form.
  * @returns {jsx}
  */
  render() {
    let vCreateNewLeadMessages = Messages[this.props.lang]
    .createNewLeadFormLabels
    
    let vLeadActions = new LeadActions()
    
   return <LeadForm 
        formName= { vCreateNewLeadMessages.formName }
        submitButtonLabel = { vCreateNewLeadMessages.submitButtonLabel } 
        clickCallback = { vLeadActions.doAddLead }
        lang = { this.props.lang } 
            />
  }
}