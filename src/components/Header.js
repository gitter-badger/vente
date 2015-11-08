import React from 'react'
import AlertsStore from '../stores/AlertsStore'
import I18nStore from '../stores/I18nStore'
import {Alert} from 'react-material-alert'

/**
* This is the component which renders the form for creating a new lead
* @class CreateNewLead
* @author Mayas Haddad
*/
export default class Header extends React.Component {
    
  /**
  **  @name constructor
  **/
  constructor() {
    this.updateAlert = this.updateAlert.bind(this)
    this.closeAlert = this.closeAlert.bind(this)
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
    AlertsStore.addChangeListener(this.updateAlert)
    I18nStore.addChangeListener(this.updateLocale)
  }
    
   /**
   * Invoked immediately before a component is unmounted from the DOM.
   * It unsubscribes the current class to the componentWillUnmount class providing this ladder with the updateToReadListsList callback.
   */
  componentWillUnmount() {
    AlertsStore.removeChangeListener(this.updateAlert)
    I18nStore.addChangeListener(this.updateLocale)
  }
  
  updateAlert() {
    this.setState({sAlert: <Alert alert = {AlertsStore.getAlertMessage()} closeCallback={this.closeAlert}/>})
  }
  
  updateLocale() {
    this.setState({local: I18nStore.getCurrentLang()})
  }
  
  /**
   * @callback called whenever the close button of alert is fired.
   */
  closeAlert() {
    this.setState({ sAlert: null })
  }
  
  render() {
    
    return (
      <div>
        { this.state.sAlert }
      </div>
           )
  }
}