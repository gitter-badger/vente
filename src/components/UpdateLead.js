import React from 'react'
import Messages from '../constants/messages.json'
import LeadForm from './LeadForm'
import OffScreenNavigationContent from '../utilityComponents/OffScreenNavigationContent'
import LeadActions from '../actions/LeadActions'
import I18nStore from '../stores/I18nStore'

/**
* @class UpdateLead
* @author Mayas Haddad
*/
export default class UpdateLead extends React.Component {
    
  /*
  *  @name constructor
  */
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
    let vUpdateNewLeadMessages = Messages[this.state.locale]
         .updateLeadFormLabels
         
    let vLeadActions = new LeadActions()
    
    let vLead = { 
      title: 'mr',
      firstname: 'Mayas',
      lastname: 'HADDAD',
      email: 'mayas_91@goatmail.com',
      birthday: '1988-10-01',
      company: 'Cap',
      complementaryNote: 'This is the best lead so far',
      budget: '50000',
      celPhone: '0687485928',
      officePhone: '0187485928',
      address: { 
        street: '3 rue toto',
        zipCode: '75000',
        city: 'Paris',
        country: 'FR'
      }
    }
    
    let vUpdateLeadForm = <LeadForm 
            lead = { vLead }
            formName = { vUpdateNewLeadMessages.formName }
            submitButtonLabel = { vUpdateNewLeadMessages.submitButtonLabel }
            clickCallback = { vLeadActions.doUpdateLead }
     />

    return (
      <OffScreenNavigationContent content = { vUpdateLeadForm } />
    )
  }
}