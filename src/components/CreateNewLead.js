import React from 'react'
import Messages from '../constants/messages.json'
import LeadForm from './LeadForm'
import OffScreenNavigationContent from '../utilityComponents/OffScreenNavigationContent'
import LeadActions from '../actions/LeadActions'
import I18nStore from '../stores/I18nStore'

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
    this.updateLocale = this.updateLocale.bind(this)
    this.state = {
      locale: I18nStore.getCurrentLang()
    }
  }
   
   /**
    * Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
    * It subscribes the current class to the ToReadListsListStore object providing this ladder with the updateToReadListsList callback.
    */
  componentDidMount() {
    I18nStore.addChangeListener(this.updateLocale)
  }
    
   /**
   * Invoked immediately before a component is unmounted from the DOM.
   * It unsubscribes the current class to the componentWillUnmount class providing this ladder with the updateToReadListsList callback.
   */
  componentWillUnmount() {
    I18nStore.addChangeListener(this.updateLocale)
  }
  
  updateLocale() {
    this.setState({local: I18nStore.getCurrentLang()})
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